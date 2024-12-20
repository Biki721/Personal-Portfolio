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

export const HERO_CONTENT = `I'm a passionate full-stack developer with a background in automation, dedicated to building scalable and efficient web applications. With over 3 years of experience, I have refined my skills in front-end technologies like React and back-end technologies including Node.js, Django, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to deliver innovative solutions that drive business growth, enhance productivity, and create exceptional user experiences.`;

export const ABOUT_ME = `Hello! I'm Biki Dey, a full-stack developer with over three years of experience building impactful web applications. My journey started in automation, where I developed an eye for streamlining complex processes and ensuring efficiency-a skill I now apply in full-stack development. I'm passionate about leveraging technology to create solutions that not only meet business goals but also deliver outstanding user experiences.`;

export const ABOUT_APPROACH = `For me, development is more than writing code—it's about understanding user needs, adapting to new challenges, and creating applications that are both functional and enjoyable to use. I believe in continuous learning, staying updated with the latest trends, and exploring new tools and frameworks to deliver solutions that keep pace with industry standards.`;

export const ABOUT_FUTURE = `As I continue my career, my goal is to deepen my full-stack expertise and collaborate with forward-thinking teams to drive innovation. Whether it's optimizing backend performance or designing intuitive front-end experiences, I'm committed to delivering applications that make a real difference.`;

export const EXPERIENCES = [
  {
    year: "05/2023 - Present",
    role: "Automation and Web Developer",
    company: "Hewlett Packard Enterprise",

    description: `Led the processing of over 8,000 documents per month by implementing 13 automated checks—such as spelling, copyright, fonts, color palette, etc.—with a 95% accuracy rate. Built scalable Django REST APIs to expose these checks, integrating them into a React application, which achieved a 4% reduction in validation headcount and significantly enhanced operational efficiency.`,
    technologies: [
      "Django Rest Framework",
      "React.js",
      "tailwind CSS",
      "MySQL",
      "Redux Toolkit",
    ],
  },
  {
    year: "10/2021 - 04/2023",
    role: "Full Stack Developer",
    company: "Freelance",
    description: `Created an e-commerce platform tailored for wholesale and retail clients using Django’s MVC framework, ensuring a robust backend. Implemented MySQL for streamlined data management, which boosted operational efficiency by 25% through automating order management, inventory tracking, and customer service. This project was pivotal in driving revenue growth for a client transitioning to an online presence.`,
    technologies: ["Django", "Javascript", "Bootstrap", "MySQL"],
  },
  {
    year: "04/2020 - 09/2021",
    role: "Project Intern",
    company: "Forsk Technologies",
    description: `Engineered a comprehensive event management platform for coding courses, leveraging Django REST Framework to create robust RESTful APIs that integrated seamlessly with a React frontend, resulting in a dynamic and intuitive user interface. Utilized MySQL for efficient data management. Its scalable architecture enhanced operational efficiency by 30%, allowing staff to concentrate on delivering high-quality educational content and significantly improving the overall learning experience.`,
    technologies: ["Django Rest Framework", "React", "PostgreSQL", "Boostrap"],
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
