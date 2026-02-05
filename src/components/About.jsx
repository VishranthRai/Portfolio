import { motion } from 'framer-motion';
import { GraduationCap, Code, User, HeartHandshake } from 'lucide-react';
import profileImg from '../assets/profile.png';

const About = () => {
    const education = [
        {
            school: "Sahyadri College of Engineering & Management",
            degree: "Bachelor of Engineering in CSE",
            year: "2020 – 2024"
        },
        {
            school: "Sharada INDP PU College",
            degree: "PCMB",
            year: "2018 – 2020"
        },
        {
            school: "Sri Venkatramanaswamy Vidyagiri",
            degree: "Primary & High School",
            year: "2007 – 2018"
        }
    ];

    const skills = [
        { category: "Languages", items: ['C/C++', 'SQL'] },
        { category: "Frameworks & Web", items: ['React', 'JavaScript'] },
        { category: "Tools", items: ['cPanel', 'Pega', 'MySQL', 'NetBeans', 'Android Studio', 'Git'] }
    ];

    const volunteering = [
        {
            title: "SOSC-DEVHOST Hackathon",
            role: "Volunteer",
            desc: "Showcased technical skills and assisted in event coordination."
        },
        {
            title: "Blood Donation Campaign",
            role: "Donor & Volunteer",
            desc: "Actively participated in and supported college blood donation drives."
        },
        {
            title: "Social Awareness Initiative",
            role: "Participant",
            desc: "Built awareness among students regarding social issues and media safety."
        }
    ];

    return (
        <section id="about" className="section-padding bg-bg-secondary/30 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-4">
                            <span className="gradient-text">About Me</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Bio & Education */}
                        <div className="lg:col-span-7 space-y-8">
                            {/* Bio Card */}
                            <div className="bg-bg-secondary rounded-2xl p-8 border border-white/5 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <User className="text-accent-primary" size={24} />
                                    <h3 className="text-xl font-heading font-bold text-text-primary">Biography</h3>
                                </div>
                                <div className="space-y-4 text-text-secondary leading-relaxed">
                                    <p>
                                        As a Computer Science engineering graduate from Sahyadri College of Engineering and Management (2024),
                                        I am currently serving as an LMS Technical Executive at Yaticorp, where I manage technical operations
                                        and user support. My professional journey is driven by a passion for building impactful digital
                                        solutions, leveraging my experience in technical support and website development specifically
                                        centered around the React JS framework.
                                    </p>
                                </div>
                            </div>

                            {/* Education Card */}
                            <div className="bg-bg-secondary rounded-2xl p-8 border border-white/5 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <GraduationCap className="text-accent-primary" size={24} />
                                    <h3 className="text-xl font-heading font-bold text-text-primary">Education</h3>
                                </div>
                                <div className="space-y-6">
                                    {education.map((edu, index) => (
                                        <div key={index} className="relative pl-6 border-l border-white/10 last:border-0 pb-6 last:pb-0">
                                            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-accent-secondary rounded-full"></div>
                                            <h4 className="text-lg font-bold text-text-primary">{edu.school}</h4>
                                            <p className="text-accent-primary text-sm font-medium mb-1">{edu.degree}</p>
                                            <p className="text-text-secondary text-sm">{edu.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Skills & Stats & Volunteering */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Skills Card */}
                            <div className="bg-bg-secondary rounded-2xl p-8 border border-white/5 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <Code className="text-accent-primary" size={24} />
                                    <h3 className="text-xl font-heading font-bold text-text-primary">Technical Skills</h3>
                                </div>

                                <div className="space-y-6">
                                    {skills.map((group, idx) => (
                                        <div key={idx}>
                                            <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">{group.category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {group.items.map(skill => (
                                                    <span key={skill} className="px-3 py-1.5 bg-white/5 text-accent-primary rounded-md text-sm font-medium border border-accent-primary/20 hover:bg-accent-primary/10 transition-colors cursor-default">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-bg-primary/50 rounded-lg">
                                        <span className="block text-3xl font-bold gradient-text">4+</span>
                                        <span className="text-xs text-text-secondary uppercase tracking-wider">Projects</span>
                                    </div>
                                    <div className="text-center p-4 bg-bg-primary/50 rounded-lg">
                                        <span className="block text-3xl font-bold gradient-text">1+</span>
                                        <span className="text-xs text-text-secondary uppercase tracking-wider">Years Exp</span>
                                    </div>
                                </div>
                            </div>

                            {/* Volunteering Card */}
                            <div className="bg-bg-secondary rounded-2xl p-8 border border-white/5 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <HeartHandshake className="text-accent-primary" size={24} />
                                    <h3 className="text-xl font-heading font-bold text-text-primary">Volunteering</h3>
                                </div>
                                <div className="space-y-4">
                                    {volunteering.map((vol, index) => (
                                        <div key={index} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                            <h4 className="text-base font-bold text-text-primary">{vol.title}</h4>
                                            <p className="text-accent-secondary text-sm font-medium mb-1">{vol.role}</p>
                                            <p className="text-text-secondary text-xs">{vol.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
