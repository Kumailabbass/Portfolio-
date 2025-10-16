
import React from 'react';
import SkillBadge from './SkillBadge';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS',
  'GitHub', 'Responsive Design'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-accent">About Me</h2>
        <p className="text-lg text-text-secondary text-center mb-12">
          A brief introduction to my journey and passion for development.
        </p>
        <div className="text-left text-text-primary space-y-4 text-lg leading-relaxed">
          <p>
            Hello! I'm Syed Kumail Abbas, a frontend developer with a keen eye for design and a drive to create seamless user experiences. My journey into web development started with a simple curiosity about how websites work, and it has since grown into a full-fledged passion for building beautiful and functional digital products.
          </p>
          <p>
            I thrive on challenges and am constantly learning new technologies to stay at the forefront of the industry. My goal is to not only write clean and efficient code but also to contribute to projects that are impactful and user-centric.
          </p>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-accent">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map(skill => (
              <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
