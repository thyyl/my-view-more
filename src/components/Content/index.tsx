import { motion } from "framer-motion";
import { Row } from "./styles";

const Content = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Row />
      <Row />
      <Row />
    </motion.div>
  );
};

export default Content;
