export interface P3Page2Quadrant {
  number: string;
  title: string;
  text?: string;
  images?: { label: string; image: string }[];
  scriptCallout?: string;
  lead?: string;
  pillars?: { name: string; points: string[] }[];
  frameworkBadges?: string[];
  notepadImage?: string;
  notepadCaption?: string;
  frameworkSentence?: string;
  flow?: { step: string; desc: string; isHighlight: boolean }[];
  natureImage?: string;
  natureCaption?: string;
  takeaway?: string;
  skills?: { title: string; subtitle: string; icon: string }[];
  bottlesImage?: string;
  bottlesCaption?: string;
}

export interface StudentBio {
  name: string;
  degree: string;
  year: string;
  location: string;
  statement: string;
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
  image?: string;
  tags: string[];
  summary: string;
  brief?: string;
  research?: string;
  contribution?: string;
  keyLearnings?: string;
}

export const portfolioData = {
  student: {
    name: "Srishti Jain",
    statement: "Translating brand philosophies into tangible retail environments, market-tested products, and high-impact digital experiences."
  },

  // 1. INTERNSHIP: AADIYA JEWELS (Page 1 Social Media, Page 2 E-Commerce & Learnings)
  internship: {
    company: "Aadiya Jewels",
    role: "Marketing and E-Commerce Intern",
    overview: "Worked across creative social media content production and end-to-end e-commerce management. Handled everything from planning, shooting, editing, and publishing video content to website banners, product listings, and digital merchandising on Shopify.",
    
    page1SocialMedia: {
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
      title: "A new dimension of life wear : UNIQLO Fragrance",
      category: "Category Extension & Marketing Strategy",
      discipline: "Brand Strategy, STP, 7Ps, BCG, Packaging & Product Design",
      tagline: "Translating brand philosophy into a new product category & strategic market plan.",
      accentColor: "#C9A0A4",
      rotation: "rotate-1",
      image: "/portfolio-assets/project1.png",
      tags: ["UNIQLO", "Brand Strategy", "STP & 7Ps", "Minimal Packaging", "Market Planning"],
      summary: "Strategic marketing proposal expanding UNIQLO into accessible premium everyday fragrances. Built on Japanese naming, minimalist packaging, and nature-inspired scents.",
      brief: "Extended UNIQLO's LifeWear philosophy into fragrances inspired by Japanese minimalism.",
      research: "Studied fragrance trends, consumers and competitors to identify the opportunity.",
      contribution: "Developed the concept, fragrance names, packaging and visual identity for four scents.",
      keyLearnings: "Learned to connect creativity, research and strategy with strong brand thinking."
    },
    {
      id: "proj-2",
      slug: "visual-merchandising",
      number: "02",
      title: "Visual Merchandising — Cover Story",
      category: "Window Display & In-Store Experience",
      discipline: "Spatial Design, Floral Sculpture, Iridescent Fabrication, VM Principles",
      tagline: "Future Florals: A blooming garden re-imagined through a futuristic, iridescent lens.",
      accentColor: "#C9A0A4",
      rotation: "-rotate-1",
      image: "/portfolio-assets/project2.png",
      tags: ["Cover Story", "Spring/Summer", "Future Florals", "Holographic", "VM Principles"],
      summary: "Spring/Summer VM concept for Cover Story. Combining delicate handcrafted floral structures with holographic sheets, pastels, and symmetrical visual balance.",
      brief: "Created a “Future Florals” Spring/Summer VM concept.\nBlended florals with femininity & iridescence.",
      research: "Explored trends, colours & brand identity.\nDefined the visual direction.",
      contribution: "Developed the concept, mood board & styling.\nWorked on spatial planning & execution.",
      keyLearnings: "Strengthened VM & styling skills.\nBalanced creativity with functionality."
    },
    {
      id: "proj-3",
      slug: "project-3",
      number: "03",
      title: "Fashion Start-Up — Athleisure Hybrid",
      category: "Consumer Research & Physical MVP",
      discipline: "Observation, Survey Insights, Material Sourcing, MVP Prototyping",
      tagline: "Structured × Relaxed: Athleisure engineered for transition between gym and everyday life.",
      accentColor: "#C9A0A4",
      rotation: "rotate-1",
      image: "/portfolio-assets/project3.png",
      tags: ["Fashion Start-Up", "Consumer Pain Points", "MVP", "Lycra × Terry Cotton", "Iteration"],
      summary: "Developing a fashion venture from identifying real consumer pain points to testing and refining a physical prototype: Structured crop top and relaxed joggers.",
      brief: "Created Athera, a modest & versatile athleisure brand.\nDesigned for gym-to-café-to-airport dressing.",
      research: "Explored consumers, trends, competitors & fabrics.\nIdentified the market opportunity.",
      contribution: "Worked on product development, fabrics & styling.\nContributed to prototyping the collection.",
      keyLearnings: "Turned consumer insights into product ideas.\nLearned through testing & refinement."
    }
  ],

  // 3. PROJECT 1: MARKETING MANAGEMENT (UNIQLO FRAGRANCE)
  projectMarketing: {
    cover: {
      title: "Marketing Management",
      subtitle: "UNIQLO Fragrance Category Extension",
      brand: "UNIQLO",
      discipline: "Marketing Strategy & Brand Extension",
      timeline: "Strategic Research & Capstone"
    },
    page1And2: {
      context: "Strategic evaluation of UNIQLO’s brand equity, LifeWear philosophy, and retail footprint to identify a high-margin, scalable category extension: everyday lifestyle fragrances.",
      brief: "To develop a commercially viable, brand-aligned marketing plan for introducing a fragrance line under UNIQLO, ensuring brand resonance while capturing accessible luxury market share."
    },

    // PAGE 2: FROM BRIEF TO CONCEPT
    page2BriefToConcept: {
      pageLabel: "PAGE 02",
      title: "FROM BRIEF TO CONCEPT",
      subtitle: "How we turned category-expansion brief into a fragrance concept.",
      quadrant01: {
        number: "01",
        title: "PROJECT BRIEF",
        text: "We were challenged to expand an existing fashion brand into a new product category. We chose UNIQLO and explored how its Life Wear philosophy could be extended beyond clothing.",
        scriptCallout: "From Life Wear to Feel Wear",
        image: { src: "/portfolio-assets/01_UNIQLO_main.jpg", label: "PROJECT BRIEF VISUAL", alt: "Project brief brand visual" }
      },
      quadrant02: {
        number: "02",
        title: "RESEARCH & INVESTIGATION",
        lead: "I explored the market, understood the consumer and analysed competitors to identify the opportunity.",
        pillars: [
          {
            name: "MARKET",
            points: ["Fragrance industry growth", "Consumer demand", "Regional opportunities (Asia & India)"]
          },
          {
            name: "CONSUMER",
            points: ["Lifestyle & preferences", "Target audience", "Spending behaviour"]
          },
          {
            name: "COMPETITION",
            points: ["Zara, H&M, etc.", "Existing fragrance lines", "Positioning & gaps"]
          }
        ],
        frameworkSentence: "The research was structured using strategic framework to evaluate the market, consumer & competitive landscape.",
        image: { src: "/portfolio-assets/02_market_trends.jpg", label: "RESEARCH SNAPSHOT", alt: "Market, consumer and competition research visual" }
      },
      quadrant03: {
        number: "03",
        title: "HOW WE CAME UP WITH THE CONCEPT",
        takeaway: "I saw an opportunity to extend UNIQLO's idea of everyday living from something we wear to something we experience."
      },
      quadrant04: {
        number: "04",
        title: "SKILLS I APPLIED",
        lead: "I combined my marketing knowledge with creative thinking to bring the concept to life.",
        skills: [
          { title: "RESEARCH", subtitle: "Market & competitor investigation" },
          { title: "STRATEGIC THINKING", subtitle: "STP • 7Ps • BCG • Ansoff" },
          { title: "CREATIVE THINKING", subtitle: "Concept & fragrance development" },
          { title: "BRAND THINKING", subtitle: "Extending UNIQLO's identity" },
          { title: "VISUAL COMMUNICATION", subtitle: "Packaging & presentation" }
        ],
        quote: "More than just a fragrance, it's a feeling.",
        tag: "UNIQLO FRAGRANCES",
      }
    },

    // PAGE 3: FROM STRATEGY TO SCENT
    page3: {
      pageLabel: "03",
      headerTag: "FROM STRATEGY TO SCENT",
      title: "FROM STRATEGY TO SCENT",
      subtitle: "Translating UNIQLO's brand DNA into a fragrance collection.",
      conceptSection: {
        title: "ONE CONCEPT → FOUR EXPRESSIONS",
        expressions: [
          {
            name: "HANA",
            label: "(FLOWER)",
            image: "/portfolio-assets/p1-hana.png",
            notes: "Soft floral\nCherry blossom inspired",
            mood: "Soft · Feminine · Calm",
            color: "#F8E7E3"
          },
          {
            name: "MIZU",
            label: "(WATER)",
            image: "/portfolio-assets/p1-mizu.png",
            notes: "Lotus · Matcha · Amberwood",
            mood: "Fresh · Clean · Balanced",
            color: "#F6E7D3"
          },
          {
            name: "KAZE",
            label: "(WIND)",
            image: "/portfolio-assets/p1-kaze.png",
            notes: "Citrus",
            mood: "Fresh · Energetic · Light",
            color: "#F8E7E3"
          },
          {
            name: "SORA",
            label: "(SKY)",
            image: "/portfolio-assets/p1-sora.png",
            notes: "Green tea · Bamboo · Sandalwood",
            mood: "Green · Calm · Grounded",
            color: "#F6E7D3"
          }
        ]
      },
      processSection: {
        title: "PRODUCT DEVELOPMENT & DESIGN PROCESS",
        processSteps: [
          { label: "CONCEPT", icon: "Lightbulb" },
          { label: "NAMING", icon: "Tag" },
          { label: "VISUAL IDENTITY", icon: "Eye" },
          { label: "PACKAGING", icon: "Package" },
          { label: "PHYSICAL PROTOTYPE", icon: "Box" }
        ],
        physicalPackaging: {
          title: "PHYSICAL PACKAGING (HANA & MIZU)",
          photos: [
            { src: "/portfolio-assets/p1-packaging-1.png", caption: "HANA", desc: "Physical packaging." },
            { src: "/portfolio-assets/p1-packaging-2.png", caption: "MIZU", desc: "Physical packaging." }
          ]
        }
      },
      designDecisions: {
        title: "DESIGN DECISIONS",
        background: "#F3E7D8",
        items: [
          { title: "Japanese names", description: "Connect to Uniqlo's Japanese identity.", icon: "Globe" },
          { title: "Minimal packaging", description: "Mirrors the brand's clean visual language.", icon: "Package" },
          { title: "Nature-inspired scents", description: "Connects fragrance to its everyday lifestyle.", icon: "Leaf" },
          { title: "Four variants", description: "Create choice while keeping the range focused.", icon: "Circle" },
          { title: "Accessible premium positioning", description: "Makes the category approachable.", icon: "Award" }
        ]
      },
      footer: {
        brand: "UNIQLO FRAGRANCES",
        separator: "|",
        statement: "Life Wear, for your senses.",
        pagePagination: "Page 3 / 5"
      }
    },
    // PAGE 4: FROM CONCEPT TO CONSUMER
    page4ConceptToConsumer: {
      pageLabel: "PAGE 04",
      title: "FROM CONCEPT TO CONSUMER",
      subtitle: "WE DIDN'T JUST CREATE IT, WE TESTED IT.",
      testPhotos: [
        {
          src: "/portfolio-assets/project-1/page4_testing_setup.jpeg",
          caption: "Group Picture",
          desc: "Our team at the testing station with prototypes & feedback forms"
        },
        {
          src: "/portfolio-assets/project-1/page4_consumer_feedback.jpeg",
          caption: "Feedback Form",
          desc: "Completed product feedback form with ratings & written responses"
        }
      ],
      processSteps: [
        { label: "SHOW" },
        { label: "LET THEM EXPERIENCE" },
        { label: "ASK" },
        { label: "OBSERVE" },
        { label: "LEARN" }
      ],
      processDescription: "We presented the fragrance concepts and samples to consumers to understand their reactions, preferences and perception of the proposed category.",
      keyInsights: [
        {
          title: "WHAT ATTRACTED THEM",
          desc: "Visual identity, packaging, scent experience.",
          bg: "#F6E7D3",
          border: "#2A2E28"
        },
        {
          title: "WHAT THEY PREFERRED",
          desc: "Clean, fresh and subtle scents (especially Mizu & Kaze).",
          bg: "#C9A0A4",
          border: "#2A2E28"
        },
        {
          title: "WHAT THEY ASSOCIATED WITH UNIQLO",
          desc: "Simple, minimal, trustworthy, Japanese, everyday.",
          bg: "#F6E7D3",
          border: "#2A2E28"
        },
        {
          title: "WHAT WE LEARNED",
          desc: "Importance of in-store experience, need for clearer fragrance communication, strong interest in gifting.",
          bg: "#C9A0A4",
          border: "#2A2E28"
        }
      ],
      bottomStatement: "THE IDEA MOVED FROM ASSUMPTION → VALIDATION",
      pagePagination: "Page 4 / 5"
    },

    // PAGE 5: FROM IDEA TO IMPACT
    page5IdeaToImpact: {
      pageLabel: "PAGE 05",
      title: "FROM IDEA TO IMPACT",
      subheadline: "What I learned through the project",
      learnings: [
        {
          num: "01",
          name: "RESEARCH",
          detail: "I learned to look at the market, consumer and competition before developing a concept.",
          image: "/portfolio-assets/project-1/page5_research_papers.png"
        },
        {
          num: "02",
          name: "STRATEGY",
          detail: "I learned to connect a creative idea with STP, 7Ps, BCG and market planning.",
          image: "/portfolio-assets/project-1/page5_strategy_notebook.png"
        },
        {
          num: "03",
          name: "CREATIVE THINKING",
          detail: "I learned to translate a brand philosophy into a new product and visual identity.",
          image: "/portfolio-assets/project-1/page5_creative_thinking.jpeg"
        },
        {
          num: "04",
          name: "BRAND THINKING",
          detail: "I learned that a new category must still feel connected to the original brand.",
          image: "/portfolio-assets/project-1/page5_brand_bag.png"
        }
      ],
      journeyInAction: {
        title: "THE JOURNEY IN ACTION",
        steps: [
          {
            title: "STORE EXPERIENCE",
            image: "/portfolio-assets/project-1/page5_journey_store.jpg"
          },
          {
            title: "DIGITAL EXPERIENCE",
            image: "/portfolio-assets/project-1/page5_journey_digital.jpg"
          },
          {
            title: "BILLBOARDS",
            image: "/portfolio-assets/project-1/page5_journey_billboards.jpg"
          }
        ]
      },
      skillsDeveloped: [
        { name: "Research" },
        { name: "Strategic Thinking" },
        { name: "Creative Thinking" },
        { name: "Brand Thinking" },
        { name: "Visual Communication" }
      ]
    }
  },

  // 4. PROJECT 2: VISUAL MERCHANDISING (COVER STORY)
  projectVM: {
    cover: {
      title: "Bloom, Reimagined",
      subtitle: "Future Florals × Cover Story",
      tagline: "A flowering garden translated through a futuristic, iridescent lens.",
      brand: "Cover Story",
      season: "Spring / Summer",
      conceptName: "Future Florals"
    },
    page2Brief: {
      pageLabel: "02 / 05",
      title: "FROM INSIGHT TO CONCEPT",
      subtitle: "How we translated the brand into a visual direction.",
      briefTitle: "THE BRIEF",
      briefText: "To develop a Spring/Summer visual merchandising concept for Cover Story, creating a fresh, feminine and contemporary in-store experience.",
      investigationTitle: "WHAT I INVESTIGATED",
      whatIInvestigated: [
        {
          name: "BRAND IDENTITY",
          image: "/portfolio-assets/project-2/brand-identity-pink-floral.png",
          points: ["Feminine", "Contemporary", "Effortlessly Elegant"],
        },
        {
          name: "SEASONAL DIRECTION",
          image: "/portfolio-assets/project-2/seasonal-direction-floral-iridescent.png",
          points: ["Spring/Summer", "Lightness", "Freshness"],
        },
        {
          name: "VISUAL INSPIRATION",
          image: "/portfolio-assets/project-2/visual-inspiration-iridescent-texture.png",
          points: ["Florals", "Pastels", "Iridescence"],
        }
      ],
      conceptFlowTitle: "HOW WE REACHED THE CONCEPT",
      howIReachedTheConcept: [
        {
          order: 1,
          label: "COVER STORY",
          image: "/portfolio-assets/project-2/concept-cover-story.png",
          isHighlight: false
        },
        {
          order: 2,
          label: "FEMININITY +\nSOFTNESS",
          image: "/portfolio-assets/project-2/concept-femininity-softness.png",
          isHighlight: false
        },
        {
          order: 3,
          label: "FLORAL\nINSPIRATION",
          image: "/portfolio-assets/project-2/concept-floral-inspiration.png",
          isHighlight: false
        },
        {
          order: 4,
          label: "IRIDESCENCE +\nLIGHT",
          image: "/portfolio-assets/project-2/concept-iridescence-light.png",
          isHighlight: false
        },
        {
          order: 5,
          label: "FUTURE FLORALS",
          image: "/portfolio-assets/project-2/concept-future-florals.png",
          isHighlight: true
        }
      ],
      conceptSummary: "I reimagined a blooming garden through a futuristic lens, combining delicate florals with holographic and iridescent elements.",
      heroTitle: "FUTURE\nFLORALS",
      heroImage: "/portfolio-assets/project-2/future-florals-hero.png",
      supportingCollage: [
        {
          image: "/portfolio-assets/project-2/future-florals-hydrangea.png",
          alt: "Pale pink and white floral arrangement"
        },
        {
          image: "/portfolio-assets/project-2/future-florals-iridescent-detail.png",
          alt: "Close-up iridescent translucent floral petal detail"
        },
        {
          image: "/portfolio-assets/project-2/future-florals-futuristic-interior.png",
          alt: "Futuristic rounded-arch interior with soft ambient light"
        }
      ],
      designInsightTitle: "MY DESIGN INSIGHT",
      designInsight: "If florals represent nature, femininity and renewal, I wanted to explore what they could look like in a future-facing environment.",
      designInsightBg: "/portfolio-assets/project-2/design-insight-card.png"
    },
    page3Boards: {
      title: "THE VISUAL LANGUAGE",
      subtitle: "Mood Board",
      moodBoard: {
        title: "Mood Board",
        content: "A soft futuristic interpretation of nature, combining delicate florals, luminous textures and reflective surfaces. The mood balances Cover Story’s feminine identity with a contemporary, forward-looking aesthetic.",
        keywords: ["FEMININE", "DREAMY", "SOFT", "FUTURISTIC"],
        themes: [
          { name: "BEAUTY", desc: "Glossy skin and iridescent pastel makeup." },
          { name: "FLORALS", desc: "Soft pastel florals with translucent and iridescent qualities." },
          { name: "FASHION", desc: "Feminine flowing silhouettes with floral detailing." },
          { name: "TEXTURE", desc: "Holographic, reflective and translucent surfaces." },
          { name: "SPACE", desc: "Soft futuristic environments with rounded architectural forms." }
        ],
        image: "/portfolio-assets/project-2/mood-board.jpg"
      },
      colourBoard: {
        title: "Colour Board",
        subtitle: "A Soft Spectrum",
        content: "Soft blush, lavender, blue and neutral tones create a light and feminine base, while holographic accents introduce the futuristic dimension. The palette was selected to keep the display cohesive, fresh and visually refined.",
        image: "/portfolio-assets/project-2/colour-board.jpg"
      }
    },
    page4BehindTheDisplay: [
      {
        imageIndex: "Image 1",
        title: "Crafting the Details",
        desc: "Holographic sheets were shaped with the wire to create the floral forms.",
        image: "/portfolio-assets/project-2/page4-step-1-crafting-details.jpg"
      },
      {
        imageIndex: "Image 2",
        title: "The concept takes form",
        desc: "The first floral element was created, transforming the initial concept into a structure.",
        image: "/portfolio-assets/project-2/page4-step-2-concept-takes-form.jpg"
      },
      {
        imageIndex: "Image 3",
        title: "Refining the Form",
        desc: "Each flower was carefully folded and adjusted to enhance the shape and overall visual appeal.",
        image: "/portfolio-assets/project-2/page4-step-3-refining-form.jpg"
      },
      {
        imageIndex: "Image 4",
        title: "Building the Collection",
        desc: "Multiple floral elements were developed and brought together.",
        image: "/portfolio-assets/project-2/page4-step-4-building-collection.jpg"
      },
      {
        imageIndex: "Image 5",
        title: "Creating the environment",
        desc: "The backdrop and drapes were installed to add softness, depth and movement to the visual experience.",
        image: "/portfolio-assets/project-2/page4-step-5-creating-environment.jpg"
      }
    ],
    page5SkillsAndPrinciples: {
      pageLabel: "05 / 05",
      headerTag: "VISUAL MERCHANDISING PROJECT // FUTURE FLORALS",
      title: "FROM CONCEPT TO CAPABILITY",
      subheadline: "What I applied. What I learned.",
      quoteBanner: {
        quote: "Creativity brings the idea to life, but it's the details that make it real.",
        caption: "Inside the Future Florals installation",
        accent: "FUTURE FLORALS",
        image: "/portfolio-assets/project-2/page5-final-installation.jpg"
      },
      processInAction: {
        title: "THE PROCESS BEHIND THE BEAUTY",
        intro: "From ideation to installation — every detail came together to bring the concept of Future Florals to life.",
        steps: [
          { title: "FINAL INSTALLATION" },
          { title: "FLOWER DETAIL" },
          { title: "MATERIAL DETAIL" }
        ]
      },
      skillsApplied: [
        {
          title: "CONCEPT DEVELOPMENT",
          desc: "Translating a seasonal brief into a clear visual concept.",
          icon: "Lightbulb"
        },
        {
          title: "VISUAL MERCHANDISING",
          desc: "Applying balance, proportion, scale, focal point, rhythm and unity.",
          icon: "Eye"
        },
        {
          title: "MATERIAL EXPLORATION",
          desc: "Working with holographic sheets, wire, organza and lighting to create visual effects.",
          icon: "Layers"
        },
        {
          title: "SPATIAL PLANNING",
          desc: "Planning placement, height, spacing and movement within the display.",
          icon: "Box"
        },
        {
          title: "VISUAL STORYTELLING",
          desc: "Creating a consistent narrative from nature to futuristic retail experience.",
          icon: "Flower2"
        },
        {
          title: "EXECUTION & PROBLEM SOLVING",
          desc: "Turning a visual concept into a physical installation through hands-on making and adjustments.",
          icon: "Settings"
        }
      ],
      vmPrinciplesApplied: [
        { number: "1", name: "BALANCE", desc: "Symmetrical placement created visual stability.", icon: "Scale" },
        { number: "2", name: "SCALE", desc: "Oversized florals created height and impact.", icon: "Maximize2" },
        { number: "3", name: "FOCAL POINT", desc: "The mannequin remained the primary visual focus.", icon: "Target" },
        { number: "4", name: "RHYTHM", desc: "Repeated floral forms and vertical drapes created visual flow.", icon: "Waves" },
        { number: "5", name: "COLOUR HARMONY", desc: "Pastels + iridescent finishes maintained a cohesive palette.", icon: "Palette" },
        { number: "6", name: "LIGHTING", desc: "Light enhanced reflections and added depth.", icon: "Sun" }
      ],
      whatILearned: "This project taught me how to translate an abstract visual idea into a physical retail experience. I learned that effective visual merchandising is not only about aesthetics, but also about proportion, placement, material selection, lighting and maintaining product focus. Working through the making and installation process strengthened my understanding of how creative decisions translate into a real retail environment."
    }
  },

  // 5. PROJECT 3: START UP (ATHLEISURE HYBRID)
  projectThree: {
    cover: {
      pageLabel: "PROJECT 3 (START UP) // PAGE 1",
      title: "ATHERA",
      subtitle: "ATHLEISURE WEAR BRAND",
      tagline: "MODEST • VERSATILE • EVERYDAY",
      conceptSubtitle: "Athleisure Hybrid: Structured × Relaxed",
      bottomStatement: "Designed to move beyond the gym.",

      gallery: [
        { label: "GYM" },
        { label: "CAFÉ" },
        { label: "AIRPORT" },
        { label: "EVERYDAY" }
      ]
    },
    page2SurveyInsights: {
      subtitle:
        "I saw an opportunity to create athleisure that could move beyond the gym, combining comfort, style and versatility for everyday life.",
      quadrants: [
        {
          number: "01",
          title: "THE OBSERVATION",
          text: "I saw an opportunity to create athleisure that could move beyond the gym, combining comfort, style and versatility for everyday life.",
          images: [
            {
              label: "FITTED SILHOUETTES"
            },
            {
              label: "LIMITED VERSATILITY",
            },
            {
              label: "COMFORT VS STYLE",
            },
            {
              label: "NEED FOR COVERAGE",
            }
          ],
          scriptCallout: "One outfit.\nMultiple moments."
        },
        {
          number: "02",
          title: "THE JOURNEY",
          lead: "OBSERVATION → INVESTIGATION → INSIGHTS → OPPORTUNITY",
          pillars: [
            {
              name: "OBSERVATION",
              points: [
                "Too restrictive fitted silhouettes",
                "Limited versatility mostly gym-focused",
                "Comfort vs. style — hard to find both"
              ]
            },
            {
              name: "INVESTIGATION",
              points: [
                "Market trends & industry growth",
                "Consumer preferences, pain points & buying behaviour",
                "Competitor offerings & brand positioning"
              ]
            },
            {
              name: "INSIGHTS",
              points: ["Fabric & functionality"]
            }
          ],
          frameworkBadges: [
            "OBSERVATION",
            "INVESTIGATION",
            "INSIGHTS",
            "OPPORTUNITY",
            "ATHIRA"
          ]
        },
        {
          number: "03",
          title: "WHAT I INVESTIGATED",
          flow: [
            {
              step: "OBSERVATION",
              desc: "Existing athleisure can be too restrictive, too gym-focused, and difficult to balance between comfort and style.",
              isHighlight: false
            },
            {
              step: "INVESTIGATION",
              desc: "Market trends & industry growth; consumer preferences, pain points & buying behaviour; competitor offerings & brand positioning; fabric & functionality.",
              isHighlight: false
            },
            {
              step: "INSIGHTS",
              desc: "Understanding changing preferences and identifying real user problems.",
              isHighlight: false
            },
            {
              step: "OPPORTUNITY",
              desc: "Finding the opportunity gap and turning insights into a product with potential for growth and impact.",
              isHighlight: true
            }
          ],
        },
        {
          number: "04",
          title: "MY APPROACH",
          lead: "Turning observations and research into a clear product opportunity.",
          skills: [
            {
              title: "Trend Research",
              subtitle: "understanding changing preferences",
              icon: "TrendingUp"
            },
            {
              title: "Consumer Insight",
              subtitle: "identifying real user problems",
              icon: "Users"
            },
            {
              title: "Market Analysis",
              subtitle: "finding the opportunity gap",
              icon: "BarChart2"
            },
            {
              title: "Product Thinking",
              subtitle: "turning insights into a product",
              icon: "Lightbulb"
            },
            {
              title: "Business Thinking",
              subtitle: "planning for growth & impact",
              icon: "Target"
            }
          ],
        }
      ] as P3Page2Quadrant[]
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
        name: "Business Skills",
        tag: "BUSINESS & STRATEGY",
        color: "#C9A0A4",
        skills: [
          "Market Research",
          "Consumer Behaviour",
          "Brand Management",
          "Fashion Marketing",
          "Retail & Merchandising",
          "Trend Analysis",
          "Product Development",
          "Visual Merchandising",
          "Content Strategy",
          "Data & Market Analysis"
        ]
      },
      {
        name: "Digital Skills",
        tag: "TOOLS & PLATFORMS",
        color: "#F6E7D3",
        skills: [
          "MS Office (Word, Excel, PowerPoint)",
          "Canva",
          "Shopify",
          "ERP",
          "AI Tools (ChatGPT, Claude)",
          "Social Media Content Creation"
        ]
      }
    ]
  },

  // 7. CONTACT & INQUIRIES
  contact: {
    email: "srishtijain2012@gmail.com",
    phone: "9350894666",
    location: "New Delhi, India",
    socials: [
      { name: "LinkedIn", handle: "Srishti Jain", url: "https://www.linkedin.com/in/srishti-jain-263074228" }
    ]
  },

  // 8. UI TEXT — every hardcoded interface string, editable from Sanity
  ui: {
    nav: {
      items: [] as { to: string; label: string }[],
      footerCopyrightYear: "2026"
    },

    home: {
      hero: {
        headlineFirst: "About",
        headlineSecond: "me",
        paragraphs: [
          "I'm a Fashion & Lifestyle Business Management student with a background in Business Administration, passionate about the space where creativity meets strategy. My academic journey has helped me build a strong understanding of business, while my interest in fashion has shaped the way I look at brands, trends, and consumer experiences. I enjoy exploring branding, marketing, visual merchandising, trend forecasting, and product development, bringing a fresh and visual perspective to every idea."
        ],
        signature: "Creative at heart. Business by mindset. Always curious.",
        specializations: [] as string[],
        badge: "Creative Producer",
        image: "/portfolio-assets/srishti-hero-portrait.jpg",
        imageAlt: "Srishti Jain — curated creative exploration"
      },
      projects: {
        titleFirst: "Selected",
        titleSecond: "Projects",
        projectPrefix: "PROJECT",
        labels: {
          brief: "Brief",
          research: "Research",
          contribution: "Contribution",
          learning: "Learning"
        },
        readComplete: "Read Complete Project",
        cardTitles: [
          { id: "proj-1", title: "A new dimension of life wear : UNIQLO Fragrances" },
          { id: "proj-2", title: "Future Florals × Cover Story" },
          { id: "proj-3", title: "Athera — Athleisure Wear Brand" }
        ],
        cardCategories: [
          { id: "proj-3", title: "Brand Concept & Development" }
        ]
      },
      internship: {
        eyebrow: "Turning Learning Into Experience",
        titleWord: "Internship"
      }
    },

    about: {
      scopeHeader: "PORTFOLIO SCOPE & EXPERIENCE",
      scopeItems: [
        {
          title: "01. AADIYA JEWELS (INTERNSHIP)",
          desc: "Social Media Content Production (videos & reels) + E-Commerce Shopify management."
        },
        {
          title: "02. UNIQLO FRAGRANCE (PROJECT 1)",
          desc: "Marketing Management, STP, 7Ps, and 5 Core Design Decisions."
        },
        {
          title: "03. COVER STORY (PROJECT 2)",
          desc: "Spring/Summer VM Concept, Future Florals, Holographic sheets & 6 VM Principles."
        },
        {
          title: "04. FASHION START-UP (PROJECT 3)",
          desc: "Survey research, Lycra & Terry cotton fabric testing, and physical MVP iteration."
        }
      ]
    },

    site: {
      hiddenSectionText: "This section is hidden in Site Settings."
    },

    contact: {
      availabilityNote: "Available for on-site & remote projects",
      sectionTitleFirst: "Contact &",
      sectionTitleSecond: "Inquiries"
    },

    skills: {
      section: {
        eyebrow: "SKILLS",
        titleFirst: "Skills",
        titleSecond: "",
        categoryDescriptions: [
          "Strategy, analysis, and category thinking applied across marketing, retail, and product.",
          "The tools and platforms behind turning concepts into published, engaging content."
        ]
      }
    },

    internshipExperience: {
      badge: "FINE JEWELLERY BRAND INTERNSHIP",
      sectionSocialTitle: "Social Media",
      socialIntroTitle: "Concept to Live Content Production",
      introPrefix: "Short introduction:",
      videosBadge: "VIDEOS & REEL PRODUCTION INCLUDED",
      videosHeader: "Video Content Production & Reels",
      reel1Title: "Jewellery Reel 01 — Aesthetic & Product Styling",
      reel1Desc: "Shot on set, edited, color graded and published for Aadiya Jewels social handle.",
      reel2Title: "Studio Campaign & Jewellery Showcase",
      reel2Desc: "Highlighting brilliance, luxury finishes, and craftsmanship through video capture.",
      photoCaption1: "Macro Jewellery Styling",
      photoCaption2: "Product Photography Framing",
      photoAlt1: "Product still photography shot on set for Aadiya Jewels",
      photoAlt2: "Macro jewellery styling close-up during content shoot",
      workedOnLabel: "What I Worked On",
      skillsLabel: "Skills Applied",
      sectionEcomTitle: "E-Commerce & My Learning",
      ecomIntroTitle: "From Product to Digital Shelf",
      bannersHeader: "Website Banners & Storefront Visuals Designed for Aadiya Jewels",
      banner1Title: "E-Commerce Desktop Hero Banner",
      banner1Desc: "Designed for seasonal homepage campaign",

      banner2Title: "Jewellery Collection Category Banner",

      banner3Title: "Shopify Product Listing & Catalogue Management",

      learningsLabel: "WHAT I GAINED",
      learningsTitle: "Learnings of Internship",
      learnings: [
        { title: "Creative Content Production", desc: "Created reels, posts, stories and carousels through hands-on content production." },
        { title: "E-commerce Management", desc: "Managed Shopify, product uploads, catalogues, descriptions and tags." },
        { title: "Organisation & Execution", desc: "Managed content calendars, Excel sheets, deadlines and multiple tasks." },
        { title: "Brand Communication", desc: "Maintained consistent brand communication across social media and e-commerce." }
      ],
      synthesisLabel: "SYNTHESIS",
      synthesisTitle: "LEARNING OUTCOME",
      nextLabel: "NEXT PROJECT",
      nextTitle: "Project 1 — Marketing (UNIQLO)",
      nextCta: "View UNIQLO Fragrance Case Study"
    },

    internshipLearnings: {
      breadcrumbHome: "HOME",
      breadcrumbInternship: "INTERNSHIP",
      breadcrumbCurrent: "LEARNINGS",
      breadcrumbTag: "AADIYA JEWELS // 4 LEARNING OUTCOMES",
      badge: "INTERNSHIP SYNTHESIS",
      title: "Internship Learnings",
      intro:
        "Detailed breakdown of my 4 core learning outcomes from the marketing and e-commerce residency at Aadiya Jewels, bridging creative content with practical business deadlines.",
      backLabel: "Back to Internship Experience",
      outcomePrefix: "OUTCOME",
      brandTag: "AADIYA JEWELS",
      verifiedLabel: "Verified in production & store management",
      backCta: "Return to Internship Experience",
      nextCta: "Proceed to Project 1 (Marketing Management)"
    },

    projectMarketing: {
      breadcrumbProjects: "HOME",
      breadcrumbCurrent: "PROJECT 1 — MARKETING MANAGEMENT",
      breadcrumbTag: "UNIQLO FRAGRANCE EXTENSION",
      coverBadge: "PROJECT 1 // PAGE 01",
      metaBrandLabel: "BRAND / CLIENT:",
      metaDisciplineLabel: "DISCIPLINE:",
      metaTimelineLabel: "TIMELINE:",

      contextHeader: "CONTEXT & STRATEGIC OPPORTUNITY",

      briefHeader: "THE STRATEGIC BRIEF",
      alignedNote: "Aligned with UNIQLO LifeWear core philosophy & global store architecture",
      p2SlideTag: "CATEGORY EXPANSION",
      p2Flow: {
        brandChip: "UNIQLO",
        brandName: "LIFEWEAR",
        brandLogo: "/portfolio-assets/lifewear-logo.jpeg",
        brandDesc: "Simple + Functional + Japanese Minimalism",
        question: "What if Life Wear could be experienced through another sense?",
        fragranceName: "FRAGRANCE",
        fragranceDesc: "Nature-inspired Japanese scents"
      },
      p3PageTag: "PAGE 03 — CORE RATIONALE & PACKAGING",
      p3Title: "DESIGN DECISIONS & 4 VARIANTS",
      p3Intro: "Five strategic design pillars grounding the fragrance line in UNIQLO's brand DNA.",

      p4TestHeader: "THE TEST",
      p4ProcessHeader: "THE PROCESS",
      p4InsightsHeader: "KEY INSIGHTS",

      p4SynthesisLabel: "STRATEGIC SYNTHESIS",
      p5SkillsHeader: "SKILLS I DEVELOPED",

      footerAll: "Back to Home",
      footerNext: "Next Project: Future Florals × Cover Story"
    },

    projectVM: {
      breadcrumbProjects: "HOME",
      breadcrumbCurrent: "PROJECT 2 — VISUAL MERCHANDISING",
      breadcrumbTag: "COVER STORY // FUTURE FLORALS",
      metaBrandLabel: "CLIENT / BRAND:",
      metaSeasonLabel: "SEASON:",
      metaConceptLabel: "CONCEPT:",

      briefSectionHeader: "WHAT I INVESTIGATED",
      visualDirectionHeader: "VISUAL DIRECTION",
      designInsightLabel: "MY DESIGN INSIGHT",

      moodThemesHeader: "MOOD IN THEMES",

      behindTitle: "Behind the Display",

      behindIntro: "5-step progression from raw holographic sheets to spatial environmental installation.",

      p5ProcessTag: "IDEATION → INSTALLATION",
      p5SkillsHeader: "SKILLS I APPLIED",
      p5PrinciplesHeader: "VM PRINCIPLES APPLIED",
      p5LearnedTitle: "WHAT I LEARNED",
      footerNext: "Next Project: Start Up →"
    },

    projectThree: {
      breadcrumbProjects: "HOME",
      breadcrumbCurrent: "PROJECT 3 — START UP",
      breadcrumbTag: "ATHLEISURE HYBRID // STRUCTURED × RELAXED",
      metaTypeLabel: "PROJECT TYPE:",
      metaConceptLabel: "CONCEPT:",
      metaScopeLabel: "SCOPE:",
      metaTypeValue: "Fashion Start-Up & Athleisure",
      metaScopeValue: "Research to Fabrication",

      galleryTitle: "MADE FOR MULTIPLE MOMENTS",
      page2Headline1: "FROM AN OBSERVATION",
      page2Headline2: "TO AN OPPORTUNITY",
      opportunityGap: "OPPORTUNITY GAP",
      p3PageLabel: "PAGE 3",
      p3DesignParagraph:
        "Structured crop top tailored with compressive chest support paired with airy, comfortable relaxed joggers for effortless movement.",

      prototypeParagraph:
        "The physical MVP garment produced and evaluated through user wear-testing sessions to gauge breathability and silhouette comfort.",

      p4PageLabel: "PAGE 4",
      p4HeardTitle: "WHAT I HEARD",
      p4TaughtTitle: "WHAT THIS TAUGHT ME",
      p4LoopHeader: "FEEDBACK → ITERATION → IMPACT",

      p4FeedbackLabel: "FEEDBACK",
      p4IterationLabel: "ITERATION",
      p4ImpactLabel: "IMPACT",
      footerNext: "Back to Home →"
    },

    cardPlaceholder: {
      title: "Placeholder Image",
      subtitle: "Project cover image goes here"
    },

    waitlist: {
      eyebrow: "Studio Inquiries • Class of '26",
      title: "Request Full Portfolio & Studio Visit",
      intro:
        "Inquire about visual merchandising commissions, freelance retail strategy, exhibition catalogs, or schedule an in-person studio visit in New York or London.",
      emailLabel: "Your Work Email",
      emailPlaceholder: "curator.studio@gallery.com",
      roleLabel: "Nature of Correspondence",
      roles: [
        "Exhibition / Curator",
        "Retail Brand VM",
        "Editorial Styling",
        "Agency Role",
        "Studio Visit",
        "Thesis Catalog PDF"
      ],
      submitIdle: "Submit Studio Inquiry",
      submitBusy: "Inscribing Studio Log...",
      footnote: "✦ Responses typically dispatched within 24–48 hours.",
      ticketBrand: "Studio Pass",
      ticketReceived: "Inquiry Received",
      labelContact: "CONTACT:",
      labelInquiryType: "INQUIRY TYPE:",
      labelStatus: "STATUS:",
      statusQueued: "Queued for Response",
      dossierPass: "PORTFOLIO DOSSIER PASS",
      cityTag: "NEW YORK / LONDON",
      loggedTitle: "Inquiry Logged",
      thanks:
        "Thank you for reaching out. A complete high-resolution PDF portfolio dossier and thesis catalog will be dispatched to your inbox shortly.",
      copyLabel: "Copy Reference #",
      copiedLabel: "Copied to Clipboard",
      closeLabel: "Return to Portfolio"
    }
  }
};
