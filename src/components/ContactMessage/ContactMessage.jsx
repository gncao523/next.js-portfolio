import { BsStars } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";

const ContactMessage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="min-h-fit flex flex-col justify-start items-center py-16 px-2 2xl:px-32 md:px-5 text-center bg-gradient-to-b from-white via-neutral-200 to-white dark:from-[#0d0c0e] dark:via-neutral-900 dark:to-[#0d0c0e]"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-700 dark:text-neutral-200 pb-10">
        <h1>Effort is always</h1>
        <h1 className="flex gap-2 items-center justify-center">
          <span className="text-amber-500 font-extrabold"> rewarded </span>
          <span className="relative flex">
            <BsStars className="text-amber-500 absolute inline-flex animate-ping opacity-30" />
            <BsStars className="text-amber-500 relative inline-flex" />
          </span>
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-light text-sm md:text-xl pt-10 opacity-50">
          Let's shape the projects of your future together.
        </h3>
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-2xl md:text-3xl">Feel free to brief me</h2>
          <span className="animate-bounce">
            <MdDoubleArrow className="text-2xl md:text-3xl rotate-90" />
          </span>
        </div>
      </div>
    </motion.section>
  );
};
export default ContactMessage;
