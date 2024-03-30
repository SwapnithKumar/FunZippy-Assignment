import "./index.css";
import { motion } from "framer-motion";

const RSVP = () => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
  >
    <img
      src="https://i.ibb.co/nc8q8Xj/Screenshot-2024-03-28-213554.png"
      className="images"
      alt="schedules"
    />
  </motion.div>
);

export default RSVP;
