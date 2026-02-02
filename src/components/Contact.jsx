import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-heading font-bold mb-6"
                >
                    Get In <span className="gradient-text">Touch</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto"
                >
                    I'm currently opening to new opportunities and collaborations.
                    Whether you have a question or just want to say hi, feel free to drop a message!
                </motion.p>

                <div className="grid gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-8 md:gap-16"
                    >
                        <a href="mailto:vishranthrai452@gmail.com" className="flex flex-col items-center gap-3 group">
                            <div className="p-4 bg-white/5 rounded-full text-text-secondary group-hover:bg-accent-secondary/10 group-hover:text-accent-secondary group-hover:shadow-glow transition-all duration-300">
                                <Mail size={24} />
                            </div>
                            <span className="text-text-secondary font-medium group-hover:text-text-primary transition-colors">Email</span>
                        </a>
                        <a href="https://linkedin.com/in/vishranth-rai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                            <div className="p-4 bg-white/5 rounded-full text-text-secondary group-hover:bg-accent-secondary/10 group-hover:text-accent-secondary group-hover:shadow-glow transition-all duration-300">
                                <Linkedin size={24} />
                            </div>
                            <span className="text-text-secondary font-medium group-hover:text-text-primary transition-colors">LinkedIn</span>
                        </a>
                        <a href="https://github.com/vishranthrai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                            <div className="p-4 bg-white/5 rounded-full text-text-secondary group-hover:bg-accent-secondary/10 group-hover:text-accent-secondary group-hover:shadow-glow transition-all duration-300">
                                <Github size={24} />
                            </div>
                            <span className="text-text-secondary font-medium group-hover:text-text-primary transition-colors">GitHub</span>
                        </a>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="w-full max-w-lg mx-auto bg-bg-secondary p-8 rounded-2xl border border-white/5 text-left"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-text-secondary text-sm font-medium mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-bg-primary/50 border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-text-secondary text-sm font-medium mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-bg-primary/50 border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-text-secondary text-sm font-medium mb-2">Message</label>
                                <textarea className="w-full px-4 py-3 bg-bg-primary/50 border border-white/10 rounded-lg text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all h-32 resize-none" placeholder="What's on your mind?"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-bold rounded-lg shadow-lg shadow-accent-secondary/20 hover:shadow-accent-secondary/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
