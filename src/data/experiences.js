import React from "react";

import ImgSelfEmployed from "images/experiences/self-employed.jpg";
import ImgKiid from "images/experiences/kiid.jpg";
import ImgPypestream from "images/experiences/pypestream.jpg";
import ImgSpinsci from "images/experiences/spinsci.jpg";
import ImgLiven from "images/experiences/liven.jpg";
import ImgTox from "images/experiences/tox.jpg";
import ImgInteractive from "images/experiences/interactive.jpg";

export default [
  {
    title: "Senior Software Engineer",
    icon: {
      asset: {
        url: <img src={ImgSelfEmployed} alt="self-employed" />,
      },
    },
    tags: [
      "ReactJs",
      "VueJs",
      "NodeJS",
      "TypeScript",
      "React Native",
      "ReduxJS",
      "AWS",
      "Firebase",
      "Angular",
    ],
    employment: {
      company: "Self Employed",
      period: "May 2016 - Present",
      url: "",
    },
    heading: "",
    achievements: [
      "Have been as an individual freelancer helping software companies build their web & mobile projects.",
      "Deliver perfect final results for project requirements.",
      "Meet the deadlines and always maintain high code quality.",
      "Familiar with remote team working environment",
    ],
  },
  {
    title: "Software Engineer",
    icon: {
      asset: {
        url: <img src={ImgKiid} alt="kiid-company" />,
      },
    },
    employment: {
      company: "Kiid · Contract",
      period: "Apr 2021 - Nov 2022 · 1 yr 8 mos",
      url: "https://kiid.ca/",
    },
    heading:
      "Worked as a Front End Developer to create a complete childcare solution which allows the employees for booking trusted babysitters, early childhood educators, and tutors.",
    achievements: [
      "Designed & Converted various screens for childcare solution into React.js-based codebase",
      "Contributed on the dashboard UIs using React.js and Chakra-UI, where I built several layered interactive graphs to display complex data in a digestible manner.",
      "Wrote unit tests for React using Jest",
      "Mentored new developers to enable them to hit the ground running",
      "Involved heavily with architectural decisions in both front end and backend (React and Node.js)",
    ],
    tags: [
      "ReactJs",
      "NextJs",
      "Context API",
      "Chakra-UI",
      "Axios",
      "TypeScript",
      "Jest",
      "Cypress",
    ],
  },
  {
    title: "Senior Frontend Developer",
    icon: {
      asset: {
        url: <img src={ImgPypestream} alt="pypestream-company" />,
      },
    },
    employment: {
      company: "Pypestream · Contract",
      period: "May 2020 - Oct 2021 · 1 yr 6 mos",
      url: "https://www.pypestream.com/",
    },
    heading:
      "Worked as a Front End Developer to create an automated conversational AI solution which elevates the customer experience and engagement to a whole new level.",
    achievements: [
      "Worked on Engagement Studio team, and created Microapp builder, which is kind of no-code, low-code visual editor, and you can quickly build and deploy microapps in a pype and other channels.",
      "Provided a palette of rich media widgets, real-time previews and an intuitive interface.",
      "Provided chat history functionality for live agent and chatbot conversations",
      "Advocated unit testing to reduce regression and stabilize existing services",
    ],
    tags: [
      "ReactJs",
      "Redux",
      "TypeScript",
      "Material-UI",
      "SCSS",
      "Bootstrap",
      "Storybook",
      "Jenkins",
      "Jest",
      "Enzyme",
      "AWS",
    ],
  },
  {
    title: "Software Engineer",
    icon: {
      asset: {
        url: <img src={ImgSpinsci} alt="spinsci-company" />,
      },
    },
    employment: {
      company: "SpinSci Technologies LLC · Contract",
      period: "Apr 2019 - Apr 2020 · 1 yr 1 mo",
      url: "https://spinsci.com/",
    },
    heading:
      "Worked as a Full Stack Developer to create a healthcare platform, which provides Driving Patient engagement by improving the way that patients and providers interact with each other.",
    achievements: [
      "Mainly worked on Patient Notify module which improves the patient experience by providing the reminder notifications. As the user you can set different types of reminders like Appointment Reminder, Bill Reminder, Orders Reminder and stuff like that, and they are sent with SMS, Voice and Email",
      "Created the user interfaces by using React.js and Ant-Design Component library",
      "Designed and created APIs to meet the needs of the goals with Mirth Backend",
      "Built the user authentication module with AWS Cognito",
      "Set up and managed AWS Lambda",
      "Complete with documentation and tests",
    ],
    tags: [
      "ReactJs",
      "Redux",
      "TypeScript",
      "Ant-Design",
      "SCSS",
      "Mirth",
      "PostgreSQL",
      "SQL",
      "AWS",
    ],
  },
  {
    title: "Frontend Developer",
    icon: {
      asset: {
        url: <img src={ImgLiven} alt="liven-company" />,
      },
    },
    employment: {
      company: "Liven · Contract",
      period: "Feb 2018 - Jul 2019 · 1 yr 6 mos",
      url: "https://www.liven.love/",
    },
    heading:
      "Worked as a Front End Developer to create the engagement platform for restaurants, hospitality, venues & events.",
    achievements: [
      "Architected, developed, and maintained tools to increase our scale and efficiency.",
      "Contributed on web & mobile development using React and React Native",
      "Created mobile-first, responsive interfaces using Vue.js and integrated JSON APIs.",
      "Implemented the dynamic styling of components with the help of TailwindCSS framework",
      "Integrated the front-end UI with the Python back end of this legacy application and doubled the number of unit tests for the product",
    ],
    tags: [
      "ReactJs",
      "React Native",
      "Redux",
      "VueJs",
      "NuxtJs",
      "Vuex",
      "TypeScript",
      "Jest",
      "Python",
      "Bootstrap",
      "TailwindCSS",
    ],
  },
  {
    title: "Software Engineer",
    icon: {
      asset: {
        url: <img src={ImgTox} alt="tox-company" />,
      },
    },
    employment: {
      company: "Tenex Developers · Contract",
      period: "May 2016 - Feb 2018 · 1 yr 10 mos",
      url: "",
    },
    heading: "",
    achievements: [
      "Build solid, scalable software that met the future demands of clients",
      "Used best practices and developer tools for rapid, efficient development, such as writing very DRY code, using debuggers, and separation of concerns",
      "Learned the ins and outs of test-driven development and how it will save development time in the future",
      "Adapted quickly by working on multiple frameworks simultaneously",
      "Used new technology that was learned quickly because it was a better fit for the task.",
      "Implemented new features for clients like drive and walk scores for a real estate app in native Android and native iOS apps.",
    ],
    tags: ["ReactJs", "React Native", "Android", "iOS", "Bootstrap"],
  },
  {
    title: "Software Engineer",
    icon: {
      asset: {
        url: <img src={ImgInteractive} alt="liven-company" />,
      },
    },
    employment: {
      company: "Interactive Intelligence",
      period: "Mar 2013 - May 2016 · 3 yrs 3 mos",
      url: "https://interactive-intelligence.github.io/",
    },
    heading: "Started as an intern and became full-time in 2014",
    achievements: [
      "Learned Node.js in a testing environment, where the test environment was connected to a live development server.",
      "Implemented a secure TLS connection between the development server and the test environment.",
      "Learned an extensive amount of JavaScript and techniques for more performant and reusable code by building out modular libraries.",
      "Implemented a pairing test, which paired the test environment to the development server based on a schedule.",
    ],
    tags: [
      "JavaScript",
      "Node.js",
      "React.js",
      "Angular",
      "jQuery",
      "Wordpress",
      "Bootstrap",
    ],
  },
];
