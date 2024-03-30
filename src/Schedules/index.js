import "./index.css";
import { motion } from "framer-motion";

const Schedules = () => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
  >
    <img
      src="https://i.ibb.co/rxktj2d/Screenshot-2024-03-28-213525.png"
      className="images"
      alt="schedules"
    />
  </motion.div>
);

export default Schedules;
