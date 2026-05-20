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
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiAndroidstudio,
  SiGooglegemini,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { SiCplusplus } from 'react-icons/si';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Flutter', icon: SiFlutter, color: '#54C5F8' },
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'Gemini API', icon: SiGooglegemini, color: '#4285F4' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'VS Code', icon: VscCode, color: '#007ACC' },
  { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
];
