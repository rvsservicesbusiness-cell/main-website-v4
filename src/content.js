export const company = {
  name: "RVS AI Hub",
  shortName: "RVS",
  email: "rvsinfotech01@gmail.com",
  privacyEmail: "rvsinfotech01@gmail.com",
  website: "https://rvsaihub.com",
  calendly: "https://calendly.com/contact-rvsaihub",
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSf7l8zDcn1H3k2m9p4N5xQ6Y7R8wE9tU0vF2gH3i4J5kL6m7n/viewform",
  formEmbedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSf7l8zDcn1H3k2m9p4N5xQ6Y7R8wE9tU0vF2gH3i4J5kL6m7n/viewform?embedded=true",
  location: "United States",
  tagline: "Make Future Easy",
};

export const hero = {
  badge: "RVS AI Hub - Innovation Partner",
  title: "Scalable digital solutions for ambitious businesses.",
  description:
    "RVS AI Hub is a forward-thinking technology firm dedicated to building scalable, high-performance digital solutions. We partner with clients to bring ideas to life through software, automation, design, and content systems that help businesses grow.",
  primaryCta: {
    label: "Book a Demo",
    href: company.calendly,
  },
  secondaryCta: {
    label: "Explore Services",
    href: "/services",
  },
  trustLabel: "Platforms & Tools",
  trustItems: ["AWS", "ABBYY", "Kofax", "UiPath", "Celonis", "React"],
};

export const aboutIntro = {
  eyebrow: "About RVS",
  title: "Technology that is scalable, intuitive, and built to last.",
  description:
    "Discover who we are, what we stand for, and how we create value through innovation and trust.",
  story:
    "RVS AI Hub is a forward-thinking technology firm dedicated to building scalable, high-performance digital solutions. With a focus on innovation, collaboration, and quality, we partner with clients to bring their ideas to life using modern tools and practices.",
};

export const aboutPillars = [
  {
    title: "Our Mission",
    body:
      "Our mission is to empower businesses large and small to succeed in the digital world through robust, tailored software, web, and mobile applications that are designed to scale, perform, and delight users.",
  },
  {
    title: "Our Vision",
    body:
      "We envision a future in which technology is intuitive, accessible, and reliable for everyone. We strive to be recognized as a trusted technology partner that transforms how organizations engage, operate, and grow.",
  },
  {
    title: "Our Team",
    body:
      "We are a group of software engineers, designers, quality assurance specialists, and project managers driven by curiosity and a passion for building. Together, we bring diverse experiences, creative energy, and a shared mission to every project.",
  },
];

