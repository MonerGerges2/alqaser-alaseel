import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type PageTransitionProps = {
    children: React.ReactNode;
};

// Animation variants with a smoother, zoom and fade effect
const pageTransition = {
    initial: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.4, ease: "easeOut" } },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};


const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                className="min-h-screen"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
