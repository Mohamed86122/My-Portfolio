import React from 'react';
import { Github, Mail, Phone, MapPin, Linkedin, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mohamed SGHIR</h1>
              <h2 className="text-xl md:text-2xl mb-6">Full Stack Developer</h2>
              <p className="text-lg mb-8">Passionate about creating elegant solutions to complex problems</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="mailto:Mohammed.sg1200@gmail.com" className="flex items-center gap-2 bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-50 transition">
                  <Mail size={20} />
                  Contact Me
                </a>
                <a href="https://github.com/Mohamed86122" className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition">
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Developer workspace" className="rounded-lg shadow-xl max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Contact Info */}
      <div className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="tel:+212604120430" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Phone size={20} />
              +212 604120430
            </a>
            <a href="mailto:Mohammed.sg1200@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Mail size={20} />
              Mohammed.sg1200@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/mohamed-sghir" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <Linkedin size={20} />
              mohamed-sghir
            </a>
            <span className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              Oujda, Morocco
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Section */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'PHP', 'C#', 'Java'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Frameworks & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Symfony', '.NET Core', 'Spring Boot'].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Tools & Practices</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'CI/CD', 'Agile/Scrum', 'REST APIs'].map((skill) => (
                    <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800">Full Stack Developer</h3>
                <p className="text-blue-600">NismaTech | July 2024 - September 2024</p>
                <p className="text-gray-600 mt-2">Developed an online course management platform similar to Udemy using Symfony and modern web technologies.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Full Stack Developer</h3>
                <p className="text-blue-600">SOPHACHARK | 2023 - 2024</p>
                <p className="text-gray-600 mt-2">Built a pharmaceutical logistics management application using ASP.NET Core and implemented Scrum methodologies.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Projects Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="Project" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Symforum</h3>
                <p className="text-gray-600 mb-4">A Q&A platform built with Symfony, similar to Stack Overflow.</p>
                <div className="flex gap-2">
                  <a href="https://github.com/Mohamed86122/Symforum" className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Mohamed SGHIR. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://github.com/Mohamed86122" className="hover:text-blue-400">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-sghir" className="hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="/resume.pdf" className="hover:text-blue-400">
                <FileText size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;