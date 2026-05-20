import { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiPython,
  SiAmazon,
  SiJavascript,
  SiGithub,
  SiFirebase,
  SiFlutter,
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiCplusplus,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

// Exactly matches resume Technical Skills section:
// Languages: C++, Python, Java, JavaScript, TypeScript
// Web & App: React.js, Next.js, React Native, Node.js, HTML, CSS, Tailwind CSS, Flutter
// Databases & Cloud: MongoDB, Firebase, SQLite, AWS
// Tools: Git, GitHub

export const skills: Skill[] = [
  // Languages
  { name: 'C++',          icon: SiCplusplus,   color: '#00599C' },
  { name: 'Python',       icon: SiPython,       color: '#3776AB' },
  { name: 'Java',         icon: FaJava,         color: '#007396' },
  { name: 'JavaScript',   icon: SiJavascript,   color: '#F7DF1E' },
  { name: 'TypeScript',   icon: SiTypescript,   color: '#3178C6' },

  // Web & App Development
  { name: 'React.js',     icon: SiReact,        color: '#61DAFB' },
  { name: 'Next.js',      icon: SiNextdotjs,    color: '#FFFFFF' },
  { name: 'React Native', icon: SiReact,        color: '#61DAFB' },
  { name: 'Node.js',      icon: SiNodedotjs,    color: '#339933' },
  { name: 'HTML',         icon: SiHtml5,        color: '#E34F26' },
  { name: 'CSS',          icon: SiCss3,         color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss,  color: '#06B6D4' },
  { name: 'Flutter',      icon: SiFlutter,      color: '#54C5F8' },

  // Databases & Cloud
  { name: 'MongoDB',      icon: SiMongodb,      color: '#47A248' },
  { name: 'Firebase',     icon: SiFirebase,     color: '#FFCA28' },
  { name: 'SQLite',       icon: SiSqlite,       color: '#003B57' },
  { name: 'AWS',          icon: SiAmazon,       color: '#FF9900' },

  // Tools
  { name: 'Git',          icon: SiGit,          color: '#F05032' },
  { name: 'GitHub',       icon: SiGithub,       color: '#FFFFFF' },
];
