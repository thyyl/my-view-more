import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Content from "../Content";
import { Avatar } from "./styles";

const Item = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <Avatar layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
};

export default Item;
