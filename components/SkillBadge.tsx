
import React from 'react';

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-secondary border border-border-color text-text-primary text-sm font-medium px-4 py-2 rounded-full shadow-sm transition-all duration-300 hover:bg-border-color hover:text-accent cursor-default">
      {children}
    </div>
  );
};

export default SkillBadge;
