import { Search, Bell, HelpCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-40 bg-surface/60 backdrop-blur-lg border-b border-white/5 flex justify-between items-center px-xl h-16">
      <div className="flex items-center gap-lg flex-1">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-md top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
          <input
            className="w-full bg-white/5 border border-white/10 rounded-full py-sm pl-2xl pr-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary/50 focus:bg-white/10 transition-all placeholder:text-on-surface-variant/40"
            placeholder="Search analytics, employees or tasks..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-lg">
        <div className="flex items-center gap-md">
          <button className="p-base rounded-full hover:bg-white/5 text-on-surface-variant hover:text-on-surface transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
          </button>
          <button className="p-base rounded-full hover:bg-white/5 text-on-surface-variant hover:text-on-surface transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
        <div className="h-8 w-px bg-white/10"></div>
        <div className="flex items-center gap-sm">
          <img
            alt="User profile"
            className="w-10 h-10 rounded-full border-2 border-primary/30 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF2HzL_JfOOoTcNX7LcwEpfH4uYvtoz2FKp1uj_1l3XmIIjhCr7mFzzQtru_w4iYnIYJjJ0u-h8zCi0h5XrcavvYp6JTIz-GzOxg3bjsq0qR9PZydKPV8Tyxjqnc9pUqSSTWTonFN8JPeR5G5sRrAkj60D0_nbI1s4NYK9txurq3SevQXXS53tjgPD2dCkO2i245m-1S1vmsxEHAvuSoJp4j3vPOoeOej4PE_OJdqHVWtRZEv3oegnl_UM5IH7k1s3L9fFEI2I-A"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