export const services = [
  {
    slug: "intelligent-document-processing",
    status: "AI Workflow",
    statusClass: "status-live",
    vertical: "Automation",
    title: "Intelligent Document Processing",
    focus: "Extraction, validation, and workflow acceleration",
    summary:
      "Our IDP services use AI and machine learning to extract, classify, and validate data from unstructured documents such as invoices, forms, and contracts.",
    detailHeading: "Turn manual document handling into a reliable automated system.",
    detailBody:
      "RVS helps businesses eliminate manual document handling, reduce compliance risk, and improve data accuracy at scale by using intelligent extraction and validation pipelines.",
    highlights: [
      "Extract, classify, and validate data from complex documents",
      "Reduce errors and accelerate business workflows",
      "Built around enterprise tools such as ABBYY and Kofax",
    ],
    offerings: [
      "Invoice and form data capture",
      "Contract and records classification",
      "Compliance-friendly validation flows",
    ],
  },
  {
    slug: "ai-chatbots-virtual-assistants",
    status: "AI Service",
    statusClass: "status-new",
    vertical: "Conversational AI",
    title: "AI-Powered Chatbots & Virtual Assistants",
    focus: "Support, FAQs, and internal query automation",
    summary:
      "We develop intelligent chatbots and conversational AI systems using Dialogflow, Rasa, and Microsoft Bot Framework to provide efficient 24/7 assistance.",
    detailHeading: "Create always-on support experiences without increasing team load.",
    detailBody:
      "Our conversational systems handle customer support, FAQs, and internal requests with NLP-driven responses that improve service quality while reducing repetitive workload on human agents.",
    highlights: [
      "24/7 support for customers and teams",
      "Personalized NLP-based conversations",
      "Reduced workload with better response consistency",
    ],
    offerings: [
      "Customer support assistants",
      "Internal helpdesk bots",
      "FAQ and knowledge automation",
    ],
  },
  {
    slug: "process-mining",
    status: "Optimization",
    statusClass: "status-beta",
    vertical: "Operations Intelligence",
    title: "Process Mining Solutions",
    focus: "Workflow visibility and automation opportunities",
    summary:
      "We analyze workflows to identify inefficiencies, redundancies, and automation opportunities using process mining platforms and business data.",
    detailHeading: "See where your workflows slow down before they slow down your business.",
    detailBody:
      "Using tools like Celonis and UiPath Process Mining, RVS helps organizations visualize end-to-end processes, optimize resources, and continuously improve performance through data-driven insights.",
    highlights: [
      "Reveal bottlenecks and redundancies",
      "Map end-to-end operational flows",
      "Identify clear automation opportunities",
    ],
    offerings: [
      "Workflow analysis and process mapping",
      "Operational inefficiency reporting",
      "Continuous optimization support",
    ],
  },
  {
    slug: "ux-ui-design",
    status: "Design Service",
    statusClass: "status-live",
    vertical: "Design",
    title: "UX/UI Design Services",
    focus: "Research, prototyping, testing, and design systems",
    summary:
      "We create intuitive, visually engaging digital experiences through research, wireframing, interface design, usability validation, and scalable design systems.",
    detailHeading: "Design products people understand quickly and trust immediately.",
    detailBody:
      "RVS combines user research, prototypes, visual design, and iterative testing so every interface reflects brand identity while staying practical, accessible, and conversion-focused.",
    highlights: [
      "Research-led UX strategies",
      "Wireframes and interactive prototypes",
      "Usability testing and reusable design systems",
    ],
    offerings: [
      "User research and UX strategy",
      "Wireframing and prototyping",
      "Interface design and optimization",
    ],
  },
  {
    slug: "website-design-development",
    status: "Core Service",
    statusClass: "status-live",
    vertical: "Web",
    title: "Website Design & Development",
    focus: "Responsive websites, CMS, e-commerce, and web apps",
    summary:
      "We create visually stunning, highly functional websites tailored to your brand and business goals with responsive design, intuitive navigation, and scalable performance.",
    detailHeading: "Build websites that look sharp, load fast, and convert consistently.",
    detailBody:
      "RVS delivers responsive, mobile-friendly websites aligned to business goals from planning and design through development, CMS setup, integrations, and ongoing maintenance.",
    highlights: [
      "Responsive, mobile-first experiences",
      "Optimized for speed, search visibility, and security",
      "From custom sites to CMS, e-commerce, and SaaS-style web apps",
    ],
    offerings: [
      "Custom website development",
      "E-commerce platforms",
      "CMS builds and web applications",
      "Maintenance and support",
    ],
  },
  {
    slug: "video-editing",
    status: "Creative Service",
    statusClass: "status-new",
    vertical: "Video",
    title: "Video Editing Services",
    focus: "Storytelling, pacing, branding, and platform delivery",
    summary:
      "We transform raw footage into polished, engaging videos with clean cuts, strong pacing, crisp audio, and high-quality visuals tailored to your marketing goals.",
    detailHeading: "Turn footage into brand-ready video content that holds attention.",
    detailBody:
      "RVS produces full-length, corporate, promotional, event, and motion-graphics-driven edits that elevate storytelling and deliver consistent quality across digital channels.",
    highlights: [
      "Dynamic editing with strong storytelling structure",
      "Platform-ready delivery for web, social, and campaigns",
      "Motion graphics, color work, and sound polish included",
    ],
    offerings: [
      "Full-length and educational edits",
      "Corporate and promotional videos",
      "Event videos and motion graphics",
    ],
  },
  {
    slug: "short-form-video-repurposing",
    status: "Growth Service",
    statusClass: "status-beta",
    vertical: "Content Repurposing",
    title: "Short-Form Video Repurposing",
    focus: "Reels, TikTok, Shorts, and vertical-first edits",
    summary:
      "We transform long-form content into short, scroll-stopping clips with strong hooks, dynamic cuts, captions, and vertical-first visuals built for modern social platforms.",
    detailHeading: "Repurpose long content into short videos people actually finish.",
    detailBody:
      "RVS extracts the most valuable moments from long videos and repackages them into fast, platform-aware short-form assets designed to improve reach, retention, and conversion.",
    highlights: [
      "Hook-based editing for attention and retention",
      "Captions, reframing, and mobile-first layouts",
      "Trend-aware, platform-optimized delivery",
    ],
    offerings: [
      "Long-form clip extraction",
      "Vertical formatting and caption styling",
      "Platform trend adaptation",
    ],
  },
];

