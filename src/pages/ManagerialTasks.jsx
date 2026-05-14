import { Filter, MoreHorizontal, Sparkles, Calendar, Clock, History, CircleDashed, RefreshCw, CheckCircle, Plus } from 'lucide-react';

const ManagerialTasks = () => {
  return (
    <>
      <div className="flex justify-between items-end mb-xl">
        <header>
          <h2 className="font-display text-h1 text-on-surface mb-xs">Workflow Orchestrator</h2>
          <p className="font-display text-body-lg text-on-surface-variant">AI-optimized prioritization for Team Alpha and Beta performance cycles.</p>
        </header>
        <div className="flex gap-md">
          <div className="glass-card flex items-center gap-sm p-base rounded-full border border-white/10">
            <button className="px-lg py-sm rounded-full bg-primary text-on-primary-container font-bold text-label-sm shadow-md">Kanban</button>
            <button className="px-lg py-sm rounded-full text-on-surface-variant font-medium text-label-sm hover:text-on-surface transition-colors">List View</button>
          </div>
          <button className="flex items-center gap-sm px-lg py-sm glass-card rounded-xl font-bold text-on-surface hover:bg-white/10 transition-all active:scale-95">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter h-[calc(100%-120px)] items-start">
        {/* TO DO / SUGGESTED */}
        <div className="flex flex-col gap-md h-full min-w-[320px]">
          <div className="flex items-center justify-between px-sm">
            <div className="flex items-center gap-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#89ceff]"></span>
              <h3 className="font-display text-h3 text-on-surface">Suggested</h3>
              <span className="px-sm py-xs glass-card rounded-lg text-label-sm text-on-surface-variant">4</span>
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col gap-md overflow-y-auto pb-lg custom-scrollbar">
            {/* AI Suggestion Card */}
            <div className="glass-card p-md rounded-xl border-l-4 border-l-tertiary group cursor-grab active:cursor-grabbing hover:translate-y-[-2px] transition-all">
              <div className="flex justify-between items-start mb-sm">
                <span className="bg-tertiary-container/30 text-tertiary text-[10px] font-bold px-sm py-xs rounded uppercase tracking-wider flex items-center gap-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Suggested
                </span>
                <span className="bg-error-container/40 text-error px-sm py-xs rounded-lg text-label-sm font-bold">High</span>
              </div>
              <h4 className="font-display text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">Schedule Review with Team Alpha</h4>
              <p className="text-label-sm text-on-surface-variant mt-xs">KPI drift detected in Q3 sprint. Performance is 12% below target.</p>
              <div className="mt-lg flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img className="h-6 w-6 rounded-full border border-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZnngxyXn7bUkNs6wLralC2TvHdCdEnnT6MhUFVoLSqWR2JPM-NIUBMeLgdYoHOkhb3tpF_pH7aC0tp17qAAZFgTL83fYvOBdUfkKJXYQnQ-DAescnYO_ws2RPW-tRulVsPfNPJs40GZRG176SRYPI3ixYwWYNC2MfbAfMZ2l4YibHzqJM6IpB6Wx7enL3sCT9lly0Pr-XTYT202P64toGOv0WAOzAFMZ0HnwLlbSFiFcMwO2HfFH-0QDGUT8BBdvUIRm8Zt1LpQ" alt="User" />
                  <img className="h-6 w-6 rounded-full border border-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw-c7FPmP9Yn-zA9jRC4xK-1UGyp0AX3VBv64u5QHUDkO76T7opyxOeR6fDhQ9IchY7hB56ut3f2kyaEZnE7H5ukPbv5mRQ97MNMNDgGHSh1V4SOLP7jHRi8Zp4fAOf_ghs_WUgLZA9u2UN-iOdHQpf8E3YQ6lzQog0J1bzHEp6LuaOuyHUUQqKl1c-5ktw7p4NZF0dcj1rYD7uwczPzgYLv3NQIDhS1xvwa_ZYRuCCMCyzidZi_0gFC1eIrWbzIMifmV7jIFCxw" alt="User" />
                </div>
                <span className="flex items-center gap-xs text-label-sm text-on-surface-variant">
                  <Calendar className="w-4 h-4" />
                  Today
                </span>
              </div>
            </div>
            {/* Standard Card */}
            <div className="glass-card p-md rounded-xl border-l-4 border-l-transparent group cursor-grab active:cursor-grabbing hover:translate-y-[-2px] transition-all">
              <div className="flex justify-between items-start mb-sm">
                <span className="bg-surface-variant text-on-surface-variant text-[10px] font-bold px-sm py-xs rounded uppercase tracking-wider">Operational</span>
                <span className="bg-secondary-container/40 text-secondary px-sm py-xs rounded-lg text-label-sm font-bold">Medium</span>
              </div>
              <h4 className="font-display text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">Approve Budget Adjustment</h4>
              <p className="text-label-sm text-on-surface-variant mt-xs">Infrastructure scaling request for North Region nodes.</p>
              <div className="mt-lg flex items-center justify-between">
                <div className="flex -space-x-2">
                  <span className="h-6 w-6 rounded-full bg-primary/20 text-[10px] flex items-center justify-center font-bold text-primary border border-surface">JD</span>
                </div>
                <span className="flex items-center gap-xs text-label-sm text-on-surface-variant">
                  <Clock className="w-4 h-4" />
                  4h left
                </span>
              </div>
            </div>
            {/* Low Priority AI Card */}
            <div className="glass-card p-md rounded-xl border-l-4 border-l-tertiary group cursor-grab active:cursor-grabbing hover:translate-y-[-2px] transition-all">
              <div className="flex justify-between items-start mb-sm">
                <span className="bg-tertiary-container/30 text-tertiary text-[10px] font-bold px-sm py-xs rounded uppercase tracking-wider flex items-center gap-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Suggested
                </span>
                <span className="bg-surface-variant/40 text-on-surface-variant px-sm py-xs rounded-lg text-label-sm font-bold">Low</span>
              </div>
              <h4 className="font-display text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">Archive Legacy Logs</h4>
              <p className="text-label-sm text-on-surface-variant mt-xs">Storage usage reached 85%. Automated cleanup recommended.</p>
              <div className="mt-lg flex items-center justify-between">
                <span className="h-6 w-6 rounded-full bg-white/5 border border-white/10"></span>
                <span className="flex items-center gap-xs text-label-sm text-on-surface-variant">
                  <History className="w-4 h-4" />
                  Oct 24
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* IN PROGRESS */}
        <div className="flex flex-col gap-md h-full min-w-[320px]">
          <div className="flex items-center justify-between px-sm">
            <div className="flex items-center gap-sm">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#c0c1ff]"></span>
              <h3 className="font-display text-h3 text-on-surface">In Progress</h3>
              <span className="px-sm py-xs glass-card rounded-lg text-label-sm text-on-surface-variant">2</span>
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col gap-md overflow-y-auto pb-lg custom-scrollbar">
            {/* Progress Card */}
            <div className="glass-card p-md rounded-xl border-l-4 border-l-primary group cursor-grab active:cursor-grabbing hover:translate-y-[-2px] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-xs">
                <CircleDashed className="w-16 h-16 text-primary opacity-20 absolute -right-4 -top-4 select-none" />
              </div>
              <div className="flex justify-between items-start mb-sm relative z-10">
                <span className="bg-primary/20 text-primary text-[10px] font-bold px-sm py-xs rounded uppercase tracking-wider">Strategy</span>
                <span className="bg-error-container/40 text-error px-sm py-xs rounded-lg text-label-sm font-bold">High</span>
              </div>
              <h4 className="font-display text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors relative z-10">Q4 Hiring Forecast</h4>
              <p className="text-label-sm text-on-surface-variant mt-xs relative z-10">Collaborating with HR on headcount for AI-Engineers.</p>
              <div className="mt-md w-full bg-white/5 h-1 rounded-full overflow-hidden relative z-10">
                <div className="bg-primary h-full w-[65%] shadow-[0_0_8px_rgba(192,193,255,0.5)]"></div>
              </div>
              <div className="mt-lg flex items-center justify-between relative z-10">
                <div className="flex -space-x-2">
                  <img className="h-6 w-6 rounded-full border border-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT6xl5AwLILpOw9tY3FoIdy4ICCm3u1x10FCWfRKhLuL18QrVcVp8mSzabYd3mMJNvC3Us7S8K1040XoLAh8LrFgGsKQtd9janYGpDSVorrE7ig7LGZOqljpGl603gHky90D5aRGJE7Zd9WmJGRpNu_NL2dyJXa0qFuA8gMA_i0ItiPA2C8yqmJR2W7GAmU0YUnj3_YF5YWUrOTglAmtrThX4dQzx8WHApB4N5Qfmm3z6ddCzWmONdwX8Na0DJORfWTNLR23bpOA" alt="User" />
                  <img className="h-6 w-6 rounded-full border border-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo-RLjD_WwhJSayAPYBn-QmQUgmcCBRRb8QrBt0ochL1aaMkAo8eZFDo-ZS36I0CMM6irVgLqM-ywUaWyPkzO3PzT50C6BeHLeCpG_N-nFybrcEuu2UrU4ZzKNu8L-gavgEO1s0xDgqaZQrQr7vUHi52GV0-tshP7S3MeUOtNhUFiDZphrifF-Jgwng-62cDv2dQI3Ran51xanQgkSwJ1YOHetR3q2-qhAcqsKmGK73uB74aacQyTAL48yYhz2khHVzURYDpKPsA" alt="User" />
                </div>
                <span className="text-label-sm text-primary font-bold">65% Done</span>
              </div>
            </div>
            {/* Another Progress Card */}
            <div className="glass-card p-md rounded-xl border-l-4 border-l-primary group cursor-grab active:cursor-grabbing hover:translate-y-[-2px] transition-all">
              <div className="flex justify-between items-start mb-sm">
                <span className="bg-primary/20 text-primary text-[10px] font-bold px-sm py-xs rounded uppercase tracking-wider">Technical</span>
                <span className="bg-secondary-container/40 text-secondary px-sm py-xs rounded-lg text-label-sm font-bold">Medium</span>
              </div>
              <h4 className="font-display text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">Security Patch Deployment</h4>
              <p className="text-label-sm text-on-surface-variant mt-xs">Update 12.4v pushing to stage cluster nodes.</p>
              <div className="mt-lg flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img className="h-6 w-6 rounded-full border border-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVYVTaiPJZO7ZaSYo1kxTSEO8SEfhYp0IEc7AbFyfy7cRI5z9Cb-pmZRK5GnyuE79ws3KeZTAg5y1l18vKBFaGeHgRKMtUbV3d6AhHlF6kYfMXnKKEpRtqaq75TUtuX2TRJf2gYJD6oOZr0dO2nfsIKAIsNu7EZqgWQwUh14Aosc2HjMyHVVbJ9moAAaUiJl5gL4TYHoWsb6Jvop9Eqwa8A96GvH03LqmJn-6SzpImukETa4C-sQlPwsGQvntFvrAUceM8S-ArQA" alt="User" />
                </div>
                <span className="flex items-center gap-xs text-label-sm text-on-surface-variant">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Syncing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* COMPLETED */}
        <div className="flex flex-col gap-md h-full min-w-[320px]">
          <div className="flex items-center justify-between px-sm">
            <div className="flex items-center gap-sm">
              <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]"></span>
              <h3 className="font-display text-h3 text-on-surface">Completed</h3>
              <span className="px-sm py-xs glass-card rounded-lg text-label-sm text-on-surface-variant">12</span>
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col gap-md overflow-y-auto pb-lg custom-scrollbar opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Completed Card */}
            <div className="glass-card p-md rounded-xl border-l-4 border-l-[#10b981] group bg-white/[0.01]">
              <div className="flex justify-between items-start mb-sm">
                <span className="bg-[#10b981]/20 text-[#10b981] text-[10px] font-bold px-sm py-xs rounded uppercase tracking-wider">Finance</span>
                <CheckCircle className="w-5 h-5 text-[#10b981]" />
              </div>
              <h4 className="font-display text-body-lg font-bold text-on-surface/50 line-through">Quarterly Tax Filing</h4>
              <div className="mt-lg flex items-center justify-between">
                <span className="text-label-sm text-on-surface-variant/40">Completed by Sarah L.</span>
                <span className="text-label-sm text-on-surface-variant/40 italic">2h ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-margin right-margin h-14 w-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 active:scale-90 transition-all z-50">
        <Plus className="w-7 h-7" />
      </button>
    </>
  );
};

export default ManagerialTasks;
