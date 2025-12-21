import React from 'react';
import profileImage from '../assets/imgs/pfp2.jpg';
import resumeFile from '../assets/files/resume.pdf';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto py-20">
        <img
          src={profileImage}
          alt="Syed Kumail Abbas"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-border-color shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
          Hi, I'm Syed Kumail Abbas
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-accent font-medium">
          A Passionate Frontend Developer
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary">
          I specialize in building exceptional, high-quality websites and applications. I love turning complex problems into simple, beautiful, and intuitive designs.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-accent text-primary font-bold py-3 px-8 rounded-md hover:bg-blue-400 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Get in Touch
          </a>

          <a
            href={resumeFile}
            download="Syed_Kumail_Abbas_Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-secondary text-text-primary font-bold py-3 px-8 rounded-md border border-border-color hover:bg-border-color transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;