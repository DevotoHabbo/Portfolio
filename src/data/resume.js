// ─────────────────────────────────────────────────────────────
// Edit this file to update the resume. Everything on the page
// is rendered from this object; empty sections are hidden.
// ─────────────────────────────────────────────────────────────
const resume = {
  name: 'Phuong Nguyen',
  headline: 'Entry-Level Software Developer / IT Engineer',
  location: 'Louisville, KY 40214',
  email: 'ferbious21@gmail.com',
  phone: '(502) 298-7137',
  // TODO: paste your public Indeed resume/profile link here.
  indeedUrl: 'https://profile.indeed.com/',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/phuong-nguyen-3762061bb' },
    { label: 'GitHub', url: 'https://github.com/PhuongNguyen210295' },
  ],
  openTo: ['Open to relocation (U.S.)', 'Authorized to work in the U.S.'],
  desiredPay: '',

  summary:
    'Computer Engineering graduate (B.S., University of Louisville) with hands-on experience building ' +
    'full-stack web applications, manufacturing precision microchip assemblies for a neurotechnology ' +
    'company, and delivering client-facing technical documentation. Proficient in C#, HTML, JavaScript, ' +
    'SQL, and REST APIs. Seeking an entry-level software developer or IT engineer role where I can apply ' +
    'my engineering training and production experience to build reliable, user-focused systems.',

  // category: 'tech' | 'other' powers the experience filter.
  // tags that match a skill name are highlighted when that skill is clicked.
  experience: [
    {
      title: 'IT Engineer',
      category: 'tech',
      tags: ['C#', 'JavaScript', 'HTML', 'CSS', 'SQL', 'REST APIs', 'ASP.NET Web API', 'Microsoft SQL Server', 'Relational database design & querying'],
      company: 'New American Business Associate',
      location: 'Louisville, KY',
      start: 'Dec 2020',
      end: 'Mar 2021',
      bullets: [
        'Designed and built a full-stack web application with an HTML/CSS/JavaScript front-end, C#/.NET REST API layer, and SQL database backend, integrating all components into a single functional product.',
        "Wrote and optimized SQL queries to retrieve, filter, and aggregate data for the application's reporting features.",
        'Collaborated with stakeholders to translate business requirements into technical specifications and deliver working features on schedule.',
      ],
    },
    {
      title: 'Array Technician (Microchip Assembly)',
      category: 'tech',
      tags: ['Microsoft Office (Excel, Word)', 'Technical documentation', 'Quality control', 'Testing & inspection'],
      company: 'Blackrock Neurotech',
      location: 'Salt Lake City, UT',
      start: 'May 2022',
      end: 'Oct 2022',
      bullets: [
        'Assembled precision microchip electrode arrays for neural-interface devices, adhering to strict quality-control standards in a regulated manufacturing environment.',
        'Prepared and maintained customer-facing technical documentation, ensuring accuracy of assembly records and shipping manifests.',
        'Performed incoming inspection and functional testing of microchip components, reducing defect pass-through through detailed inspection logs.',
      ],
    },
    {
      title: 'Security Officer',
      category: 'other',
      tags: ['Incident reporting', 'Access control', 'Customer service'],
      company: 'Allied Universal',
      location: 'Goldsmith, TX',
      start: 'Sep 2023',
      end: 'Present',
      bullets: [
        'Conduct scheduled and random patrols across interior and exterior facilities, monitoring for security risks and unauthorized activity.',
        'Respond to incidents, alarms, and emergencies following established SOPs; file detailed written incident reports the same day.',
        'Manage access-control points by verifying credentials and logging all entry/exit events.',
        'Serve as the primary on-site point of contact for clients, visitors, and staff, representing the company professionally.',
      ],
    },
    {
      title: 'Nail Technician (Part-Time)',
      category: 'other',
      tags: ['Customer service', 'Scheduling', 'Inventory'],
      company: 'US Nails',
      location: 'Louisville, KY',
      start: 'Feb 2016',
      end: '2023',
      bullets: [
        'Performed acrylic application, custom nail art, and repair services for a recurring client base over seven years, maintaining high client retention through consistent quality.',
        'Managed appointment scheduling, supply inventory, and point-of-sale transactions independently.',
      ],
    },
    {
      title: 'Delivery Driver (Gig / Contract)',
      category: 'other',
      tags: ['Route planning', 'Time management'],
      company: 'DoorDash · Amazon Flex',
      location: 'Louisville, KY',
      start: 'Jan 2019',
      end: 'Sep 2025',
      bullets: [
        'Completed on-time delivery targets across food and package routes by planning efficient pickup-to-drop-off sequences in real time.',
        'Handled high-volume daily order loads while maintaining zero-damage handling of goods.',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'University of Louisville',
      location: 'Louisville, KY',
      start: 'Jul 2020',
      end: 'Jun 2022',
      bullets: [
        'Relevant coursework: Data Structures, Database Systems, Operating Systems, Digital Logic Design, Web Development, Software Engineering',
      ],
    },
    {
      degree: 'Nail Technician Certification',
      school: "PJ's College of Cosmetology · Clarksville",
      location: 'Louisville, KY',
      end: '2016',
    },
  ],

  // Grouped skills: { category, items[] }
  skills: [
    { category: 'Languages', items: ['C#', 'JavaScript', 'HTML', 'CSS', 'SQL', 'PHP'] },
    { category: 'Frameworks / APIs', items: ['REST APIs', 'ASP.NET Web API'] },
    { category: 'Databases', items: ['Microsoft SQL Server', 'Relational database design & querying'] },
    { category: 'Tools & Platforms', items: ['Microsoft Office (Excel, Word)', 'Windows', 'Git'] },
  ],

  certifications: [],

  languages: [
    { name: 'English', level: 'Professional working proficiency' },
    { name: 'Vietnamese', level: 'Native / Expert' },
  ],
};

export default resume;
