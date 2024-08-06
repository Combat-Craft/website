import React from "react";
import { motion } from "framer-motion";

const AnimatedTextParagraph = ({ paragraph, styles }) => {
  const letterSet = paragraph.split("");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Adjust the stagger timing here
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
    // enRoute: { duration: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      //   transition="en-Route"
      style={{ display: "flex", flexWrap: "wrap" }} // Ensures each letter is on a new line when wrapping
    >
      {letterSet.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: "inline-block", marginRight: "2px" }} // Ensures proper spacing
        >
          <p>{letter === " " ? "\u00A0" : letter}</p>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextParagraph;
