// 301 redirect map: old Wix URLs to new-site URLs.
//
// Built from the full Wix sitemap inventory (~125 URLs) and Wix Behavior >
// Page Visits data (last 12 months). Uses Next's `permanent: true` (308 Status),
// which preserves SEO equity equivalently to a 301 and additionally preserves
// the HTTP method.
//
// Grouping logic:
//   A. Top 4 hand/wrist URLs by historical traffic, redirected to the rebuilt
//      dedicated pages on the new site (Phase A rebuilds).
//   B. Direct matches to existing condition pages on the new site.
//   C. Granular condition URLs without a dedicated page yet, redirected to the
//      closest specialty page (will be upgraded to dedicated pages in Phase B/C).
//   D. Advanced-treatments related URLs.
//   E. Foot/ankle and hip/spine URLs, redirected to the /conditions library
//      until dedicated rebuilds land (task #8).
//   F. Structural / about / FAQ / surgical-info URLs.
//   G. Wix blog and tag URLs (wildcards).
//
// Not redirected (paths exist on the new site, would shadow the new pages):
//   /, /about, /testimonials, /blog

export type RedirectRule = {
  source: string;
  destination: string;
  permanent: true;
};

export const redirects: RedirectRule[] = [
  // ───────────────────────────────────────────────────────────────────────
  // A. Phase A rebuilds (highest historical Wix traffic)
  { source: "/collateral-ligament-nyc-doctor", destination: "/conditions/finger-collateral-ligament", permanent: true },
  { source: "/extensor-tendon-subluxation-nyc", destination: "/conditions/extensor-tendon-subluxation", permanent: true },
  { source: "/ulnar-impaction-syndrome-hand-docto", destination: "/conditions/ulnar-impaction-syndrome", permanent: true },
  { source: "/thumb-ucl-rcl-hand-doctor-nyc", destination: "/conditions/thumb-ucl-rcl", permanent: true },

  // ───────────────────────────────────────────────────────────────────────
  // B. Direct matches to existing condition pages
  { source: "/carpal-tunnel-nyc-orthopedics", destination: "/conditions/carpal-tunnel", permanent: true },
  { source: "/wrist-fracture-distal-radius-nyc", destination: "/conditions/distal-radius-fracture", permanent: true },
  { source: "/scapholunate-tear-doctor-nyc", destination: "/conditions/scapholunate", permanent: true },
  { source: "/slac-snac-wrist-doctor-nyc", destination: "/conditions/scapholunate", permanent: true },
  { source: "/basal-joint-arthritis-nyc-doctor", destination: "/conditions/basal-joint-arthroplasty", permanent: true },
  { source: "/hand-fracture-finger-fracture-nyc", destination: "/conditions/hand-wrist-fractures", permanent: true },
  { source: "/scaphoid-fracture-doctor-nyc", destination: "/conditions/hand-wrist-fractures", permanent: true },
  { source: "/forearm-fractures-nyc-doctor", destination: "/conditions/hand-wrist-fractures", permanent: true },
  { source: "/elbow-ucl-tommy-john", destination: "/conditions/ucl-reconstruction", permanent: true },
  { source: "/bicep-rupture-nyc-orthopedic-doctor", destination: "/conditions/biceps-rupture", permanent: true },
  { source: "/acl-nyc-doctor", destination: "/conditions/acl-reconstruction", permanent: true },
  { source: "/rotator-cuff-tear-nyc-orthopedic", destination: "/conditions/rotator-cuff", permanent: true },
  { source: "/copy-of-achilles-tendon-rupture-nyc", destination: "/conditions/achilles-rupture", permanent: true },
  { source: "/copy-of-achilles-tendonitis-nyc", destination: "/conditions/achilles-rupture", permanent: true },
  { source: "/heel-pain-achilles-tendonitis", destination: "/conditions/achilles-rupture", permanent: true },

  // ───────────────────────────────────────────────────────────────────────
  // C. Hand/wrist conditions without dedicated pages -> /specialties/hand-wrist
  { source: "/dupuytrens-nyc-hand-doctor", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/guyons-canal-syndrome-nyc-hand-doct", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/swan-neck-deformity-nyc-hand-doctor", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/dequervains-nyc-hand-doctor", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/rheumatoid-arthritis-finger-hand-do", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/mucous-cyst-doctor-nyc", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/ganglion-cyst-hand-doctor-nyc", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/wartenbergs-syndrome-nyc-hand-docto", destination: "/conditions/wartenbergs-syndrome", permanent: true },
  { source: "/boutonierre-deformity-hand-ortho", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/hand-and-wrist-t-u", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/trigger-finger-2", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/arthritis-hand-fingers", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/mallet-finger-hand-doctor-nyc", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/tfcc-wrist-doctor-nyc", destination: "/conditions/tfcc-tear", permanent: true },
  { source: "/kienbocks-hand-doctor-nyc", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/intersection-syndrome-nyc-ortho", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/nerve-laceration-doctor-nyc", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/tendon-laceration-doctor-nyc", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/finger-pulley-rock-climber-injury-n", destination: "/conditions/finger-pulley-injury", permanent: true },
  { source: "/radial-tunnel-nyc-orthopedic", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/hand-and-wrist-pain-nyc", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/hand-and-wrist-hidden", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/copy-of-hand-and-wrist-hidden", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/chronic-forearm-compartment-syndrom", destination: "/specialties/hand-wrist", permanent: true },
  { source: "/forearm", destination: "/specialties/hand-wrist", permanent: true },

  // Elbow conditions -> /specialties/elbow
  { source: "/tennis-elbow-orthopedic-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/elbow-dislocation-orthopedic-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/lucl-orthopedic-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/distal-humerus-fracture-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/distal-bicep-tendonitis-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/elbow-olecranon-fracture-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/terrible-triad-nyc-doctor", destination: "/specialties/elbow", permanent: true },
  { source: "/elbow-arthritis-ortho-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/medial-epicondylitis-orthopedic-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/radial-head-fracture-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/cubital-tunnel-orthopedic-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/tricep-tendonitis-orthopedic-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/olecranon-bursitis-orthopedic-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/tricep-tendon-rupture-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/elbow-pain-best-orthopedic-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/copy-of-elbow-hidden", destination: "/specialties/elbow", permanent: true },
  { source: "/forearm-elbow-pain-nyc", destination: "/specialties/elbow", permanent: true },
  { source: "/proximal-bicep-tendonitis-tear-nyc", destination: "/specialties/elbow", permanent: true },

  // Shoulder conditions -> /specialties/shoulder
  { source: "/ac-joint-arthritis-shoulder-nyc", destination: "/specialties/shoulder", permanent: true },
  { source: "/shoulder-pain-doctor-nyc", destination: "/specialties/shoulder", permanent: true },
  { source: "/shoulder-arthritis-djd-nyc-ortho", destination: "/specialties/shoulder", permanent: true },
  { source: "/adhesive-capsulitis-shoulder-pain", destination: "/specialties/shoulder", permanent: true },
  { source: "/shoulder-separation-ac-nyc", destination: "/specialties/shoulder", permanent: true },
  { source: "/shoulder-dislocation-instabilitiy", destination: "/specialties/shoulder", permanent: true },
  { source: "/shoulder-rc-impingement", destination: "/specialties/shoulder", permanent: true },
  { source: "/shoulder-pain", destination: "/specialties/shoulder", permanent: true },
  { source: "/clavicle-fracture-nyc-orthopedic", destination: "/specialties/shoulder", permanent: true },
  { source: "/shoulder-labral-tear-ortho-nyc", destination: "/specialties/shoulder", permanent: true },

  // Knee conditions -> /specialties/knee
  { source: "/quadricepst-patellar-tendon-rupture", destination: "/specialties/knee", permanent: true },
  { source: "/pes-bursitis-knee-pain-nyc-ortho", destination: "/specialties/knee", permanent: true },
  { source: "/osgood-schlatter-knee-pain-ortho-ny", destination: "/specialties/knee", permanent: true },
  { source: "/prepatellar-bursitis-knee-pain-orth", destination: "/specialties/knee", permanent: true },
  { source: "/patellar-dislocation-knee-ortho-nyc", destination: "/specialties/knee", permanent: true },
  { source: "/pfs-knee-pain", destination: "/specialties/knee", permanent: true },
  { source: "/knee-baker-cyst-nyc", destination: "/specialties/knee", permanent: true },
  { source: "/mcl-knee-lcl-knee", destination: "/specialties/knee", permanent: true },
  { source: "/meniscus-tear-knee-pain", destination: "/specialties/knee", permanent: true },
  { source: "/knee-best-orthopedic-doctor-nyc", destination: "/specialties/knee", permanent: true },
  { source: "/patellar-tendonitis-knee-pain-nyc", destination: "/specialties/knee", permanent: true },
  { source: "/copy-of-knee", destination: "/specialties/knee", permanent: true },
  { source: "/knee-arthritis-pain-nyc-ortho", destination: "/specialties/knee", permanent: true },
  { source: "/ocd-lesions-knee-ortho-nyc", destination: "/specialties/knee", permanent: true },

  // ───────────────────────────────────────────────────────────────────────
  // D. Advanced treatments
  { source: "/prp-injections", destination: "/specialties/advanced-treatments", permanent: true },
  { source: "/copy-of-prp-injections-1", destination: "/specialties/advanced-treatments", permanent: true },
  { source: "/stem-cell-and-ortho-biologics", destination: "/specialties/advanced-treatments", permanent: true },
  { source: "/internal-brace", destination: "/specialties/advanced-treatments", permanent: true },
  { source: "/cutting-edge-care", destination: "/specialties/advanced-treatments", permanent: true },
  { source: "/minimally-invasive-orthopedist", destination: "/specialties/advanced-treatments", permanent: true },

  // ───────────────────────────────────────────────────────────────────────
  // E. Foot/ankle and hip/spine -> /conditions library
  //    (Phase 2 rebuilds queued under task #8; until then, send visitors to the
  //    library so they can navigate, rather than 404 or specialty-page mismatch.)

  // Foot & ankle
  { source: "/ankle-sprains-instability", destination: "/conditions", permanent: true },
  { source: "/plantar-fasciitis-foot-pain-nyc", destination: "/conditions", permanent: true },
  { source: "/mortons-neuroma-foot-pain", destination: "/conditions", permanent: true },
  { source: "/foot-metatarsal-fractures-nyc", destination: "/conditions", permanent: true },
  { source: "/posterior-tibial-tendonitis-ortho-n", destination: "/conditions", permanent: true },
  { source: "/ankle-fracture-ortho-nyc", destination: "/conditions", permanent: true },
  { source: "/foot-ankle-best-orthopedic-doctor", destination: "/conditions", permanent: true },
  { source: "/peroneal-tendonitis-ortho-nyc", destination: "/conditions", permanent: true },
  { source: "/lisfranc-sprain-foot-pain-nyc", destination: "/conditions", permanent: true },
  { source: "/severs-disease-ortho-nyc", destination: "/conditions", permanent: true },
  { source: "/stress-fractures-ortho-nyc", destination: "/conditions", permanent: true },

  // Hip / spine / other (out-of-scope until task #8 expands coverage)
  { source: "/back-neck-pain-doctor-nyc", destination: "/conditions", permanent: true },
  { source: "/hip-pain-orthopedic-nyc", destination: "/conditions", permanent: true },
  { source: "/hip-and-spine", destination: "/conditions", permanent: true },
  { source: "/labral-tears-hip-pain-nyc", destination: "/conditions", permanent: true },
  { source: "/hip-flexor-strain-ortho-pain", destination: "/conditions", permanent: true },
  { source: "/femoral-acetabular-impingement-hip-", destination: "/conditions", permanent: true },
  { source: "/femoral-acetabular-impingement-hip", destination: "/conditions", permanent: true },
  { source: "/hip-arthritis-orthopedics-nyc", destination: "/conditions", permanent: true },
  { source: "/hip-fractures-orthopedics-nyc", destination: "/conditions", permanent: true },
  { source: "/spine-arthritis-pain-ortho-nyc", destination: "/conditions", permanent: true },
  { source: "/cervical-radiculopathy-neck-pain", destination: "/conditions", permanent: true },
  { source: "/spinal-compression-fractures-nyc", destination: "/conditions", permanent: true },
  { source: "/spinal-stenosis-neck-back-nyc", destination: "/conditions", permanent: true },
  { source: "/spondylolysis-neck-back-nyc", destination: "/conditions", permanent: true },
  { source: "/spondylolisthesis-neck-back-nyc", destination: "/conditions", permanent: true },
  { source: "/gluteal-tendonitis-hip-pain-nyc", destination: "/conditions", permanent: true },
  { source: "/adductor-quad-strain", destination: "/conditions", permanent: true },

  // ───────────────────────────────────────────────────────────────────────
  // F. Structural / about / FAQ / surgical-info
  { source: "/2nd-opinions", destination: "/second-opinions", permanent: true },
  { source: "/contact-us-page", destination: "/contact", permanent: true },
  { source: "/copy-of-about", destination: "/about/bio", permanent: true },
  { source: "/medical-research-and-publications", destination: "/about/publications", permanent: true },
  { source: "/your-diagnosis", destination: "/conditions", permanent: true },
  { source: "/your-diagnosis-nyc-best-orthopedic", destination: "/conditions", permanent: true },
  { source: "/faq", destination: "/", permanent: true },
  { source: "/copy-of-faq", destination: "/", permanent: true },
  { source: "/surgical-info-1", destination: "/second-opinions", permanent: true },
  { source: "/surgical-planning", destination: "/second-opinions", permanent: true },
  { source: "/procedure-instructions", destination: "/therapy-protocols", permanent: true },
  { source: "/post-operative", destination: "/therapy-protocols", permanent: true },
  { source: "/copy-of-do-not-use-prev-post-op-ins", destination: "/therapy-protocols", permanent: true },
  { source: "/search-results", destination: "/conditions", permanent: true },

  // ───────────────────────────────────────────────────────────────────────
  // G. Wix blog and tag URLs (wildcards collapse hundreds of variations)
  { source: "/blog-orthopedic-nyc", destination: "/blog", permanent: true },
  { source: "/blog-orthopedic-nyc/:path*", destination: "/blog", permanent: true },
  { source: "/post/:path*", destination: "/blog", permanent: true },
];
