import styles from "./style.module.scss";
import { motion } from "framer-motion";

export default function NavToggle({ isActive, setIsActive }) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <motion.div
            whileHover={{ scale: 1.5 }}
            onClick={() => {
              setIsActive();
            }}
            className={styles.button}>
            <div
              className={`${styles.menuToggle} ${
                isActive ? styles.menuToggleActive : ""
              }`}></div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
