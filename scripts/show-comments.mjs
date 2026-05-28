// Read-only: list every Sanity Studio comment Dr. Lee (or anyone) has left on
// a document field, plus the document it points to and the field path.
//
// Sanity stores Studio comments as documents of type "comment.thread" /
// "comment" in the same dataset. They are queryable with GROQ as long as the
// token can read system documents.
//
// Run: node --env-file=.env.local scripts/show-comments.mjs

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function run() {
  // Comments use a few possible type names depending on the Sanity version.
  // Cast a wide net: anything whose _type starts with "comment".
  const comments = await client.fetch(`*[_type match "comment*"]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    message,
    status,
    authorId,
    "target": target,
    "context": context,
    parentCommentId,
    threadId
  } | order(_createdAt asc)`);

  if (!comments || comments.length === 0) {
    console.log("\nNo Studio comments found in the dataset.");
    console.log("(If Dr. Lee left a note for you, it would have shown up here.)\n");
    return;
  }

  console.log(`\nFound ${comments.length} comment record${comments.length === 1 ? "" : "s"}:\n`);
  for (const c of comments) {
    console.log("=".repeat(70));
    console.log(`type:    ${c._type}`);
    console.log(`id:      ${c._id}`);
    console.log(`created: ${c._createdAt}`);
    if (c.status) console.log(`status:  ${c.status}`);
    if (c.authorId) console.log(`author:  ${c.authorId}`);
    if (c.target) console.log(`target:  ${JSON.stringify(c.target)}`);
    if (c.context) console.log(`context: ${JSON.stringify(c.context)}`);
    if (c.message) {
      console.log(`message:`);
      console.log(typeof c.message === "string" ? c.message : JSON.stringify(c.message, null, 2));
    }
    console.log("");
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
