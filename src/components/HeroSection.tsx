const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 opacity-0 animate-fade-in">
          <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground">
            Welcome
          </p>
          
          <h1 className="heading-xl">
            Nur Nursen
          </h1>
          
          <div className="w-16 h-px bg-border mx-auto" />
          
          <p className="body-lg max-w-2xl mx-auto opacity-0 animate-fade-in delay-200">
            Marketing Business Student
          </p>
        </div>

        <div className="mt-16 opacity-0 animate-fade-in delay-400">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 font-sans text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Scroll to explore</span>
            <svg 
              className="w-4 h-4 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
