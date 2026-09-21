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
  natureTitle?: string;
  naturePillars?: string[];
  natureImage?: string;
  natureCaption?: string;
  takeaway?: string;
  skills?: { title: string; subtitle: string; icon: string }[];
  quote?: string;
  tag?: string;
  bottlesImage?: string;
  bottlesCaption?: string;
}

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
  brief?: string;
  research?: string;
  contribution?: string;
  keyLearnings?: string;
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
      title: "A new dimension of life wear : UNIQLO Fragrance",
      category: "Category Extension & Marketing Strategy",
      discipline: "Brand Strategy, STP, 7Ps, BCG, Packaging & Product Design",
      year: "2025",
      tagline: "Translating brand philosophy into a new product category & strategic market plan.",
      accentColor: "#C9FF8C",
      rotation: "rotate-1",
      image: "",
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
      year: "2025",
      tagline: "Future Florals: A blooming garden re-imagined through a futuristic, iridescent lens.",
      accentColor: "#F4B6D4",
      rotation: "-rotate-1",
      image: "",
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
      year: "2025–2026",
      tagline: "Structured × Relaxed: Athleisure engineered for transition between gym and everyday life.",
      accentColor: "#AFC8FF",
      rotation: "rotate-1",
      image: "",
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
      timeline: "Strategic Research & Capstone",
      accentColor: "#C9FF8C"
    },
    page1And2: {
      context: "Strategic evaluation of UNIQLO’s brand equity, LifeWear philosophy, and retail footprint to identify a high-margin, scalable category extension: everyday lifestyle fragrances.",
      brief: "To develop a commercially viable, brand-aligned marketing plan for introducing a fragrance line under UNIQLO, ensuring brand resonance while capturing accessible luxury market share."
    },

    // PAGE 2: FROM BRIEF TO CONCEPT
    page2BriefToConcept: {
      pageLabel: "PAGE 02",
      headerTag: "UNIQLO FRAGRANCES // MARKETING MANAGEMENT PROJECT",
      title: "FROM BRIEF TO CONCEPT",
      subtitle: "How I turned a category-expansion brief into a fragrance concept.",
      quadrant01: {
        number: "01",
        title: "PROJECT BRIEF",
        text: "I was challenged to expand an existing fashion brand into a new product category. I chose UNIQLO and explored how its Life Wear philosophy could be extended beyond clothing.",
        image: "/portfolio-assets/01_UNIQLO_main.jpg",
        scriptCallout: "From Life Wear to Feel Wear"
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
        frameworkSentence: "I used SWOT, Porter's Five Forces, STP, 7Ps, Ansoff and BCG to structure my analysis.",
        frameworkBadges: ["SWOT", "PORTER'S FIVE FORCES", "STP", "7Ps", "ANSOFF", "BCG"],
        notepadImage: "/portfolio-assets/02_market_trends.jpg"
      },
      quadrant03: {
        number: "03",
        title: "HOW I CAME UP WITH THE CONCEPT",
        flow: [
          { step: "UNIQLO'S LIFE WEAR", desc: "Simple + Functional + Japanese Minimalism", isLogo: true },
          { step: "What if Life Wear could be experienced through another sense?", desc: "", isQuestion: true },
          { step: "FRAGRANCE", desc: "Nature-inspired Japanese scents", isHighlight: true }
        ],
        takeaway: "I saw an opportunity to extend UNIQLO's idea of everyday living from something we wear to something we experience.",
        natureTitle: "INSPIRED BY JAPANESE NATURE",
        naturePillars: ["Purity", "Calm", "Balance", "Harmony"],
        natureImage: "/portfolio-assets/project-1/page5_creative_fuji.png",
        variants: [
          { name: "HANA", label: "FLOWER", color: "#FDE2E4", dotColor: "#F4B6D4" },
          { name: "MIZU", label: "WATER", color: "#E0F2FE", dotColor: "#BAE6FD" },
          { name: "KAZE", label: "WIND", color: "#DCFCE7", dotColor: "#BBF7D0" },
          { name: "SORA", label: "SKY", color: "#E0E7FF", dotColor: "#C7D2FE" }
        ]
      },
      quadrant04: {
        number: "04",
        title: "SKILLS I APPLIED",
        lead: "I combined my marketing knowledge with creative thinking to bring the concept to life.",
        skills: [
          { title: "RESEARCH", subtitle: "Market & competitor investigation", icon: "Search" },
          { title: "STRATEGIC THINKING", subtitle: "STP • 7Ps • BCG • Ansoff", icon: "Target" },
          { title: "CREATIVE THINKING", subtitle: "Concept & fragrance development", icon: "Lightbulb" },
          { title: "BRAND THINKING", subtitle: "Extending UNIQLO's identity", icon: "Tag" },
          { title: "VISUAL COMMUNICATION", subtitle: "Packaging & presentation", icon: "Image" }
        ],
        quote: "More than just a fragrance, it's a feeling.",
        tag: "UNIQLO FRAGRANCES",
        bottlesImage: "/portfolio-assets/project-1/four_bottles_clean.jpg"
      }
    },

    // PAGE 3: DESIGN DECISIONS & 4 VARIANTS
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

    // PAGE 4: FROM CONCEPT TO CONSUMER
    page4ConceptToConsumer: {
      pageLabel: "PAGE 04",
      headerTag: "UNIQLO FRAGRANCES // CONSUMER VALIDATION",
      title: "FROM CONCEPT TO CONSUMER",
      subtitle: "WE DIDN'T JUST CREATE IT, WE TESTED IT.",
      testPhotos: [
        {
          src: "/portfolio-assets/project-1/page4_product_display.png",
          caption: "Product Display",
          desc: "Acrylic tester riser with fragrance bottles & branding"
        },
        {
          src: "/portfolio-assets/project-1/page4_consumer_interaction.png",
          caption: "Consumer Interaction",
          desc: "Consumers exploring tester strips and sampling aromas"
        },
        {
          src: "/portfolio-assets/project-1/page4_fragrance_samples.png",
          caption: "Fragrance Samples",
          desc: "Structural carton prototypes and fragrance box samples"
        },
        {
          src: "/portfolio-assets/project-1/page4_feedback.png",
          caption: "Feedback",
          desc: "Gathering direct quantitative & qualitative feedback"
        }
      ],
      processSteps: [
        { label: "SHOW", icon: "Eye" },
        { label: "LET THEM EXPERIENCE", icon: "Users" },
        { label: "ASK", icon: "MessageSquare" },
        { label: "OBSERVE", icon: "BarChart2" },
        { label: "LEARN", icon: "Lightbulb" }
      ],
      processDescription: "We presented the fragrance concepts and samples to consumers to understand their reactions, preferences and perception of the proposed category.",
      keyInsights: [
        {
          title: "WHAT ATTRACTED THEM",
          desc: "Visual identity, packaging, scent experience.",
          bg: "#FFF5ED",
          border: "#FFEDD5"
        },
        {
          title: "WHAT THEY PREFERRED",
          desc: "Clean, fresh and subtle scents (especially Mizu & Kaze).",
          bg: "#F0FDF4",
          border: "#DCFCE7"
        },
        {
          title: "WHAT THEY ASSOCIATED WITH UNIQLO",
          desc: "Simple, minimal, trustworthy, Japanese, everyday.",
          bg: "#F0F9FF",
          border: "#E0F2FE"
        },
        {
          title: "WHAT WE LEARNED",
          desc: "Importance of in-store experience, need for clearer fragrance communication, strong interest in gifting.",
          bg: "#FDF2F8",
          border: "#FCE7F3"
        }
      ],
      bottomStatement: "THE IDEA MOVED FROM ASSUMPTION → VALIDATION",
      pagePagination: "Page 4 / 5"
    },

    // PAGE 5: FROM IDEA TO IMPACT
    page5IdeaToImpact: {
      pageLabel: "PAGE 05",
      headerTag: "UNIQLO FRAGRANCES // MARKETING MANAGEMENT PROJECT",
      title: "FROM IDEA TO IMPACT",
      subheadline: "What I learned through the project",
      learnings: [
        {
          num: "01",
          name: "RESEARCH",
          detail: "I learned to look at the market, consumer and competition before developing a concept.",
          image: "/portfolio-assets/project-1/page5_research_papers.png",
          icon: "Search"
        },
        {
          num: "02",
          name: "STRATEGY",
          detail: "I learned to connect a creative idea with STP, 7Ps, BCG and market planning.",
          image: "/portfolio-assets/project-1/page5_strategy_notebook.png",
          icon: "Target"
        },
        {
          num: "03",
          name: "CREATIVE THINKING",
          detail: "I learned to translate a brand philosophy into a new product and visual identity.",
          image: "/portfolio-assets/project-1/page5_creative_fuji.png",
          icon: "Lightbulb"
        },
        {
          num: "04",
          name: "BRAND THINKING",
          detail: "I learned that a new category must still feel connected to the original brand.",
          image: "/portfolio-assets/project-1/page5_brand_bag.png",
          icon: "Award"
        }
      ],
      quoteBanner: {
        quote: "A good concept is not just creative — it needs a reason, a strategy and a story.",
        callouts: ["Simple.", "Functional.", "Meaningful."],
        bottleImage: "/portfolio-assets/project-1/page5_quote_bottle_clean.jpg"
      },
      journeyInAction: {
        title: "THE JOURNEY IN ACTION",
        steps: [
          {
            title: "FINAL PRODUCT",
            image: "/portfolio-assets/project-1/four_bottles_clean.jpg"
          },
          {
            title: "STORE EXPERIENCE",
            image: "/portfolio-assets/project-1/page5_journey_store.png"
          },
          {
            title: "DIGITAL EXPERIENCE",
            image: "/portfolio-assets/project-1/page5_journey_digital.png"
          },
          {
            title: "MARKET ROLLOUT",
            image: "/portfolio-assets/project-1/page5_journey_rollout_clean.jpg"
          }
        ]
      },
      skillsDeveloped: [
        { name: "Research", icon: "Search" },
        { name: "Strategic Thinking", icon: "Target" },
        { name: "Creative Thinking", icon: "Lightbulb" },
        { name: "Brand Thinking", icon: "Award" },
        { name: "Visual Communication", icon: "Image" }
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
      conceptName: "Future Florals",
      accentColor: "#F4B6D4"
    },
    page2Brief: {
      pageLabel: "02 / 05",
      headerTag: "HOW I REACHED THE CONCEPT",
      title: "FROM INSIGHT TO CONCEPT",
      subtitle: "How I translated the brand into a visual direction.",
      briefTitle: "THE BRIEF",
      briefText: "To develop a Spring/Summer visual merchandising concept for Cover Story, creating a fresh, feminine and contemporary in-store experience.",
      whatIInvestigated: [
        {
          pillar: "1. BRAND IDENTITY",
          points: ["Feminine", "Contemporary", "Effortlessly Elegant"],
          image: "/portfolio-assets/BRAND BOOK  - 16.png"
        },
        {
          pillar: "2. SEASONAL DIRECTION",
          points: ["Spring/Summer", "Lightness", "Freshness"],
          image: "/portfolio-assets/BRAND BOOK  - 18.png"
        },
        {
          pillar: "3. VISUAL INSPIRATION",
          points: ["Florals", "Pastels", "Iridescence"],
          image: "/portfolio-assets/6fa49fa5-d790-4c76-9f00-69ca01bfcdc2.jpg"
        }
      ],
      howIReachedTheConcept: [
        { step: "COVER STORY", image: "/portfolio-assets/97e20f9d-778d-44a3-bc5f-d32b6c39b7a3.jpg", isHighlight: false },
        { step: "FEMININITY + SOFTNESS", image: "/portfolio-assets/1e36b3dd-85f2-438b-b90a-e7143dbd03cd.jpg", isHighlight: false },
        { step: "FLORAL INSPIRATION", image: "/portfolio-assets/7eee7676-2ce8-4667-9ef7-abf624ba1833.jpg", isHighlight: false },
        { step: "IRIDESCENCE + LIGHT", image: "/portfolio-assets/6fa49fa5-d790-4c76-9f00-69ca01bfcdc2.jpg", isHighlight: false },
        { step: "FUTURE FLORALS", image: "/portfolio-assets/DD05B299-B533-4126-B54A-3B48CD3AA413.jpg", isHighlight: true }
      ],
      conceptFlowTitle: "HOW I REACHED THE CONCEPT",
      conceptSummary: "I reimagined a blooming garden through a futuristic lens, combining delicate florals with holographic and iridescent elements.",
      designInsight: "If florals represent nature, femininity and renewal, I wanted to explore what they could look like in a future-facing environment.",
      heroImage: {
        src: "/portfolio-assets/f72aff62-4ccf-4668-9ba7-1a88dc9a9eab.jpg",
        caption: "The bloom, reimagined as a luminous in-store environment"
      }
    },
    page3Boards: {
      pageLabel: "03 / 05",
      headerTag: "COLOUR PALETTE",
      title: "THE VISUAL LANGUAGE",
      subtitle: "Mood Board",
      moodBoard: {
        title: "Mood Board",
        content: "Soft florals, futuristic touches, endless possibilities.",
        keywords: ["SOFT FLORALS", "FUTURISTIC TOUCHES", "ENDLESS POSSIBILITIES"],
        themes: [
          { name: "BEAUTY", desc: "Glossy skin and iridescent pastel makeup." },
          { name: "FLORALS", desc: "Soft pastel florals with translucent and iridescent qualities." },
          { name: "FASHION", desc: "Feminine flowing silhouettes with floral detailing." },
          { name: "TEXTURE", desc: "Holographic, reflective and translucent surfaces." },
          { name: "SPACE", desc: "Soft futuristic environments with rounded architectural forms." }
        ]
      },
      colourBoard: {
        title: "Colour Palette",
        content: "A delicate balance of soft pastels and iridescent tones, inspired by nature, reimagined for a futuristic tomorrow.",
        moodTag: "MOOD IN COLOURS",
        palette: [
          { name: "Blush Pink", hex: "#E8C5C5", desc: "Warmth, femininity and a soft, romantic feel." },
          { name: "Lavender", hex: "#C9B9D6", desc: "Adds a dreamy, ethereal quality to the palette." },
          { name: "Soft Blue", hex: "#B5C9DA", desc: "Represents calmness, modernity and freshness." },
          { name: "Sage Green", hex: "#B8BCB0", desc: "Balances the palette and connects with nature." },
          { name: "Iridescent", hex: "#B8C0D1", desc: "Creates a futuristic touch with light-reflective finishes." },
          { name: "Neutral", hex: "#DCD4C7", desc: "Grounds the overall look and keeps it elegant." }
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
      pageLabel: "05 / 05",
      headerTag: "VISUAL MERCHANDISING PROJECT // FUTURE FLORALS",
      title: "FROM CONCEPT TO CAPABILITY",
      subheadline: "What I applied. What I learned.",
      quoteBanner: {
        quote: "Creativity brings the idea to life, but it's the details that make it real.",
        image: "/portfolio-assets/60e2e5dc-94d5-4c36-a798-a176fa769a23.jpg",
        caption: "Inside the Future Florals installation",
        accent: "FUTURE FLORALS"
      },
      processInAction: {
        title: "THE PROCESS BEHIND THE BEAUTY",
        intro: "From ideation to installation — every detail came together to bring the concept of Future Florals to life.",
        steps: [
          { title: "FINAL INSTALLATION", image: "/portfolio-assets/f72aff62-4ccf-4668-9ba7-1a88dc9a9eab.jpg" },
          { title: "FLOWER DETAIL", image: "/portfolio-assets/97e20f9d-778d-44a3-bc5f-d32b6c39b7a3.jpg" },
          { title: "MATERIAL DETAIL", image: "/portfolio-assets/1e36b3dd-85f2-438b-b90a-e7143dbd03cd.jpg" }
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
      timeline: "Concept to Physical Prototype",
      accentColor: "#AFC8FF",
      bottomStatement: "Designed to move beyond the gym.",
      heroImage: "/portfolio-assets/Screenshot 2026-09-18 at 7.51.59 PM.png",
      heroCaption: "Athera athleisure — built for gym, café, airport and everyday",
      gallery: [
        { label: "GYM", image: "/portfolio-assets/IMG_2187.jpg" },
        { label: "CAFÉ", image: "/portfolio-assets/IMG_4453.jpg" },
        { label: "AIRPORT", image: "/portfolio-assets/IMG_1560.PNG" },
        { label: "EVERYDAY", image: "/portfolio-assets/IMG_1559.PNG" }
      ]
    },
    page2SurveyInsights: {
      pageLabel: "02 / 04",
      headerTag: "ATHIRA",
      title: "FROM AN OBSERVATION TO AN OPPORTUNITY",
      subtitle:
        "I saw an opportunity to create athleisure that could move beyond the gym, combining comfort, style and versatility for everyday life.",
      scriptCallout: "One outfit.\nMultiple moments.",
      quadrants: [
        {
          number: "01",
          title: "THE OBSERVATION",
          text: "I saw an opportunity to create athleisure that could move beyond the gym, combining comfort, style and versatility for everyday life.",
          images: [
            {
              label: "FITTED SILHOUETTES",
              image: "/portfolio-assets/IMG_2187.jpg"
            },
            {
              label: "LIMITED VERSATILITY",
              image: "/portfolio-assets/IMG_4453.jpg"
            },
            {
              label: "COMFORT VS STYLE",
              image: "/portfolio-assets/IMG_1559.PNG"
            },
            {
              label: "NEED FOR COVERAGE",
              image: "/portfolio-assets/IMG_1560.PNG"
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
          ],
          notepadImage: "/portfolio-assets/IMG_1559.PNG",
          notepadCaption: "Comfort & style — observation notepad",
          frameworkSentence: "One outfit.\nMultiple moments."
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
          natureTitle: "MY APPROACH",
          naturePillars: [
            "Trend Research",
            "Consumer Insight",
            "Market Analysis",
            "Product Thinking"
          ],
          natureImage: "/portfolio-assets/IMG_4453.jpg",
          natureCaption: "Lifestyle — walking the daily moments",
          takeaway: "One outfit.\nMultiple moments."
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
          quote: "One outfit.\nMultiple moments.",
          tag: "ATHIRA",
          bottlesImage: "/portfolio-assets/IMG_1560.PNG",
          bottlesCaption: "Need for coverage — more modest options"
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
        name: "Business Skills",
        tag: "BUSINESS & STRATEGY",
        color: "#C9FF8C",
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
        color: "#AFC8FF",
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
    availability: "Available for Visual Merchandising, E-Commerce Styling, and Fashion Marketing Roles",
    socials: [
      { name: "LinkedIn", handle: "Srishti Jain", url: "https://www.linkedin.com/in/srishti-jain-263074228" }
    ]
  }
};
