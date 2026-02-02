import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        "CS Graduate",
        "LMS Tech Executive",
        "Full Stack Enthusiast",
        "Problem Solver"
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles]);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
            {/* Dynamic Background Glows */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent-primary/20 rounded-full blur-[120px] pointer-events-none md:w-[800px] md:h-[800px]"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.5, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-secondary/20 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-secondary text-sm font-medium mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary"></span>
                            </span>
                            Available for Opportunities
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        >
                            Hi, I'm <br />
                            <span className="gradient-text-premium block lg:inline">Vishranth Rai</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-3xl text-text-secondary mb-8 h-[40px] font-medium"
                        >
                            I am a <span className="text-text-primary">{text}</span>
                            <span className="animate-pulse text-accent-primary">|</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-text-secondary mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Specializing in LMS Operations and building modern digital experiences with a focus on ease of use and visual excellence.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                        >
                            <a href="#projects" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                                View Work <ArrowRight size={20} />
                            </a>
                            <div className="flex items-center gap-4 px-4">
                                <a href="https://linkedin.com/in/vishranth-rai" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-text-secondary hover:text-accent-primary hover:bg-white/10 transition-all duration-300">
                                    <Linkedin size={22} />
                                </a>
                                <a href="https://github.com/vishranthrai" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-text-secondary hover:text-accent-primary hover:bg-white/10 transition-all duration-300">
                                    <Github size={22} />
                                </a>
                                <a href="mailto:vishranthrai555@gmail.com" className="p-3 rounded-full bg-white/5 text-text-secondary hover:text-accent-primary hover:bg-white/10 transition-all duration-300">
                                    <Mail size={22} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] group">
                            {/* Rotating Border */}
                            <div className="absolute -inset-1 bg-gradient-to-tr from-accent-primary via-transparent to-accent-secondary rounded-[2rem] blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-bg-secondary border border-white/10 shadow-2xl">
                                {/* Image Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent z-10"></div>
                                <img
                                    src={profileImg}
                                    alt="Vishranth Rai"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
