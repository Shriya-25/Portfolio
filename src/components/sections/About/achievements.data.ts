import { Trophy, Award, Star, Target, Zap, Code, Users, BookOpen } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  color: string;
  year?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'projects',
    title: 'Production Apps',
    description: 'Built & deployed full-stack applications',
    details: 'Successfully delivered multiple full-stack and mobile applications including Festify, FocusFlow, and an AI-powered inventory system',
    icon: Code,
    color: '#3B82F6',
    year: '2024'
  },
  {
    id: 'research',
    title: 'Research Publications',
    description: 'Published in IJARSCT',
    details: 'Published 2 research papers in IJARSCT — on AI in stationery retail management (2025) and federated learning for rare genetic disorder prediction (2026)',
    icon: BookOpen,
    color: '#8B5CF6',
    year: '2025'
  },
  {
    id: 'leadership',
    title: 'Editorial Head',
    description: 'Documentation & Editorial Head at ITSA',
    details: 'Managing technical documentation, newsletters, and content coordination for the IT Students Association at AISSMS IOIT',
    icon: Users,
    color: '#10B981',
    year: '2025'
  },
  {
    id: 'creative',
    title: 'Creative Director',
    description: 'Led branding at MLSAC',
    details: 'Led branding, social media creatives, and promotional campaigns for the Machine Learning Student Activity Committee (2024–25)',
    icon: Star,
    color: '#F59E0B',
    year: '2024'
  },
  {
    id: 'certifications',
    title: 'Certifications',
    description: 'AWS, Power BI & Cyber Security',
    details: 'Earned certifications in AWS Cloud Architecting, Microsoft Power BI Workshop, and Cyber Security & Ethical Hacking',
    icon: Award,
    color: '#EC4899',
    year: '2024'
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Built cross-platform mobile apps',
    details: 'Developed FocusFlow — a React Native productivity app with Pomodoro timer, streak calendar, and Google Sign-In for Android',
    icon: Zap,
    color: '#EF4444',
    year: '2024'
  },
  {
    id: 'acm',
    title: 'ACM Event Executive',
    description: 'Organized technical workshops',
    details: 'Assisted in organizing technical workshops and student engagement activities as Event Executive at ACM Student Chapter (2024–25)',
    icon: Target,
    color: '#06B6D4',
    year: '2024'
  },
  {
    id: 'cgpa',
    title: 'Academic Excellence',
    description: 'CGPA 8.5 in B.Tech IT',
    details: 'Maintaining a CGPA of 8.5 in B.Tech Information Technology at AISSMS Institute of Information Technology, Pune (2023–2027)',
    icon: Trophy,
    color: '#F97316',
    year: '2023'
  },
];
