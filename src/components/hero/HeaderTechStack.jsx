import { motion } from "framer-motion";

import {
  NextJsIcon,
  TailwindCssIcon,
} from "../icon/Icons";

import { SiShopify, SiGithub, SiGitlab, SiSlack, SiGooglecloud, SiStripe, SiFacebook, SiInstagram, SiTwitter, SiLinkedin, SiPaypal, SiGoogle, SiApple, SiYoutube, SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiLaravel, SiDocker, SiVercel, SiNetlify, SiGraphql, SiPython, SiReact, SiTypescript, SiExpress, SiAngularjs, SiVuedotjs, SiNodedotjs, SiFigma, SiSketch, SiXcode, SiAzuredevops, SiBitbucket} from "react-icons/si";

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.p
        className="mb-2.5 text-sm md:text-xl font-semibold text-[#7000ff] dark:text-[#7000ff]"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Current favorite tech stack:
      </motion.p>
      <motion.ul
        className="flex items-center gap-3.5 text-slate-600 dark:text-slate-300"
        initial="hide"
        
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiShopify className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiGithub className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiGitlab className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiNodedotjs className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiExpress className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiTypescript className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiSlack className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiAngularjs className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiReact className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#3e9c3e]">
            <SiVuedotjs className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]">
            <NextJsIcon className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#06B6D4]">
            <TailwindCssIcon className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#6e50c2]">
            <SiLaravel className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#6e50c2]">
            <SiPostgresql className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#6e50c2]">
            <SiMongodb className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default HeaderTechStack;
