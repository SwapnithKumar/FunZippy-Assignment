import "./index.css";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
  >
    <img
      src="https://i.ibb.co/XVf0jZ0/Screenshot-2024-03-29-222844.png"
      alt="home"
      className="images"
    />
    <img
      src="https://i.ibb.co/kqnn6gG/Screenshot-2024-03-28-213507.png"
      alt="home"
      className="images"
    />
  </motion.div>
);

export default Home;
