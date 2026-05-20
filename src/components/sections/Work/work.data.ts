export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  hoverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Festify",
    tagline: "College Event Management Platform",
    description: "Full-stack platform for college fest event registration with integrated payment and role-based dashboards.",
    features: [
      "Role-based authentication and event registration",
      "Custom forms, payment verification, and admin dashboard",
      "Fund tracking and real-time event management"
    ],
    techStack: ["React.js", "Tailwind CSS", "Firebase Authentication", "Firestore", "Razorpay"],
    image: "/images/projects/project1.png",
    hoverImage: "/images/projects/project1-hover.png",
    liveUrl: "https://festify-demo.com",
    githubUrl: "https://github.com/shriyakulkarni/festify",
    color: "99, 102, 241"
  },
  {
    id: 2,
    title: "FocusFlow",
    tagline: "Productivity Mobile Application",
    description: "Pomodoro productivity application with persistent timer management and productivity analytics.",
    features: [
      "Custom Pomodoro timer and session tracking",
      "Streak calendar and productivity analytics",
      "Google Sign-In, guest mode, and onboarding flow"
    ],
    techStack: ["React Native", "TypeScript", "Firebase", "React Native API", "Metro Bundler", "Gradle"],
    image: "/images/projects/project2.png",
    hoverImage: "/images/projects/project2-hover.png",
    liveUrl: "https://focusflow-demo.com",
    githubUrl: "https://github.com/shriyakulkarni/focusflow",
    color: "16, 185, 129"
  },
  {
    id: 3,
    title: "Personal Expense Tracker",
    tagline: "Full-Stack Expense Management System",
    description: "Full-stack expense management system with authentication, analytics, and database optimization.",
    features: [
      "Income and expense tracking with budgeting",
      "Secure login and analytics dashboard",
      "Database optimization and forecasting"
    ],
    techStack: ["Flask", "SQLAlchemy", "SQLite", "HTML", "CSS", "Bootstrap"],
    image: "/images/projects/project3.png",
    hoverImage: "/images/projects/project3-hover.png",
    liveUrl: "https://expense-tracker-demo.com",
    githubUrl: "https://github.com/shriyakulkarni/expense-tracker",
    color: "37, 99, 235"
  },
  {
    id: 4,
    title: "AI Stationery Inventory",
    tagline: "AI-Based Stationery Inventory Management System",
    description: "AI-powered inventory tracking and analytics platform for stationery retail management.",
    features: [
      "Inventory monitoring and stock analysis",
      "Demand forecasting and analytics dashboard",
      "Sales visualization powered by Gemini API"
    ],
    techStack: ["React.js", "Next.js", "MongoDB", "Chart.js", "Gemini API"],
    image: "/images/projects/project4.png",
    hoverImage: "/images/projects/project4-hover.png",
    liveUrl: "https://stationery-ai-demo.com",
    githubUrl: "https://github.com/shriyakulkarni/ai-stationery-inventory",
    color: "220, 53, 69"
  },
];
