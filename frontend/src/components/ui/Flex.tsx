import React from 'react';

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: boolean;
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

const Flex: React.FC<FlexProps> = ({
  children,
  className = '',
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = false,
  gap = 'none',
}) => {
  const directions = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse',
  };

  const justifies = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const aligns = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
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
        flex
        ${directions[direction]}
        ${justifies[justify]}
        ${aligns[align]}
        ${wrap ? 'flex-wrap' : 'flex-nowrap'}
        ${gaps[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Flex; 