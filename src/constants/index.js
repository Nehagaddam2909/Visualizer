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
    name: "Redux Toolkit",
    icon: redux,
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
    title: "Covid start",
    company_name: "Maharashtra",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "The first case of COVID-19 in Maharashtra was confirmed on March 9, 2020",
      "The largest single-day spike in COVID-19 cases in Maharashtra was reported on April 18, 2021",
      "IAs of May 20, 2021, the first wave of COVID-19 in Maharashtra extended from March 2020 to mid-February 2021, with the least number of daily cases (656) recorded on February 12, 2021",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Covid peak",
    company_name: "Maharashtra",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "The second wave of COVID-19 in Maharashtra hit between February-July 2021, with the peak of the disease during April-May 2021",
      "As of February 28, 2022, there were over 2.7 million confirmed cases of COVID-19 in Maharashtra",
      "IAs of June 6, 2022, there were 7,429 active COVID-19 cases in Maharashtra, and the health minister warned that cases were likely to increase in June and July",
      "The total number of confirmed cases increased to 335 on 1 April, with 30 people in Mumbai, 2 in Pune and 1 in Buldhana testing positive. The death toll rose to 16 after 4 people, including one in Dharavi,[50] died from the virus in Mumbai",
    ],
  },
  {
    title: "COVID end",
    company_name: "Maharashtra",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "The second wave of COVID-19 in Maharashtra hit between February-July 2021, with the peak of the disease during April-May 2021",
      "As of February 28, 2022, there were over 2.7 million confirmed cases of COVID-19 in Maharashtra",
      "IAs of June 6, 2022, there were 7,429 active COVID-19 cases in Maharashtra, and the health minister warned that cases were likely to increase in June and July",
      "The total number of confirmed cases increased to 335 on 1 April, with 30 people in Mumbai, 2 in Pune and 1 in Buldhana testing positive. The death toll rose to 16 after 4 people, including one in Dharavi,[50] died from the virus in Mumbai",
    ],
  },
  {
    title: "Covid chances",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "As of May 14, 2023, there were over 44.9 million confirmed cases of COVID-19 in India, with over 531,000 deaths. It is unclear how many of these cases were specifically in Maharashtra during this time period",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "On 23 April, the state reported a spike of 778 fresh cases of coronavirus. In addition, six people in Mumbai, five in Pune, and one each in Navi Munbai, Nandurbar and Dhule died, taking the overall death toll to 283.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
