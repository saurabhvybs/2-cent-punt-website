import { Bell, Target, BarChart3, LucideIcon } from 'lucide-react';
import { Service } from '@/types';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}


export const services: Service[] = [
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "AI-powered notification system that reaches customers at the perfect moment with personalized messages.",
    features: ["Real-time delivery", "Behavioral triggers", "Multi-channel support"]
  },
  {
    icon: Target,
    title: "Customer Targeting",
    description: "Advanced targeting algorithms that help you reach the right customers with precision and efficiency.",
    features: ["Demographic analysis", "Behavioral segmentation", "Predictive modeling"]
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    description: "Comprehensive analytics dashboard powered by AI to give you actionable insights about your business.",
    features: ["Real-time metrics", "Predictive insights", "Custom reports"]
  }
];