export const bestServices = [
  {
    slug: "decisionintel-hospitality",
    status: "Live & Active",
    statusClass: "status-live",
    vertical: "Hospitality",
    title: "DecisionIntel Hospitality",
    focus: "Revenue & Yield Management",
    summary:
      "Stop pricing on last week's gut feel. We analyze STR reports and PMS data to capture every dollar of ADR growth built for independent hotels and Georgia property owners.",
    detailHeading: "Sharper weekly pricing decisions for independent hotels.",
    detailBody:
      "DecisionIntel Hospitality turns STR reports, PMS exports, and market movement into focused executive decisions that help hotel leaders improve pricing, yield, and weekly revenue strategy.",
    highlights: [
      "ADR, occupancy, and RevPAR decision support",
      "Benchmarking against competitive and regional signals",
      "Built for independent hotels, operators, and property owners",
    ],
    offerings: [
      "STR and PMS data review",
      "Weekly revenue and yield recommendations",
      "Market-aware pricing decision briefs",
    ],
  },
  {
    slug: "decisionintel-health",
    status: "New - Inquiry Only",
    statusClass: "status-new",
    vertical: "Healthcare",
    title: "DecisionIntel Health",
    focus: "Throughput & Capacity Risk",
    summary:
      "Eliminate dashboard fatigue. We turn EHR and census data into daily actions to clear bed bottlenecks and reduce staff burnout designed for COOs, CNOs, and Facility Directors.",
    detailHeading: "Daily operational clarity for healthcare leadership teams.",
    detailBody:
      "DecisionIntel Health converts dense hospital data into concise operational guidance so leadership can respond faster to bottlenecks, staffing strain, and capacity risks.",
    highlights: [
      "Bed flow and census-driven decision support",
      "Operational signals designed for COOs, CNOs, and facility leaders",
      "Action-oriented intelligence that reduces dashboard fatigue",
    ],
    offerings: [
      "EHR and census data review",
      "Throughput and capacity risk reporting",
      "Leadership-ready action recommendations",
    ],
  },
  {
    slug: "decisionintel-logistics",
    status: "Enterprise Beta",
    statusClass: "status-beta",
    vertical: "Logistics & Infrastructure",
    title: "DecisionIntel Logistics",
    focus: "Risk, Compliance & Fleet Efficiency",
    summary:
      "15 years of infrastructure expertise meets AI. We predict disruptions before they hit your P&L through usage-based cost optimization for fleet operators and supply chain hubs.",
    detailHeading: "Operational foresight for fleets, infrastructure, and supply chains.",
    detailBody:
      "DecisionIntel Logistics helps operators surface disruption risks early, improve compliance visibility, and make better weekly cost and efficiency decisions across fleet and infrastructure workflows.",
    highlights: [
      "Risk and disruption monitoring for operational continuity",
      "Compliance visibility across fleet and infrastructure activity",
      "Usage-based optimization for cost and efficiency improvement",
    ],
    offerings: [
      "Fleet and infrastructure performance review",
      "Risk and compliance intelligence briefs",
      "Usage-based cost optimization guidance",
    ],
  },
];

export const allServices = [...services, ...bestServices];

export const featuredCapabilities = [
  {
    title: "Automation & AI",
    description:
      "From intelligent document processing to conversational assistants and process mining, we build systems that reduce manual effort and uncover better operating patterns.",
  },
  {
    title: "Product & Experience Design",
    description:
      "We use research, wireframes, prototypes, visual systems, and testing to create digital experiences that are intuitive, engaging, and aligned with brand goals.",
  },
  {
    title: "Web, Content & Growth Assets",
    description:
      "Our team delivers websites, e-commerce builds, CMS solutions, video editing, and short-form repurposing so brands can launch faster and communicate more effectively.",
  },
];

export const whyChooseItems = [
  "We build responsive, mobile-friendly digital products that work smoothly across devices.",
  "We focus on intuitive navigation, strong UX, and interfaces that maximize engagement.",
  "We optimize for speed, security, performance, and long-term scalability.",
  "We provide end-to-end delivery from planning and design to implementation and maintenance.",
  "We align every solution with your brand identity and business objectives.",
  "We use modern tools and frameworks to deliver future-ready systems and content.",
];

