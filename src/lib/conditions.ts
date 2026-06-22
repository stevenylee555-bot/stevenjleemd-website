export type ConditionStatus = "priority" | "phase2";

export type Condition = {
  name: string;
  slug: string;
  region: "Hand & Wrist" | "Elbow" | "Shoulder" | "Knee & Sports" | "Foot & Ankle" | "Advanced Treatments";
  status: ConditionStatus;
  blurb: string;
};

// Master list of conditions Dr. Lee treats. Drives the /conditions index,
// the homepage preview, and (later) individual condition pages.
export const conditions: Condition[] = [
  // Hand & Wrist, priority
  {
    name: "Carpal Tunnel Syndrome",
    slug: "carpal-tunnel",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Including endoscopic release, a minimally invasive approach with faster recovery than traditional open surgery.",
  },
  {
    name: "Distal Radius Fracture",
    slug: "distal-radius-fracture",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "The most common fracture orthopedic surgeons treat. Dr. Lee uses fixed-angle volar plating in displaced or intra-articular cases.",
  },
  {
    name: "Scapholunate Ligament Injury",
    slug: "scapholunate",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Internal brace reconstruction using anchors Dr. Lee helped design.",
  },
  {
    name: "Basal Joint Arthritis",
    slug: "basal-joint-arthroplasty",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Thumb CMC reconstruction with an internal brace system Dr. Lee helped design.",
  },
  {
    name: "Hand & Wrist Fractures",
    slug: "hand-wrist-fractures",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Fracture fixation using hand and elbow plating systems Dr. Lee helped design.",
  },
  {
    name: "Finger Collateral Ligament Injury",
    slug: "finger-collateral-ligament",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Sideways injuries to the small ligaments that stabilize finger joints. Most heal without surgery; the unstable ones benefit from internal brace repair Dr. Lee helped design.",
  },
  {
    name: "Extensor Tendon Subluxation",
    slug: "extensor-tendon-subluxation",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "When the extensor tendon slips off the knuckle, often after a punch or in inflammatory arthritis. Treated with splinting acutely, or surgical realignment when chronic.",
  },
  {
    name: "Ulnar Impaction Syndrome",
    slug: "ulnar-impaction-syndrome",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Pinky-side wrist pain from an ulna that sits too long relative to the radius. Treated with splinting, injections, PRP, or arthroscopic ulnar shortening (wafer procedure).",
  },
  {
    name: "Thumb UCL/RCL Tear (Skier's Thumb)",
    slug: "thumb-ucl-rcl",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Ligament tear at the base of the thumb, often from a fall or ski-pole injury. Internal brace repair Dr. Lee helped design supports earlier return to pinching and sport.",
  },
  {
    name: "Wartenberg's Syndrome",
    slug: "wartenbergs-syndrome",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Compression of the superficial radial nerve, often by a tight watch band, causing burning and tingling on the back of the hand. Most cases resolve when the source of pressure is identified and removed.",
  },
  {
    name: "TFCC Tear",
    slug: "tfcc-tear",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Tear of the triangular fibrocartilage complex, the cartilage-and-ligament structure on the pinky side of the wrist. Treated with splinting, PRP, or arthroscopic debridement or repair, depending on the tear pattern.",
  },
  {
    name: "Finger Pulley Injury (Climber's Finger)",
    slug: "finger-pulley-injury",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Rupture of the small bands that hold the flexor tendons against the finger bones, classically from a crimp-grip fall in rock climbing. Most isolated injuries heal with taping and protected motion; multiple-pulley ruptures may need surgical reconstruction.",
  },
  // Hand & Wrist, May 2026 additions (Dr. Lee feedback)
  {
    name: "De Quervain's Tenosynovitis",
    slug: "de-quervains",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Thumb-side wrist pain from irritation of the first dorsal compartment tendons. Most cases improve with splinting and a corticosteroid injection; persistent cases are treated with a short release.",
  },
  {
    name: "Dupuytren's Disease",
    slug: "dupuytrens-disease",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Progressive thickening of the palm's fascia that can curl a finger over time. Treated based on function, with in-office needle and enzyme options as well as surgery.",
  },
  {
    name: "Ganglion Cyst",
    slug: "ganglion-cyst",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "The most common lump in the hand, a benign fluid-filled cyst. Many need no treatment; symptomatic cysts are treated with aspiration or excision of the cyst and its stalk.",
  },
  {
    name: "Scaphoid Fracture",
    slug: "scaphoid-fracture",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "The most commonly fractured carpal bone, with a fragile blood supply that makes early treatment important. Treated with casting or a headless compression screw depending on the fracture.",
  },
  {
    name: "SLAC Wrist and Salvage Procedures",
    slug: "slac-wrist",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "End-stage wrist arthritis after an old scapholunate tear or scaphoid non-union. Salvage procedures relieve pain and preserve a functional wrist.",
  },
  {
    name: "Olecranon Fracture",
    slug: "olecranon-fracture",
    region: "Elbow",
    status: "priority",
    blurb:
      "Fracture of the bony tip of the elbow, most often from a direct fall. Non-displaced fractures heal in a splint; displaced fractures and any that disrupt active elbow extension are treated surgically with plates or tension-band fixation.",
  },
  {
    name: "Mucous Cyst",
    slug: "mucous-cyst",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "A small cyst over the last joint of the finger, almost always associated with arthritis in that joint. Surgical removal must include the underlying bone spur to prevent recurrence; aspiration alone is best avoided because of infection risk.",
  },
  {
    name: "PRP (Platelet-Rich Plasma) Injections",
    slug: "prp-injections",
    region: "Advanced Treatments",
    status: "priority",
    blurb:
      "A regenerative injection using concentrated platelets and growth factors from the patient's own blood. Dr. Lee was among the first surgeons in NYC to use PRP for the upper extremity and performs more than 250 PRP procedures per year.",
  },
  {
    name: "Internal Brace",
    slug: "internal-brace",
    region: "Advanced Treatments",
    status: "priority",
    blurb:
      "A high-strength suture-tape augmentation that protects a ligament or tendon repair during early healing, allowing earlier motion and faster return to activity. Dr. Lee helped design the internal-brace constructs used for the upper extremity.",
  },
  {
    name: "Trigger Finger",
    slug: "trigger-finger",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Catching, clicking, or locking of a finger from a thickened tendon nodule at the A1 pulley. Most cases resolve with a single in-office injection; a short A1 pulley release handles the rest.",
  },
  {
    name: "Wrist Arthroscopy",
    slug: "wrist-arthroscopy",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Two 4 mm portals, a small camera, and direct visualization of every ligament and cartilage surface in the wrist. The diagnostic and treatment workhorse for TFCC tears, ligament injuries, and persistent wrist pain.",
  },
  // Hand & Wrist, old-site condition build-out (June 2026)
  {
    name: "Guyon's Canal Syndrome",
    slug: "guyons-canal",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Ulnar nerve compression at the wrist, in Guyon's canal, causing numbness and tingling in the ring and small fingers and sometimes grip weakness. Treated by relieving the source of pressure, with decompression reserved for persistent or weakening cases.",
  },
  {
    name: "Swan Neck Deformity",
    slug: "swan-neck-deformity",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "A finger deformity with the middle joint hyperextended and the fingertip flexed, from an imbalance of the finger's tendons and ligaments. Early flexible deformities respond to therapy and small splints; fixed or disabling ones are treated surgically.",
  },
  {
    name: "Rheumatoid Arthritis of the Hand",
    slug: "rheumatoid-arthritis-hand",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Systemic inflammatory arthritis affecting the joints and tendons of the hand and wrist. Medical management with a rheumatologist is the foundation; the hand surgeon addresses tendon ruptures, nerve compression, and painful deformities.",
  },
  {
    name: "Boutonniere Deformity",
    slug: "boutonniere-deformity",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "A bent finger from disruption of the central slip of the extensor tendon, after injury or in rheumatoid arthritis. Recognized early, it is often treated with splinting and therapy; chronic deformities may need reconstruction.",
  },
  {
    name: "Mallet Finger",
    slug: "mallet-finger",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "A drooping fingertip from disruption of the terminal extensor tendon, often from a ball striking the finger. Most are treated with continuous splinting; surgery is reserved for large bony fragments or open injuries.",
  },
  {
    name: "Kienbock's Disease",
    slug: "kienbocks-disease",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Loss of blood supply to the lunate, a carpal bone of the wrist, causing pain, stiffness, and reduced grip. Treatment is staged by imaging, from immobilization early to joint-leveling or salvage procedures in advanced collapse.",
  },
  // Hand & Wrist, old-site build-out part 2 (June 2026)
  {
    name: "Intersection Syndrome",
    slug: "intersection-syndrome",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "An overuse tendinopathy where two forearm tendon groups cross a few centimeters above the wrist, causing pain, swelling, and sometimes a squeak. Common in rowers and weightlifters, and it usually settles with rest, splinting, and activity changes.",
  },
  {
    name: "Nerve Laceration",
    slug: "nerve-laceration",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "A cut nerve in the hand, wrist, or forearm, often from glass or a knife, causing numbness or weakness in that nerve's distribution. Treatment is early microsurgical repair, with grafts or conduits to bridge gaps and hand therapy to support recovery.",
  },
  {
    name: "Tendon Laceration",
    slug: "tendon-laceration",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "A cut flexor or extensor tendon, usually from a sharp injury, causing loss of finger bending or straightening. Treated with precise specialist repair and a structured hand-therapy motion program to prevent stiffness and rupture.",
  },
  {
    name: "Hand and Finger Arthritis",
    slug: "hand-arthritis",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Osteoarthritis of the finger joints and hand, with pain, stiffness, and bony nodes. Conservative care comes first, with splints, therapy, and injections; surgery is reserved for joints that stay painful.",
  },
  {
    name: "Chronic Exertional Forearm Compartment Syndrome",
    slug: "forearm-compartment-syndrome",
    region: "Hand & Wrist",
    status: "priority",
    blurb:
      "Exercise-induced forearm pain, tightness, and swelling that builds with activity and eases with rest, from elevated pressure in the forearm muscle compartments. Seen in climbers and grip-intensive athletes, with fasciotomy an option for those who must keep competing.",
  },

  // Elbow, priority
  {
    name: "UCL Tear (Tommy John)",
    slug: "ucl-reconstruction",
    region: "Elbow",
    status: "priority",
    blurb:
      "UCL reconstruction with internal brace augmentation. Reconstruction uses an anchor system Dr. Lee helped design.",
  },
  {
    name: "Biceps Tendon Rupture",
    slug: "biceps-rupture",
    region: "Elbow",
    status: "priority",
    blurb:
      "Distal biceps repair using tendon-to-bone anchors Dr. Lee helped design.",
  },
  // Elbow, June 2026 additions (Dr. Lee feedback)
  {
    name: "Elbow Dislocation",
    slug: "elbow-dislocation",
    region: "Elbow",
    status: "priority",
    blurb:
      "Simple and complex elbow dislocations, including the terrible triad. Stability first, then early motion to protect against the stiffness the elbow is prone to.",
  },
  {
    name: "Cubital Tunnel Syndrome",
    slug: "cubital-tunnel",
    region: "Elbow",
    status: "priority",
    blurb:
      "Ulnar nerve compression at the elbow, causing numbness in the ring and small fingers. Most cases improve with night splinting; surgery decompresses or moves the nerve when needed.",
  },
  {
    name: "LUCL Injury (Elbow Instability)",
    slug: "lucl-injury",
    region: "Elbow",
    status: "priority",
    blurb:
      "Lateral ligament injury causing posterolateral rotatory instability. Repair or reconstruction using anchor and internal-brace constructs Dr. Lee helped design.",
  },
  {
    name: "Triceps Tendon Tear",
    slug: "triceps-tear",
    region: "Elbow",
    status: "priority",
    blurb:
      "A tear of the triceps at the elbow weakens straightening the arm. Complete tears are repaired by reattaching the tendon to the bone.",
  },
  {
    name: "Lateral Epicondylitis (Tennis Elbow)",
    slug: "lateral-epicondylitis",
    region: "Elbow",
    status: "priority",
    blurb:
      "Outer-elbow tendon pain. The large majority improve with activity modification, eccentric exercise, and bracing; PRP and surgery are reserved for stubborn cases.",
  },
  {
    name: "Medial Epicondylitis (Golfer's Elbow)",
    slug: "medial-epicondylitis",
    region: "Elbow",
    status: "priority",
    blurb:
      "Inner-elbow tendon pain, treated patiently with exercise and bracing, with attention to the nearby ulnar nerve.",
  },
  {
    name: "Radial Tunnel Syndrome",
    slug: "radial-tunnel",
    region: "Elbow",
    status: "priority",
    blurb:
      "A deep forearm ache often mistaken for tennis elbow, from radial nerve compression. Most cases improve without surgery once the diagnosis is made.",
  },
  {
    name: "Radial Head Fracture",
    slug: "radial-head-fracture",
    region: "Elbow",
    status: "priority",
    blurb:
      "The most common adult elbow fracture. Stable fractures move early; displaced ones are fixed or replaced using elbow hardware Dr. Lee helped design.",
  },
  {
    name: "Terrible Triad of the Elbow",
    slug: "terrible-triad",
    region: "Elbow",
    status: "priority",
    blurb:
      "An elbow dislocation with radial head and coronoid fractures, one of the most unstable elbow injuries. Almost always reconstructed surgically, then moved early. The complex trauma Dr. Lee is referred from outside hospitals.",
  },
  // Elbow, phase 2
  {
    name: "Complex Elbow Trauma",
    slug: "elbow-trauma",
    region: "Elbow",
    status: "phase2",
    blurb: "Fracture-dislocations, LUCL injuries, and reconstruction.",
  },
  {
    name: "Elbow Fractures",
    slug: "elbow-fractures",
    region: "Elbow",
    status: "phase2",
    blurb: "Plate-and-screw fixation using designs Dr. Lee helped develop.",
  },

  // Shoulder, priority
  {
    name: "Rotator Cuff Tear",
    slug: "rotator-cuff",
    region: "Shoulder",
    status: "priority",
    blurb: "Arthroscopic repair with current-generation suture anchors.",
  },
  // Shoulder, June 2026 additions (Dr. Lee feedback)
  {
    name: "Shoulder Separation (AC Joint)",
    slug: "ac-separation",
    region: "Shoulder",
    status: "priority",
    blurb:
      "An AC joint injury on top of the shoulder, usually from a fall. Most low-grade separations recover without surgery; high-grade injuries are evaluated for reconstruction.",
  },
  {
    name: "Shoulder Dislocation & Instability",
    slug: "shoulder-dislocation",
    region: "Shoulder",
    status: "priority",
    blurb:
      "The shoulder coming out of the socket, and the instability that can follow, especially in young athletes. Arthroscopic labral repair restores stability when it recurs.",
  },
  {
    name: "SLAP Tear (Labral Injury)",
    slug: "slap-tear",
    region: "Shoulder",
    status: "priority",
    blurb:
      "A tear of the top labrum where the biceps anchors, common in throwers and lifters. Many are managed without surgery; repair or biceps tenodesis is tailored to age and activity.",
  },
  {
    name: "AC Joint Arthritis",
    slug: "ac-arthritis",
    region: "Shoulder",
    status: "priority",
    blurb:
      "Pinpoint pain on top of the shoulder from AC joint wear. Usually managed with injection and activity modification; a small arthroscopic procedure helps stubborn cases.",
  },
  {
    name: "Shoulder Arthritis (Glenohumeral)",
    slug: "glenohumeral-arthritis",
    region: "Shoulder",
    status: "priority",
    blurb:
      "Cartilage wear in the main shoulder joint, causing deep pain and stiffness. Many patients are managed for years without surgery; replacement is the definitive option for advanced arthritis.",
  },
  {
    name: "Shoulder Impingement Syndrome",
    slug: "shoulder-impingement",
    region: "Shoulder",
    status: "priority",
    blurb:
      "Pinching of the rotator cuff under the bony arch, causing a painful arc overhead. The large majority improve with targeted therapy.",
  },
  {
    name: "Biceps Tendonitis (Shoulder)",
    slug: "biceps-tendonitis",
    region: "Shoulder",
    status: "priority",
    blurb:
      "Irritation of the long head of the biceps at the front of the shoulder, usually alongside cuff or labral problems. Most improve without surgery; tenodesis helps the rest.",
  },
  {
    name: "Proximal Biceps Tendon Tear",
    slug: "proximal-biceps-tear",
    region: "Shoulder",
    status: "priority",
    blurb:
      "Rupture of the long head of the biceps at the shoulder, often with a 'Popeye' bulge. Everyday strength is largely preserved, so many cases are treated without surgery; tenodesis is for active patients or an associated tear.",
  },
  {
    name: "Pectoralis Major Tear",
    slug: "pectoralis-tear",
    region: "Shoulder",
    status: "priority",
    blurb:
      "Rupture of the chest muscle's tendon, classically during a heavy bench press. Complete tears in active patients are best repaired surgically, and early repair gives the strongest result.",
  },
  // Shoulder, phase 2
  {
    name: "Shoulder Arthroscopy",
    slug: "shoulder-arthroscopy",
    region: "Shoulder",
    status: "priority",
    blurb: "Minimally invasive treatment for instability, impingement, and labral tears.",
  },
  {
    name: "Clavicle Fracture",
    slug: "clavicle-fracture",
    region: "Shoulder",
    status: "priority",
    blurb:
      "Plate fixation with current-generation hardware.",
  },

  // Knee & Sports, priority
  {
    name: "ACL Tear",
    slug: "acl-reconstruction",
    region: "Knee & Sports",
    status: "priority",
    blurb: "ACL reconstruction with autograft or allograft, internal brace augmentation when appropriate.",
  },
  // Knee & Sports, June 2026 additions (Dr. Lee feedback)
  {
    name: "Patellofemoral Pain Syndrome",
    slug: "patellofemoral-syndrome",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "Aching around the kneecap, worse with stairs and squatting. The large majority improve with a hip and thigh strengthening program rather than surgery.",
  },
  {
    name: "Knee Collateral Ligament Injury (MCL, LCL, PLC)",
    slug: "knee-collateral-ligament",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "The side ligaments of the knee. Most MCL injuries heal in a brace; LCL and posterolateral corner injuries are more serious and often need surgery.",
  },
  {
    name: "PCL Tear",
    slug: "pcl-tear",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "Posterior cruciate ligament injury, often from a dashboard-type impact. Many isolated tears are managed with quadriceps-focused rehabilitation rather than surgery.",
  },
  {
    name: "Pes Anserine Bursitis",
    slug: "pes-anserine-bursitis",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "Inner-knee pain just below the joint from an irritated bursa. Settles without surgery using activity modification, stretching, and injection.",
  },
  {
    name: "Prepatellar Bursitis",
    slug: "prepatellar-bursitis",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "Swelling on the front of the kneecap, often from kneeling. Most settle without surgery, but an infected bursa needs prompt treatment.",
  },
  {
    name: "Stress Fracture",
    slug: "stress-fracture",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "A small crack in bone from repetitive loading, common in the shin and foot. Most heal with activity modification, and treating the cause prevents recurrence.",
  },
  {
    name: "Shin Splints (Medial Tibial Stress Syndrome)",
    slug: "shin-splints",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "Exercise-related inner-shin pain in runners. Treated without surgery; the main step is distinguishing it from a stress fracture.",
  },
  {
    name: "Osgood-Schlatter Disease",
    slug: "osgood-schlatter",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "A common, benign cause of knee pain in growing adolescents. Managed with activity modification and stretching, and it resolves with skeletal maturity.",
  },
  {
    name: "Patellar Tendonitis (Jumper's Knee)",
    slug: "patellar-tendonitis",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "Pain in the tendon below the kneecap in jumping athletes. A structured loading program is the foundation; PRP and surgery are reserved for stubborn cases.",
  },
  {
    name: "Patellar and Quadriceps Tendon Rupture",
    slug: "patellar-quad-tendon-rupture",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "A complete tear breaks the knee's ability to straighten and needs prompt surgical repair. Treated quickly, the results are reliable.",
  },
  {
    name: "Patella Fracture",
    slug: "patella-fracture",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "A broken kneecap. Stable fractures with an intact straightening mechanism heal without surgery; displaced ones are fixed.",
  },
  {
    name: "Tibial Plateau Fracture",
    slug: "tibial-plateau-fracture",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "A fracture into the knee's joint surface at the top of the shinbone. Restoring a smooth, aligned surface is the priority; displaced fractures are fixed.",
  },
  // Knee & Sports, phase 2
  {
    name: "Meniscus Tear",
    slug: "meniscus",
    region: "Knee & Sports",
    status: "priority",
    blurb: "Meniscal repair or partial meniscectomy via arthroscopy.",
  },
  {
    name: "Knee Arthroscopy",
    slug: "knee-arthroscopy",
    region: "Knee & Sports",
    status: "priority",
    blurb: "Minimally invasive treatment for cartilage, meniscus, and ligament injuries.",
  },

  // Foot & Ankle, priority
  {
    name: "Achilles Tendon Rupture",
    slug: "achilles-rupture",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "Repair and reconstruction. Dr. Lee has authored four peer-reviewed papers on Achilles repair.",
  },
  // Foot & Ankle, June 2026 additions (Dr. Lee feedback)
  {
    name: "Ankle Sprain and Instability",
    slug: "ankle-sprain",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "The rolled ankle and the one that keeps giving way. Most heal with functional rehabilitation; ligament repair restores stability for chronic instability.",
  },
  {
    name: "Osteochondritis Dissecans (OCD)",
    slug: "osteochondritis-dissecans",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "A cartilage-and-bone lesion, often in the ankle, that can hide behind a stubborn sprain. Stable lesions may heal without surgery; unstable ones are treated arthroscopically.",
  },
  {
    name: "Achilles Tendonitis",
    slug: "achilles-tendonitis",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "Overuse pain and stiffness in the heel cord. A structured calf-loading program is the foundation; steroid injections into the tendon are avoided.",
  },
  {
    name: "Plantar Fasciitis",
    slug: "plantar-fasciitis",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "The most common cause of heel pain, worst with the first steps in the morning. The large majority resolve without surgery, with stretching and support.",
  },
  {
    name: "Morton's Neuroma",
    slug: "mortons-neuroma",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "An irritated nerve between the toes causing burning forefoot pain. Most cases improve with footwear changes, a metatarsal pad, and sometimes an injection.",
  },
  {
    name: "Jones and Pseudo-Jones Fracture",
    slug: "jones-fracture",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "Two different fractures at the base of the fifth metatarsal. The avulsion heals on its own; a true Jones fracture often needs a screw because of its poor blood supply.",
  },

  // Foot & Ankle, old-site build-out (June 2026)
  {
    name: "Ankle Fracture",
    slug: "ankle-fracture",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "A break of one or more of the ankle bones, usually from a twist or fall. Stable, well-aligned fractures heal in a cast or boot; displaced or unstable fractures are fixed with plates and screws to restore the joint.",
  },
  {
    name: "Posterior Tibial Tendon Dysfunction",
    slug: "posterior-tibial-tendonitis",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "Irritation then degeneration of the posterior tibial tendon, the main dynamic support of the arch, causing inner-ankle pain and a progressive flattening foot. Caught early it is treated with orthotics, bracing, and therapy.",
  },
  {
    name: "Peroneal Tendonitis",
    slug: "peroneal-tendonitis",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "Irritation of the peroneal tendons behind the outer ankle bone, often after sprains or from overuse. Most cases settle with relative rest, bracing or taping, and therapy; tendons that subluxate or tear may need surgery.",
  },
  {
    name: "Lisfranc Injury",
    slug: "lisfranc-injury",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "An easily missed injury to the ligaments and joints of the midfoot, from a twist or crush. Stable sprains are immobilized; unstable injuries need surgical fixation or fusion to prevent midfoot arthritis.",
  },
  {
    name: "Sever's Disease",
    slug: "severs-disease",
    region: "Foot & Ankle",
    status: "priority",
    blurb:
      "A common, benign, self-limiting irritation of the heel growth plate in active growing children. Managed without surgery with activity modification, heel cups, calf stretching, and footwear changes, resolving as the growth plate matures.",
  },

  // Elbow & Shoulder, old-site build-out (June 2026)
  {
    name: "Distal Humerus Fracture",
    slug: "distal-humerus-fracture",
    region: "Elbow",
    status: "priority",
    blurb:
      "A break of the lower end of the upper-arm bone at the elbow, often into the joint surface. Most displaced adult fractures are fixed with plates and screws to restore the joint and allow early motion, with elbow replacement for selected comminuted fractures in older patients.",
  },
  {
    name: "Elbow Arthritis",
    slug: "elbow-arthritis",
    region: "Elbow",
    status: "priority",
    blurb:
      "Osteoarthritis, post-traumatic, or inflammatory wear of the elbow, with pain, stiffness, and sometimes locking from loose bodies. Managed conservatively first; refractory cases are treated with arthroscopic debridement and, when advanced, joint replacement.",
  },
  {
    name: "Olecranon Bursitis",
    slug: "olecranon-bursitis",
    region: "Elbow",
    status: "priority",
    blurb:
      "Swelling of the bursa over the tip of the elbow ('Popeye elbow'), from pressure, trauma, gout, or infection. The key step is telling an infected bursa from a non-infected one; most non-infected cases settle with simple measures, and surgery is reserved for refractory cases.",
  },
  {
    name: "Distal Biceps Tendonitis",
    slug: "distal-biceps-tendonitis",
    region: "Elbow",
    status: "priority",
    blurb:
      "Irritation or partial wear of the biceps tendon where it attaches at the elbow, distinct from a complete distal biceps rupture. Managed conservatively with activity modification, therapy, and PRP for a tendon that is not healing, while watching for progression to a tear.",
  },
  {
    name: "Adhesive Capsulitis (Frozen Shoulder)",
    slug: "frozen-shoulder",
    region: "Shoulder",
    status: "priority",
    blurb:
      "A painful, progressive loss of shoulder motion as the capsule thickens and tightens, more common in diabetics. Mostly non-surgical, with a stretching program, anti-inflammatory measures, and a corticosteroid injection; the large majority recover their motion.",
  },

  // Knee & Sports, old-site build-out (June 2026)
  {
    name: "Patellar Instability",
    slug: "patellar-instability",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "The kneecap slipping or dislocating, usually toward the outside, often in young athletes. First-time dislocations are usually treated without surgery; recurrent instability is treated with MPFL reconstruction that addresses the underlying anatomy.",
  },
  {
    name: "Baker's Cyst (Popliteal Cyst)",
    slug: "bakers-cyst",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "A fluid-filled swelling behind the knee, usually a secondary sign of a meniscus tear or arthritis inside the joint. The key is to treat the underlying cause, not just the cyst.",
  },
  {
    name: "Knee Arthritis",
    slug: "knee-arthritis",
    region: "Knee & Sports",
    status: "priority",
    blurb:
      "Osteoarthritis of the knee, with gradual cartilage wear, pain, stiffness, and swelling. Conservative care comes first and for as long as it controls symptoms; partial or total knee replacement is reserved for advanced arthritis that limits daily life.",
  },

  // Advanced Treatments, phase 2
  {
    name: "PRP / BMAC Injections",
    slug: "prp-bmac",
    region: "Advanced Treatments",
    status: "phase2",
    blurb:
      "Dr. Lee was among the first surgeons in NYC to perform PRP, including for upper extremity injuries. 250+ PRP procedures performed annually.",
  },
  {
    name: "Peptide Therapy",
    slug: "peptide-therapy",
    region: "Advanced Treatments",
    status: "phase2",
    blurb:
      "Dr. Lee published what is believed to be the first review paper on peptides in an orthopedic journal.",
  },
];

export const regions = [
  "Hand & Wrist",
  "Elbow",
  "Shoulder",
  "Knee & Sports",
  "Foot & Ankle",
  "Advanced Treatments",
] as const;

export function conditionsByRegion(region: Condition["region"]) {
  return conditions
    .filter((c) => c.region === region)
    .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
}

export function priorityConditions() {
  return conditions.filter((c) => c.status === "priority");
}
