export const projects = [
  {
    id: 1,
    name: "AI Chatbot SQL",
    description:
      "AI-powered chatbot focused on SQL, allowing users to query databases using natural language.",
    stack: ["Language Model", "Java", "Ollama", "JavaSwing", "MySQL"],
    client: "Fatec",
    year: 2024,
    link: <a href="https://github.com/victorrgodoy/chat-bot-sql">Github</a>,
    type: {
      category: ["AI"],
      platform: "Desktop App",
    },
  },
  {
    id: 2,
    name: "Petshop Management System",
    description:
      "Complete management system for petshops, enabling tracking of clients, pets, products, services, and consumption records.",
    stack: ["Typescript", "Express", "React", "Bootstrap", "Postgresql"],
    client: "Fatec",
    year: 2025,
    link: (
      <a href="https://github.com/victorrgodoy/poo-fatec/tree/main/atvv-pl-typescript">
        Github
      </a>
    ),
    type: {
      category: ["API Rest"],
      platform: "Web App",
    },
  },
  {
    id: 3,
    name: "Brazilian Foreign Trade Statistics",
    description:
      "Web platform for viewing real Brazilian import and export data by year, state, and region.",
    stack: ["Python", "Typescript", "Express", "React", "Postgresql", "Redis"],
    client: "Fatec",
    year: 2025,
    link: <a href="https://github.com/CodeDontBlow/PontoLog">Github</a>,
    type: { category: ["Data", "API Rest"], platform: "Web App" },
    imgs: [
      "/assets/img/pontolog_1.png",
      "/assets/img/pontolog_2.png",
      "/assets/img/pontolog_3.png",
    ],
  },
  {
    id: 4,
    name: "AI Agent for Import Registration",
    description:
      "Generated accurate customs registration instructions to ensure clarity and compliance in import processes.",
    stack: [
      "Embedding Model",
      "Language Model",
      "Ollama",
      "Python",
      "React",
      "Chromadb",
    ],
    client: "TecSys",
    year: 2025,
    link: <a href="https://github.com/CodeDontBlow/API-4SEMESTRE">Github</a>,
    type: {
      category: ["AI", "API Rest"],
      platform: "Web App",
    },
  },
];
