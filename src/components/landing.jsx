import '../App.css'
import { delay, motion } from "framer-motion";
import React, { useEffect } from 'react';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 6, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};


const Landing = ({ onComplete }) => {

    useEffect(() => {
    const timer = setTimeout(() => {
        onComplete();
    }, 4000);
    return () => clearTimeout(timer);
    }, [onComplete]);
    
  return (
    <motion.div 
    className="landingContainer fixed inset-0 z-50"
    initial="hidden"
    animate="visible"
    exit={{ y: "-100vh" , transition: { 
    type: "",
    mass: 0.8,
    stiffness: 100,
    damping: 20,
    delay: 0.8
    }}}
    >
        <motion.svg
        width="300"
        height="300"
        viewBox="0 0 24 24"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M12 2.5 L18.18 22 2 9.27 22, 9.27 5.82, 22 12, 2.5 L18.18 22"
          stroke="#1a6901"
          fill="none"
          variants={draw}
          custom={1}
        />
      </motion.svg>
    </motion.div>
  );
}

export default Landing;