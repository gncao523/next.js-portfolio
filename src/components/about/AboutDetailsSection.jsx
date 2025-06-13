import FantasyImg from "../../assets/kira.png";
import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

const AboutDetailsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex flex-col min-h-fit items-center justify-start text-center xl:text-left xl:flex-row max-w-7xl px-4 mx-auto md:pt-0 md:pb-12 md:mx-20 z-10"
    >
      <img
        src={FantasyImg}
        alt="Fantasy Avatar"
        className="mb-10 md:mb-0 flex-shrink-0 rounded-3xl w-64 h-64 object-cover md:rounded-3xl md:w-64 md:h-95 xl:w-[300px] xl:h-[350px] shadow-lg shadow-gray-400/30 dark:shadow-black/30"
      />
      <div className="space-y-5 ml-0  xl:pt-0 xl:ml-20 md:pt-10">
        <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
          <Reveal width="100%">Introduction</Reveal>
        </h4>
        {/* <div className="bg-white dark:bg-[#101111] p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 text-gray-800 dark:text-gray-300 "> */}
        <div className="bg-white/70 dark:bg-[#101111]/70 p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 text-gray-800 dark:text-gray-300 backdrop-filter backdrop-blur-lg bg-opacity-30 ease-in-out">
          {/* border dark:border-white/5 border-black/10 */}
          <p className="text-sm font-light">
            Hi there, my name is{" "}
            <span className="font-semibold text-black dark:text-white">
              Pham Van Huy
            </span>
            . I'm a Shopify developer with over 5 years in shopify theme customization and shopify app development.
            I’ve worked on many projects where I’ve taken Figma or Adobe XD designs and turned them into fully responsive, pixel-perfect Shopify storefronts really well working across various devices.<br />
            <br />{" "}
            I specialize in developing custom themes, apps, and integrations according to each brand’s goals and target customers mainly working with Liquid, JavaScript and Shopify CLI to produce pixel perfect shopify storefront UI.
            <br />
            <br />
            I can redesign product pages to include useful features like image zoom, color swatches, custom size guides, and variant previews—all designed to make customer's buying experience smoother and more engaging.

            I am also professional at React.js, Node.js, Python, PostgreSQL, GraphQL, Shopify API for shopify app development, Admin API, payments, and subscriptions as well as shopify UI extensions, for example: Klaviyo(email and sms marketing automation), Judge.me(Product reviews and rating) and upsell and cross-sell apps like ReCovert and Bold Upsell.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutDetailsSection;
