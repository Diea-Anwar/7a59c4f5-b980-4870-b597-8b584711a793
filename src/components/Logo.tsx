import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-primary text-primary-foreground rounded-lg p-2 mr-3">
        <span className="text-xl font-bold">TAG</span>
      </div>
      <div className="text-xl font-bold text-gray-900">
        TAG Groups
      </div>
    </div>
  );
};