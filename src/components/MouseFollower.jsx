import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState('default');

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "rgba(139, 92, 246, 0.3)", // Violet with opacity
            border: "1px solid rgba(139, 92, 246, 0.5)",
            height: 32,
            width: 32,
            transition: {
                type: "spring",
                mass: 0.3, // Lightweight for fast follow
                stiffness: 800,
                damping: 30
            }
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block backdrop-blur-[1px]"
            variants={variants}
            animate={cursorVariant}
        />
    );
};

export default MouseFollower;
