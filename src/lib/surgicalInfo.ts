// Surgical-info content recovered verbatim from Dr. Lee's old Wix site
// (surgical-planning, post-operative, and nutrition pages). Drives
// /before-surgery, /surgery-nutrition, and the general-guidance block on the
// /therapy-protocols index. Coordinator is Esther Sanchez (confirmed current
// 2026-07-02; the old post-op page's "Damaris McIntyre" is stale). Verbatim
// wording, do not reword.

export type PrepInstruction = { term: string; detail: string };
export type SurgicalFacility = {
  name: string;
  address: string[];
  description?: string[];
  contact: string;
};

export const beforeSurgery = {
  header: {
    title: "Preparing for",
    italic: "your surgery.",
    lede: "Once you and Dr. Lee decide surgery is the right step, here is what to expect, from scheduling through the day of your operation. Please always follow the specific instructions given to you by Dr. Lee's team.",
  },
  planning: {
    heading: "Surgical scheduling",
    body: [
      "After you and Dr. Lee have discussed surgery, you will meet with his Surgical Coordinator, Esther Sanchez. Esther will assist you with choosing the proper time, date, and location for your operation. She will also provide any paperwork or medical clearance instructions.",
    ],
    paperworkIntro:
      "Your coordinator will provide the documents you need, covering medical clearance, financial responsibility, and location-specific information. This is general information; our surgical coordinator will contact you regarding your specific instructions.",
    paperwork: [
      "Preoperative clearance forms",
      "Financial responsibility",
      "Surgicare of Manhattan information",
      "MEETH Surgical Center information",
    ],
  },
  coordinator: {
    name: "Esther Sanchez",
    role: "Surgical Coordinator",
    address: "159 East 74th Street, New York, NY 10021",
    phone: "(212) 737-3301 ext. 105",
    email: "ESanchez@newyorkorthopedics.com",
    fax: "(212) 734-0407",
  },
  instructions: {
    heading: "Pre-operative instructions",
    intro:
      "Below are general guidelines for the time leading up to your surgery. If you have any questions about the surgical scheduling process, please contact our Surgical Coordinator.",
    items: [
      {
        term: "Aspirin",
        detail:
          "and all products containing aspirin must be stopped one week before your surgery. If your Primary Care Physician or Internist has placed you on aspirin or medications containing aspirin for any reason, please alert them that you will be discontinuing aspirin.",
      },
      {
        term: "Anti-inflammatory medications",
        detail:
          "for example Advil, Motrin, Aleve, Naproxen, Ibuprofen, etc. must be stopped four days before surgery. If you are unsure about what you are taking, please consult our office and speak with Dr. Lee or his Physician Assistants.",
      },
      {
        term: "Dietary supplements / herbal supplements",
        detail:
          "must be stopped one week before surgery. This includes Vitamin E, Echinacea, Turmeric, etc. These can potentially cause problems with bleeding. Please contact us with any questions.",
      },
      {
        term: "Food",
        detail:
          "must be discontinued eight hours prior to surgery. Please do NOT eat or drink ANYTHING, even water, after 12:00am (midnight) the night before your surgery. Even if someone from the hospital calls and says it is OK to do so, please do not. If you need to take medication the morning of your surgery, you may take a sip of water only.",
      },
      {
        term: "Alcohol",
        detail:
          "and other mind-altering substances must be discontinued 24 hours prior to surgery.",
      },
      {
        term: "Medications",
        detail:
          "If you take medication for hypertension, cholesterol, diabetes, asthma, etc., please contact your Primary Care Physician regarding what you should take the morning of your surgery. If needed, the medication may be taken with a sip of water.",
      },
      {
        term: "Braces, crutches, or other equipment",
        detail:
          "Dr. Lee has given you must be brought to the hospital on the day of your surgery, please.",
      },
      {
        term: "Imaging (MRI, CT, X-rays)",
        detail:
          "Please bring all films or CDs that are in your possession with you to surgery. If your images are in our office, we will transport them.",
      },
      {
        term: "Transportation",
        detail:
          "Please make arrangements to have a family member or friend escort you home after surgery. You cannot drive or hail a cab yourself home after surgery. You will not be discharged after surgery without an escort.",
      },
      {
        term: "Jewelry / hair accessories / piercings",
        detail:
          "should be left at home on the day of surgery. This includes wedding rings and body piercings. You can wear a hair tie as long as it does not have metal in it. No barrettes, bobby pins, or hair clips are permitted.",
      },
    ] as PrepInstruction[],
  },
  locations: {
    heading: "Surgical locations",
    intro:
      "Dr. Lee is the Chief of Hand and Upper Extremity at Lenox Hill Hospital. The majority of surgical cases may be performed out-patient, which means you can go home the same day of surgery.",
    outpatient: ["Surgicare of Manhattan", "Manhattan Eye Ear Throat Hospital (MEETH)"],
    inpatient: ["Lenox Hill Main Hospital"],
    facilities: [
      {
        name: "MEETH",
        address: ["210 East 64th Street", "New York, NY 10065"],
        description: [
          "A division of Lenox Hill Hospital, Manhattan Eye, Ear, & Throat Hospital (MEETH) is a specialized Joint Commission accredited ambulatory surgical center in Manhattan.",
        ],
        contact: "(212) 838-9200",
      },
      {
        name: "SurgiCare of Manhattan",
        address: ["800 2nd Avenue, 7th Floor", "New York, NY 10017"],
        description: [
          "SurgiCare of Manhattan (SOM) is an APEX Award winning and JCAHO accredited outpatient surgical center. It is a premier surgical center in Manhattan that provides exemplary medical care.",
          "SurgiCare of Manhattan strives to consistently provide high quality health care rendered in a safe, professional, comfortable, and cost effective manner that meets or exceeds the expectations of the patient, physicians, and communities served.",
        ],
        contact: "(212) 867-0609",
      },
      {
        name: "Lenox Hill, Main Hospital",
        address: ["130 East 77th Street", "New York, NY 10021"],
        contact: "(855) 434-1800",
      },
    ] as SurgicalFacility[],
  },
};

