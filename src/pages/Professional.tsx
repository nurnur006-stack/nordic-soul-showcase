import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Professional = () => {
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
          Professional
        </h1>

        <section className="mb-16">
          <h2 className="font-serif text-2xl font-light mb-6 text-muted-foreground">
            Education
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-border pl-6">
              <p className="font-sans text-sm text-muted-foreground mb-1">2022 — Present</p>
              <h3 className="font-serif text-xl mb-2">Your University</h3>
              <p className="font-sans text-muted-foreground">Marketing & Business Administration</p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <p className="font-sans text-sm text-muted-foreground mb-1">2019 — 2022</p>
              <h3 className="font-serif text-xl mb-2">Your High School</h3>
              <p className="font-sans text-muted-foreground">Add your focus or achievements here</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-light mb-6 text-muted-foreground">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-border pl-6">
              <p className="font-sans text-sm text-muted-foreground mb-1">Summer 2023</p>
              <h3 className="font-serif text-xl mb-2">Your Role / Company</h3>
              <p className="font-sans text-muted-foreground">Describe your responsibilities and achievements here.</p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <p className="font-sans text-sm text-muted-foreground mb-1">2021 — 2022</p>
              <h3 className="font-serif text-xl mb-2">Another Role / Company</h3>
              <p className="font-sans text-muted-foreground">Add more experiences as needed.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Professional;
