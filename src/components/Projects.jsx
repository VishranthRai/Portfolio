import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';

const projects = [
    {
        title: "Fake Product Detection System",
        desc: "Deep learning-based system using CNN models to classify product images as genuine or manipulated. Helps in identifying counterfeit items.",
        tags: ["Deep Learning", "CNN", "SQL"],
        link: "https://rb.gy/fkm02z",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Bus Pass Application",
        desc: "Mobile application for students to book bus passes online. Features real-time database updates and user-friendly interface.",
        tags: ["Android Studio"],
        link: "#",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop"
    },
    {
        title: "Attendance Management System",
        desc: "Efficient system to manage student attendance using NetBeans and MySQL. Features automated reporting and efficient record storage.",
        tags: ["MySQL", "NetBeans"],
        link: "#",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
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
                            <div className="h-48 relative overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
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
