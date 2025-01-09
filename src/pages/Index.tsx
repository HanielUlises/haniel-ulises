import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import CertificateCard from "@/components/CertificateCard";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-up-trigger").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.com",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    // Add more projects as needed
  ];

  const certificates = [
    {
      title: "Advanced Web Development",
      issuer: "Coursera",
      date: "2023",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      verificationUrl: "https://coursera.org/verify/123",
    },
    // Add more certificates as needed
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center fade-up-trigger">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm mb-4">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm Haniel Ulises
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate developer crafting beautiful digital experiences
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View my work</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-up-trigger">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600">Some of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="fade-up-trigger">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-up-trigger">
            <h2 className="text-3xl font-bold mb-4">Certificates</h2>
            <p className="text-gray-600">Professional development and achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div key={index} className="fade-up-trigger">
                <CertificateCard {...certificate} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center fade-up-trigger">
          <h2 className="text-3xl font-bold mb-4">GitHub Projects</h2>
          <p className="text-gray-600 mb-8">Check out my open source contributions</p>
          <Button asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto text-center fade-up-trigger">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to new opportunities and collaborations
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;