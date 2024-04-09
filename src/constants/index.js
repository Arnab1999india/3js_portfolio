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
    meta,
    starbucks,
    tesla,
    shopify,
    doctor,
    jobit,
    tripguide,
    threejs,
    pandas,nest,
    numpy,postgresql,
    python,sql,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Nest JS",
      icon: nest,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "Postgre SQl",
      icon: postgresql,
    },
    {
      name: "Sql",
      icon: sql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Vista Intelligence Pvt Ltd",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2022 - January 2024",
      points: [
        "Developed and maintained a suite of APIs for options markets, specializing in intraday options products, and multiday equity model APIs.",
        "Collaborated closely with cross-functional teams, including financial analysts and traders, to ensure APIs met the specific requirements of the financial industry.",
        "Maintained a deep understanding of financial markets and industry standards, enabling precise and relevant testing",
        "Designed and implemented intraday future multi-trade APIs using Nest.js, optimizing trade execution and data processing",
        "Demonstrated expertise in database integration by seamlessly connecting APIs with PostgreSQL, enhancing data retrieval and storage capabilities.",
        "Integrated data from diverse sources and maintained databases to ensure real-time market data access",
        "Designed and implemented a React-based web application for displaying real-time and historical stock market data from various intraday and multiday stock APIs.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Online Doctor Appointment System",
      description:
        "Our platform facilitates doctor appointments with ease. Admins can create, edit, or remove doctor accounts.Users can create, edit, and delete their own accounts. Doctors manage their availability and personal details. Users effortlessly book appointments for themselves or others, receiving confirmations. Features include user accounts, appointment reminders, and feedback systems",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
      ],
      image: doctor,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };