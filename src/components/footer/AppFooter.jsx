import { FiGithub, FiGlobe } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import AppFooterCopyright from "./AppFooterCopyright";
import { motion } from "framer-motion";

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 border-t-2 dark:border-neutral-600 border-neutral-300">
        

        <AppFooterCopyright />
      </div>
    </div>
  );
};

export default AppFooter;
