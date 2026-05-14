import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen">
      <Sidebar />
      <main className="ml-64 min-h-screen relative">
        <Header />
        <div className="p-xl space-y-xl">
          <Outlet />
        </div>
      </main>
      {/* Floating Background Elements for Depth */}
      <div className="fixed top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
      <div className="fixed bottom-0 left-64 -z-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none opacity-30"></div>
    </div>
  );
};

export default DashboardLayout;
