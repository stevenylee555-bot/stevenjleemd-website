import type { Metadata } from "next";
import LocationTemplate from "@/components/LocationTemplate";
import { getLocation } from "@/lib/locations";

const data = getLocation("hand-surgeon-upper-east-side")!;

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: {
    canonical: "https://www.stevenjleemd.com/hand-surgeon-upper-east-side",
  },
};

export default function HandSurgeonUpperEastSidePage() {
  return <LocationTemplate data={data} />;
}
