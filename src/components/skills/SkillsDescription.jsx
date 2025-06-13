import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

const SkillsDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-left lg:pt-0"
    >
      <h2 className="font-medium text-2xl text-amber-500 dark:text-amber-200 mt-5 mb-5">
        <Reveal width="100%">
          My technical Level
        </Reveal>
      </h2>
      <p className="text-sm font-light text-gray-800 dark:text-gray-300">
        My technical expertise includes {" "}
        <span className="font-semibold text-black dark:text-white">
          Shopify theme customization and Shopify app development as well as Shopify API integration, checkout UI extension, and more.
        </span>
      </p>

      <h2 className="font-semibold text-lg text-amber-500 dark:text-amber-200 mt-5">
        <Reveal width="100%">Shopify Theme Customization</Reveal>
      </h2>
      <p className="text-sm font-light">
        I specialize in building clean, minimalistic, and highly functional Shopify storefronts. My focus is on crafting user-friendly experiences that align with brand identity while ensuring responsive design and performance optimization. Whether modifying an existing theme or creating a custom one from scratch, I aim to deliver visually appealing and conversion-driven results.
      </p>

      <h2 className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5">
        <Reveal width="100%">Shopify App Development</Reveal>
      </h2>

      <p className="text-sm font-light">
        With in-depth knowledge of the Shopify ecosystem, I build robust and scalable custom apps to extend store functionality. I am proficient in using Shopify's Admin and Storefront APIs, as well as technologies like Node.js, React, and Polaris. I also have experience creating embedded apps, integrating third-party services, and optimizing app performance.
      </p>

    </motion.div>
  );
};

export default SkillsDescription;
