import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

export const HERO_CONTENT = `I'm a passionate full-stack developer with a background in automation, dedicated to building scalable and efficient web applications. With over 3 years of experience, I have refined my skills in front-end technologies like React, Next JS and back-end technologies including Node.js, Django, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to deliver innovative solutions that drive business growth, enhance productivity, and create exceptional user experiences.`;

export const ABOUT_ME = `Hello! I'm Biki Dey, a full-stack developer with over three years of experience building impactful web applications. My journey started in automation, where I developed an eye for streamlining complex processes and ensuring efficiency-a skill I now apply in full-stack development. I'm passionate about leveraging technology to create solutions that not only meet business goals but also deliver outstanding user experiences.`;

export const ABOUT_APPROACH = `For me, development is more than writing code—it's about understanding user needs, adapting to new challenges, and creating applications that are both functional and enjoyable to use. I believe in continuous learning, staying updated with the latest trends, and exploring new tools and frameworks to deliver solutions that keep pace with industry standards.`;

export const ABOUT_FUTURE = `As I continue my career, my goal is to deepen my full-stack expertise and collaborate with forward-thinking teams to drive innovation. Whether it's optimizing backend performance or designing intuitive front-end experiences, I'm committed to delivering applications that make a real difference.`;

export const EXPERIENCES = [
  {
    year: "05/2023 - Present",
    role: "Automation and Web Developer",
    company: "Hewlett Packard Enterprise",

    description: [
      `Architected & deployed scalable RESTful APIs using Django, processing 8,000+ documents/month with 13 automated validation checks (spelling, copyright, fonts, color), achieving 95% accuracy and reducing manual review effort by 4%.`,
      `Built a robust Python-based web crawler to automate partner platform audits — validating links, images, logos, and content freshness — cutting QA workload by 18 FTEs with 98% audit accuracy.`,
      `Engineered dynamic UI components in React.js for account selection, scheduling, and targeting workflows. Developed supporting Express.js APIs, and integrated SharePoint for secure enterprise data access.`,
    ],
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
  },
  {
    year: "10/2021 - 04/2023",
    role: "Full Stack Developer",
    company: "Freelance",
    description: [
      `Developed a full-stack contactless restaurant ordering platform using React.js, Node.js, Express.js, and MongoDB, featuring dynamic QR menus linked to table numbers for real-time ordering and payments. Integrated Razorpay and UPI for secure digital transactions, improving table turnover by 40% and reducing staff workload by 30% through automated service.`,
      `Built a scalable full-stack e-commerce platform using Django, React.js, PostgreSQL, and Tailwind CSS, supporting 500+ concurrent users with optimized caching, routing, and DB queries. Implemented OAuth 2.0 and JWT for secure third-party logins and session handling. Used Redux and Cloudinary to manage state and media, cutting login issues by 30% and enhancing session reliability.`,
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Django",
      "PostgreSQL",
      "Tailwind CSS",
      "OAuth 2.0",
      "JWT",
      "Redux",
    ],
  },
  {
    year: "04/2020 - 09/2020",
    role: "Project Intern",
    company: "Forsk Technologies",
    description: [
      `Engineered a comprehensive event management system for coding courses using Python, Django, React.js, and MySQL, in collaboration with a 4-member team.`,
      `Integrated RESTful APIs to enable smooth frontend-backend communication, supporting features like course registration, attendance tracking, and user interaction.`,
    ],
    technologies: ["Python", "Django", "React.js", "MySQL", "RESTful APIs"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

// export const CONTACT = {
//   address: "767 Fifth Avenue, New York, NY 10153 ",
//   phoneNo: "+12 4555 666 00 ",
//   email: "me@example.com",
// };
