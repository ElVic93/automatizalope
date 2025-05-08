import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right';
  duration?: 'fast' | 'normal' | 'slow';
  delay?: number; // delay in milliseconds
  threshold?: number; // 0 to 1, percentage of element visible before triggering
  once?: boolean; // whether to only trigger once
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-in-up',
  duration = 'normal',
  delay = 0,
  threshold = 0.1,
  once = true,
  className = '',
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  // Convert delay to appropriate class name
  const getDelayClass = () => {
    if (delay === 0) return '';
    if (delay <= 100) return 'delay-100';
    if (delay <= 200) return 'delay-200';
    if (delay <= 300) return 'delay-300';
    if (delay <= 400) return 'delay-400';
    return 'delay-500';
  };

  const animationClass = `animate-${animation}`;
  const durationClass = `duration-${duration}`;
  const delayClass = getDelayClass();
  
  return (
    <div
      ref={ref}
      className={`
        ${className}
        ${inView ? `${animationClass} ${durationClass} ${delayClass}` : 'opacity-0'}
      `}
      style={{ 
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal; 