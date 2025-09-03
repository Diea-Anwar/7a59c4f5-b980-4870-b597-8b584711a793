import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center mr-3">
        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-1">
          T
        </div>
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-1">
          A
        </div>
        <div className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
          G
        </div>
      </div>
      <div className="text-xl font-bold text-foreground">
        <span className="text-blue-600">Group</span>
        <div className="text-sm font-normal text-muted-foreground -mt-1">TRADING C</div>
      </div>
    </div>
  );
};