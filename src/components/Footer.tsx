const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm text-muted-foreground font-light">
          © {currentYear} Your Name. All rights reserved.
        </p>
        
        <p className="font-sans text-sm text-muted-foreground font-light">
          Crafted with care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
