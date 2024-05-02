import { motion } from "framer-motion";
import Bubble from "../../images/bubbles-svgrepo-com.png";

export default function AnimationBubbles3() {
  return (
    <div>
      <motion.img
        style={{
          width: "50px",
          position: "absolute",
          left: "5%",
          top: "20%",
          zIndex: "1",
        }}
        animate={{ y: [5, -5] }}
        transition={{
          ease: "linear",
          duration: "1.5",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src={Bubble}
        alt="bubbles"
      />
    </div>
  );
}
