import { motion } from "framer-motion";
import "./MenuTest.css";

export default function BackDrop({ children, onClick }) {
  return (
    <motion.div
      clasName={"backdrop"}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
}
