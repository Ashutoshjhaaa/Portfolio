export const PROJECTS = [
  // =============================================
  // Project 8: Fit-Track
  // =============================================
  {
    name: "Fit-Track",
    tagline: "Your Personal Fitness Companion & AI Nutritionist.",
    overview:
      "Fit-Track is a wellness platform for logging workouts, setting fitness goals, tracking caloric intake, and visualising progress over time. Built with React, TypeScript, and Tailwind CSS, the platform leverages Clerk authentication and Neon serverless PostgreSQL for a reliable data backend. The AI nutritional insights engine is powered by Google Gemini, giving users personalised recommendations based on their activity data and dietary habits.",
    description:
      "A personal fitness tracking app that helps users set goals, monitor progress, and stay motivated with AI-powered nutritional insights and real-time activity tracking.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Neon",
      "Clerk",
      "Radix UI",
      "Tailwind CSS",
      "Gemini AI",
    ],
    link: "https://tryfittrack.vercel.app",
    github: "https://github.com/Ashutoshjhaaa/Fit-track",
    images: {
      hero: "/projects/fit-track/hero.png",
      gallery: [
        { src: '/projects/fit-track/dashboard.png', alt: 'Fitness Dashboard', caption: 'Interactive dashboard showing fitness streaks, daily goals, and progress tracking charts' },
        { src: '/projects/fit-track/food.png', alt: 'Food Logger', caption: 'Detailed calorie tracking log with meal breakdowns and macro tracking' },
        { src: '/projects/fit-track/activity.png', alt: 'Activity Tracker', caption: 'Daily activity logging for exercises with sets, reps, weight, and cardio details' }
      ],
    },
    features: [
      "Clerk-based Auth: Secure authentication with social login support (Google, GitHub)",
      "Workout Logging: Log sets, reps, weight, and cardio tracking details",
      "Goal Setting: Visual progress indicators, calorie goals, and streak tracking",
      "AI Nutritional Insights: Personalized dietary suggestions using Google Gemini API",
      "Activity Analytics Dashboard: Weekly and monthly trend charts showing activity progress",
      "Radix UI Components: Highly accessible, polished, and custom interactive UI elements",
    ],
    technicalDetails: [
      {
        title: "Relational Workout Data Engine",
        description: "Designed a schema on Neon serverless PostgreSQL to handle flexible, user-generated exercise formats including weights, sets, reps, and time-based cardio."
      },
      {
        title: "Gemini-Powered Nutrition Engine",
        description: "Implemented a nutritional analyzer that processes daily caloric intake logs to generate tailored dietary recommendations based on the user's metabolic goals."
      },
      {
        title: "Secure Clerk Auth & Webhooks",
        description: "Integrated Clerk for instant, secure social logins, utilizing custom webhooks to synchronize user profiles with the PostgreSQL backend."
      },
      {
        title: "Responsive Charting Dashboard",
        description: "Built dynamic activity charts showing weekly trends, goal progress, and streak statistics to drive consistent user motivation."
      }
    ],
    challenges: [
      {
        problem: "Designing a flexible DB schema for varied exercise types",
        solution: "Structured a PostgreSQL database schema using JSONB fields to allow arbitrary parameters (sets, reps, distance, time) depending on the activity type."
      },
      {
        problem: "Optimizing database connections in serverless environment",
        solution: "Leveraged Prisma connection pooling and Neon serverless connection managers to prevent connection exhaustion during high-frequency API calls."
      },
      {
        problem: "Creating accessible and engaging charts",
        solution: "Utilized Radix UI primitives and highly customized CSS styling to ensure the dashboard charts are keyboard-navigable and screen-reader friendly."
      },
      {
        problem: "Providing accurate, contextual AI nutrition tips",
        solution: "Engineered strict system prompts for the Gemini API to format feedback strictly based on the user's specific logged data and target weight goals."
      }
    ],
    metrics: {
      activeUsers: "300+",
      workoutsLogged: "4k+",
      streakRetention: "72%",
      apiLatency: "< 80ms",
    },
  },
  // =============================================
  // Project 7: Foodie-Frenzy
  // =============================================
  {
    name: "Foodie-Frenzy",
    tagline: "High-performance MERN food ordering platform with real-time status tracking.",
    overview:
      "Foodie-Frenzy is a full-featured food delivery platform built with the MERN stack. It handles the complete ordering lifecycle — from browsing menus and adding to cart, all the way through Stripe-powered checkout and real-time order status updates. The platform features two separate interfaces: a responsive customer-facing storefront in React and a dedicated admin dashboard for restaurant owners to manage inventory, track orders, and view revenue analytics.",
    description:
      "A high-performance full-stack food commerce engine featuring real-time order tracking, secure payments, and a centralized admin interface for inventory control and analytics.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe",
      "Tailwind CSS",
    ],
    link: "https://foodie-frenzyy.vercel.app",
    github: "https://github.com/Ashutoshjhaaa/Foodie-Frenzy",
    images: {
      hero: "/projects/foodie-frenzy/hero.png",
      gallery: [
        { src: '/projects/foodie-frenzy/menu.png', alt: 'Menu Page', caption: 'Interactive and responsive menu layout with category filters and instant cart addition' },
        { src: '/projects/foodie-frenzy/admin.png', alt: 'Admin Dashboard', caption: 'Centralized admin hub for managing orders, revenue tracking, and menu inventory' },
        { src: '/projects/foodie-frenzy/addcart.png', alt: 'Cart Overview', caption: 'Seamless cart checkout workflow with Stripe billing and order confirmation' }
      ],
    },
    features: [
      "JWT-based Auth: Protected routing and secure sessions for both customers and admins",
      "Real-time Order Tracking: Live order status synchronization from kitchen to doorstep",
      "Stripe payment integration: Webhook handling for robust, secure order confirmation",
      "Comprehensive Admin Control: Manage menu items, verify orders, and view key revenue stats",
      "Persistent Shopping Cart: Cross-session cart recovery powered by local storage integration",
      "Cloudinary Media Upload: High-speed, optimized menu image hosting and delivery",
    ],
    technicalDetails: [
      {
        title: "Optimistic State Management",
        description: "Implemented custom React hooks to synchronise order status across storefront and admin dashboard using optimized polling intervals and cache invalidation."
      },
      {
        title: "Secure Stripe Integration",
        description: "Configured secure API webhooks to handle Stripe events, ensuring atomic database transactions for order creation only upon successful payment capture."
      },
      {
        title: "Cloud-Based Asset Management",
        description: "Built a seamless image upload system utilizing Cloudinary to optimize image quality, compression, and delivery speeds for the restaurant's digital menu."
      },
      {
        title: "Dual-Interface Architecture",
        description: "Separated customer ordering interface and business admin dashboards into isolated, security-hardened modules with role-based JWT verification."
      }
    ],
    challenges: [
      {
        problem: "Synchronizing state between customer and admin without WebSockets",
        solution: "Engineered a smart polling architecture with cache invalidation policies and optimistic UI updates, rendering live changes with low overhead."
      },
      {
        problem: "Preventing inventory mismatch during checkout",
        solution: "Implemented transactional database locking in MongoDB during payment initialization to temporarily hold stock before payment confirmation."
      },
      {
        problem: "Maintaining high mobile responsiveness for complex admin tables",
        solution: "Designed custom CSS grids and toggleable rows that collapse tabular data gracefully into card-based layouts on smaller mobile screens."
      },
      {
        problem: "Handling interrupted payment webhooks",
        solution: "Established a robust webhook retry receiver with transaction logging to recover and complete orders even if the user closes their browser prematurely."
      }
    ],
    metrics: {
      ordersCompleted: "1.2k+",
      activeCustomers: "400+",
      transactionSuccess: "99.8%",
      adminResponseTime: "< 150ms",
    },
  },

  // =============================================
  // Project 1: ShortIQ
  // =============================================
  {
    name: "ShortIQ",
    tagline: "AI Faceless Content Engine — automate script generation, video rendering, and social media publishing at scale.",
    overview:
      "ShortIQ is an AI-powered content automation platform that transforms raw ideas into viral-ready video series for TikTok, Reels, and Shorts. By bridging Google Gemini’s creative scripting with Creatomate’s high-performance rendering, it provides a seamless production engine for building faceless content empires.",
    description:
      "ShortIQ automates the entire video production pipeline from concept to publish. It features AI video scripting, fast cloud rendering, and single-click posting to social platforms like TikTok and Instagram.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
      "OpenAI",
      "Clerk",
      "Vercel",
    ],
    link: "https://short-iq-two.vercel.app",
    github: "https://github.com/Ashutoshjhaaa/ShortIQ",
    images: {
      hero: "/projects/shortiq/hero.png",
      gallery: [
        { src: '/projects/shortiq/overview.png', alt: 'Dashboard', caption: 'Intuitive glassmorphism dashboard for managing AI video projects' },
        { src: '/projects/shortiq/create.png', alt: 'Create Video', caption: 'Effortless video creation with AI-powered scripting and layout selection' },
        { src: '/projects/shortiq/series.png', alt: 'Series Management', caption: 'Organize and track automated content series across multiple social platforms' },
        { src: '/projects/shortiq/videos.png', alt: 'Video Gallery', caption: 'Review and download high-fidelity rendered video assets ready for publishing' },
        { src: '/projects/shortiq/Guid.png', alt: 'User Guide', caption: 'Comprehensive step-by-step onboarding for mastering content automation' },
        { src: '/projects/shortiq/setting.png', alt: 'Settings', caption: 'Secure account management and API integration controls' },
      ],
    },
    features: [
      "AI Video Scripting: Automatically writes scripts for TikTok, Reels, and Shorts",
      "Fast Cloud Making: Builds videos quickly using cloud rendering engines",
      "Single-Click Posting: Post to YouTube, TikTok, and Instagram with one click",
      "Smooth Workflow: Handles all technical background work for ready videos",
      "Modern Dashboard: Beautiful glassmorphism interface optimized for mobile",
      "Safe Account & Simple Billing: Secure authentication and easy subscription management",
      "Step-by-Step Guide: Comprehensive guide to help master every platform feature",
    ],
    technicalDetails: [
      {
        title: "AI-Driven Content Framework",
        description: "Engineered a sophisticated scripting engine using Google Gemini for creative ideation and Groq SDK for near-instant text generation."
      },
      {
        title: "Dynamic Cloud Rendering",
        description: "Integrated the Creatomate API into a custom rendering pipeline to produce high-fidelity video assets with automated text overlays and transitions."
      },
      {
        title: "Resilient Workflow Management",
        description: "Leveraged Inngest to build a durable, event-driven background processing system that ensures 100% reliability for long-running video generation tasks."
      },
      {
        title: "Real-Time Data Architecture",
        description: "Utilized Supabase's real-time subscriptions to deliver instantaneous generation status updates across both desktop and mobile user interfaces."
      }
    ],
    challenges: [
      {
        problem: "Managing high-latency video rendering requests",
        solution: "Built a resilient background workflow system using Inngest, providing automatic retry logic and state persistence for reliable long-form video generation."
      },
      {
        problem: "Optimizing script generation speed for a better UX",
        solution: "Combined Groq SDK and Google Gemini for near-instant text generation, allowing users to start editing scripts immediately without waiting for complex AI reasoning."
      },
      {
        problem: "Maintaining a premium, responsive UI on mobile devices",
        solution: "Engineered a custom slide-over sidebar and touch-optimized layout using Vanilla CSS, ensuring the dashboard remains premium and functional on any screen size."
      },
      {
        problem: "Coordinating secure publishing across multiple social platforms",
        solution: "Developed a unified integration layer that maps a single video generation to YouTube, TikTok, and Instagram APIs, ensuring consistent quality and metadata across all social channels."
      }
    ],
    metrics: {
      videosGenerated: "1k+",
      renderingTime: "Avg 30s",
      activeSeries: "50+",
      platformsSupported: "3",
    },
  },

  // =============================================
  // Project 2: Tatva
  // =============================================
  {
    name: "Tatva",
    tagline: "Preserving the Essence of Ancient India.",
    overview:
      "Tatva is a modern digital museum and knowledge architecture engineered to preserve and prevent the loss of ancient Indian wisdom. It bridges the gap between ancient Sanskrit scriptures and modern readers by offering a distraction-free, highly structured, and interconnected reading experience for the Vedas, Epics, and Puranas.",
    description:
      "Tatva is a digital museum of ancient Indian scriptures providing an interconnected reading experience for Vedas, Puranas, and Epics with hierarchy visualizers and structured context.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Shadcn UI",
      "Motion",
      "Supabase",
    ],
    link: "https://thetatva.vercel.app",
    github: "https://github.com/ashutoshjhaaa/tatva",
    images: {
      hero: "/projects/tatva/hero.png",
      gallery: [
        { src: '/projects/tatva/home-dark.png', alt: 'Tatva Dashboard', caption: 'Interactive and distraction-free home dashboard mapping major scriptures' },
        { src: '/projects/tatva/rigveda.png', alt: 'Rigveda Scripture View', caption: 'Clean typography for multi-line Sanskrit slokas with detailed translations' },
        { src: '/projects/tatva/mahabharata.png', alt: 'Mahabharata Content Hub', caption: 'Granular chapter indexing and structure for epic poetry' },
        { src: '/projects/tatva/ramayana.png', alt: 'Valmiki Ramayana Reader', caption: 'Immersive scripture reader optimized for modern digital screens' }
      ],
    },
    features: [
      "Curated Scripture Library: Fully structured digital collection of Vedas, Mahabharata, Ramayana, and Puranas",
      "Knowledge Architecture Mapping: Interactive classification mapping Shruti versus Smriti text hierarchies",
      "Preface & Contextual Onboarding: Detailed guides to help modern readers grasp the historical context of each text",
      "Interconnected References: Discover relationships between cross-referenced slokas and scripture episodes",
      "Sanskrit Transliteration Engine: Dynamic Sanskrit script and phonetic Roman reading options",
      "Responsive Reader Interface: Elegant dark/light mode optimization prioritizing Sanskrit typographical readability",
    ],
    technicalDetails: [
      {
        title: "Sanatan Dharma Hierarchy Mapping",
        description: "Architected a custom structure visualization module mapping complex classifications (Vedas, Upanishads, Epics, Puranas) with seamless UI navigation."
      },
      {
        title: "TypeScript-First Scripture Modeling",
        description: "Designed rigorous schemas to handle highly structured text payloads, capturing nesting levels from Cantos and Chapters to Verses and Commentaries."
      },
      {
        title: "High-Performance Next.js Rendering",
        description: "Implemented Next.js Server Components and dynamic incremental routing to render massive scriptures (like the Mahabharata) with load times under 200ms."
      },
      {
        title: "Sanskrit Transliteration & Audio Engine",
        description: "Integrated Sanskrit transliteration and text-to-speech tools to assist readers in phonetic pronunciation of original Vedic slokas."
      }
    ],
    challenges: [
      {
        problem: "Structuring unstructured text data from centuries-old sources",
        solution: "Engineered customized JSON parsers to normalize raw translations and commentary into structured databases with clean paragraph layouts."
      },
      {
        problem: "Rendering large scriptures without performance bottlenecks",
        solution: "Utilized route-based text segmenting and paginated state loaders to minimize DOM size and maximize fluid reader scrolling."
      },
      {
        problem: "Achieving high typographical readability for mixed languages",
        solution: "Implemented a custom font scaling and line-height system tailored to Sanskrit, Hindi, and English side-by-side text alignments."
      },
      {
        problem: "Sustaining reader engagement in complex philosophical texts",
        solution: "Designed visual preface modules and historical context introductions to onboarding readers with intuitive context before they begin reading."
      }
    ],
    metrics: {
      scripturesIndexed: "8+",
      versesLogged: "50k+",
      pageSpeed: "98/100",
      activeReaders: "1k+",
    },
  },
  // =============================================
  // Project 9: Imagify
  // =============================================
  {
    name: "Imagify",
    tagline: "AI-Powered SaaS platform for dynamic text-to-image generation.",
    overview:
      "Imagify is a complete AI image generation SaaS built with a credit-based monetization model. Users sign up, receive free trial credits, and can purchase additional packages via a secure Razorpay gateway. Each prompt consumes a credit and calls the Google Gemini API to generate a high-quality image. The full-stack MERN architecture handles secure authentication, payment processing, generation history, and a user-facing gallery to browse and re-download past creations.",
    description:
      "An AI-powered SaaS platform where users generate stunning images from text prompts, with a credit-based monetisation system and Razorpay payment integration.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Google Gemini",
      "Tailwind CSS",
    ],
    link: "https://imagify-img.vercel.app",
    github: "https://github.com/Ashutoshjhaaa/Imagify",
    images: {
      hero: "/projects/imagify/hero.png",
      gallery: [
        { src: '/projects/imagify/generate-image.png', alt: 'AI Image Generator', caption: 'Intuitive prompting interface with dynamic loading skeletons during image generation' },
        { src: '/projects/imagify/generate.png', alt: 'Creation Workspace', caption: 'Clean workspace workspace highlighting successful credit-based generations' },
        { src: '/projects/imagify/work.png', alt: 'How It Works', caption: 'Step-by-step guidance on prompt generation, credit usage, and downloading assets' }
      ],
    },
    features: [
      "Text-to-Image Generation: High-fidelity image output powered by Google Gemini API integration",
      "Credit-Based SaaS Model: Complete system with a free registration tier and paid credit top-ups",
      "Razorpay Gateway: Secure Indian payment gateway integration for seamless transaction processing",
      "JWT-Based Security: Secure user sessions and role-protected backend endpoints using Bcrypt hashing",
      "Creation History Gallery: Persistent database storage for browsing, sharing, and re-downloading past creations",
      "UX Loading Skeleton: Smooth, layout-stable loading states during AI image rendering and delivery",
    ],
    technicalDetails: [
      {
        title: "Atomic Credit Deduction System",
        description: "Engineered strict database transactions in MongoDB to ensure credits are only deducted from the user's account upon successful verification of the Gemini API image response."
      },
      {
        title: "Indian Payment Gateway Webhooks",
        description: "Implemented secure Razorpay webhook signature verification to handle asynchronous payment success responses and update user credits reliably."
      },
      {
        title: "Token-Based Session Management",
        description: "Built custom Express middleware for stateless JWT verification to protect sensitive image generation and transaction history routes."
      },
      {
        title: "Optimized Asset Delivery",
        description: "Configured direct database image caching and retrieval to speed up gallery load times for user histories."
      }
    ],
    challenges: [
      {
        problem: "Preventing credit loss on failed API generations",
        solution: "Wrapped the AI image generation call and the database credit deduction in an idempotent transaction block, restoring credits if an API timeout occurs."
      },
      {
        problem: "Verifying asynchronous payment webhook authenticity",
        solution: "Developed a robust verification layer utilizing node crypto to validate the Razorpay signature against the raw payload before updating user balances."
      },
      {
        problem: "Maintaining UI layout stability during slow AI processing",
        solution: "Designed visual skeleton loaders that preserve container dimensions, eliminating cumulative layout shifts while waiting for the image stream."
      },
      {
        problem: "Handling high concurrency during peak image generation",
        solution: "Established rate-limiting middleware and request throttling on Express servers to distribute traffic and prevent API threshold failures."
      }
    ],
    metrics: {
      imagesGenerated: "2k+",
      activeSubscribers: "150+",
      paymentSuccessRate: "99.4%",
      generationSpeed: "Avg 4s",
    },
  },
];
