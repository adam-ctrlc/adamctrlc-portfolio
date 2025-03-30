// src/data/data.js

// --- Skills Data ---
const skillsData = {
  frontend: [
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Bootstrap',
    'JavaScript',
    'TypeScript',
    'jQuery',
    'React',
    'Vue.js',
    'Next.js',
  ],
  backend: ['Node.js', 'Express', 'PHP'],
  databases: ['MySQL', 'SQLite', 'PostgreSQL'],
  tools: ['Git', 'GitHub', 'Visual Studio Code'],
};

// --- Projects Data ---
const projectsData = [
  {
    id: 1,
    projectTitle: 'College of Engineering & Architecture Statistics System',
    img: '/images/cea/login.png',
    gallery: [
      '/images/cea/login.png',
      '/images/cea/localhost_5173_dashboard (2).png',
      '/images/cea/localhost_5173_dashboard (4).png',
      '/images/cea/localhost_5173_dashboard.png',
    ],
    briefDescription:
      'Not yet published. A full-stack web application that allows the users to view the statistics of the CEA Board Exam. Add students, export data, and more.',
    description:
      'Not yet published. A full-stack web application that allows the users to view the statistics of the CEA Board Exam. Add students, export data, and more.',
    techUsed: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    links: {
      viewCode: '#', // Replace with actual links if available
    },
    demo: '#', // Replace with actual link or 'Not Open Source'
  },
  {
    id: 2,
    projectTitle: 'E-Commerce Platform',
    img: '/images/e-commerce/e-commerce.png',
    gallery: ['/images/e-commerce/e-commerce.png'],
    briefDescription:
      'A simple e-commerce platform frontend only. Add products, add to cart, checkout, and more.',
    description:
      'Develop a simple e-commerce platform frontend only. Add products, add to cart, checkout, and more.',
    techUsed: ['Vue.js', 'Tailwind CSS'],
    links: {
      viewCode: 'https://simple-e-commerce-dun.vercel.app/home',
    },
    demo: 'https://simple-e-commerce-dun.vercel.app/home',
  },
  {
    id: 3,
    projectTitle: 'QR Code Generator',
    img: '/images/qr-code/qr.png',
    gallery: ['/images/qr-code/qr.png'],
    briefDescription: 'QR Code Generator for your text or links.',
    description:
      'Created a QR Code Generator. Generate QR Code for your text, link, or image.',
    techUsed: ['React', 'Tailwind CSS'],
    links: {
      viewCode: 'https://qr-code-generator-one-iota.vercel.app/',
    },
    demo: 'https://qr-code-generator-one-iota.vercel.app/',
  },
  {
    id: 4,
    projectTitle: 'Pomodoro Timer',
    img: '/images/pomodoro/pomodoro.png',
    gallery: ['/images/pomodoro/pomodoro.png'],
    briefDescription:
      'A Pomodoro Timer. Helps you focus on your work and improve your productivity.',
    description:
      'A Pomodoro Timer. Helps you focus on your work and improve your productivity.',
    techUsed: ['React', 'Tailwind CSS'],

    links: {
      viewCode: 'https://pomodoro-timer-chi-ten.vercel.app/',
    },
    demo: 'https://pomodoro-timer-chi-ten.vercel.app/',
  },
  {
    id: 5,
    projectTitle: 'Image Color Picker',
    img: '/images/image-color-picker/image-color-picker.png',
    gallery: ['/images/image-color-picker/image-color-picker.png'],
    briefDescription: 'Easily pick the color of the image you want.',
    description: 'Image Color Picker. Pick the color of the image you want.',
    techUsed: ['React', 'Tailwind CSS'],
    links: {
      viewCode: 'https://image-color-picker-lime.vercel.app/',
    },
    demo: 'https://image-color-picker-lime.vercel.app/',
  },
  {
    id: 6,
    projectTitle: 'Cagayan de Oro City Teenage Pregnancy Problem',
    img: '/images/teenage-preg/teenage-preg.png',
    gallery: ['/images/teenage-preg/teenage-preg.png'],
    briefDescription:
      'A simple blog website that highlights the teenage pregnancy problem in the city of Cagayan de Oro.',
    description:
      'A simple blog website that highlights the teenage pregnancy problem in the city of Cagayan de Oro.',
    techUsed: ['React', 'Tailwind CSS'],
    links: {
      viewCode: 'https://cdoc-teenage-pregnancy.vercel.app/',
    },
    demo: 'https://cdoc-teenage-pregnancy.vercel.app/',
  },
  {
    id: 7,
    projectTitle: 'ToDo List',
    img: '/images/todo-list/todo-list.png',
    gallery: ['/images/todo-list/todo-list.png'],
    briefDescription:
      'A simple ToDo List. Add your tasks, and mark them as completed.',
    description:
      'A simple ToDo List. Add your tasks, and mark them as completed.',
    techUsed: ['React', 'Tailwind CSS'],
    links: {
      viewCode: 'https://your-own-todolist.vercel.app/',
    },
    demo: 'https://your-own-todolist.vercel.app/',
  },
  {
    id: 8,
    projectTitle: 'Merge Multiple PDF Files',
    img: '/images/merge-pdf/merge-pdf.png',
    gallery: ['/images/merge-pdf/merge-pdf.png'],
    briefDescription:
      'Merge Multiple PDF Files. Merge multiple PDF files into one.',
    description: 'Merge Multiple PDF Files. Merge multiple PDF files into one.',
    techUsed: ['HTML5', 'Tailwind CSS'],
    links: {
      viewCode: 'https://merge-pdfs.vercel.app/',
    },
    demo: 'https://merge-pdfs.vercel.app/',
  },
  {
    id: 9,
    projectTitle: 'JavaScript Obfuscator',
    img: '/images/javascript-obfuscate/javascript-obfuscate.png',
    gallery: ['./public/images/javascript-obfuscate/javascript-obfuscate.png'],
    briefDescription: 'JavaScript Obfuscator. Obfuscate your JavaScript code.',
    description: 'JavaScript Obfuscator. Obfuscate your JavaScript code.',
    techUsed: ['React', 'Tailwind CSS'],
    links: {
      viewCode: 'https://javascript-obfuscate.vercel.app/',
    },
    demo: 'https://javascript-obfuscate.vercel.app/',
  },
];

// --- Collaborations Data ---
const collaborationsData = [
  {
    id: 1,
    description:
      'Collaborated with Jayson, a student - aspiring computer engineer, to develop a School - Club Finder. A simple website that allows you to find the club you want to join in your school.',
    img: '/images/club-finder/club-finder.png',
    gallery: ['/images/club-finder/club-finder.png'],
    partner: {
      name: 'Jayson',
      role: 'Student - Aspiring Computer Engineer',
      initials: 'J',
    },
    date: 'March 2025',
    links: {
      viewCode: 'https://club-finder-ruby.vercel.app/',
    },
    projectTitle: 'School - Club Finder Collaboration',
    techUsed: ['Vue.js', 'Tailwind CSS'],
    demo: 'https://club-finder-ruby.vercel.app/',
  },
];

// --- Helper Functions ---
export const getSkills = () => {
  // No error handling needed for static data, but could be added
  return skillsData;
};

export const getProjects = () => {
  return projectsData;
};

export const getCollaborations = () => {
  return collaborationsData;
};

// Add more specific functions if needed, e.g., getProjectById
// export const getProjectById = (id) => {
//   return projectsData.find(project => project.id === id);
// };
