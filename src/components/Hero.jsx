import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Github, Mail, Phone } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
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
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                        >
                            Hi, I'm <br />
                            <motion.span
                                className="gradient-text-premium block mt-2 cursor-pointer"
                                whileHover={{ scale: 1.05, x: 10 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Vishranth Rai
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-text-secondary mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            Passionate about thriving in technical environments, leveraging my experience as a Junior Support Engineer, LMS Tech Executive, and React.js Developer to build impactful solutions.
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
                                <a href="tel:8310697552" className="p-3 rounded-full bg-white/5 text-text-secondary hover:text-accent-primary hover:bg-white/10 transition-all duration-300">
                                    <Phone size={22} />
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
                        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[550px] lg:h-[550px] group">
                            {/* Stronger Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-primary/30 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                            {/* Vibrant Rotating Border */}
                            <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent-primary via-white/50 to-accent-secondary rounded-[2rem] blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>

                            <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-bg-secondary border-2 border-white/20 shadow-2xl z-20">
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
