import { AnimateSharedLayout, motion } from "framer-motion";
import Item from "./components/Item";

const App = () => {
  const data = [0, 1, 2];

  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {data.map((item) => (
          <Item key={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
};

export default App;
