export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
  skills?: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: '1',
    year: '2023',
    title: 'B.Tech in Information Technology',
    organization: 'AISSMS Institute of Information Technology, Pune',
    description: 'Started B.Tech in IT with a strong focus on software engineering, data structures, algorithms, and web development. Maintaining a CGPA of 8.5.',
    type: 'education',
    skills: ['Data Structures', 'Algorithms', 'Web Development', 'OOP'],
  },
  {
    id: '2',
    year: '2024',
    title: 'Creative Director',
    organization: 'MLSAC AISSMS IOIT',
    description: 'Led branding, social media creatives, and promotional campaigns for the Machine Learning Student Activity Committee.',
    type: 'work',
    skills: ['Branding', 'Social Media', 'Creative Design', 'Campaigns'],
  },
  {
    id: '3',
    year: '2024',
    title: 'Event Executive',
    organization: 'ACM Student Chapter, AISSMS IOIT',
    description: 'Assisted in organizing technical workshops and student engagement activities for the ACM Student Chapter.',
    type: 'work',
    skills: ['Event Management', 'Technical Workshops', 'Student Engagement'],
  },
  {
    id: '4',
    year: '2025',
    title: 'Documentation & Editorial Head',
    organization: 'ITSA AISSMS IOIT',
    description: 'Managing technical documentation, newsletters, and content coordination for the IT Students Association.',
    type: 'work',
    skills: ['Technical Writing', 'Documentation', 'Content Strategy', 'Newsletters'],
  },
  {
    id: '5',
    year: '2025',
    title: 'Research Publications',
    organization: 'IJARSCT',
    description: 'Published research papers on AI in stationery retail management and federated learning for rare genetic disorder prediction.',
    type: 'achievement',
    skills: ['Research', 'AI/ML', 'Federated Learning', 'Academic Writing'],
  },
  {
    id: '6',
    year: '2027',
    title: 'B.Tech Graduation (Expected)',
    organization: 'AISSMS Institute of Information Technology, Pune',
    description: 'Expected to graduate with B.Tech in Information Technology, aiming to build impactful full-stack and mobile applications.',
    type: 'education',
    skills: ['Full Stack Development', 'Mobile Development', 'System Design'],
  },
];
