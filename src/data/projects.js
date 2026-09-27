import cyberParkImg from "../img/Dashbord1.png";
import aiops from "../img/aiops.png"

import techgear from "../img/techgear.png";

const projects = [
  {
    id: 0,
    title: "AiOps",
    desc: "Projet DevOps personnel, phase-gaté : pipeline CI/CD complet (GitHub Actions), conteneurisation Docker, orchestration Kubernetes, infrastructure as code (Terraform) et déploiement GitOps avec Argo CD (self-heal automatique validé).",
    img: aiops,
    tags: ["Kubernetes", "Terraform", "Docker", "GitHub Actions", "Argo CD", "NestJS"],
    github: "https://github.com/AbdelKarim-Ensi/AiOps"
  },
{
  id: 1,
  title: "TechGear",
  desc: "TechGear est une application e-commerce full-stack complète : catalogue produits, panier, paiement Stripe, authentification (email + Google), gestion des commandes et back-office admin avec tableaux de bord analytiques.",
  img: techgear,
  tags: ["NestJS", "Angular", "PostgreSQL", "Stripe", "Docker", "Nginx"],
  link: "https://techgear-frontend.vercel.app",
  github: "https://github.com/AbdelKarim-Ensi/E-Commerce",
},
];

export default projects;