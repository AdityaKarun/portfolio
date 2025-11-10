import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Download, MapPin, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // CUSTOMIZE YOUR INFO HERE
  const portfolioData = {
    name: "Aditya Karun",
    role: "Software Developer",
    location: "Bengaluru, India",
    bio: "Software developer who is passionate about building efficient and thoughtful solutions. Outside of code, I enjoy exploring nature, watching movies, and following cricket.",
    email: "karunaditya77@gmail.com",
    github: "https://github.com/AdityaKarun",
    linkedin: "https://www.linkedin.com/in/aditya-karun-083a9a256/",
    resume: "#", // Add your resume link here
    
    experience: [
      {
        title: "Software Engineering Intern",
        company: "Pramana, an Evident Company",
        period: "April 2025 – November 2025",
        location: "Bengaluru",
        description: "Worked on real-time image processing pipelines for whole slide imaging (WSI) systems, focusing on system architecture, DICOM standards, and optimization.",
        achievements: [
          "Engineered a real-time message publishing system using RabbitMQ to relay scanning events to Docker-based image-processing algorithms, ensuring 100% synchronized updates and modular scalability",
          "Implemented DICOMDIR functionality enabling hierarchical navigation across patient, study, series, and image levels in WSI viewers",
          "Refactored post-processing service with PEP 8 compliant code, reducing debugging time by 40-50% through standardized sanity checks and validations",
          "Integrated JPEG XL compression achieving 25–30% smaller file sizes while preserving diagnostic quality, enhancing storage efficiency for large-scale datasets"
        ]
      }
    ],
    
    skills: [
      { name: "C", category: "Languages" },
      { name: "C++", category: "Languages" },
      { name: "Python", category: "Languages" },
      { name: "HTML5", category: "Web Technologies" },
      { name: "CSS3", category: "Web Technologies" },
      { name: "MySQL", category: "Databases" },
      { name: "MongoDB", category: "Databases" },
      { name: "Neo4j", category: "Databases" },
      { name: "Linux", category: "Platform & Dev Tools" },
      { name: "Docker", category: "Platform & Dev Tools" },
      { name: "RabbitMQ", category: "Platform & Dev Tools" },
      { name: "Git", category: "Development & Collaboration" },
      { name: "GitHub & Bitbucket", category: "Development & Collaboration" },
      { name: "Confluence", category: "Development & Collaboration" },
      { name: "Canva", category: "Design" },
      { name: "Draw.io", category: "Design" },
      { name: "Lucidchart", category: "Design" },
    ],
    
    projects: [
      {
        title: "Block-Box: Decentralized File Storage",
        description: "Secure, decentralized file storage system using blockchain and IPFS with AES encryption, ensuring data privacy and tamper-proof metadata recording.",
        tech: ["Python", "Flask", "IPFS", "Blockchain", "AES Encryption", "Cryptography"],
        link: "https://github.com/AdityaKarun/Block-Box",
        featured: true
      },
      {
        title: "EduConnect: Student-Teacher Portal",
        description: "Comprehensive web-based portal for scheduling and managing appointments between teachers and students with role-based access control.",
        tech: ["Flask", "SQLAlchemy", "SQLite", "Jinja2", "HTML/CSS", "Werkzeug"],
        link: "https://github.com/AdityaKarun/EduConnect",
        featured: true
      },
      {
        title: "PyJARVIS: Voice Assistant",
        description: "Python-based voice-controlled personal assistant with speech recognition, text-to-speech, weather updates, news headlines, Google search, and YouTube control.",
        tech: ["Python", "Speech Recognition", "Text-to-Speech", "NewsAPI", "WeatherAPI", "YouTube Control"],
        link: "https://github.com/AdityaKarun/PyJARVIS",
        featured: true
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about me', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode ? 'bg-gray-900/95 shadow-lg' : 'bg-white/95 shadow-lg'
          : 'bg-transparent'
      } backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollTo('home')}
              className={`relative text-3xl font-black tracking-tighter transition-all ${
                darkMode 
                  ? 'text-white hover:text-blue-400' 
                  : 'text-gray-900 hover:text-blue-600'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="relative">
                <span className="relative z-10">A</span>
                <span className="relative z-10 -ml-1">K</span>
                <div className={`absolute -bottom-0.5 left-0 right-0 h-0.5 ${
                  darkMode 
                    ? 'bg-blue-400' 
                    : 'bg-blue-600'
                }`}></div>
              </span>
            </button>
            
            <div className={`hidden md:flex gap-1 items-center rounded-full p-1 ${
              darkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              {['home', 'about me', 'experience', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`capitalize px-4 py-2 rounded-full transition-all text-sm font-medium ${
                    activeSection === section 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                      : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-full transition-all ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2.5 rounded-full transition-all ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={`md:hidden fixed inset-x-0 top-[73px] transition-all duration-300 ${
            mobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <div className={`p-4 mx-4 rounded-lg shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex flex-col gap-2">
                {['home', 'about me', 'experience', 'skills', 'projects', 'contact'].map(section => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollTo(section);
                      setMobileMenuOpen(false);
                    }}
                    className={`capitalize px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                      activeSection === section 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
  <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12 relative overflow-visible">
        {/* Animated background gradient */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20' 
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
        }`}></div>
        
        <div className="max-w-5xl w-full relative z-10">
          <div className="text-center space-y-8">
            {/* Profile Image Placeholder */}
            <div className="inline-block relative group">
              <div className="w-40 h-40 rounded-full mx-auto shadow-2xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img 
                  src="/images/profile.jpg" 
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 ${
                darkMode ? 'border-gray-900' : 'border-white'
              }`}>
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
            
            <div>
              <p className={`text-sm font-semibold tracking-wider uppercase ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center justify-center gap-2 mb-4`}>
                <MapPin size={16} />
                {portfolioData.location}
              </p>
              
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {portfolioData.name}
                </span>
              </h1>
              
              <p className={`text-2xl md:text-3xl font-medium mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {portfolioData.role}
              </p>
            </div>
            
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {portfolioData.bio}
            </p>
            
            <div className="flex gap-4 justify-center">
              <a 
                href={portfolioData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                className={`px-8 py-4 rounded-full font-semibold border-2 transition-all hover:scale-105 ${
                  darkMode 
                    ? 'border-gray-700 hover:border-gray-600 text-white' 
                    : 'border-gray-300 hover:border-gray-400 text-gray-900'
                }`}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about me" className={`py-16 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className={`p-10 rounded-3xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-xl'}`}>
            <p className={`text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Hi, I'm Aditya Karun, a software developer who enjoys creating things that are simple, efficient, and meaningful. 
              I like the process of understanding a problem, breaking it down, and building something that genuinely works.
              <br/><br/>
              While I spend a lot of time with code, I'm just as drawn to the world outside the screen. I'm a nature wanderer 
              who enjoys quiet trails and open skies, a movie buff who can spend hours discussing great storytelling, and a 
              cricket fan who never misses a good match.
              <br/><br/>
              I believe good work whether in code, design, or life comes from clarity, patience, and curiosity. That's what 
              I try to bring into everything I do, both as a developer and as a person.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className={`p-8 rounded-3xl transition-all hover:scale-[1.02] ${
                darkMode ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white shadow-xl hover:shadow-2xl'
              }`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{exp.company}</p>
                    {exp.location && (
                      <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        📍 {exp.location}
                      </p>
                    )}
                  </div>
                  <span className={`mt-2 md:mt-0 px-5 py-2 rounded-full text-sm font-medium ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-50 text-blue-700'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <p className={`mb-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.description}
                </p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={`flex items-start gap-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2"></span>
                      <span className="text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Skills Section */}
      <section id="skills" className={`py-16 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className={`p-8 rounded-3xl transition-all hover:scale-[1.02] group ${
                darkMode ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white shadow-xl hover:shadow-2xl'
              }`}>
                <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className={`px-5 py-2.5 rounded-full text-base font-medium transition-all hover:scale-105 ${
                        darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, idx) => (
              <div key={idx} className={`group p-8 rounded-3xl transition-all hover:scale-105 ${
                darkMode ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white shadow-xl hover:shadow-2xl'
              }`}>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-5 py-2.5 rounded-full text-base font-medium transition-all hover:scale-105 ${
                      darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                >
                  View Project <ExternalLink size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-6 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className={`p-12 rounded-3xl text-center overflow-visible ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-xl'}`}>
            <p className={`text-xl mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex gap-6 justify-center">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" 
                 className={`p-4 rounded-full transition-all hover:scale-110 ${
                   darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                 }`}>
                <Github size={28} />
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"
                 className={`p-4 rounded-full transition-all hover:scale-110 ${
                   darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                 }`}>
                <Linkedin size={28} />
              </a>
              <a href={`mailto:${portfolioData.email}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className={`p-4 rounded-full transition-all hover:scale-110 ${
                   darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                 }`}>
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${darkMode ? 'bg-gray-900 text-gray-400 border-t border-gray-800' : 'bg-white text-gray-600 border-t border-gray-200'}`}>
        <p className="text-lg">© 2025 | {portfolioData.name}</p>
      </footer>
    </div>
  );
}