import React from 'react';
import ProjectCard from './ProjectCard';
import movieWebImage from '../assets/imgs/movieweb.png';
import alphaCarImage from '../assets/imgs/alphacar.png';
import carpoolImage from '../assets/imgs/carpool.png';
import passwordImage from '../assets/imgs/password.png';

const projectsData = [
  {
    title: 'Movie E-commerce Platform',
    description: 'A frontend showcase of an online movie store. Features a curated film selection, interactive shopping cart, and dynamic price calculation—demonstrating modern UI/UX principles and functional cart management.',
    imageUrl: movieWebImage,
    tech: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://skar-music-site.netlify.app/',
    githubUrl: 'https://github.com/Kumailabbass/Movie-site.git'
  },
  {
    title: 'WEB-ALFAROMEO Showcase',
    description: 'A sleek frontend concept for a luxury car brand featuring dynamic CSS animations, modern UI components, and responsive design. Built with HTML and CSS to demonstrate advanced styling and visual presentation skills.',
    imageUrl: alphaCarImage,
    tech: ['HTML', 'CSS'],
    liveUrl: 'https://alfa-romeo-skar.netlify.app/',
    githubUrl: 'https://github.com/Kumailabbass/WEB-ALFAROMEO.git'
  },
  {
    title: 'Carpool Management',
    description: 'A dynamic ride-sharing interface displaying active routes with driver details, passenger info, and zone tracking. Features interactive controls and organized data tables for efficient carpool coordination. Built with modern web technologies and state management.',
    imageUrl: carpoolImage,
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://tracking-carpool.vercel.app/',
    githubUrl: 'https://github.com/Kumailabbass/tracking-carpool.git'
  },
  {
    title: 'Password Generator Tool',
    description: 'A simple web utility that generates secure random passwords with customizable options. Built with HTML, CSS, and JavaScript to demonstrate DOM manipulation and user interaction handling.',
    imageUrl: passwordImage,
    tech: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://s-kumail-abbas-psw-generator-js.netlify.app/',
    githubUrl: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-accent">My Projects</h2>
        <p className="text-lg text-text-secondary text-center mb-12">
          Here are a few projects I've worked on. Feel free to explore them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;