import React from 'react';
import { Shield, Code, Database, Terminal, Laptop, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, GraduationCap, Award, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Shield className="w-20 h-20 mb-6 text-cyan-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">KORADA CHAITANYA</h1>
            <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6">CYBER SECURITY ENTHUSIAST</h2>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href="mailto:chaitanyakorada29@gmail.com" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-full">
                <Mail size={20} /> Email
              </a>
              <a href="tel:+917731910777" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-full">
                <Phone size={20} /> Call
              </a>
              <a href="https://www.linkedin.com/in/chaitanya-korada-202016285" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-full">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com/koradachaitanya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-full">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <Code className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <ul className="space-y-2">
                <li>C</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Shield className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
              <ul className="space-y-2">
                <li>Wireshark</li>
                <li>Burpsuite</li>
                <li>Nmap</li>
                <li>Kali Linux</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Database className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Database</h3>
              <ul className="space-y-2">
                <li>MySQL</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Laptop className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Operating Systems</h3>
              <ul className="space-y-2">
                <li>Microsoft Windows</li>
                <li>Linux</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Terminal className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
              <ul className="space-y-2">
                <li>Communication</li>
                <li>Vulnerability Analysis</li>
                <li>Ethical Hacking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                  <p className="text-cyan-400">ANDHRA UNIVERSITY COLLEGE OF ENGINEERING FOR WOMEN</p>
                  <p>2026 | CGPA: 8.14</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Intermediate</h3>
                  <p className="text-cyan-400">SRI CHAITANYA JUNIOR COLLEGE</p>
                  <p>2022 | Marks: 975</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Secondary Education</h3>
                  <p className="text-cyan-400">Visakha Vimala Vidyalayam</p>
                  <p>2020 | Marks: 562</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Briefcase className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Cybersecurity & Ethical Hacking Intern</h3>
                  <p className="text-cyan-400">Technohacks Edutech Official</p>
                  <p className="text-gray-400">Apr 2024 - Jun 2024</p>
                  <p className="mt-2">Developed foundational knowledge in Cybersecurity through hands-on projects, utilizing various tools to analyze, protect, and raise awareness about cyber threats.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Briefcase className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Cyber Security Intern</h3>
                  <p className="text-cyan-400">Edunet Foundation (AICTE Collaboration)</p>
                  <p className="text-gray-400">Jan - Feb 2025</p>
                  <p className="mt-2">Developed a Steganography tool for secure data hiding in images, utilizing LSB substitution and spatial domain steganography.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Secure Data Hiding in Images using Steganography</h3>
              <p className="mb-4">Developed a tool for secure data hiding in images using steganographic techniques.</p>
              <a href="https://github.com/koradachaitanya/stegnography.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                <Github size={20} /> View Project
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Network Scanning using NMAP Tool</h3>
              <p className="mb-4">Conducted comprehensive network scanning and analysis using NMAP.</p>
              <a href="https://www.linkedin.com/posts/chaitanya-korada-202016285_hello-everyone-i-am-excited-to-share-my-activity-7192890750873800704-GuIw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                <ExternalLink size={20} /> View Project
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Information Gathering using Maltego Tool</h3>
              <p className="mb-4">Utilized Maltego for advanced information gathering and analysis.</p>
              <a href="https://www.linkedin.com/posts/chaitanya-korada-202016285_cybersecurity-maltego-informationgathering-activity-7204322232708288512-m2S3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                <ExternalLink size={20} /> View Project
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Web Application Security Testing using Burpsuite</h3>
              <p className="mb-4">Performed security testing on web applications using Burpsuite.</p>
              <a href="https://www.linkedin.com/posts/chaitanya-korada-202016285_burpsuite-ethicalhacking-cybersecurity-activity-7204812002144260096-h7j_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                <ExternalLink size={20} /> View Project
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Email Analysis using MX Toolbox</h3>
              <p className="mb-4">Conducted email security analysis using MX Toolbox.</p>
              <a href="https://www.linkedin.com/posts/chaitanya-korada-202016285_hey-conections-im-excited-to-share-my-activity-7192143911572627456-fbrg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                <ExternalLink size={20} /> View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CyberSecurity Intern",
                org: "Edunet Foundation",
                date: "Jan 15-Feb 26 2025",
                link: "https://drive.google.com/file/d/1ot6xxnhmgcwAURSa2DPQn8f2wrcoEthd/view?usp=drive_link"
              },
              {
                title: "Artificial Intelligence Workshop",
                org: "Mudunuru Dreams Academy",
                date: "14-15 Feb 2025",
                link: "https://drive.google.com/file/d/1__RDP8Y83sVhi8wXCHYi-GA6d2cfVy8P/view?usp=drive_link"
              },
              {
                title: "Cybersecurity Fundamentals",
                org: "IBM SkillsBuild",
                date: "31 Jan 2025",
                link: "https://drive.google.com/file/d/14o4YEPoNS_uKkJL4Gc9R2a9rz6_vjnR6/view?usp=drive_link"
              },
              {
                title: "Introduction to Cybersecurity Awareness",
                org: "HP LIFE",
                date: "26 Jan 2025",
                link: "https://drive.google.com/file/d/1inu4YqXC1TLJOB-hKmv1l9Jq0ERQknss/view?usp=drive_link"
              },
              {
                title: "Cybersecurity Job Simulation",
                org: "Forage (AIG)",
                date: "Nov 2024 - Jan 2025",
                link: "https://drive.google.com/file/d/1iV3DS4_h2iPxNxTJatvfpts1myJlPngG/view?usp=drive_link"
              },
              {
                title: "Cybersecurity Assessment",
                org: "Learntube",
                date: "26 Nov 2024",
                link: "https://drive.google.com/file/d/15wwmM-iUPSV_3UNGbsyz7h5K1x0csYYE/view?usp=drive_link"
              },
              {
                title: "Cybersecurity Job Simulation",
                org: "Forage (Mastercard)",
                date: "Nov 2024",
                link: "https://drive.google.com/file/d/1tILFbjrll44B5M3L4U3L6cwTXH50JtuO/view?usp=drive_link"
              },
              {
                title: "Ethical Hacking Course",
                org: "Swayam NPTEL",
                date: "Jul - Oct 2024",
                link: "https://drive.google.com/file/d/1XU86XGng9ZF8wGrGKIEyIr0344JKYO_9/view?usp=drive_link"
              },
              {
                title: "Cybersecurity and Ethical Hacking Intern",
                org: "Technohacks",
                date: "Apr - Jun 2024",
                link: "https://drive.google.com/file/d/1h7Le-yl6zVBNilfIXYwaEVjhyJD5HeA8/view?usp=drive_link"
              },
              {
                title: "Campus Ambassador",
                org: "Coincent",
                date: "Feb 2024",
                link: "https://drive.google.com/file/d/1ZC1Zb5clISH__TE_FU0Gh8_1MDNJEEjK/view?usp=drive_link"
              },
              {
                title: "Mobile Application Development using Flutter",
                org: "Dr. Pallamsetti Innovations",
                date: "Jan 9-Jan 15 2024",
                link: "https://drive.google.com/file/d/1ZETQpYJ67eAAnGn432kDsaBxEAdBh-DF/view?usp=drive_link"
              },
              {
                title: "Campus Ambassador",
                org: "Skill Intern",
                date: "Dec 2023 - Jan 2024",
                link: "https://drive.google.com/file/d/1ZGD1W29ElVYkUYokMBZJPMjUUZEV0mEI/view?usp=drive_link"
              },
              {
                title: "Cybersecurity with Ethical Hacking Course",
                org: "Rinex Technologies",
                date: "Nov 6-Dec 28 2023",
                link: "https://drive.google.com/file/d/1ZAd4_JX6naUjFP7NJjDyh1Wy_r-YM-qI/view?usp=drive_link"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <Award className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-cyan-400 mb-2">{cert.org}</p>
                <p className="text-gray-400 mb-4">{cert.date}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                  <ExternalLink size={20} /> View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-curricular Activities Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Extra-curricular Activities</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p>• Served as an Executive member of the Ethical DevSecOps Club at AUCE from March to August 2024</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p>• Currently co-leads the Ethical Hacking Club at AUCE, focusing on social media engagement since November 2024</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p>• Coordinated and managed Reboot2K25, a 2-day techno-cultural fest at AUCEW, delivering a successful event experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:chaitanyakorada29@gmail.com" className="text-gray-400 hover:text-cyan-400">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/chaitanya-korada-202016285" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/koradachaitanya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 KORADA CHAITANYA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;