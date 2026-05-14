import { Download, Share, Calendar, ChevronRight, Users, X, Brain } from 'lucide-react';

const KPIAnalytics = () => {
  return (
    <div className="flex w-full">
      {/* Main Content Area - We adjust width to account for right sidebar */}
      <div className="flex-1 pr-80">
        <section className="relative">
          {/* Background Decoration */}
          <div className="absolute top-20 right-0 w-96 h-96 radial-glow pointer-events-none opacity-40"></div>
          
          <div className="flex justify-between items-end mb-lg relative z-10">
            <div>
              <h2 className="font-display text-h1 text-on-surface tracking-tight">KPI Deep-Dive</h2>
              <p className="text-on-surface-variant">Advanced cross-sectional performance analysis</p>
            </div>
            <div className="flex gap-sm">
              <button className="glass-card px-md py-sm rounded-lg text-label-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-xs">
                <Download className="w-4 h-4" /> Export PDF
              </button>
              <button className="glass-card px-md py-sm rounded-lg text-label-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-xs">
                <Share className="w-4 h-4" /> Share Report
              </button>
            </div>
          </div>

          {/* Bento Grid - Row 1 */}
          <div className="grid grid-cols-12 gap-lg mb-lg relative z-10">
            {/* Multi-line Chart: Performance Trends */}
            <div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-lg flex flex-col">
              <div className="flex justify-between items-center mb-xl">
                <h3 className="font-display text-h3 text-on-surface flex items-center gap-sm">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                  Performance Trends over Time
                </h3>
                <div className="flex gap-md">
                  <div className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-primary"></span><span className="text-label-sm">AI Output</span></div>
                  <div className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-secondary"></span><span className="text-label-sm">Human Review</span></div>
                </div>
              </div>
              <div className="relative h-[300px] w-full mt-auto">
                <img className="w-full h-full object-cover rounded-lg opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEZjDdfm_c-9X_0uTtIRyM52x-_9exl8SxTmkOllkH8-U2g7x0oRgmblZ5H8-UYT4k1aN0hJD2SNkXRFkJsu5UDO39RPg-6sbA9IpR3xKhid935wcTpJFAvuqS2VIF3TfenwFqVusC6zjt9xSPr7Ya6WnPC8N3g2Ez6RPeEOkZRbzvviU0-GkkThZf7P2VNgORauW86-SXGkxklaLgMfquQxeS3e8ZherAWZzdErEjAlW_N3mkzCMPo4zf_kCIjorEfDU37sgqVg" alt="Chart" />
              </div>
            </div>

            {/* Radar Chart: Skill Density */}
            <div className="col-span-12 lg:col-span-4 glass-card rounded-xl p-lg flex flex-col">
              <h3 className="font-display text-h3 text-on-surface mb-xl">Skill Density</h3>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <img className="w-full h-full object-contain opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFm12s2BX8dfLOofH5p5jW0QkdOOoX7Rjb2dP-9JxrovPyhY2zfkvTn9tXTS4SjqAKNw6hLSRSZ_pxzMILblX8peOD1aSdpJ4w7ihjN5mcx85AM_WxL3iB5OFwBJ0YSaGKT8pqoX-dZljlO0dZjF2xNdV6L2mHqTt3uU4h8LM11mihXXu-E2YyXiHpsk0Pbmh3oqptEJ6ofkeBESfD9y9mVWbkV_lecGTQyWChSTeD0BZXXRReYJ43M5yvLNijoMJKKbqo5BsqNg" alt="Radar Chart" />
                </div>
              </div>
              <div className="mt-md space-y-xs">
                <div className="flex justify-between text-label-sm"><span className="text-on-surface-variant">Efficiency</span><span className="text-primary font-bold">92%</span></div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-primary to-secondary w-[92%]"></div></div>
                <div className="flex justify-between text-label-sm mt-sm"><span className="text-on-surface-variant">Accuracy</span><span className="text-secondary font-bold">88%</span></div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden"><div className="h-full bg-secondary w-[88%]"></div></div>
              </div>
            </div>
          </div>

          {/* Bento Grid - Row 2 */}
          <div className="grid grid-cols-12 gap-lg relative z-10">
            {/* Heatmap: Global Team Productivity */}
            <div className="col-span-12 glass-card rounded-xl p-lg">
              <div className="flex justify-between items-center mb-lg">
                <h3 className="font-display text-h3 text-on-surface">Global Team Productivity Heatmap</h3>
                <div className="flex items-center gap-xs text-on-surface-variant text-label-sm">
                  <span>Low</span>
                  <div className="flex h-3 w-32 rounded-sm overflow-hidden">
                    <div className="flex-1 bg-surface-container-highest"></div>
                    <div className="flex-1 bg-primary/30"></div>
                    <div className="flex-1 bg-primary/60"></div>
                    <div className="flex-1 bg-primary"></div>
                    <div className="flex-1 bg-primary-container"></div>
                  </div>
                  <span>High</span>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-base h-64">
                {/* Simulated Heatmap Grid */}
                <div className="col-span-12 grid grid-cols-24 gap-base">
                  {Array.from({ length: 96 }).map((_, i) => {
                    const intensities = [
                      'bg-primary/10', 'bg-primary/20', 'bg-primary/30', 
                      'bg-primary/40', 'bg-primary/50', 'bg-primary/60',
                      'bg-primary/80', 'bg-primary/90', 'bg-primary', 'bg-primary-container'
                    ];
                    const randomIntensity = intensities[Math.floor(Math.random() * intensities.length)];
                    return <div key={i} className={`${randomIntensity} rounded-sm`}></div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Advanced Filtering Sidebar (Right) */}
      <aside className="w-80 h-screen fixed right-0 top-0 bg-surface-container-low border-l border-white/5 p-lg flex flex-col z-50">
        <div className="mb-xl mt-16">
          <h3 className="font-display text-h3 text-on-surface mb-xs">Data Control</h3>
          <p className="text-on-surface-variant text-label-sm">Granular filtering parameters</p>
        </div>
        <div className="space-y-xl flex-1 overflow-y-auto scrollbar-hide">
          {/* Date Filter */}
          <div className="space-y-md">
            <label className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-xs">
              <Calendar className="w-4 h-4" /> Date Range
            </label>
            <div className="space-y-sm">
              <button className="w-full glass-card py-sm px-md rounded-lg text-left text-body-md flex justify-between items-center group">
                Last 30 Days
                <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="grid grid-cols-2 gap-sm">
                <div className="glass-card p-sm rounded-lg text-center">
                  <span className="text-[10px] block text-on-surface-variant">Start</span>
                  <span className="text-body-md font-mono">2023-10-01</span>
                </div>
                <div className="glass-card p-sm rounded-lg text-center">
                  <span className="text-[10px] block text-on-surface-variant">End</span>
                  <span className="text-body-md font-mono">2023-10-31</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Filter */}
          <div className="space-y-md">
            <label className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-xs">
              <Users className="w-4 h-4" /> Target Teams
            </label>
            <div className="flex flex-wrap gap-xs">
              <span className="bg-primary text-on-primary px-sm py-1 rounded-full text-label-sm font-medium flex items-center gap-xs">Engineering <X className="w-3 h-3" /></span>
              <span className="bg-primary text-on-primary px-sm py-1 rounded-full text-label-sm font-medium flex items-center gap-xs">Design <X className="w-3 h-3" /></span>
              <button className="border border-white/10 hover:bg-white/5 px-sm py-1 rounded-full text-label-sm font-medium text-on-surface-variant flex items-center gap-xs">+ Add Team</button>
            </div>
          </div>

          {/* AI Model Version Filter */}
          <div className="space-y-md">
            <label className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-xs">
              <Brain className="w-4 h-4" /> AI Model Version
            </label>
            <div className="space-y-sm">
              <div className="flex items-center gap-md p-sm glass-card rounded-lg border-primary/40">
                <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="flex-1">
                  <span className="block text-body-md font-bold">GPT-4 Turbo (v2)</span>
                  <span className="text-[10px] text-on-surface-variant">Active Production Model</span>
                </div>
              </div>
              <div className="flex items-center gap-md p-sm glass-card rounded-lg border-transparent opacity-60">
                <div className="w-4 h-4 rounded-full border-2 border-outline flex items-center justify-center"></div>
                <div className="flex-1">
                  <span className="block text-body-md font-bold">Claude 3.5 Sonnet</span>
                  <span className="text-[10px] text-on-surface-variant">Benchmark Testing</span>
                </div>
              </div>
              <div className="flex items-center gap-md p-sm glass-card rounded-lg border-transparent opacity-60">
                <div className="w-4 h-4 rounded-full border-2 border-outline flex items-center justify-center"></div>
                <div className="flex-1">
                  <span className="block text-body-md font-bold">Llama 3 (70B)</span>
                  <span className="text-[10px] text-on-surface-variant">Experimental Ops</span>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Metric Toggles */}
          <div className="space-y-md pt-lg">
            <div className="flex justify-between items-center">
              <span className="text-body-md">Show Confidence Intervals</span>
              <div className="w-10 h-5 bg-primary/40 rounded-full relative p-0.5">
                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-body-md">Anomalous Outliers</span>
              <div className="w-10 h-5 bg-white/10 rounded-full relative p-0.5">
                <div className="w-4 h-4 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-sm pt-4">
          <button className="w-full bg-white/5 border border-white/10 py-md rounded-xl font-display font-medium text-on-surface transition-all hover:bg-white/10">
            Reset Filters
          </button>
          <button className="w-full bg-gradient-to-r from-primary to-secondary py-md rounded-xl font-display font-bold text-white shadow-xl">
            Apply Parameters
          </button>
        </div>
      </aside>
    </div>
  );
};

export default KPIAnalytics;
