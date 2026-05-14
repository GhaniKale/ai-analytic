import { TrendingUp, Brain, Users, DollarSign, Sparkles, UserSearch, ShieldCheck } from 'lucide-react';

const ExecutiveDashboard = () => {
  return (
    <>
      {/* Hero Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-display text-h1 text-on-surface">System Overview</h2>
          <p className="text-on-surface-variant">Real-time performance monitoring across all enterprise clusters.</p>
        </div>
        <div className="flex gap-md">
          <div className="glass-card px-md py-sm rounded-lg flex items-center gap-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-label-sm font-mono text-emerald-400 uppercase tracking-tighter">AI Core Online</span>
          </div>
        </div>
      </div>
      
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {/* AI Productivity Score */}
        <div className="glass-card p-lg rounded-xl relative overflow-hidden group hover:border-primary/40 transition-colors">
          <div className="absolute -right-4 -top-4 w-24 h-24 radial-glow opacity-50"></div>
          <div className="flex justify-between items-start mb-md">
            <div className="p-sm bg-primary/10 rounded-lg">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <span className="text-emerald-400 text-label-sm font-bold flex items-center gap-xs">
              <TrendingUp className="w-4 h-4" />
              +12.4%
            </span>
          </div>
          <h3 className="text-on-surface-variant text-label-sm uppercase tracking-widest mb-xs">AI Productivity Score</h3>
          <p className="font-display text-h1 text-on-surface">94.2</p>
          <div className="mt-md h-12 w-full flex items-end gap-1">
            <div className="bg-primary/20 w-full h-4 rounded-t-sm"></div>
            <div className="bg-primary/30 w-full h-6 rounded-t-sm"></div>
            <div className="bg-primary/40 w-full h-5 rounded-t-sm"></div>
            <div className="bg-primary/50 w-full h-8 rounded-t-sm"></div>
            <div className="bg-primary/60 w-full h-10 rounded-t-sm"></div>
            <div className="bg-primary w-full h-12 rounded-t-sm"></div>
          </div>
        </div>
        {/* Retention Rate */}
        <div className="glass-card p-lg rounded-xl relative overflow-hidden group hover:border-secondary/40 transition-colors">
          <div className="flex justify-between items-start mb-md">
            <div className="p-sm bg-secondary/10 rounded-lg">
              <Users className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-emerald-400 text-label-sm font-bold flex items-center gap-xs">
              <TrendingUp className="w-4 h-4" />
              +3.1%
            </span>
          </div>
          <h3 className="text-on-surface-variant text-label-sm uppercase tracking-widest mb-xs">Retention Rate</h3>
          <p className="font-display text-h1 text-on-surface">98.7%</p>
          <div className="mt-md h-12 w-full flex items-end gap-1">
            <div className="bg-secondary/20 w-full h-10 rounded-t-sm"></div>
            <div className="bg-secondary/30 w-full h-12 rounded-t-sm"></div>
            <div className="bg-secondary/40 w-full h-11 rounded-t-sm"></div>
            <div className="bg-secondary/50 w-full h-9 rounded-t-sm"></div>
            <div className="bg-secondary/60 w-full h-11 rounded-t-sm"></div>
            <div className="bg-secondary w-full h-12 rounded-t-sm"></div>
          </div>
        </div>
        {/* Revenue Growth */}
        <div className="glass-card p-lg rounded-xl relative overflow-hidden group hover:border-tertiary/40 transition-colors">
          <div className="flex justify-between items-start mb-md">
            <div className="p-sm bg-tertiary/10 rounded-lg">
              <DollarSign className="w-5 h-5 text-tertiary" />
            </div>
            <span className="text-emerald-400 text-label-sm font-bold flex items-center gap-xs">
              <TrendingUp className="w-4 h-4" />
              +24.8%
            </span>
          </div>
          <h3 className="text-on-surface-variant text-label-sm uppercase tracking-widest mb-xs">Revenue Growth</h3>
          <p className="font-display text-h1 text-on-surface">$4.2M</p>
          <div className="mt-md h-12 w-full flex items-end gap-1">
            <div className="bg-tertiary/20 w-full h-3 rounded-t-sm"></div>
            <div className="bg-tertiary/30 w-full h-5 rounded-t-sm"></div>
            <div className="bg-tertiary/40 w-full h-8 rounded-t-sm"></div>
            <div className="bg-tertiary/50 w-full h-7 rounded-t-sm"></div>
            <div className="bg-tertiary/60 w-full h-10 rounded-t-sm"></div>
            <div className="bg-tertiary w-full h-12 rounded-t-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Main Grid: Revenue Analytics & Productivity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Revenue Analytics Chart */}
        <div className="lg:col-span-2 glass-card p-lg rounded-xl flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 radial-glow opacity-30 pointer-events-none"></div>
          <div className="flex justify-between items-center mb-xl">
            <div>
              <h3 className="font-display text-h3 text-on-surface">Revenue Analytics</h3>
              <p className="text-label-sm text-on-surface-variant">Monthly revenue flow with AI forecast overlay</p>
            </div>
            <div className="flex bg-white/5 p-xs rounded-lg">
              <button className="px-md py-xs rounded-md text-label-sm font-bold bg-primary text-on-primary">Monthly</button>
              <button className="px-md py-xs rounded-md text-label-sm text-on-surface-variant hover:text-on-surface">Quarterly</button>
            </div>
          </div>
          {/* SVG Chart Simulation */}
          <div className="flex-1 w-full min-h-[300px] relative mt-md">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 300">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#c0c1ff" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#c0c1ff" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <line stroke="white" strokeOpacity="0.05" x1="0" x2="800" y1="50" y2="50"></line>
              <line stroke="white" strokeOpacity="0.05" x1="0" x2="800" y1="150" y2="150"></line>
              <line stroke="white" strokeOpacity="0.05" x1="0" x2="800" y1="250" y2="250"></line>
              <path d="M0,280 Q100,220 200,240 T400,100 T600,150 T800,50 V300 H0 Z" fill="url(#chartGradient)"></path>
              <path d="M0,280 Q100,220 200,240 T400,100 T600,150 T800,50" fill="none" stroke="#c0c1ff" strokeWidth="3"></path>
              <circle cx="200" cy="240" fill="#c0c1ff" r="4"></circle>
              <circle className="animate-pulse" cx="400" cy="100" fill="#c0c1ff" r="4"></circle>
              <circle cx="600" cy="150" fill="#c0c1ff" r="4"></circle>
            </svg>
            <div className="flex justify-between mt-md px-base text-label-sm text-on-surface-variant/60 font-mono">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span>
            </div>
          </div>
        </div>
        
        {/* Productivity Tracking Widget */}
        <div className="glass-card p-lg rounded-xl flex flex-col items-center justify-center text-center">
          <h3 className="font-display text-h3 text-on-surface mb-xs">Productivity Tracking</h3>
          <p className="text-label-sm text-on-surface-variant mb-xl">Cluster Efficiency Monitor</p>
          <div className="relative w-48 h-48 flex items-center justify-center mb-xl">
            <svg className="w-full h-full -rotate-90">
              <circle className="text-white/5" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.9" strokeDashoffset="138" strokeLinecap="round" strokeWidth="8"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-display text-on-surface">75%</span>
              <span className="text-label-sm font-mono text-primary uppercase">Optimized</span>
            </div>
          </div>
          <div className="w-full space-y-md text-left">
            <div className="flex justify-between items-center px-md py-sm rounded-lg bg-white/5">
              <div className="flex items-center gap-sm">
                <Brain className="text-primary w-5 h-5" />
                <span className="text-body-md text-on-surface">Auto-Scaling</span>
              </div>
              <span className="text-label-sm font-mono text-emerald-400">ACTIVE</span>
            </div>
            <div className="flex justify-between items-center px-md py-sm rounded-lg bg-white/5">
              <div className="flex items-center gap-sm">
                <Users className="text-secondary w-5 h-5" />
                <span className="text-body-md text-on-surface">AI Delegation</span>
              </div>
              <span className="text-label-sm font-mono text-on-surface-variant">88% CAP</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Row: Recent Activity */}
      <div className="grid grid-cols-1 gap-lg">
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="px-xl py-lg border-b border-white/5 flex justify-between items-center">
            <h3 className="font-display text-h3 text-on-surface flex items-center gap-sm">
              <Sparkles className="text-primary w-5 h-5" />
              Recent AI Insights
            </h3>
            <button className="text-label-sm text-primary font-bold hover:underline">View History</button>
          </div>
          <div className="divide-y divide-white/5">
            {/* Activity Item 1 */}
            <div className="px-xl py-md flex items-center gap-lg hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary border-primary/20 group-hover:border-primary/50">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-body-md text-on-surface font-medium">Predictive revenue spike detected in Cluster B</p>
                <p className="text-label-sm text-on-surface-variant">Recommended: Scale infrastructure by 15% for next 24h.</p>
              </div>
              <div className="text-right">
                <span className="text-label-sm font-mono text-on-surface-variant">2 MIN AGO</span>
              </div>
            </div>
            {/* Activity Item 2 */}
            <div className="px-xl py-md flex items-center gap-lg hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-secondary border-secondary/20 group-hover:border-secondary/50">
                <UserSearch className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-body-md text-on-surface font-medium">New high-performance pattern identified: Team Alpha</p>
                <p className="text-label-sm text-on-surface-variant">AI suggests replicating 'Agile-Flow' methodology across global units.</p>
              </div>
              <div className="text-right">
                <span className="text-label-sm font-mono text-on-surface-variant">45 MIN AGO</span>
              </div>
            </div>
            {/* Activity Item 3 */}
            <div className="px-xl py-md flex items-center gap-lg hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-tertiary border-tertiary/20 group-hover:border-tertiary/50">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-body-md text-on-surface font-medium">Employee wellness threshold optimized</p>
                <p className="text-label-sm text-on-surface-variant">Smart scheduling reduced burnout risk by 22% this quarter.</p>
              </div>
              <div className="text-right">
                <span className="text-label-sm font-mono text-on-surface-variant">2 HOURS AGO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutiveDashboard;
