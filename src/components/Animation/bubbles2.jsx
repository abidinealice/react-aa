import { motion } from "framer-motion";
import Bubble from "../../images/bubbles-svgrepo-com.png";
import Bubble2 from "../../images/bubbles2.png";
import Bubble3 from "../../images/bubbles3.png";

export default function AnimationBubbles2() {
  return (
    <div>
      <motion.img
        style={{
          width: "50px",
          position: "absolute",
          left: "25%",
          top: "90%",
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
      <motion.img
        style={{
          width: "50px",
          position: "absolute",
          right: "5%",
          top: "50%",
          zIndex: "1",
        }}
        animate={{ y: [5, -5] }}
        transition={{
          ease: "linear",
          duration: "1.5",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src={Bubble2}
        alt="bubbles"
      />
      <motion.img
        style={{
          width: "50px",
          position: "absolute",
          left: "5%",
          top: "15%",
          zIndex: "1",
        }}
        animate={{ y: [5, -5] }}
        transition={{
          ease: "linear",
          duration: "1.5",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src={Bubble3}
        alt="bubbles"
      />
    </div>
  );
}