export const serviceApproach = [
  {
    number: "01",
    day: "Discover",
    title: "Research & Planning",
    description:
      "We learn your business goals, users, workflows, and constraints so the solution starts from real needs instead of assumptions.",
  },
  {
    number: "02",
    day: "Design",
    title: "Build the Right System",
    description:
      "From prototypes and interfaces to automation flows and scalable architecture, we design a delivery model that matches the service and growth stage.",
  },
  {
    number: "03",
    day: "Launch & Improve",
    title: "Ship, Measure, Refine",
    description:
      "We launch with performance, usability, and maintainability in mind, then continue improving through testing, analytics, and support.",
  },
];

export const contactOptions = [
  {
    title: "General Inquiry",
    description: "Questions about our services and solutions.",
  },
  {
    title: "Partnership",
    description: "Explore collaboration opportunities with the RVS team.",
  },
  {
    title: "Technical Support",
    description: "Get help with our platforms, tools, and delivery workflows.",
  },
];

export const privacySections = [
  {
    title: "Effective Date",
    body:
      "September 29, 2025",
  },
  {
    title: "Our Privacy Policy",
    body:
      "Welcome to RVS AI Hub. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website and interact with our services. By accessing or using our website, you agree to the terms of this policy.",
  },
  {
    title: "1. Who We Are",
    body:
      "RVS AI Hub is a U.S.-based technology firm specializing in custom software, web, and mobile solutions. We pride ourselves on innovation, quality, and long-term partnerships.",
  },
  {
    title: "2. Information We Collect",
    body:
      "We collect information you provide directly and data automatically gathered through our website.",
    bullets: [
      "Contact Information: Name, email address, phone number, company name, and any details you share when submitting our Connect with Us form.",
      "Usage Data: IP address, browser type, pages visited, time spent on pages, and clickstream data collected via cookies and analytics tools.",
      "Device Information: Device model, operating system, and unique device identifiers.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: "We use your information to:",
    bullets: [
      "Respond to inquiries and requests submitted through our Connect with Us form.",
      "Provide, maintain, and improve our website, services, and customer support.",
      "Send administrative messages, updates, and technical notices.",
      "Personalize your experience by understanding preferences and interests.",
      "Analyze trends, monitor site performance, and diagnose technical issues.",
    ],
  },
  {
    title: "4. Cookies and Tracking Technologies",
    body: "We employ cookies, web beacons, and similar technologies to:",
    bullets: [
      "Remember your preferences and settings.",
      "Measure the effectiveness of our marketing campaigns.",
      "Analyze site traffic and user behavior.",
      "You may disable cookies via your browser settings; however, certain features of our site may not function properly if cookies are blocked.",
    ],
  },
  {
    title: "5. Sharing and Disclosure",
    body: "We do not sell or rent your personal information. We may share data with:",
    bullets: [
      "Service Providers: Trusted vendors who perform services on our behalf such as hosting, analytics, and email delivery.",
      "Legal Authorities: When required by law, court order, or to protect our rights, property, or safety.",
      "Business Transfers: In connection with any merger, sale, or acquisition of assets.",
      "All third parties are obligated to maintain the confidentiality and security of your data.",
    ],
  },
  {
    title: "6. Data Retention",
    body:
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Policy, to comply with our legal obligations, and to resolve disputes. When data is no longer needed, we securely delete or anonymize it.",
  },
  {
    title: "7. Security",
    body:
      "We implement technical and organizational measures such as encryption, access controls, and regular security assessments to safeguard your information against unauthorized access, alteration, or destruction.",
  },
  {
    title: "8. Your Rights",
    body: "You have the right to:",
    bullets: [
      "Access and receive a copy of the personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of your data, subject to legal and contractual obligations.",
      "Withdraw consent where processing is based on your consent.",
      "Object to or restrict certain processing activities.",
      "To exercise these rights, please contact us as described below.",
    ],
  },
  {
    title: "9. International Data Transfers",
    body:
      "RVS AI Hub operates solely from the United States. If we transfer your data to service providers outside the U.S., we require them to adhere to data protection standards consistent with this Policy.",
  },
  {
    title: "10. Children's Privacy",
    body:
      "Our services are not intended for children under 16. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected such data, please contact us for deletion.",
  },
  {
    title: "11. Updates to This Policy",
    body:
      "We may update this Policy to reflect changes in our practices or legal requirements. We will post the revised Policy with the Effective Date. Your continued use of our website constitutes acceptance of the updated Policy.",
  },
  {
    title: "12. How to Contact Us",
    body: `If you have questions, concerns, or requests regarding this Privacy Policy, please reach out to ${company.name} at ${company.privacyEmail}.`,
  },
];

export const termsSections = [
  {
    title: "Effective Date",
    body: "September 29, 2025",
  },
  {
    title: "Our Terms & Conditions",
    body:
      "Welcome to RVS AI Hub. These Terms and Conditions govern your access to and use of the website and any services provided by RVS AI Hub. By visiting or using the website, you agree to be bound by these Terms. If you do not agree, please discontinue use of the website immediately.",
  },
  {
    title: "1. Acceptance of Terms",
    body:
      "By accessing or using our website and services, you acknowledge that you have read, understood, and agree to these Terms and any additional guidelines or rules posted elsewhere on the website.",
  },
  {
    title: "2. Services",
    body:
      "RVS AI Hub provides custom software development, web and mobile applications, API and backend services, and ongoing support and maintenance. All Services are subject to these Terms and any separate agreements you enter with us.",
  },
  {
    title: "3. User Obligations",
    bullets: [
      "You agree to provide accurate, complete, and up-to-date information when submitting forms or registering for Services.",
      "You will not use the website or Services for any unlawful purpose or in violation of applicable laws.",
      "You will not interfere with the security of, or otherwise abuse, the website or Services including by hacking, password mining, or similar means.",
    ],
  },
  {
    title: "4. Intellectual Property",
    bullets: [
      "All content, trademarks, logos, graphics, and software on the website are the property of RVS AI Hub or its licensors and are protected by U.S. and international intellectual property laws.",
      "You may not reproduce, distribute, create derivative works of, or publicly display any portion of the website or Services without prior written consent.",
    ],
  },
  {
    title: "5. Third-Party Links and Services",
    body:
      "The website may contain links to third-party websites, services, or resources. We are not responsible for their content, privacy practices, or availability. Use of third-party links is at your own risk.",
  },
  {
    title: "6. Confidentiality",
    body:
      "Any non-public information or materials you share with us in connection with a project or engagement will be treated as confidential and used solely for the purpose of providing the agreed Services, except as required by law.",
  },
  {
    title: "7. Disclaimer of Warranties",
    body:
      "The website and Services are provided as is and as available. To the fullest extent permitted by law, RVS AI Hub disclaims all warranties, whether express or implied, including merchantability, fitness for a particular purpose, and non-infringement.",
  },
  {
    title: "8. Limitation of Liability",
    body:
      "To the maximum extent permitted by law, RVS AI Hub and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to these Terms, the website, or Services, even if advised of the possibility of such damages. Our total aggregate liability shall not exceed the amounts paid by you for the specific service giving rise to the claim.",
  },
  {
    title: "9. Indemnification",
    body:
      "You agree to indemnify and hold RVS AI Hub, its affiliates, officers, and employees harmless from any claims, damages, losses, liabilities, and expenses including reasonable attorneys' fees arising from your use of the website or Services, your violation of these Terms, or your infringement of any third-party rights.",
  },
  {
    title: "10. Governing Law and Dispute Resolution",
    body:
      "These Terms and any disputes arising out of or relating to them shall be governed by the laws of the State of Texas, without regard to conflicts of law principles. Any legal action will be brought exclusively in the state or federal courts located in Travis County, Texas.",
  },
  {
    title: "11. Termination",
    body:
      "We reserve the right to suspend or terminate your access to the website or Services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or RVS AI Hub.",
  },
  {
    title: "12. Changes to Terms",
    body:
      "We may modify these Terms at any time by posting revised Terms on the website. The Effective Date at the top will be updated. Continued use of the website after changes implies your acceptance of the new Terms.",
  },
  {
    title: "13. Severability",
    body:
      "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.",
  },
  {
    title: "14. Contact Information",
    body: `For questions or notices regarding these Terms, please contact us at ${company.email}.`,
  },
  {
    title: "Closing Note",
    body:
      "Thank you for choosing RVS AI Hub. We look forward to partnering with you.",
  },
];
