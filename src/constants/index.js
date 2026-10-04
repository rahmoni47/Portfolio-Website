import {
  c,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  grafana,
  graphql,
  hibernate,
  jenkins,
  junit,
  keycloak,
  postgresql,
  qtFramework,
  redis,
  springBoot,
  swagger,
  renderbypass,
  chatapp,
  darjacompiler,
  teslaui,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Study Path",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "C",
    subtitle: "Systems & Memory",
    icon: c,
    tags: ["Low-Level", "Pointers", "Algorithms"],
    accentColor: "#0080FF",
    gradient: "from-[#00599c] via-[#0080ff] to-[#00d4ff]",
    badge: "01",
  },
  {
    title: "C++",
    subtitle: "GUI & High Performance",
    icon: cpp,
    tags: ["Qt Framework", "OOP", "Data Structures"],
    accentColor: "#659ad2",
    gradient: "from-[#004482] via-[#659ad2] to-[#804dee]",
    badge: "02",
  },
  {
    title: "JavaScript",
    subtitle: "Modern Web & Ecosystem",
    icon: javascript,
    tags: ["ES6+", "React.js", "Async / APIs"],
    accentColor: "#F7DF1E",
    gradient: "from-[#f7df1e] via-[#f39c12] to-[#ff6b6b]",
    badge: "03",
  },
  {
    title: "Java",
    subtitle: "Backend & Microservices",
    icon: java,
    tags: ["Spring Boot", "REST APIs", "Enterprise"],
    accentColor: "#f89820",
    gradient: "from-[#ea2d2e] via-[#f89820] to-[#5382a1]",
    badge: "04",
  },
];

export const technologies = [
  { name: "Spring Boot", icon: springBoot },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Redis", icon: redis },
  { name: "Docker", icon: docker },
  { name: "Jenkins", icon: jenkins },
  { name: "Grafana", icon: grafana },
  { name: "GraphQL", icon: graphql },
  { name: "Swagger", icon: swagger },
  { name: "Keycloak", icon: keycloak },
  { name: "Hibernate", icon: hibernate },
  { name: "JUnit", icon: junit },
  { name: "Qt Framework", icon: qtFramework },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "JavaScript", icon: javascript },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "Computer Science & Engineering Foundations",
    company_name: "University (جامعة قسنطينة 2 – عبد الحميد مهري)",
    iconBg: "#1d1836",
    date: "2023 - 2024",
    iconType: "university",
    points: [
      "Commenced university curriculum in Computer Science, building solid fundamentals in programming and applied mathematics.",
      "Mastered key programming paradigms, Object-Oriented Programming (OOP), and Data Structures & Algorithms (DSA).",
      "Studied computer architecture, hardware structures, memory organization, and low-level system operations.",
    ],
  },
  {
    title: "Web Development & Back-End Specialization",
    company_name: "Self-Directed Learning & Engineering Projects",
    iconBg: "#383E56",
    date: "2024 - 2025",
    iconType: "backend",
    points: [
      "Started web development from the ground up, learning client-side fundamentals and modern interface design.",
      "Focused deeply on back-end architecture, API design, server scalability, and distributed workflows.",
      "Strengthened expertise in Spring Boot, PostgreSQL, MongoDB, and enterprise server-side development.",
    ],
  },
  {
    title: "Entering the Work Field & Client Deliveries",
    company_name: "Freelance & Production Projects",
    iconBg: "#151030",
    date: "2025 - 2027 (Active)",
    iconType: "work",
    points: [
      "Stepped into the professional market, collaborating directly with clients on real-world production projects.",
      "Architected, built, and delivered full-stack applications with robust back-end systems and DevOps pipelines.",
      "Gained substantial hands-on client experience and production insights, remaining actively engaged in client delivery to date.",
    ],
  },
];

export const projects = [
  {
    name: "Render Bypass System",
    category: "DevOps & Cloud Automation",
    description:
      "Lightweight monitoring service engineered to prevent Render free-tier projects from sleeping after 15 minutes of inactivity by dispatching automated, periodic health-check pings to keep services alive 24/7.",
    tags: [
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "Java", color: "orange-text-gradient" },
      { name: "Cron Automation", color: "blue-text-gradient" },
      { name: "REST API", color: "pink-text-gradient" },
    ],
    image: renderbypass,
    source_code_link: "https://github.com/rahmoni47/RenderBypassSystem",
  },
  {
    name: "Real-Time WebSocket Chat",
    category: "Networking & Real-Time Events",
    description:
      "Full-duplex real-time chat application built with Spring Boot and WebSocket/STOMP. Engineered for developers seeking to transition from traditional REST to event-driven architectures and live bidirectional streaming.",
    tags: [
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "WebSocket", color: "blue-text-gradient" },
      { name: "STOMP Protocol", color: "pink-text-gradient" },
      { name: "Java", color: "orange-text-gradient" },
    ],
    image: chatapp,
    source_code_link: "https://github.com/rahmoni47/chatappWithWebsocket",
  },
  {
    name: "Darja Compiler & VS Code Tool",
    category: "Compilers & Developer Tools",
    description:
      "An educational programming language featuring Algerian Darija / Arabic keywords (🇩🇿 لغة البرمجة بالدارجة الجزائرية), powered by a complete custom compiler engine (Lexer, Parser, AST, Interpreter) and a dedicated VS Code extension.",
    tags: [
      { name: "Compiler Design", color: "blue-text-gradient" },
      { name: "AST & Interpreter", color: "green-text-gradient" },
      { name: "VS Code Extension", color: "pink-text-gradient" },
      { name: "Darija / Arabic", color: "orange-text-gradient" },
    ],
    image: darjacompiler,
    source_code_link: "https://github.com/rahmoni47/darja-compiler",
  },
  {
    name: "Tesla Automotive UI Clone",
    category: "Embedded Systems & GUI",
    description:
      "Modern Tesla-inspired digital touchscreen and instrument cluster UI crafted with Qt Quick, QML, and C++. Explores real-time vehicle telemetry, responsive layout designs, and seamless C++ to QML backend integration.",
    tags: [
      { name: "Qt Quick", color: "green-text-gradient" },
      { name: "C++", color: "blue-text-gradient" },
      { name: "QML", color: "pink-text-gradient" },
      { name: "Automotive UI", color: "orange-text-gradient" },
    ],
    image: teslaui,
    source_code_link: "https://github.com/rahmoni47/TeslaUI",
  },
];
