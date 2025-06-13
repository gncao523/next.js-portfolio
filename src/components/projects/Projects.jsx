import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./motion";
import Featured from "./Featured";
import naviro from "../../assets/naviro.png";
import cropperfinance from "../../assets/cropperfinance.png";
import perfectyourtrading from "../../assets/perfectyourtrading.png";
import apartmentsite from "../../assets/apartmentsite.png";
import smaugs from "../../assets/smaugs.png";
import bashableart from "../../assets/generateai.png";
import car from "../../assets/car.png"
import publicgoods from "../../assets/publicgoods.png"
import template from "../../assets/template.mp4"
import muchbetterai from "../../assets/muchbetterai.png"
import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";
import knife from "../../assets/knife.png";
import partner from "../../assets/partner.png";
import slowrug from "../../assets/slowrug.png";
import bobbeactive from "../../assets/bobbeactive.png";

export const projectsData = [
  {
    id: 0,
    thumbnail: partner,
    title: "My Shopify Partner Account",
    description:
      "This is my Shopify Partner Account showing my past working experience.",
    live: "#",
    code: "#",
    tech: ["Shopify", "Liquid", "JavaScript", "Shopify CLI"],
    featured: true,
  },
  {
    id: 1,
    thumbnail: bobbeactive,
    title: "Bobbeactive",
    description:
      "Bobbe Active is a premium activewear brand built on Shopify, with a focus on luxury, sustainability, and performance. The store features a fully custom theme developed using Shopify's Online Store 2.0, allowing for flexible, modular content and easy updates through dynamic sections. Collections like 'Tops,' 'Skirts,' and 'Shop by Color' are powered by smart collections to streamline merchandising and improve navigation. Customer engagement is enhanced through integrated reviews, a Q&A section, and newsletter signups powered by Shopify Email and Klaviyo. The site supports free shipping messaging, dynamic product highlights, and localized settings for the U.S. market through Shopify Markets. A seamless mobile experience, fast load times, and strong visual branding help position Bobbe Active as a standout in luxury court apparel.",
    live: "https://bobbeactive.com/",
    code: "#",
    tech: ["Shopify", "Liquid", "JavaScript", "Shopify CLI"],
    featured: true,
  },
  {
    id: 2,
    thumbnail: publicgoods,
    title: "Public Goods",
    description:
      "The project was built on Shopify Plus and included custom theme development using Liquid, HTML5, and Tailwind CSS. I focused heavily on performance and accessibility, ensuring a seamless experience for users, including those relying on screen readers or keyboard navigation. The store features a unique membership and subscription model that offers members discounted pricing, free shipping, and early access to product launches. I developed a tailored checkout flow and integrated third-party subscription tools to support this functionality. A key part of the project was creating a smart refill system that simplifies product replenishment while helping reduce plastic waste.",
    live: "https://publicgoods.com/",
    code: "#",
    tech: ["Liquid", "JavaScript", "Shopify API", "GraphQL", "RabbitMQ"],
    featured: true,
  },
  {
    id: 3,
    thumbnail: knife,
    title: "Sharp Knife",
    description:
      "As part of the project, I fully customized the product page to support a clean, content-rich layout aligned with the brand's minimalist aesthetic. I implemented dynamic templates using Shopify's Online Store 2.0 architecture, enabling flexible content blocks for product storytelling, ingredient details, refill instructions, and sustainability impact. For subscription-based items, I built conditional logic to display smart reorder options and membership pricing, creating a seamless shopping experience tailored to both regular and member customers.",
    live: "https://sharpknife.com/",
    code: "#",
    tech: ["Liquid", "JavaScript", "Theme Kit"],
    featured: true,
  },
  {
    id: 4,
    thumbnail: car,
    title: "Car-Artistry",
    description:
      "Car-Artistry is a custom automotive-themed store built on Shopify, offering high-quality posters, keychains, and accessories for car enthusiasts. The store features a clean, responsive design powered by Shopify's Online Store 2.0, with dynamic promotional messaging for seasonal sales, bundle offers, and free shipping. Customers can personalize their own products using built-in customization options, and seamless checkout, secure payments, and multilingual support enhance the shopping experience. With integrated upsell offers like Buy 2, Get 1 Free and a strong visual layout, the site is optimized for both conversions and customer satisfaction.",
    live: "https://car-artistry.com",
    code: "https://car-artistry.com",
    tech: ["Shopify", "Liquid", "JavaScript", "Shopify CLI"],
    featured: true,
  },
  {
    id: 7,
    video: template,
    title: "Template Manage System Shopify App",
    description:
      "Decentralized Ecosystem that Empowers Projects & Maximizes Yield to move Defi forward on Solana. Swap, Yield Farming, Staking, IDO Launchpad & more.",
    live: "#",
    code: "#",
    tech: ["Next.js", "Node.js", "Mongodb", "Node.js"],
    featured: false
  },
  {
    id: 9,
    thumbnail: bashableart,
    title: "Bashable Art Shopify App",
    description: "Bashable is an AI tool to generate beautiful realstic images.",
    live: "https://bashable.art/",
    code: "https://bashable.art/",
    featured: false,
    tech: ["Next", "Node", "ubuntu", "TailwindCSS"]
  },
  {
    id: 11,
    thumbnail: apartmentsite,
    title: "Flair Shopify App",
    description: "Flair is a multifamily technology studio dedicated to building products and services to help you lease more with less.",
    live: "https://www.getflair.io",
    code: "https://www.getflair.io",
    featured: false,
    tech: ["React", "Django", "PostgreSQL", "Docker", "AWS"]
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Portfolio"
      subtitle="Recent projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40 mb-8">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projectsData
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>

      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {projectsData
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              video={e.video}
              key={i}
            />
          ))}
      </div>
    </Section>
  );
};

export default Projects;
