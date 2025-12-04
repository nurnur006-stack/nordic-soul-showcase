import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Contact = () => {
  const contacts = [
    { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
    { label: "LinkedIn", value: "linkedin.com/in/yourname", href: "https://linkedin.com/in/yourname" },
    { label: "Instagram", value: "@yourhandle", href: "https://instagram.com/yourhandle" },
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

      <div className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-12">
          Contact
        </h1>

        <p className="font-sans text-lg text-muted-foreground mb-12 max-w-xl">
          Feel free to reach out — I'd love to connect and hear from you.
        </p>

        <div className="space-y-8">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <p className="font-sans text-sm text-muted-foreground mb-1">
                {contact.label}
              </p>
              <p className="font-serif text-xl md:text-2xl font-light group-hover:text-muted-foreground transition-colors link-underline inline-block">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Contact;
