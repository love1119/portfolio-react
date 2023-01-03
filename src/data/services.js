import React from "react";

import ImgFrontEnd from "../images/services/frontend.svg";
import ImgMern from "../images/services/mern.svg";
import ImgPern from "../images/services/pern.svg";
import ImgJam from "../images/services/jam.svg";
import ImgExcel from "../images/services/excel-to-web.png";
import ImgEcommerce from "../images/services/ecommerce.svg";

export default [
  {
    icon: {
      asset: {
        url: <img src={ImgFrontEnd} alt="frontend-development" />,
      },
    },
    tags: [
      "HTML",
      "CSS",
      "SCSS",
      "ReactJs",
      "VueJs",
      "GatsbyJs",
      "NextJs",
      "NuxtJs",
      "Tailwind-css",
      "Material-UI",
      "Ant-Design",
      "Bootstrap",
      "Firebase",
      "Vite",
      "Figma",
      "Canva",
    ],
    title: "Frontend Development",
  },
  {
    icon: {
      asset: {
        url: <img src={ImgMern} alt="mern-development" />,
      },
    },
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Typescript",
      "Next.js",
      "Stripe",
      "REST APIs",
    ],
    title: "MERN Stack Development",
  },
  {
    icon: {
      asset: {
        url: <img src={ImgPern} alt="pern-development" />,
      },
    },
    tags: [
      "React.js",
      "PostgreSQL",
      "Express.js",
      "Node.js",
      "Typescript",
      "Next.js",
    ],
    title: "PERN Stack Development",
  },
  {
    icon: {
      asset: {
        url: <img src={ImgJam} alt="jam-development" />,
      },
    },
    tags: [
      "Next.js",
      "Gatsby.js",
      "GraphQL",
      "FaunaDB",
      "Contentful CMS",
      "Sanity CMS",
      "Strapi CMS",
      "Ghost CMS",
      "Typescript",
      "Serverless Functions",
      "Firebase",
    ],
    title: "JAM Stack Development",
  },
  {
    icon: {
      asset: {
        url: <img src={ImgExcel} alt="excel-to-web" />,
      },
    },
    tags: [
      "Excel",
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "Charts",
      "React-Table",
      "Chart.js",
      "Plotly",
      "React-Admin",
    ],
    title: "Excel to Web Conversion",
  },
  {
    icon: {
      asset: {
        url: <img src={ImgEcommerce} alt="ecommerce-development" />,
      },
    },
    tags: [
      "React-Admin",
      "React.js",
      "Next.js",
      "Gatsby.js",
      "Typescript",
      "Stripe",
      "CMS",
    ],
    title: "Ecommerce Development",
  },
];
