'use client';

import { ButtonHTMLAttributes } from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'outline' | 'default';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'default', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const { theme } = useTheme();

  const baseClasses = 'font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-2 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const variantClasses = {
    gradient: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl transform hover:scale-105',
    outline: `border-2 transition-all duration-300 ${
      theme === 'dark'
        ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
    }`,
    default: `${
      theme === 'dark'
        ? 'bg-gray-800 text-white hover:bg-gray-700'
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
    }`,
  };

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;