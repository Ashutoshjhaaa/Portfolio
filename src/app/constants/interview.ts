export interface InterviewSkill {
  name: string;
  slug: string;
  route: string;
  description: string;
  category: string;
  color?: string;
}

export const INTERVIEW_DATA: InterviewSkill[] = [
  {
    name: 'HTML',
    slug: 'html5',
    route: '/interview/html',
    description: 'Practice essential HTML interview questions and concepts to ace your next technical round.',
    category: 'Technical',
    color: 'E34F26'
  },
  {
    name: 'CSS',
    slug: 'css3',
    route: '/interview/css',
    description: 'Practice essential CSS interview questions and concepts to ace your next technical round.',
    category: 'Technical',
    color: '1572B6'
  },
  {
    name: 'JavaScript',
    slug: 'javascript',
    route: '/interview/javascript',
    description: 'Practice essential JavaScript interview questions and concepts to ace your next technical round.',
    category: 'Technical',
    color: 'F7DF1E'
  },
  {
    name: 'React',
    slug: 'react',
    route: '/interview/react',
    description: 'Practice essential React interview questions and concepts to ace your next technical round.',
    category: 'Technical',
    color: '61DAFB'
  },
  {
    name: 'Node.js',
    slug: 'nodedotjs',
    route: '/interview/nodejs',
    description: 'Practice essential Node.js interview questions and concepts to ace your next technical round.',
    category: 'Technical',
    color: '339933'
  },
  {
    name: 'SQL',
    slug: 'sqlite',
    route: '/interview/sql',
    description: 'Practice essential SQL interview questions and concepts to ace your next technical round.',
    category: 'Technical',
    color: '003B57'
  }
];
