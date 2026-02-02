import { motion } from 'framer-motion';

const experiences = [
    {
        role: "LMS Tech Executive",
        company: "Yaticorp",
        date: "Jun 2025 – Present",
        desc: [
            "Managing course access, user support, and LMS operations.",
            "Resolved technical issues and coordinated content updates.",
            "Contributed to website development using React for enhanced digital learning."
        ]
    },
    {
        role: "Junior Support Engineer",
        company: "UnifyCx",
        date: "Sep 2024 – Mar 2025",
        desc: [
            "Troubleshooting client's website/email configurations.",
            "Worked with Pega, Genesys Cloud, Jarvis, cPanel, and DNS.",
            "Handled Hosting, Domains, and WordPress maintenance."
        ]
    },
    {
        role: "Intern",
        company: "Evolute-IQ",
        date: "Feb 2024 – Apr 2024",
        desc: [
            "Contributed to intelligent business automation solutions.",
            "Gained exposure to enterprise-level automation tools."
        ]
    },
    {
        role: "Intern",
        company: "Wadhwani Foundation",
        date: "Jan 2024 – Mar 2024",
        desc: [
            "Focused on core employability and new-age job skills.",
            "Participated in skilling initiatives globally."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-heading font-bold mb-16 text-center"
                >
                    Work <span className="gradient-text">Experience</span>
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 lg:left-1/2 top-0 h-full w-[2px] bg-white/10 -ml-[1px]"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:text-right' : 'lg:flex-row-reverse text-left'}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 lg:left-1/2 top-0 w-4 h-4 bg-accent-secondary rounded-full -translate-x-[7px] shadow-[0_0_10px_var(--accent-secondary)] z-10"></div>

                                <div className={`lg:w-1/2 pl-8 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                                    <div className="bg-bg-secondary p-8 rounded-2xl border border-white/5 hover:border-accent-primary/30 hover:bg-slate-800 transition-all duration-300 group">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-accent-secondary transition-colors">{exp.role}</h3>
                                            <p className="text-accent-primary font-medium">{exp.company}</p>
                                        </div>

                                        <span className="inline-block px-3 py-1 bg-white/5 text-xs text-text-secondary rounded-full mb-4 md:mb-0 md:absolute md:top-8 md:right-auto md:left-auto md:transform md:-translate-y-1/2 md:mt-0 
                      ${index % 2 === 0 ? 'lg:-right-16' : 'lg:-left-16'} hidden">
                                            {/* Note: Absolute date positioning on timeline can be tricky responsively, simplifying to inside card usually safer but trying to match design */}
                                        </span>
                                        <span className="inline-block text-sm text-text-secondary bg-white/5 px-3 py-1 rounded-full mb-4">
                                            {exp.date}
                                        </span>

                                        <ul className="space-y-2 mt-2">
                                            {exp.desc.map((item, i) => (
                                                <li key={i} className={`text-text-secondary text-base leading-relaxed ${index % 2 === 0 ? 'lg:text-right' : 'text-left'}`}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty Spacer for the other side */}
                                <div className="lg:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
