import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Purpose = () => {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 py-12">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="font-sans text-sm tracking-wide">Back</span>
      </Link>

      <div className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-12">
          Purpose
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="font-serif text-2xl font-light mb-6 text-muted-foreground">
              Vision
            </h2>
            <p className="font-sans text-lg leading-relaxed text-foreground/90">
              Share your vision for the future here. What do you aspire to achieve? 
              What impact do you want to make in the world of marketing and beyond?
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-6 text-muted-foreground">
              Values
            </h2>
            <p className="font-sans text-lg leading-relaxed text-foreground/90 mb-6">
              What principles guide your decisions and work? Describe the values 
              that are most important to you personally and professionally.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Creativity", "Integrity", "Growth", "Connection"].map((value) => (
                <span 
                  key={value}
                  className="font-sans text-sm px-4 py-2 bg-secondary text-muted-foreground"
                >
                  {value}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-6 text-muted-foreground">
              Goals
            </h2>
            <p className="font-sans text-lg leading-relaxed text-foreground/90">
              What are you working towards? Share your short-term and long-term 
              goals, both in your career and personal life.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Purpose;