// The general "What to Expect After Surgery" guidance shown on the
// /therapy-protocols index above the procedure library.
export const generalPostOp = {
  heading: "What to expect after surgery",
  intro: [
    "The goal after surgery is to keep your pain well controlled and keep your surgical site protected.",
    "Dr. Lee typically calls in the evening after your surgery to review the procedure and answer any questions. If you miss his call, call the office at (212) 737-3301. If it is after office hours, call the same line and page Dr. Lee.",
  ],
  topics: [
    {
      heading: "Elevation",
      body: "If advised by Dr. Lee for your specific procedure, elevation is an efficient way to decrease swelling and pain.",
    },
    {
      heading: "Pain medication",
      body: "People vary in how much and how often they need to take pain medication. Some never end up needing to take medication, while others end up needing the full amount prescribed to them. The first few days after surgery is usually when pain is the worst. It is very important that you only take the pain medication prescribed to you as directed.",
    },
    {
      heading: "Nerve block",
      body: "You may have received a nerve block with your surgery. If so, your extremity may stay numb for up to 24 hours. Increased sensation (usually accompanied by pins/needles sensation) and movement of your affected extremity are signs that the block is wearing off. You may also experience pain and discomfort of the extremity as the nerve block wears off.",
    },
    {
      heading: "Safety",
      body: "Avoid large crowds and use extra precautions to avoid falls. Follow your specific post-op instructions carefully regarding braces, splints, bandages, immobilization, wound care, and weight bearing status.",
    },
  ],
  callOffice: [
    "Severe pain, especially that which is not reduced with pain medication",
    "Fever (>101.3°F) or chills",
    "Oozing or redness of the wound",
    "Pain, swelling, redness, or hardness of the calf (behind the leg between the knee and ankle)",
  ],
  call911: ["Difficulty breathing or heaviness/pain in the chest"],
  followUp:
    "Typically, your first post-operative appointment should be scheduled for 7 to 10 days after your surgery. This may vary, so please check your specific paperwork for details.",
};

export type NutritionGroup = {
  heading: string;
  bullets: string[];
  foodsIntro?: string;
  foods?: string[];
};
export type NutritionSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
  foodsIntro?: string;
  foods?: string[];
  groups?: NutritionGroup[];
};

