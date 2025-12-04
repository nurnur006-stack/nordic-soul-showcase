const GallerySection = () => {
  // Placeholder gallery items - user can replace with their own images
  const galleryItems = [
    { id: 1, aspectRatio: "aspect-[4/5]", span: "md:col-span-1 md:row-span-2" },
    { id: 2, aspectRatio: "aspect-square", span: "md:col-span-1" },
    { id: 3, aspectRatio: "aspect-square", span: "md:col-span-1" },
    { id: 4, aspectRatio: "aspect-[16/10]", span: "md:col-span-2" },
    { id: 5, aspectRatio: "aspect-square", span: "md:col-span-1" },
    { id: 6, aspectRatio: "aspect-[4/5]", span: "md:col-span-1 md:row-span-2" },
    { id: 7, aspectRatio: "aspect-square", span: "md:col-span-1" },
    { id: 8, aspectRatio: "aspect-square", span: "md:col-span-1" },
  ];

  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Visual Stories
          </p>
          <h2 className="heading-lg">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`${item.span} ${item.aspectRatio} bg-muted rounded-sm overflow-hidden image-hover cursor-pointer`}
            >
              <div className="w-full h-full flex items-center justify-center text-muted-foreground group">
                <div className="text-center space-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="text-xs font-light hidden md:block">Add photo</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="body-md text-sm">
            Upload your favorite moments and memories to create your personal visual story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
