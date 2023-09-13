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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
    
  } from "../assets";

import praveen from '../assets/praveenkumar.png';
import achut from '../assets/achut.png';
import rev from '../assets/rev.png';
import flutter from '../assets/tech/flutter.png';
import dart from '../assets/tech/dart.png'; 
import sony from '../assets/tech/sony.png';
  
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
      title: "Photographer",
      icon: sony,
    },
    {
      title: "Flutter Application Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Dart",
      icon: dart,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "Flutter",
      icon: flutter,
    },
    
  ];
  
  const experiences = [
    
    {
      title: "Full stack Developer",
      company_name: "Genisis",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "April 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js,Dart,Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Flutter Developer",
      company_name: "fiverr",
      icon: creator,
      iconBg: "#383E56",
      date: "December 2022 - Present",
      points: [
        "Freelancing on fiverr.",
        "maintaining Android applications using Dart,Flutter and other related technologies.",
        
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Web Developer",
      company_name: "Gym Guru",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but aditya proved me wrong.",
      name: "S Praveen Kumar",
      designation: "Director",
      company: "Strides arcolab ltd",
      image: praveen,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like aditya does.",
      name: "Achuyth P Rao",
      designation: "CFO",
      company: "GymGuru",
      image: achut,
    },
    {
      testimonial:
        "After aditya optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Aditya Revankar",
      designation: "CTO",
      company: "Tribal Welfare Assoc.",
      image: rev,
    },
  ];
  
  const projects = [
    {
      name: "3d portfolio",
      description:
        "Portfolio app which integrates the dynamic UI capabilities of React with the immersive 3D rendering  of Three.js ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Mid Journey clone",
      description:
        "Web application that enables users to promt using text to generate an image, leveraging dall-E api.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "DALL-E",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/adityarevankarp/midJ-clone",
    },
    {
      name: "Gold Chain",
      description:
        "A secure transparent supply chain for Conventional Trust based gold jewelry business. using solana blockchain.",
      tags: [
        {
          name: "Rust",
          color: "blue-text-gradient",
        },
        {
          name: "Solana",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/adityarevankarp/GoldChain",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };