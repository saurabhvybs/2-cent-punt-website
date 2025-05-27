import { ReactElement } from 'react';

export interface Service {
  icon: ReactElement; 
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  number: string;
  label: string;
}

export type Theme = "light" | "dark";
