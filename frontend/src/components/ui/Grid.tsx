import React from 'react';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

const Grid: React.FC<GridProps> = ({
  children,
  className = '',
  cols = 1,
  gap = 'md',
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-6',
  };

  const gaps = {
    none: 'gap-0',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div
      className={`
        grid
        ${gridCols[cols]}
        ${gaps[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Grid; 