const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center space-y-3">
                <svg className="w-12 h-12 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-light">Your photo here</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground">
                About Me
              </p>
              <h2 className="heading-lg">
                A Few Words About Myself
              </h2>
            </div>

            <div className="space-y-6">
              <p className="body-md">
                {/* User can fill this in */}
                Write a brief introduction about yourself here. Share your story, your journey as a marketing business student, and what drives you.
              </p>
              
              <p className="body-md">
                {/* User can fill this in */}
                Add more details about your background, your aspirations, and what makes you unique. This is your space to connect with visitors.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {["Marketing", "Strategy", "Business", "Creative"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-background text-sm font-light tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
