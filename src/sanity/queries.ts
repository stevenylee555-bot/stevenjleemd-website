import { defineQuery } from "next-sanity";

// Published testimonials, ordered by the manual `order` field then oldest-first.
export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(order asc, _createdAt asc) {
    _id,
    name,
    detail,
    quote,
    emphasis,
    photo
  }
`);

// The homepage singleton's editable copy.
export const HOME_QUERY = defineQuery(`
  *[_id == "homePage"][0] {
    heroEyebrow,
    heroHeadlineEmphasis,
    heroHeadlineRest,
    heroSubheading,
    recognition[]{ name, years },
    stats[]{ value, suffix, label, caption },
    innovationKicker,
    innovationHeadlineLead,
    innovationHeadlineEmphasis,
    innovationPara1,
    innovationPara2,
    capabilities
  }
`);
