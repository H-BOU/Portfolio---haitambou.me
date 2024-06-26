import redBg from "../assets/redBg.webp";
import pingPongPostCard from "../assets/pingPongCard.webp";
import sioomPostCard from "../assets/sioomPostCard.webp";
import webServPostCard from "../assets/webServPostCard.webp";
import { motion } from "framer-motion";

const Work = ({ routeVariants, childVariants, imageVariants }) => {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <section className="min-h-[1024px] h-[100vh] w-screen">
        <div
          className="absolute top-0 bg-cover bg-top h-[100vh] w-full"
          style={{ backgroundImage: `url(${redBg})` }}
        >
          <div className="absolute top-[10%] md:top-0 w-full overflow-auto h-full flex flex-col md:flex-row md:justify-evenly items-center">
            <motion.h1
              variants={childVariants}
              initial="initial"
              animate="final"
            >
              <h1 className="text-sm xl:text-2xl font-[andalousRegular] text-left text-stone-400 max-sm:sticky">
                RECENT WORK
              </h1>
            </motion.h1>
            <a
              href="https://github.com/H-BOU/ft_transcendence"
              target="_blank"
            >
              <motion.img
                variants={imageVariants}
                initial="initial"
                animate="final"
                src={pingPongPostCard}
                alt="work"
                className="h-[30vh] md:h-[50vh] 2xl:h-[600px] w-auto hover:scale-105 hover:transform transition-transform duration-500 ease-in-out"
              />
            </a>
            <a
              href="https://www.sioom.info"
              target="_blank"
            >
              <motion.img
                variants={imageVariants}
                initial="initial"
                animate="final"
                src={sioomPostCard}
                alt="work"
                className="h-[30vh] md:h-[50vh] 2xl:h-[600px] w-auto hover:scale-105 hover:transform transition-transform duration-500 ease-in-out"
              />
            </a>
            <a href="">
              <motion.img
                variants={imageVariants}
                initial="initial"
                animate="final"
                src={webServPostCard}
                alt="work"
                className="h-[30vh] md:h-[50vh] 2xl:h-[600px] w-auto hover:scale-105 hover:transform transition-transform duration-500 ease-in-out"
              />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Work;
