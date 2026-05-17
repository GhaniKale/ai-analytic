import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen">
      <Sidebar className="hidden md:flex" />

      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-surface/60 backdrop-blur-xl">
          <button
            type="button"
            className="absolute inset-0 h-full w-full"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close navigation"
          />
          <Sidebar
            className="fixed inset-y-0 left-0 w-72 max-w-xs"
            isMobile
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>
      )}

      <main className="min-h-screen relative md:ml-64">
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
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
