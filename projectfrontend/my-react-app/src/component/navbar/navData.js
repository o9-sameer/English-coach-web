export const NAV_LINKS = [
  {
    id: 'home',
    label: 'Home',
    href: '#/',
  },
  {
    id: 'about',
    label: 'About',
    href: '#/about/coach',
    hasDropdown: true,
    dropdown: {
      category: 'Know Your Coach',
      title: 'About The Coaching',
      items: [
        {
          title: 'About the Coach',
          description: 'Spoken English trainer with 8+ years experience guiding Indian learners.',
          href: '#/about/coach',
          tag: 'Founder',
        },
        {
          title: 'Teaching Approach',
          description: 'Learn to speak English naturally without translating from Hindi in your mind.',
          href: '#/about/teaching-approach',
        },
        {
          title: 'Why Learn With Us',
          description: 'Live interactive classes, zero judgment, and practical career focus.',
          href: '#/about/why-us',
        },
      ],
      featured: {
        badge: 'Free Insight',
        title: 'How to Stop Translating in Your Head',
        description: 'Simple daily techniques to start thinking directly in English without getting stuck.',
        ctaText: 'Read Teaching Approach →',
        href: '#/about/teaching-approach',
      },
    },
  },
  {
    id: 'courses',
    label: 'Courses',
    href: '#/courses/spoken-english',
    hasDropdown: true,
    dropdown: {
      category: 'Batches & Fees',
      title: 'Popular Courses',
      items: [
        {
          title: 'Spoken English (₹999/mo)',
          description: 'Everyday speaking practice, sentence formation, and hesitation removal.',
          href: '#/courses/spoken-english',
          tag: 'Most Popular',
        },
        {
          title: 'Interview Prep (₹1,499)',
          description: 'HR rounds, "Tell me about yourself", group discussions, and resume review.',
          href: '#/courses/interview-prep',
        },
        {
          title: 'Workplace English (₹1,999)',
          description: 'Speaking in team meetings, talking to clients, and writing professional emails.',
          href: '#/courses/workplace-english',
        },
        {
          title: '1-on-1 Mentorship (₹2,999)',
          description: 'Private 1-on-1 sessions focused on your individual pronunciation and weak areas.',
          href: '#/courses/1-on-1-mentorship',
        },
      ],
      featured: {
        badge: 'New Batch Starting',
        title: '60-Day Spoken English Bootcamp',
        description: 'Live interactive speaking sessions on Google Meet with daily practice assignments.',
        ctaText: 'View Course Details →',
        href: '#/courses/spoken-english',
      },
    },
  },
  {
    id: 'experience',
    label: 'Learning Path',
    href: '#experience',
  },
  {
    id: 'results',
    label: 'Student Results',
    href: '#results',
  },
  {
    id: 'resources',
    label: 'Free Resources',
    href: '#/resources/speaking-practice',
    hasDropdown: true,
    dropdown: {
      category: 'Study Material',
      title: 'Free Practice Guides',
      items: [
        {
          title: 'Daily Speaking Practice',
          description: 'Everyday speaking prompts and 2-minute timer drills to practice alone.',
          href: '#/resources/speaking-practice',
        },
        {
          title: 'HR Interview Questions',
          description: 'Top job interview questions with easy, impressive sample answer frameworks.',
          href: '#/resources/interview-questions',
          tag: 'Placement Guide',
        },
        {
          title: 'Common Mistakes by Hindi Speakers',
          description: 'Prepositions, tenses, and pronunciation mistakes explained simply.',
          href: '#/resources/common-mistakes',
        },
        {
          title: 'Everyday Vocabulary',
          description: 'High-frequency, impressive words and phrases for daily conversations.',
          href: '#/resources/vocabulary',
        },
      ],
      featured: {
        badge: 'Free Download',
        title: 'Top HR Interview Questions Guide',
        description: 'Proven frameworks to answer "Tell me about yourself" and tricky HR questions.',
        ctaText: 'Explore Questions →',
        href: '#/resources/interview-questions',
      },
    },
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
  },
];
