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
              <p className="font-sans text-sm text-muted-foreground mb-1">2023 — Present</p>
              <h3 className="font-serif text-xl mb-2">Bi Handeløyskolen Oslo - Bachelor of Digital Business</h3>
              <p className="font-sans text-muted-foreground">Relevant courses: Digital Marketing, Marketing Communication, Project management, Organizational Behavior & leadership, Social Media & Society, Marketing Management & Strategy </p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <p className="font-sans text-sm text-muted-foreground mb-1">2017 — 2023</p>
              <h3 className="font-serif text-xl mb-2">International Gateway Academy & Kvitsund Gymnas</h3>
              <p className="font-sans text-muted-foreground">American Curriculum & Studiespesialisering </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-light mb-6 text-muted-foreground">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-border pl-6">
              <p className="font-sans text-sm text-muted-foreground mb-1">Juni 2023 til d.d</p>
              <h3 className="font-serif text-xl mb-2">Creative Media Strategist / Monkey Wizard</h3>
              <p className="font-sans text-muted-foreground">Copywriting, Campaign production from start to finish,  Ad account management, Reporting and insight gathering, Newsletter creation and management, Landing page optimization </p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <p className="font-sans text-sm text-muted-foreground mb-1">Juli 2023 - Oktober 2023</p>
              <h3 className="font-serif text-xl mb-2"> Support Associate / Wolt</h3>
              <p className="font-sans text-muted-foreground"> Customer service, Logistics management, Client management</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Professional;
