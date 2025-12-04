import { Link } from "react-router-dom";

const Index = () => {
  const menuItems = [
    { to: "/professional", label: "Professional" },
    { to: "/hobbies", label: "Hobbies" },
    { to: "/purpose", label: "Purpose" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4">
          Your Name
        </h1>
        <p className="font-sans text-sm md:text-base text-muted-foreground tracking-widest uppercase">
          Marketing Business Student
        </p>
      </div>

      <nav className="flex flex-col items-center space-y-6 md:space-y-8 animate-fade-in-slow">
        {menuItems.map((item, index) => (
          <Link
            key={item.to}
            to={item.to}
            className="font-serif text-2xl md:text-3xl font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </main>
  );
};

export default Index;
