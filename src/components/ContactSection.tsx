import { Mail, Linkedin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-4 mb-12">
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Get In Touch
          </p>
          <h2 className="heading-lg">
            Let's Connect
          </h2>
        </div>

        <p className="body-lg mb-12">
          Feel free to reach out if you'd like to collaborate, chat about marketing, or just say hello.
        </p>

        <div className="flex justify-center gap-8">
          <a
            href="mailto:your@email.com"
            className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="p-4 bg-muted rounded-full group-hover:bg-accent transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-sm font-light">Email</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="p-4 bg-muted rounded-full group-hover:bg-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="text-sm font-light">LinkedIn</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="p-4 bg-muted rounded-full group-hover:bg-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </div>
            <span className="text-sm font-light">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
