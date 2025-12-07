import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Cycling",
      description: "Add a description of this hobby and what it means to you.",
      images: ["/cycling/cycling1.jpg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Your Second Hobby",
      description: "Share your passion and experiences here.",
      images: ["/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Your Third Hobby",
      description: "Tell the story behind this interest.",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
  ];

  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-12">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="font-sans text-sm tracking-wide">Back</span>
      </Link>

      <div className="max-w-5xl mx-auto animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-12">
          Hobbies
        </h1>

        <div className="space-y-20">
          {hobbies.map((hobby, index) => (
            <section key={index}>
              <h2 className="font-serif text-2xl font-light mb-4">{hobby.title}</h2>
              <p className="font-sans text-muted-foreground mb-8 max-w-2xl">
                {hobby.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {hobby.images.map((img, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className="aspect-square bg-secondary overflow-hidden image-hover"
                  >
                    <img
                      src={img}
                      alt={`${hobby.title} ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hobbies;
