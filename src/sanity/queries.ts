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
