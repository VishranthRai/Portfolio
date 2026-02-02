import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';

const projects = [
    {
        title: "Fake Product Detection System",
        desc: "Deep learning-based system using CNN models to classify product images as genuine or manipulated. Helps in identifying counterfeit items.",
        tags: ["Python", "Deep Learning", "CNN", "SQL"],
        link: "https://rb.gy/fkm02z"
    },
    {
        title: "Bus Pass Application",
        desc: "Mobile application for students to book bus passes online. Features real-time database updates and user-friendly interface.",
        tags: ["Java", "Android Studio", "Firebase"],
        link: "#"
    },
    {
        title: "Attendance Management System",
        desc: "Efficient system to manage student attendance using NetBeans and MySQL. Features automated reporting and efficient record storage.",
        tags: ["MySQL", "NetBeans", "Java"],
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-heading font-bold mb-12 text-center"
                >
                    Featured <span className="gradient-text">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-2 hover:border-accent-primary/30 hover:shadow-2xl transition-all duration-300 flex flex-col group"
                        >
                            <div className="h-48 bg-slate-800 relative flex items-center justify-center border-b border-white/5 group-hover:bg-slate-700/50 transition-colors">
                                <Folder size={48} className="text-white/10 group-hover:text-accent-secondary/50 transition-colors duration-300" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-heading font-bold mb-2 text-text-primary group-hover:text-accent-secondary transition-colors">{project.title}</h3>
                                <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-accent-secondary bg-accent-secondary/10 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent-primary transition-colors">
                                        <ExternalLink size={16} /> View Details
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
