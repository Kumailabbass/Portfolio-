import React from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GmailIcon } from './icons/GmailIcon';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/Kumailabbass' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/kumailabbassrizvi' },
    { name: 'Gmail', icon: GmailIcon, url: 'mailto:kumailabbass2004@gmail.com' },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border-color">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">

          <div className="flex space-x-4 order-2 sm:order-1">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-text-secondary hover:text-accent transition-colors duration-200"
                  aria-label={`Visit my ${link.name}`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          

          <div className="text-center text-sm text-text-secondary order-1 sm:order-2">
            <p>&copy; {currentYear} Syed Kumail Abbas. All Rights Reserved.</p>
            
          </div>
          

          <div className="w-20 order-3 sm:block hidden"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;