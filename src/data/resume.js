// ─────────────────────────────────────────────────────────────
// Edit this file with your own details. Everything on the page
// is rendered from this object.
// ─────────────────────────────────────────────────────────────
const resume = {
  name: 'Your Name',
  headline: 'Software Developer',
  location: 'City, State',
  email: 'you@example.com',
  phone: '(555) 123-4567',
  // Paste your public Indeed resume / profile link here.
  indeedUrl: 'https://profile.indeed.com/',
  links: [
    { label: 'GitHub', url: 'https://github.com/devotohabbo' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
  openTo: ['Full-time', 'Remote', 'Hybrid'],
  desiredPay: '',

  summary:
    'Developer with experience building responsive web applications in React and JavaScript. ' +
    'Comfortable across the stack, focused on clean, accessible UI and reliable delivery.',

  experience: [
    {
      title: 'Front-End Developer',
      company: 'Company Name',
      location: 'City, State',
      start: 'Jan 2023',
      end: 'Present',
      bullets: [
        'Built and maintained React components used across customer-facing pages.',
        'Improved page load time by 30% by code-splitting and lazy-loading routes.',
        'Worked with designers and back-end engineers to ship features every sprint.',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'Another Company',
      location: 'Remote',
      start: 'Jun 2022',
      end: 'Dec 2022',
      bullets: [
        'Developed internal tools with JavaScript, HTML and CSS.',
        'Wrote unit tests and documentation for shared utilities.',
      ],
    },
  ],

  education: [
    {
      degree: 'B.S. in Computer Science',
      school: 'University Name',
      location: 'City, State',
      start: '2018',
      end: '2022',
    },
  ],

  skills: [
    { name: 'React', years: 3 },
    { name: 'JavaScript', years: 4 },
    { name: 'HTML / CSS', years: 5 },
    { name: 'Node.js', years: 2 },
    { name: 'Git', years: 4 },
    { name: 'REST APIs', years: 3 },
  ],

  certifications: [
    { name: 'Certification Name', issuer: 'Issuer', date: '2024' },
  ],
};

export default resume;
