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
    capabilities,
    aboutKicker,
    aboutHeadlineLead,
    aboutHeadlineEmphasis,
    aboutHeadlineTail,
    aboutParagraphs,
    aboutCredentials,
    aboutAffiliations[]{ name, role },
    aboutNismatNote,
    soKicker,
    soHeadlineLead,
    soHeadlineEmphasis,
    soPara1,
    soPara2,
    soCtaLabel,
    soPillars[]{ title, body },
    specKicker,
    specHeadlineLead,
    specHeadlineEmphasis,
    specIntro,
    specCards[]{ title, eyebrow, description }
  }
`);

// The Credentials & Awards page singleton.
export const CREDENTIALS_QUERY = defineQuery(`
  *[_id == "credentialsPage"][0] {
    headerTitle,
    headerItalic,
    headerLede,
    appointments[]{ role, org, years },
    certifications,
    recognition[]{ title, detail },
    teaching[]{ title, detail },
    research[]{ title, detail },
    implantDesignIntro,
    implantDesign[]{ title, detail },
    patents[]{ title, detail },
    teamPhysician[]{ title, detail },
    memberships,
    ctaHeadingLead,
    ctaHeadingEmphasis,
    ctaBody
  }
`);
