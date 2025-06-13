import "./SkillsMarquee.css";

import react from "../../assets/yellow/reacty.png";
import javascript from "../../assets/yellow/javascripty.png";
import mysql from "../../assets/yellow/mysqly.png";
import python from "../../assets/yellow/pythony.png";
import css from "../../assets/yellow/tailwindy.png";
import nextjs from "../../assets/yellow/nexty.png";
import redux from "../../assets/yellow/reduxy.png";
import ubuntu from "../../assets/yellow/ubuntuy.png";
import php from "../../assets/yellow/php.png";
import django from "../../assets/yellow/django.png";
import aspnet from "../../assets/yellow/aspnet.png";
import c_sharp from "../../assets/yellow/c_sharp.png";
import laravel from "../../assets/yellow/laravel.png";
import mongodb from "../../assets/yellow/mongodb.png";
import wordpress from "../../assets/yellow/wordpress.png";
import postman from "../../assets/yellow/postmany.png";
import git from "../../assets/yellow/gity.png";
import { motion } from "framer-motion";

const skillsData = [
  {
    id: 0,
    image: javascript,
    title: "Javascript",
  },
  {
    id: 1,
    image: react,
    title: "React",
  },
  {
    id: 2,
    image: nextjs,
    title: "Next.js",
  },
  {
    id: 3,
    image: javascript,
    title: "Javascript",
  },
  {
    id: 4,
    image: python,
    title: "Python",
  },
  {
    id: 5,
    image: redux,
    title: "React-Redux",
  },
  {
    id: 6,
    image: css,
    title: "Tailwind CSS",
  },
  {
    id: 7,
    image: php,
    title: "PHP",
  },
  {
    id: 8,
    image: laravel,
    title: "Laravel",
  },
  {
    id: 9,
    image: wordpress,
    title: "WordPress",
  },
  {
    id: 10,
    image: mysql,
    title: "MySQL",
  },
  {
    id: 11,
    image: mongodb,
    title: "MongoDB",
  },
  {
    id: 12,
    image: postman,
    title: "Postman",
  },
  {
    id: 13,
    image: git,
    title: "Git",
  },
];

function SkillsMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative flex overflow-x-hidden"
    >
      <div className="py-5 flex animate-marquee whitespace-nowrap">
        {skillsData.map(({ id, image, title }) => (
          <div
            key={id}
            className="skill--box flex justify-start p-3 shadow-lg shadow-gray-400/50 dark:shadow-black/30 rounded-xl object-cover w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 dark:bg-neutral-900 bg-gray-100"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:h-44 md:w-44 object-contain group-hover:grayscale"
            />
          </div>
        ))}
      </div>

      <div className="absolute flex top-0 py-5 animate-marquee2 whitespace-nowrap">
        {skillsData.map(({ id, image, title }) => (
          <div
            key={id}
            className="skill--box flex justify-start p-3 shadow-lg shadow-gray-400/50 dark:shadow-black/30 rounded-xl object-cover w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 dark:bg-neutral-900 bg-gray-100"
          >
            <img
              src={image}
              alt={title}
              style={{color: '#F49E0B'}}
              className="w-36 h-36 md:h-44 md:w-44 object-contain group-hover:grayscale"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillsMarquee;
