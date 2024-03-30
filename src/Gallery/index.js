import "./index.css";
import { motion } from "framer-motion";
const Gallery = () => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
  >
    <img
      src="https://i.ibb.co/0mMh0GH/Screenshot-2024-03-28-214324.png"
      alt="home"
      className="images"
    />
    <img
      src="https://i.ibb.co/RDQwPD6/Screenshot-2024-03-28-214358.png"
      alt="home"
      className="images"
    />
  </motion.div>
);

export default Gallery;
