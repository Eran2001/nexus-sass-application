
// Fix: Import React to resolve 'React' namespace error for React.ReactNode
import React from 'react';

export enum UserStatus {
  ACTIVE = 'Active',
  PENDING = 'Pending',
  INACTIVE = 'Inactive'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: UserStatus;
  lastActive: string;
  avatarUrl: string;
}

export interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  isUp: boolean;
  icon: React.ReactNode;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  meta: string;
  time: string;
  iconType: 'user' | 'domain' | 'billing' | 'alert' | 'ticket';
}

export interface Project {
  id: string;
  title: string;
  status: string;
  owner: string;
  timeline: string;
  budget: { current: number; total: number };
  priority: 'High' | 'Medium' | 'Low';
}
