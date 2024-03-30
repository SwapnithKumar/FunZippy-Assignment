import "./index.css";
import { motion } from "framer-motion";

const GiftRegistery = () => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
  >
    <img
      src="https://i.ibb.co/fkNfTZx/Screenshot-2024-03-28-214413.png"
      className="images"
      alt="schedules"
    />
  </motion.div>
);

export default GiftRegistery;
