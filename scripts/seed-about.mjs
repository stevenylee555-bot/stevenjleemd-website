// Seed the About hub page singleton. Run: node --env-file=.env.local scripts/seed-about.mjs
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rj9a0qco",
  dataset: "production",
  apiVersion: "2024-12-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const doc = {
  _id: "aboutPage",
  _type: "aboutPage",
  headerTitle: "Chief of Hand and Upper Extremity Surgery at Lenox Hill Hospital,",
  headerItalic: "and the surgeon who helped design the hardware.",
  headerLede:
    "Dr. Steven J. Lee is a double fellowship-trained, board-certified orthopedic surgeon specializing in hand, wrist, elbow, shoulder, and sports medicine. He has helped design orthopedic implants used by surgeons nationwide, including plating systems for the hand and elbow and the anchor and internal-brace constructs used in ligament reconstruction. Among the first in NYC to perform PRP therapy, including for upper extremity injuries.",
  cards: [
    { _key: "c0", title: "Biography", body: "Training, career, and the story behind the practice." },
    { _key: "c1", title: "Credentials & Awards", body: "Board certification, fellowships, and recognition." },
    { _key: "c2", title: "Publications & Research", body: "Peer-reviewed papers, including 4 on Achilles repair and a peptides review." },
    { _key: "c3", title: "Videos", body: "Operative videos, teaching content, and conference presentations." },
    { _key: "c4", title: "Curriculum Vitae", body: "Full CV available as a downloadable PDF." },
  ],
};

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN. Add it to .env.local.");
    process.exit(1);
  }
  await client.createOrReplace(doc);
  console.log("Seeded the About hub document.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
