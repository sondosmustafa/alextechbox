export const projectsData = [
  {
    id: "business-analytics-dashboard",
    category: "Web Applications",
    title: "Business Analytics Dashboard",
    description: "A comprehensive real-time analytics platform for enterprise clients to track KPIs, financial metrics, and team performance.",
    image: "/images/projects/dashboard-cover.png", 
    gallery: [
      "/images/projects/dashboard-1.jpg",
      "/images/projects/dashboard-2.jpg",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "PostgreSQL"],
    challenge: "The client was struggling to consolidate data from five different legacy systems into a single view. Their reporting was delayed, and they lacked real-time visibility into their financial health.",
    solution: "We built a custom Next.js dashboard that aggregates data via a REST API. We implemented real-time WebSocket connections for live metric updates and designed an intuitive UI using Recharts for interactive data visualization.",
    results: [
      "Reduced reporting time from 3 days to real-time.",
      "Increased data accuracy by 99.8%.",
      "Adopted by 200+ internal team members."
    ]
  },
  {
    // Make sure this ID matches the link exactly
    id: "saas-platform-teams", 
    category: "Web Applications",
    title: "SaaS Platform for Teams",
    description: "A collaborative workspace application designed for remote teams with real-time document editing and task management.",
    image: "/images/projects/saas-cover.png",
    gallery: [
      "/images/projects/saas-1.jpg",
      "/images/projects/saas-2.jpg",
    ],
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
    challenge: "The client needed a scalable, real-time collaborative tool that could handle thousands of concurrent users without latency issues during document editing.",
    solution: "We utilized Socket.io for bi-directional communication and built a custom CRDT engine to handle simultaneous document edits. We also implemented a microservices architecture on Node.js for scalability.",
    results: [
      "Successfully handled 5,000+ concurrent users.",
      "Achieved sub-100ms latency during live editing.",
      "Secured Series A funding based on product success."
    ]
  },
  {
    id: "ecommerce-mobile-app",
    category: "Mobile Apps",
    title: "E-commerce Mobile App",
    description: "A native mobile application for a high-end retail brand, featuring AR product views and a seamless one-tap checkout.",
    image: "/images/projects/mobile-cover.png",
    gallery: [
      "/images/projects/mobile-1.jpg",
      "/images/projects/mobile-2.jpg",
    ],
    technologies: ["React Native", "Firebase", "Stripe API", "Redux Toolkit"],
    challenge: "The client had a mobile web experience but high cart abandonment rates. They needed a fast, native app with features like AR to boost user engagement and sales.",
    solution: "We developed a cross-platform app using React Native. We integrated ARKit/ARCore for virtual try-ons and optimized the checkout flow with Stripe's native SDK to reduce friction.",
    results: [
      "Increased conversion rate by 35%.",
      "50,000+ app downloads in the first month.",
      "4.8/5 star rating on App Store and Google Play."
    ]
  },
  {
    id: "cloud-infrastructure-migration",
    category: "Cloud & DevOps",
    title: "Cloud Infrastructure Migration",
    description: "Migrated a legacy on-premise system to AWS, reducing downtime by 99% and cutting infrastructure costs by 40%.",
    image: "/images/projects/cloud-cover.jpg",
    gallery: [
      "/images/projects/cloud-1.jpg",
    ],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
    challenge: "The client's legacy on-premise servers were aging, resulting in frequent downtime and high maintenance costs. Deployments took weeks and were highly risky.",
    solution: "We containerized their applications using Docker and orchestrated them with Kubernetes on AWS. We implemented Infrastructure as Code (IaC) using Terraform and set up automated CI/CD pipelines with GitHub Actions.",
    results: [
      "Reduced monthly infrastructure costs by 40%.",
      "Achieved 99.99% system uptime.",
      "Deployment time reduced from 2 weeks to 15 minutes."
    ]
  }
];

export const categories = ["All", "Web Applications", "Mobile Apps", "Cloud & DevOps"];