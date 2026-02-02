const Footer = () => {
    return (
        <footer className="py-8 bg-bg-primary border-t border-white/5 text-center">
            <div className="container mx-auto px-6">
                <p className="text-text-secondary text-sm">
                    © {new Date().getFullYear()} Vishranth Rai. Built with <span className="text-accent-primary font-medium">React</span> & <span className="text-accent-primary font-medium">Tailwind</span>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