export const surgeryNutrition = {
  header: {
    title: "Nutrition and substance use,",
    italic: "before and after surgery.",
    lede: "One of the most important things you can do to prepare your body for surgery is to optimize your diet. The health and strength of your bones and muscle, as well as wound healing, depend on a balanced diet and a steady stream of nutrients before and after surgery.",
  },
  sections: [
    {
      heading: "Calories",
      bullets: [
        "Your body burns a lot of energy during and after surgery.",
        "Increasing your calories from complete, nutrient-packed foods before and after surgery is therefore very important.",
      ],
    },
    {
      heading: "Protein",
      bullets: [
        "After your body utilizes carbohydrate and protein stores, it begins breaking down muscle for energy.",
        "Muscle breakdown leads to decreased strength and can delay recovery.",
      ],
      foodsIntro: "Prevent this muscle breakdown by eating protein-rich foods:",
      foods: [
        "Seafood",
        "White meat poultry",
        "Lean beef",
        "Milk, cheese, yogurt",
        "Eggs",
        "Soy",
        "Peanuts, almonds",
        "Oats",
        "Lentils",
      ],
    },
    {
      heading: "Multivitamin",
      body: [
        "It is recommended that you take a daily multivitamin. Multivitamins are pills that provide vitamins and minerals essential to a well-functioning body that may not be obtained consistently from the food you eat. From an orthopedic surgery standpoint, we are particularly concerned with a few of these vitamins and minerals.",
      ],
      groups: [
        {
          heading: "Vitamin C",
          bullets: [
            "Necessary for the creation of collagen (the main protein in bone).",
            "Deficiency leads to impaired wound healing.",
            "Our recommendation: take 500mg of Vitamin C daily the day prior to surgery and for at least one week thereafter.",
          ],
          foodsIntro:
            "While your multivitamin may contain our daily recommended amount of Vitamin C, you can also obtain Vitamin C from the following foods:",
          foods: [
            "Citrus fruits",
            "Strawberries",
            "Tomatoes",
            "Spinach",
            "Cauliflower",
            "Cabbage",
            "Brussel sprouts",
            "Broccoli",
          ],
        },
        {
          heading: "Calcium",
          bullets: [
            "Required to build and maintain strong bones.",
            "Important in muscle control and blood circulation.",
            "If our diets are deficient, our bodies remove calcium from stores in bone, leading to weaker bones.",
            "It is recommended that all patients who undergo fracture surgery maintain a daily Calcium intake of 1200mg per day (combined from food and vitamin sources) until their fracture is healed.",
          ],
          foodsIntro: "Calcium-rich foods that can help you reach the daily recommended goal include:",
          foods: [
            "Dairy products (milk, yogurt, cheese)",
            "Leafy greens (kale, broccoli, spinach, collard greens, etc.)",
            "Almonds",
            "Tofu",
            "Calcium-fortified cereals and juices (most commonly orange juice)",
          ],
        },
        {
          heading: "Vitamin D",
          bullets: [
            "Essential for calcium absorption.",
            "Your body produces it with sunlight exposure. Use of sunblock, however, will block your body's ability to generate Vitamin D.",
            "It is recommended that all patients who undergo fracture surgery maintain a daily Vitamin D intake of 800 IU (International Units) daily.",
            "Dairy products (especially milk) are an excellent dietary source of Vitamin D that can help you reach your daily goal.",
          ],
        },
      ],
    },
    {
      heading: "Smoking and vaping",
      bullets: ["Nicotine has harmful effects on the production of bone-forming cells."],
      groups: [
        {
          heading: "Consequences",
          bullets: [
            "Bone may not heal",
            "Poor wound healing",
            "Increased infection risk",
            "Poorer surgical outcomes",
          ],
        },
      ],
      foodsIntro: undefined,
    },
    {
      heading: "Marijuana",
      bullets: [
        "It is recommended that you stop smoking marijuana prior to your surgery and until you are fully recovered.",
      ],
    },
    {
      heading: "Illicit drug use",
      bullets: [
        "Illicit drug use is never recommended and should be stopped immediately for anyone undergoing surgery.",
      ],
    },
    {
      heading: "Caffeine",
      bullets: [
        "Causes blood vessels to constrict and can raise heart rate and blood pressure.",
        "You should avoid caffeine 48 hours before and 24 hours after your surgery.",
      ],
    },
  ] as NutritionSection[],
  smokingClosing: "You should make every effort to stop smoking and vaping to prevent these consequences.",
  disclaimer:
    "Remember, these are only recommendations as you prepare for your surgery. Any individual with chronic kidney disease, a blood clotting disorder, or any other chronic disease should first consult with their Primary Care Doctor or respective specialist prior to making any dietary changes. If you have any additional questions or concerns, please do not hesitate to call the office at (212) 737-3301 or send a message through the Patient Portal.",
};
