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

// The Biography page singleton.
export const BIO_QUERY = defineQuery(`
  *[_id == "bioPage"][0] {
    headerTitle, headerItalic, headerLede,
    introParagraphs, credentials,
    trainingHeading, training[]{ institution, detail, note },
    athletesHeadingLead, athletesHeadingEmphasis, athletesIntro,
    athletesQuoteLead, athletesQuoteEmphasis, athleteRoles, sportsTreated, athletesNote,
    researchHeading, researchPara1, patentNumber, patentDesc, patentNote,
    teachingHeading, teachingPara2, teachingPara3, teachingQuoteLead, teachingQuoteEmphasis,
    galleryHeadingLead, galleryHeadingEmphasis, galleryIntro, galleryCaptions[]{ kicker, caption },
    practiceHeading, practicePara
  }
`);

// The Second Opinions page singleton.
export const SECOND_OPINIONS_QUERY = defineQuery(`
  *[_id == "secondOpinionsPage"][0] {
    headerTitle, headerItalic, headerLede,
    whyHeadingLead, whyHeadingEmphasis, whyParagraphs,
    pillars[]{ title, body },
    casesHeadingLead, casesHeadingEmphasis, cases[]{ label, text },
    expectHeading, steps[]{ title, body },
    ctaHeading, ctaBody,
    faqs[]{ question, answer }
  }
`);

// The About hub page singleton.
export const ABOUT_QUERY = defineQuery(`
  *[_id == "aboutPage"][0] {
    headerTitle, headerItalic, headerLede,
    cards[]{ title, body }
  }
`);

// The Conditions index page singleton.
export const CONDITIONS_INDEX_QUERY = defineQuery(`
  *[_id == "conditionsIndexPage"][0] {
    headerTitle, headerItalic, headerLede,
    noteKicker, noteHeadingLead, noteHeadingEmphasis, notePara, ctaKicker
  }
`);

// A single condition detail page, matched by its slug field.
export const CONDITION_QUERY = defineQuery(`
  *[_type == "conditionPage" && slug == $slug][0] {
    headerTitle, headerItalic, headerLede,
    overview,
    bodySections[]{ heading, body, bullets, bulletsAfter },
    drLeeApproach,
    treatmentSections[]{ heading, body, bullets, bulletsAfter },
    recoveryIntro,
    recovery[]{ when, what },
    misconceptions{ intro, items[]{ heading, body } },
    sidebarFacts[]{ label, value },
    whyDrLee,
    ctaCard{ eyebrow, headline },
    faqHeadline,
    faqs[]{ question, answer },
    bottomCtaTitle, bottomCtaItalic, bottomCtaBody
  }
`);

// The Specialties index page singleton.
export const SPECIALTIES_INDEX_QUERY = defineQuery(`
  *[_id == "specialtiesIndexPage"][0] {
    headerTitle, headerItalic, headerLede,
    introKicker, introParagraphs,
    ctaKicker, ctaHeadingLead, ctaHeadingEmphasis, ctaPara
  }
`);

// A single specialty page, matched by its slug field.
export const SPECIALTY_QUERY = defineQuery(`
  *[_type == "specialty" && slug == $slug][0] {
    eyebrow, headline, headlineItalic, lede,
    introTitle, introBody,
    approach[]{ title, body },
    credentials,
    implantDesign{ title, body }
  }
`);
