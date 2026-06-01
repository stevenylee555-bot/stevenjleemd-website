"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, CornerDownLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchSite, popularSearches, type SearchEntry } from "@/lib/search";

type Mode = "desktop" | "mobile";

// Wraps the matched substring of `text` in a gold accent. Phrase match only,
// which covers the common case (typing a condition name) and stays legible.
function highlight(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-transparent text-gold-400 font-semibold">
        {text.slice(idx, idx + q.length)}
      </mark>
      {text.slice(idx + q.length)}
    </>
  );
}

export default function SiteSearch({
  mode = "desktop",
  onNavigate,
}: {
  mode?: Mode;
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const hasQuery = query.trim().length > 0;
  const results = useMemo(
    () => (hasQuery ? searchSite(query) : popularSearches),
    [query, hasQuery]
  );

  // Desktop shows results in a popover when open; mobile shows them inline once
  // the user has typed (keeps the drawer quiet otherwise).
  const showList = mode === "desktop" ? open : hasQuery;

  useEffect(() => setActive(0), [query]);

  // Desktop: focus the field when the popover opens; close on outside click.
  useEffect(() => {
    if (mode !== "desktop") return;
    if (open) inputRef.current?.focus();
  }, [mode, open]);

  useEffect(() => {
    if (mode !== "desktop" || !open) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [mode, open]);

  function go(entry?: SearchEntry) {
    const target = entry ?? results[active] ?? results[0];
    if (!target) return;
    setOpen(false);
    setQuery("");
    onNavigate?.();
    router.push(target.href);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go();
    } else if (e.key === "Escape") {
      e.preventDefault();
      if (mode === "desktop") {
        setOpen(false);
        inputRef.current?.blur();
      } else if (query) {
        setQuery("");
      }
    }
  }

  const optionId = (i: number) => `${listId}-opt-${i}`;

  const field = (
    <div className="relative">
      <Search
        size={16}
        strokeWidth={1.75}
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
      />
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        aria-expanded={showList && results.length > 0}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={
          showList && results.length > 0 ? optionId(active) : undefined
        }
        autoComplete="off"
        spellCheck={false}
        placeholder="Search conditions, specialties, and more"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        onFocus={() => mode === "desktop" && setOpen(true)}
        className="w-full rounded-md border border-white/15 bg-white/[0.06] pl-9 pr-9 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-gold-500 focus:bg-white/10 transition-colors"
      />
      {hasQuery && (
        <button
          type="button"
          onClick={() => {
            setQuery("");
            inputRef.current?.focus();
          }}
          aria-label="Clear search"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/45 hover:text-white transition-colors"
        >
          <X size={15} strokeWidth={1.75} aria-hidden="true" />
        </button>
      )}
    </div>
  );

  const list =
    showList &&
    (results.length > 0 ? (
      <>
        {!hasQuery && (
          <div className="kicker text-white/45 px-3 pt-2 pb-1.5 text-[10px]">
            Popular
          </div>
        )}
        <ul role="listbox" id={listId} aria-label="Search results" className="max-h-80 overflow-y-auto">
          {results.map((r, i) => (
            <li key={`${r.href}-${r.title}`} role="option" id={optionId(i)} aria-selected={i === active}>
              <button
                type="button"
                tabIndex={-1}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r)}
                className={cn(
                  "group flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left transition-colors",
                  i === active ? "bg-white/10" : "hover:bg-white/[0.06]"
                )}
              >
                <span className="min-w-0">
                  <span className="block truncate text-[14.5px] text-white/90">
                    {highlight(r.title, query)}
                  </span>
                  <span className="mt-0.5 block text-[11px] uppercase tracking-[0.12em] text-gold-400/70">
                    {r.category}
                  </span>
                </span>
                <CornerDownLeft
                  size={14}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 text-white/40 transition-opacity",
                    i === active ? "opacity-100" : "opacity-0"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <div className="px-3 py-6 text-center text-sm text-white/55">
        No matches for{" "}
        <span className="text-white/80">&ldquo;{query.trim()}&rdquo;</span>.{" "}
        <button
          type="button"
          onClick={() => go({ title: "Conditions Library", href: "/conditions", category: "Page", keywords: "" })}
          className="text-gold-400 underline underline-offset-2 hover:text-gold-500"
        >
          Browse all conditions
        </button>
      </div>
    ));

  if (mode === "mobile") {
    return (
      <div ref={rootRef} className="pb-2">
        {field}
        {list && <div className="mt-2">{list}</div>}
      </div>
    );
  }

  // Desktop: a compact trigger that reads as a search field, opening a
  // header-anchored popover (same visual language as the nav dropdowns).
  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Search the site"
        className={cn(
          "flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white/70 hover:text-white hover:border-white/30 transition-colors",
          open && "text-white border-white/30 bg-white/[0.06]"
        )}
      >
        <Search size={15} strokeWidth={1.75} aria-hidden="true" />
        <span className="hidden xl:inline">Search</span>
      </button>

      {open && (
        <div className="search-pop absolute right-0 top-full z-50 mt-2 w-[min(26rem,calc(100vw-2rem))] rounded-sm border border-white/10 bg-navy-900 p-2 shadow-2xl">
          {field}
          {list && <div className="mt-2">{list}</div>}
          <div className="mt-1.5 flex items-center justify-end gap-3 px-2 pb-0.5 pt-1 text-[11px] text-white/40">
            <span>
              <kbd className="font-sans">Enter</kbd> to go
            </span>
            <span>
              <kbd className="font-sans">Esc</kbd> to close
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
