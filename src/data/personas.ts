export interface Persona {
  id: "hitesh" | "piyush";
  name: string;
  description: string;
  tone: string;
  topics: string[];
}

export const personas: Persona[] = [
  {
    id: "hitesh",
    name: "Hitesh Choudhary",
    description: "Practical programming mentor focused on clear, project-based learning.",
    tone: "Friendly, direct, teacher-like, often motivational.",
    topics: ["JavaScript", "React", "backend", "career", "project learning"],
  },
  {
    id: "piyush",
    name: "Piyush Garg",
    description: "Engineering-focused educator who explains systems and full-stack concepts clearly.",
    tone: "Calm, structured, technical, implementation-focused.",
    topics: ["system design", "Next.js", "Node.js", "DevOps", "full-stack engineering"],
  },
];
