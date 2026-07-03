import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProtocolTemplate from "@/components/ProtocolTemplate";
import { procedureBySlug } from "@/lib/procedureProtocols";
import { getProcedureProtocol } from "@/sanity/getProcedureProtocol";

const slug = "basal-joint-arthroplasty";
const fallback = procedureBySlug(slug)!;

export const metadata: Metadata = {
  title: `${fallback.officialTitle} Post-Operative Instructions, Steven J. Lee, MD`,
  description: `Post-operative recovery instructions for ${fallback.officialTitle} from Dr. Steven J. Lee, MD: pain control, wound care, activity guidance, follow-up, and when to call the office.`,
  alternates: { canonical: `https://www.stevenjleemd.com/therapy-protocols/${slug}` },
};

export default async function Page() {
  const data = (await getProcedureProtocol(slug)) ?? fallback;
  if (!data) notFound();
  return <ProtocolTemplate data={data} />;
}
