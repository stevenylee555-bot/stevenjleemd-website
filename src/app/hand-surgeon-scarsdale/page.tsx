import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";
import { getLocation } from "@/lib/locations";

const data = getLocation("hand-surgeon-scarsdale")!;

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: {
    canonical: "https://www.stevenjleemd.com/hand-surgeon-scarsdale",
  },
};

export default function HandSurgeonScarsdalePage() {
  return <LocationTemplate data={data} />;
}
