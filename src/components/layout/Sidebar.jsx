import { Link, useLocation } from 'react-router-dom';
import {
  Rocket,
  LayoutDashboard,
  Users,
  LineChart,
  CircleDollarSign,
  FileText,
  ClipboardList,
  Settings,
  BarChart2
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Employees', icon: Users, path: '/employees' },
    { name: 'KPI Analytics', icon: LineChart, path: '/kpi-analytics' },
    { name: 'Finance', icon: CircleDollarSign, path: '/finance' },
    { name: 'Reports', icon: FileText, path: '/reports' },
    { name: 'Tasks', icon: ClipboardList, path: '/tasks' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-surface/80 backdrop-blur-xl border-r border-white/10 shadow-2xl flex flex-col py-md px-md z-50">
      <div className="mb-xl px-sm">
        <div className="flex items-center gap-md">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Rocket className="w-6 h-6 text-on-primary-container" />
          </div>
          <div>
            <h1 className="font-display text-h3 font-bold text-primary tracking-tight">AIPerformance</h1>
            <p className="text-label-sm text-on-surface-variant/60 uppercase tracking-widest">Elite Enterprise</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-base overflow-y-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = path === item.path || (path === '/' && item.path === '/dashboard');
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-md px-md py-sm rounded-lg transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'text-primary font-bold border-r-2 border-primary bg-white/5'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5 font-medium'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-display text-body-md">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-md">
        <button className="w-full py-md px-md rounded-xl bg-gradient-to-r from-primary/80 to-secondary-container/80 text-on-primary-fixed font-bold flex items-center justify-center gap-sm hover:opacity-90 transition-opacity active:scale-95 shadow-lg shadow-primary/20">
          <BarChart2 className="w-5 h-5" />
          New Analysis
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
