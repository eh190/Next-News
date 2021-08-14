import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.scss";
import { AnimatePresence, motion } from "framer-motion";

//variants for animations
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      {/* Deals with components animation after they've left react DOM */}
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {/* Animation of main content articles */}
        <motion.div
          key={router.route}
          initial="hidden"
          animate="enter"
          variants={variants}
          // Smooth entrance
          transition={{ type: "linear" }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
