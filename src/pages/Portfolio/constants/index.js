import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  dandanino,
  nikted,
  freelancer,
  ponisha,
  abolfazlBook,
  abolfazBook,
  jobit,
  dandanino_landing,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "ReduxToolkit",
    icon: redux,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Implemented websites, mobile applications, and landing pages from concept through deployment.",
      "Standardized all output with a new, responsive, mobile-first approach and strategy.",
      "Assessed UX and UI designs for technical feasibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Vue.js Developer",
    company_name: "Nikted",
    icon: nikted,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - April 2021",
    points: [
      "Developed and maintained PWA web app using Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed standard and ad hoc reports in graph format as required.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ponisha",
    icon: ponisha,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js, Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Dandanino",
    icon: dandanino,
    iconBg: "#E6DE10",
    date: "Sep 2022 - March 2023",
    points: [
      "Developed Full stack next.js Ecommerce app.",
      "Designed user-friendly ui-ux",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Abolfazl Book",
    icon: abolfazlBook,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing self designed projects.",
      "Developed mern-stack chat-app, job-finding, note application, abolfazlbook and .... applications",
      "Learned to develop an express-server with mongoDb or Postgresql-redis.",
      "Contributed in several projects to help them grow faster, often colleges projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abolfazl proved me wrong.",
    name: "Sara Mohebi",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abolfazl does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abolfazl optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Abolfazl Book",
    description:
      "Web-based Platform which represents a self designed desktop page, you can navigate between opened apps, minimize or maximize them, listen to music, read documents , ... .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "text-purple-500"
      }
    ],
    image: abolfazBook,
    source_code_link: "https://github.com/Abolfazl-ghodrati-k/Abolfazl-book",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dandanino",
    description:
      "A fullstach next.js Ecommerce app which will help company in selling 4 kind of products, has Admin-annel, user profile section which helps users to check orders state.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "SEO",
      }
    ],
    image: dandanino_landing,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
