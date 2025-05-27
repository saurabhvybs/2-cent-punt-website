import { Bell, Target, BarChart3 } from 'lucide-react';
import React from 'react';
import { Service } from '../types';

export const services: Service[] = [
  {
    icon: <Bell size={32} />, 
    title: "Smart Notifications",
    description: "AI-powered notification system that reaches customers at the perfect moment with personalized messages.",
    features: ["Real-time delivery", "Behavioral triggers", "Multi-channel support"]
  },
  {
    icon: <Target size={32} />, 
    title: "Customer Targeting",
    description: "Advanced targeting algorithms that help you reach the right customers with precision and efficiency.",
    features: ["Demographic analysis", "Behavioral segmentation", "Predictive modeling"]
  },
  {
    icon: <BarChart3 size={32} />, 
    title: "AI Analytics",
    description: "Comprehensive analytics dashboard powered by AI to give you actionable insights about your business.",
    features: ["Real-time metrics", "Predictive insights", "Custom reports"]
  }
];