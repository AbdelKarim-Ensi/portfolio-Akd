import cyberParkImg from "../img/Dashbord1.png";

import techgear from "../img/techgear.png";

const projects = [
  {
    id: 1,
    title: "Cyber Park",
    desc: "Cyber Park est une plateforme web de gestion des ressources humaines",
    img: cyberParkImg,
    tags: ["Angular", "NodeJs", "CSS", "Firebase"],
    link: "",
    github: "https://github.com/AbdelKarim-Ensi/Cyber-Park-Frontend"
  },
{
  id: 2,
  title: "TechGear",
  desc: "TechGear est une application e-commerce full-stack complète : catalogue produits, panier, paiement Stripe, authentification (email + Google), gestion des commandes et back-office admin avec tableaux de bord analytiques.",
  img: techgear,
  tags: ["NestJS", "Angular", "PostgreSQL", "Stripe", "Docker", "Nginx"],
  link: "https://techgear-frontend.vercel.app",
  github: "https://github.com/AbdelKarim-Ensi/E-Commerce-Frontend",
},
];

export default projects;