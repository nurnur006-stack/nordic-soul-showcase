const InterestsSection = () => {
  const interests = [
    {
      title: "Interest One",
      description: "Describe this interest or hobby. What draws you to it and why it matters to you.",
      placeholder: true,
    },
    {
      title: "Interest Two",
      description: "Share another passion or hobby. What do you love about it?",
      placeholder: true,
    },
    {
      title: "Interest Three",
      description: "Add another interest here. How does it shape who you are?",
      placeholder: true,
    },
  ];

  return (
    <section id="interests" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground">
            What I Love
          </p>
          <h2 className="heading-lg">
            Interests & Hobbies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {interests.map((interest, index) => (
            <div key={index} className="group space-y-6">
              {/* Image placeholder */}
              <div className="aspect-square bg-muted rounded-sm overflow-hidden image-hover">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center space-y-3">
                    <svg className="w-10 h-10 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs font-light">Add image</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl font-light">
                  {interest.title}
                </h3>
                <p className="body-md text-sm">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
