import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import CertificateCard from "@/components/CertificateCard";
import { Github, Mail, Linkedin, Brain, BookOpen, Function } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    // Add dark mode class to html element
    document.documentElement.classList.add('dark');
    
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
      title: "AI Research Project",
      description: "Research on machine learning algorithms and their philosophical implications",
      technologies: ["Python", "TensorFlow", "Philosophy"],
      githubUrl: "https://github.com/HanielUlises",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
    // Add more projects as needed
  ];

  const certificates = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2023",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    },
    // Add more certificates as needed
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto text-center fade-up-trigger">
          <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm mb-4">
            AI Engineer • Philosopher • Mathematician
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
            Hi, I'm Haniel Ulises
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Exploring the intersection of artificial intelligence, philosophy, and mathematics
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="secondary" className="bg-gray-800 hover:bg-gray-700 text-gray-100">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button asChild variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <a href="#projects">View my work</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-up-trigger">
            <h2 className="text-3xl font-bold mb-4">Research & Projects</h2>
            <p className="text-gray-400">Exploring the frontiers of AI and philosophy</p>
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
      <section id="certificates" className="section-padding bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-up-trigger">
            <h2 className="text-3xl font-bold mb-4">Certificates & Education</h2>
            <p className="text-gray-400">Academic achievements and continuous learning</p>
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
      <section id="github" className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto text-center fade-up-trigger">
          <h2 className="text-3xl font-bold mb-4">GitHub Projects</h2>
          <p className="text-gray-400 mb-8">Explore my research implementations and experiments</p>
          <Button asChild variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            <a
              href="http://github.com/HanielUlises"
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
      <section id="contact" className="section-padding bg-gray-950">
        <div className="max-w-3xl mx-auto text-center fade-up-trigger">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Interested in collaborating on AI research or philosophical discussions?
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
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