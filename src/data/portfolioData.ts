export interface StudentBio {
  name: string;
  degree: string;
  institution: string;
  year: string;
  location: string;
  tagline: string;
  statement: string;
  secondaryStatement: string;
  specializations: string[];
}

export interface ProjectSummary {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  discipline: string;
  year: string;
  tagline: string;
  accentColor: string;
  rotation: string;
  tags: string[];
  summary: string;
}

export const portfolioData = {
  student: {
    name: "Srishti Jain",
    degree: "Fashion Communication & Visual Merchandising",
    institution: "Design & Fashion Studies",
    year: "Class of 2026",
    location: "Mumbai / New Delhi",
    tagline: "Marketing Management, Visual Merchandising & Fashion Entrepreneurship",
    statement: "Translating brand philosophies into tangible retail environments, market-tested products, and high-impact digital experiences.",
    secondaryStatement: "My body of work spans industry internship at fine jewellery brand Aadiya Jewels, marketing management and category expansion for UNIQLO, visual merchandising for Cover Story, and founding an athleisure startup from consumer pain points to physical MVP.",
    specializations: [
      "Visual Merchandising & Window Concepts",
      "Marketing Strategy (STP, 7Ps, BCG)",
      "E-Commerce & Shopify Management",
      "Social Media Content Production",
      "Fashion Prototyping & Consumer Research"
    ]
  },

  // 1. INTERNSHIP: AADIYA JEWELS (Page 1 Social Media, Page 2 E-Commerce & Learnings)
  internship: {
    company: "Aadiya Jewels",
    role: "Marketing and E-Commerce Intern",
    period: "Internship Term",
    location: "Studio & Digital Operations",
    overview: "Worked across creative social media content production and end-to-end e-commerce management. Handled everything from planning, shooting, editing, and publishing video content to website banners, product listings, and digital merchandising on Shopify.",
    
    page1SocialMedia: {
      title: "PAGE 1 — SOCIAL MEDIA",
      intro: "During my internship at Aadiya Jewels, I worked on creating and managing social media content for the brand. From planning content to shooting, editing and publishing, I was involved in taking ideas from concept to live content.",
      whatIWorkedOn: [
        { id: "01", title: "Content Creation", desc: "Brainstorming reel concepts, product styling hooks, and jewellery aesthetic storytelling." },
        { id: "02", title: "Content Production", desc: "Handling on-set photography, framing, product lighting, and video capture of collections." },
        { id: "03", title: "Editing & Publishing", desc: "Crafting pacing, music selection, color grading, caption drafting, and publishing across platforms." },
        { id: "04", title: "Content Planning", desc: "Maintaining monthly content calendars, tracking delivery deadlines, and seasonal campaign launches." }
      ],
      skillsApplied: [
        "Content Creation",
        "Product Styling",
        "Photography",
        "Videography",
        "Video Editing",
        "Visual Storytelling",
        "Content Planning",
        "Social Media Management"
      ]
    },

    page2Ecommerce: {
      title: "PAGE 2 — E-COMMERCE",
      intro: "Alongside social media, worked on the brand’s e-commerce presence by creating website banners, uploading and organising products on Shopify, and developing digital product catalogues with images, descriptions and tags.",
      whatIWorkedOn: [
        { id: "01", title: "Website Banners", desc: "Designing desktop and mobile homepage hero banners and seasonal collection promotional graphics." },
        { id: "02", title: "Product Listing", desc: "Setting up new jewellery pieces with high-res images, pricing, metal specifications, and SKU tags." },
        { id: "03", title: "Catalogue Management", desc: "Auditing product categories, filtering attributes, tags, and ensuring seamless navigation." },
        { id: "04", title: "E-Commerce Management", desc: "Reviewing customer journey on Shopify, stock availability displays, and digital storefront quality." }
      ],
      skillsApplied: [
        "Shopify",
        "E-Commerce Management",
        "Product Listing",
        "Catalogue Management",
        "Website Merchandising",
        "Graphic Design",
        "Product Presentation",
        "Attention to Detail"
      ]
    },

    learningOutcomes: [
      {
        number: "01",
        title: "Creative Execution",
        desc: "Learned how to turn ideas into engaging social media content that reflects luxury jewellery aesthetics."
      },
      {
        number: "02",
        title: "Content Planning",
        desc: "Developed an understanding of scheduling, consistency, content calendars, and brand management."
      },
      {
        number: "03",
        title: "Digital Merchandising",
        desc: "Learned how product imagery, information, banners, and presentation contribute directly to an online shopping experience."
      },
      {
        number: "04",
        title: "Industry Experience",
        desc: "Understood the workflow of working for a real jewellery brand and executing tasks within practical, demanding deadlines."
      }
    ]
  },

  // 2. SELECTED PROJECTS SUMMARY LIST
  selectedProjects: [
    {
      id: "proj-1",
      slug: "marketing",
      number: "01",
      title: "Marketing Management — UNIQLO Fragrance",
      category: "Category Extension & Marketing Strategy",
      discipline: "Brand Strategy, STP, 7Ps, BCG, Packaging & Product Design",
      year: "2025",
      tagline: "Translating brand philosophy into a new product category & strategic market plan.",
      accentColor: "#C9FF8C",
      rotation: "rotate-1",
      tags: ["UNIQLO", "Brand Strategy", "STP & 7Ps", "Minimal Packaging", "Market Planning"],
      summary: "Strategic marketing proposal expanding UNIQLO into accessible premium everyday fragrances. Built on Japanese naming, minimalist packaging, and nature-inspired scents."
    },
    {
      id: "proj-2",
      slug: "visual-merchandising",
      number: "02",
      title: "Visual Merchandising — Cover Story",
      category: "Window Display & In-Store Experience",
      discipline: "Spatial Design, Floral Sculpture, Iridescent Fabrication, VM Principles",
      year: "2025",
      tagline: "Future Florals: A blooming garden re-imagined through a futuristic, iridescent lens.",
      accentColor: "#F4B6D4",
      rotation: "-rotate-1",
      tags: ["Cover Story", "Spring/Summer", "Future Florals", "Holographic", "VM Principles"],
      summary: "Spring/Summer VM concept for Cover Story. Combining delicate handcrafted floral structures with holographic sheets, pastels, and symmetrical visual balance."
    },
    {
      id: "proj-3",
      slug: "project-3",
      number: "03",
      title: "Fashion Start-Up — Athleisure Hybrid",
      category: "Consumer Research & Physical MVP",
      discipline: "Observation, Survey Insights, Material Sourcing, MVP Prototyping",
      year: "2025–2026",
      tagline: "Structured × Relaxed: Athleisure engineered for transition between gym and everyday life.",
      accentColor: "#AFC8FF",
      rotation: "rotate-1",
      tags: ["Fashion Start-Up", "Consumer Pain Points", "MVP", "Lycra × Terry Cotton", "Iteration"],
      summary: "Developing a fashion venture from identifying real consumer pain points to testing and refining a physical prototype: Structured crop top and relaxed joggers."
    }
  ],

  // 3. PROJECT 1: MARKETING MANAGEMENT (UNIQLO FRAGRANCE)
  projectMarketing: {
    cover: {
      title: "Marketing Management",
      subtitle: "UNIQLO Fragrance Category Extension",
      brand: "UNIQLO",
      discipline: "Marketing Strategy & Brand Extension",
      timeline: "Strategic Research & Capstone",
      accentColor: "#C9FF8C"
    },
    page1And2: {
      context: "Strategic evaluation of UNIQLO’s brand equity, LifeWear philosophy, and retail footprint to identify a high-margin, scalable category extension: everyday lifestyle fragrances.",
      brief: "To develop a commercially viable, brand-aligned marketing plan for introducing a fragrance line under UNIQLO, ensuring brand resonance while capturing accessible luxury market share."
    },
    page3DesignDecisions: [
      {
        number: "1",
        title: "Japanese names",
        desc: "Connected to UNIQLO’s Japanese identity and cultural heritage."
      },
      {
        number: "2",
        title: "Minimal packaging",
        desc: "Maintains the brand’s clean visual language and functional LifeWear aesthetic."
      },
      {
        number: "3",
        title: "Nature-inspired scents",
        desc: "Connects fragrances to everyday life, subtle presence, and natural well-being."
      },
      {
        number: "4",
        title: "Four variants",
        desc: "Create choice and versatility while keeping the launch collection cohesive and curated."
      },
      {
        number: "5",
        title: "Accessible premium positioning",
        desc: "Makes the fragrance category approachable to the everyday shopper without losing quality."
      }
    ],
    page4Strategy: {
      stp: "Segmentation based on urban minimalism and daily wellness. Targeting existing LifeWear customers seeking daily subtle scents. Positioning as essential everyday fragrance rather than overpowering luxury.",
      sevenPs: "Product (Minimalist glass bottle), Price (Accessible premium), Place (Global flagships + e-commerce), Promotion (In-store sensory displays + digital micro-creators), Process (Tester stations), Physical Evidence (Eco-refill pouches), People (Educated store associates).",
      bcg: "Positioned as a Question Mark with rapid transition pathway to Star status through UNIQLO’s existing foot-traffic and checkout counter cross-merchandising."
    },
    page5IdeaToImpact: {
      headline: "FROM IDEA TO IMPACT",
      subheadline: "What I learned through the project",
      learnings: [
        {
          num: "01",
          name: "RESEARCH",
          detail: "I learned to look at the market, consumer and competition before developing a concept."
        },
        {
          num: "02",
          name: "STRATEGY",
          detail: "I learned to connect a creative idea with STP, 7Ps, BCG and market planning."
        },
        {
          num: "03",
          name: "CREATIVE THINKING",
          detail: "I learned to translate a brand philosophy into a new product and visual identity."
        },
        {
          num: "04",
          name: "BRAND THINKING",
          detail: "I learned that a new category must still feel connected to the original brand."
        }
      ],
      skillsDeveloped: [
        "Research",
        "Strategic Thinking",
        "Creative Thinking",
        "Brand Thinking",
        "Visual Communication"
      ]
    }
  },

  // 4. PROJECT 2: VISUAL MERCHANDISING (COVER STORY)
  projectVM: {
    cover: {
      title: "Visual Merchandising Project 2",
      brand: "Cover Story",
      season: "Spring / Summer",
      conceptName: "Future Florals",
      accentColor: "#F4B6D4"
    },
    page2Brief: {
      briefTitle: "THE BRIEF",
      briefText: "To develop a Spring/Summer visual merchandising concept for Cover Story, creating a fresh, feminine and contemporary in-store experience.",
      whatIInvestigated: [
        {
          pillar: "1. BRAND IDENTITY",
          points: ["Feminine", "Contemporary", "Effortlessly Elegant"]
        },
        {
          pillar: "2. SEASONAL DIRECTION",
          points: ["Spring/Summer", "Lightness", "Freshness"]
        },
        {
          pillar: "3. VISUAL INSPIRATION",
          points: ["Florals", "Pastels", "Iridescence"]
        }
      ],
      howIReachedTheConcept: [
        "COVER STORY",
        "FEMININITY + SOFTNESS",
        "FLORAL INSPIRATION",
        "IRIDESCENCE + LIGHT",
        "FUTURE FLORALS"
      ],
      conceptSummary: "I reimagined a blooming garden through a futuristic lens, combining delicate florals with holographic and iridescent elements.",
      designInsight: "If florals represent nature, femininity and renewal, I wanted to explore what they could look like when infused with luminous modern materiality."
    },
    page3Boards: {
      moodBoard: {
        title: "Mood Board",
        content: "A soft futuristic interpretation of nature, combining delicate florals, luminous textures and reflective surfaces. The mood balances Cover Story’s feminine identity with a contemporary, forward-looking aesthetic.",
        keywords: ["FEMININE", "DREAMY", "SOFT", "FUTURISTIC"]
      },
      colourBoard: {
        title: "Colour Board",
        content: "Soft blush, lavender, blue and neutral tones create a light and feminine base, while holographic accents introduce the futuristic dimension. The palette was selected to keep the display cohesive, fresh and visually refined.",
        palette: [
          { name: "Soft Blush", hex: "#F7D6D8" },
          { name: "Muted Lavender", hex: "#E5D9F2" },
          { name: "Sky Blue", hex: "#CFE2FE" },
          { name: "Warm Neutral", hex: "#F3EFE6" },
          { name: "Holographic Iridescence", hex: "#D4F1F4" }
        ]
      }
    },
    page4BehindTheDisplay: [
      {
        imageIndex: "Image 1",
        title: "Crafting the Details",
        desc: "Holographic sheets were shaped with the wire to create the floral forms."
      },
      {
        imageIndex: "Image 2",
        title: "The concept takes form",
        desc: "The first floral element was created, transforming the initial concept into a structure."
      },
      {
        imageIndex: "Image 3",
        title: "Refining the Form",
        desc: "Each flower was carefully folded and adjusted to enhance the shape and overall visual appeal."
      },
      {
        imageIndex: "Image 4",
        title: "Building the Collection",
        desc: "Multiple floral elements were developed and brought together."
      },
      {
        imageIndex: "Image 5",
        title: "Creating the environment",
        desc: "The backdrop and drapes were installed to add softness, depth and movement to the visual experience."
      }
    ],
    page5SkillsAndPrinciples: {
      skillsApplied: [
        {
          title: "CONCEPT DEVELOPMENT",
          desc: "Translating a seasonal brief into a clear visual concept."
        },
        {
          title: "VISUAL MERCHANDISING",
          desc: "Applying balance, proportion, scale, focal point, rhythm and unity."
        },
        {
          title: "MATERIAL EXPLORATION",
          desc: "Working with holographic sheets, wire, organza and lighting to create visual effects."
        },
        {
          title: "VISUAL STORYTELLING",
          desc: "Creating a consistent narrative from nature to futuristic retail experience."
        },
        {
          title: "EXECUTION & PROBLEM SOLVING",
          desc: "Turning a visual concept into a physical installation through hands-on making and adjustments."
        }
      ],
      vmPrinciplesApplied: [
        { number: "1", name: "BALANCE", desc: "Symmetrical placement created visual stability." },
        { number: "2", name: "SCALE", desc: "Oversized florals created height and impact." },
        { number: "3", name: "FOCAL POINT", desc: "The mannequin remained the primary visual focus." },
        { number: "4", name: "RHYTHM", desc: "Repeated floral forms and vertical drapes created visual flow." },
        { number: "5", name: "COLOUR HARMONY", desc: "Pastels + iridescent finishes maintained a cohesive palette." },
        { number: "6", name: "LIGHTING", desc: "Light enhanced reflections and added depth." }
      ],
      whatILearned: "This project taught me how to translate an abstract visual idea into a physical retail experience. I learned that effective visual merchandising is not only about aesthetics, but also about proportion, placement, material selection, lighting and maintaining product focus. Working through the making and installation process strengthened my understanding of how creative decisions translate into a real retail environment."
    }
  },

  // 5. PROJECT 3: START UP (ATHLEISURE HYBRID)
  projectThree: {
    cover: {
      title: "Project 3 (Start Up)",
      conceptSubtitle: "Athleisure Hybrid: Structured × Relaxed",
      timeline: "Concept to Physical Prototype",
      accentColor: "#AFC8FF"
    },
    page2SurveyInsights: {
      brief: "To develop a fashion business from identifying a real consumer problem to creating, testing and refining a market-ready product concept.",
      journey: "OBSERVATION → INVESTIGATION → INSIGHTS → OPPORTUNITY",
      theObservation: [
        { num: "1", title: "Too restrictive", detail: "Fitted silhouettes that limit natural movement." },
        { num: "2", title: "Limited versatility", detail: "Mostly gym-focused, unable to transition into everyday settings." },
        { num: "3", title: "Comfort vs. style", detail: "Hard to find both simultaneously without compromising look." }
      ],
      whatIInvestigated: [
        "1. Market trends & industry growth",
        "2. Consumer preferences, pain points & buying behaviour",
        "3. Competitor offerings & brand positioning",
        "4. Fabric & functionality"
      ],
      myApproach: [
        { step: "1. Trend Research", desc: "Understanding changing consumer preferences toward all-day comfort." },
        { step: "2. Consumer Insight", desc: "Identifying real user problems through direct interviews and surveys." },
        { step: "3. Market Analysis", desc: "Finding the opportunity gap between high-performance gymwear and casual loungewear." },
        { step: "4. Product Thinking", desc: "Turning actionable insights into functional silhouettes and fabric pairing." },
        { step: "5. Business Thinking", desc: "Planning for growth, unit economics, and lasting market impact." }
      ]
    },
    page3DesignAndMaterial: {
      design: {
        title: "01 Design",
        points: ["Structured crop top", "Relaxed Joggers", "Minimal & Functional"]
      },
      material: {
        title: "02 Material",
        lycra: {
          name: "LYCRA — TOP",
          attributes: "Stretch • Fit • Flexibility"
        },
        terryCotton: {
          name: "TERRY COTTON — TROUSERS",
          attributes: "Softness • Comfort • Breathability"
        },
        colorNote: "Custom-dyed colour palette for effortless daily styling."
      },
      prototype: {
        title: "03 Final Prototype",
        badge: "PHYSICAL MVP",
        tagline: "STRUCTURED × RELAXED",
        coreProposition: "MADE FOR MULTIPLE MOMENTS"
      }
    },
    page4FeedbackAndIteration: {
      whatIHeard: [
        "“I like the idea of something I can wear both in the gym and outside.”",
        "“The fabric feels a bit thick, it might not be comfortable in summer.”",
        "“More style options would be nice, like halter neck tops.”"
      ],
      whatThisTaughtMe: [
        {
          headline: "Research before assumptions",
          detail: "Consumer feedback can challenge initial decisions and ground creative intuition in reality."
        },
        {
          headline: "Build → Test → Refine",
          detail: "A first product doesn’t have to be perfect; the power lies in iterative cycles."
        },
        {
          headline: "Think beyond the product",
          detail: "Good product decisions connect consumer needs, material functionality and business thinking."
        }
      ],
      feedbackLoop: {
        feedback: "Fabric felt too thick",
        iteration: "Explore lighter, breathable fabrics",
        impact: "Better suited to everyday & summer wear"
      }
    }
  },

  // 6. SKILLS MATRIX (Consolidated from All Projects)
  skills: {
    categories: [
      {
        name: "Marketing & Strategy",
        tag: "COMMERCIAL",
        color: "#C9FF8C",
        skills: [
          { name: "Strategic Frameworks", proficiency: "Advanced", note: "STP, 7Ps, BCG Matrix, Brand Expansion" },
          { name: "Market & Consumer Research", proficiency: "Expert", note: "Ethnography, surveys, competitor benchmarking" },
          { name: "Creative & Brand Thinking", proficiency: "Advanced", note: "Translating brand DNA into new product categories" }
        ]
      },
      {
        name: "Visual Merchandising",
        tag: "SPATIAL & IN-STORE",
        color: "#F4B6D4",
        skills: [
          { name: "VM Principles", proficiency: "Expert", note: "Balance, Scale, Focal Point, Rhythm, Lighting" },
          { name: "Concept Development", proficiency: "Advanced", note: "Translating seasonal briefs into window narratives" },
          { name: "Hands-on Making & Installation", proficiency: "Advanced", note: "Holographic sheets, wire framing, draping, prop making" }
        ]
      },
      {
        name: "Social Media & Content",
        tag: "PRODUCTION",
        color: "#FFF3B3",
        skills: [
          { name: "Content Creation & Planning", proficiency: "Advanced", note: "End-to-end concept, calendars, and campaign delivery" },
          { name: "Photography & Videography", proficiency: "Advanced", note: "Product styling, framing, shooting jewellery on-set" },
          { name: "Video Editing & Publishing", proficiency: "Advanced", note: "Pacing, reels, audio synchronization, captions" }
        ]
      },
      {
        name: "E-Commerce & Digital",
        tag: "PLATFORMS",
        color: "#AFC8FF",
        skills: [
          { name: "Shopify Store Management", proficiency: "Advanced", note: "Product listing, inventory attributes, collections" },
          { name: "Digital Merchandising", proficiency: "Advanced", note: "Website hero banners, catalogue taxonomy, UI flow" },
          { name: "Product Presentation", proficiency: "Expert", note: "Visual consistency, high-res detailing, buyer clarity" }
        ]
      }
    ],
    softwareProficiency: [
      "Shopify E-Commerce",
      "Adobe Premiere Pro / CapCut",
      "Adobe Photoshop / Illustrator",
      "Canva & Digital Layouts",
      "Content Calendar Tools"
    ],
    studioPractices: [
      "Rapid Physical Prototyping (MVP)",
      "Window Display Rigging & Assembly",
      "On-Floor Retail Merchandising",
      "Consumer Feedback Iteration Loops"
    ]
  },

  // 7. CONTACT & INQUIRIES
  contact: {
    email: "srishti.jain@studio.com",
    phone: "+91 98765 43210",
    location: "Mumbai / New Delhi, India",
    availability: "Available for Visual Merchandising, E-Commerce Styling, and Fashion Marketing Roles",
    socials: [
      { name: "Instagram", handle: "@srishti.jain", url: "https://instagram.com" },
      { name: "LinkedIn", handle: "Srishti Jain", url: "https://linkedin.com" },
      { name: "Behance", handle: "Srishti Jain Portfolio", url: "https://behance.net" }
    ]
  }
};
