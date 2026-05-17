import {
  Home,
  BookOpen,
  Users,
  ShoppingBag,
  LineChart,
  CircleDollarSign,
  FileText,
  ClipboardList,
  Bell,
  Settings,
} from 'lucide-react';

export const navItems = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Edukasi', icon: BookOpen, path: '/edukasi' },
  { name: 'Rekrutmen', icon: Users, path: '/rekrutmen' },
  { name: 'Selling', icon: ShoppingBag, path: '/selling' },
  { name: 'Employees', icon: Users, path: '/dashboard/employees' },
  { name: 'KPI', icon: LineChart, path: '/dashboard/kpi-analytics' },
  { name: 'Finance', icon: CircleDollarSign, path: '/dashboard/finance' },
  { name: 'Reports', icon: FileText, path: '/dashboard/reports' },
  { name: 'Tasks', icon: ClipboardList, path: '/dashboard/tasks' },
  { name: 'Notifications', icon: Bell, path: '/dashboard/notifications' },
  { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
];
