import { Filter, Shield, DollarSign, Brain, Activity, FilePlus, CheckCircle, PauseCircle, Plus } from 'lucide-react';

const AIReportsCenter = () => {
  return (
    <>
      {/* Page Content */}
      <div className="space-y-xl relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-lg">
          <div className="space-y-sm">
            <h2 className="font-display text-h1 font-bold text-on-surface">Reports Management</h2>
            <p className="text-on-surface-variant max-w-2xl font-body-lg">Manage, generate, and archive enterprise-level performance reports. Leverage AI to audit systemic efficiencies and employee output.</p>
          </div>
          <div className="flex items-center gap-md">
            <div className="flex bg-surface-container rounded-lg p-xs border border-white/5">
              <button className="px-md py-xs bg-white/10 rounded-md text-label-sm font-bold text-on-surface">Grid</button>
              <button className="px-md py-xs text-label-sm font-medium text-on-surface-variant hover:text-on-surface">List</button>
            </div>
            <button className="flex items-center gap-sm bg-surface-container border border-white/10 px-md py-xs rounded-lg text-label-sm font-medium hover:bg-surface-container-high transition-colors">
              <Filter className="w-4 h-4" />
              Sort By: Date
            </button>
          </div>
        </section>

        {/* Bento Grid of Reports */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {/* Report Card 1: AI Audit */}
          <div className="glass-card rounded-xl p-lg flex flex-col gap-lg group hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[60px]"></div>
            <div className="flex justify-between items-start">
              <div className="p-sm rounded-lg bg-primary/10 border border-primary/20">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-sm py-1 rounded-full uppercase tracking-wider border border-emerald-500/20">Ready</span>
            </div>
            <div className="space-y-xs">
              <h3 className="text-h3 font-bold text-on-surface">Q3 AI Model Audit</h3>
              <p className="text-body-md text-on-surface-variant">Comprehensive integrity check of the enterprise neural networks and automated decision flows.</p>
            </div>
            <div className="mt-auto pt-md border-t border-white/5 flex items-center justify-between text-label-sm">
              <span className="text-on-surface-variant">Modified: 2h ago</span>
              <button className="text-primary font-bold hover:underline">Download PDF</button>
            </div>
          </div>

          {/* Report Card 2: Financial Summary */}
          <div className="glass-card rounded-xl p-lg flex flex-col gap-lg group hover:border-secondary/30 transition-all duration-300 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="p-sm rounded-lg bg-secondary/10 border border-secondary/20">
                <DollarSign className="w-5 h-5 text-secondary" />
              </div>
              <span className="bg-primary-container/10 text-primary-container text-[10px] font-bold px-sm py-1 rounded-full uppercase tracking-wider border border-primary-container/20">Generating...</span>
            </div>
            <div className="space-y-xs">
              <h3 className="text-h3 font-bold text-on-surface">Monthly Financial Forecast</h3>
              <p className="text-body-md text-on-surface-variant">Real-time revenue projections based on multi-variable market volatility and internal efficiency scores.</p>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full mt-md overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary w-[65%] h-full"></div>
            </div>
            <div className="mt-auto flex items-center justify-between text-label-sm">
              <span className="text-on-surface-variant">Progress: 65%</span>
              <span className="text-on-surface-variant">Est. 4 mins</span>
            </div>
          </div>

          {/* Report Card 3: Employee Review */}
          <div className="glass-card rounded-xl p-lg flex flex-col gap-lg group hover:border-tertiary/30 transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="p-sm rounded-lg bg-tertiary/10 border border-tertiary/20">
                <Brain className="w-5 h-5 text-tertiary" />
              </div>
              <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-sm py-1 rounded-full uppercase tracking-wider border border-emerald-500/20">Ready</span>
            </div>
            <div className="space-y-xs">
              <h3 className="text-h3 font-bold text-on-surface">Elite Engineering Review</h3>
              <p className="text-body-md text-on-surface-variant">Aggregated velocity metrics and code-quality audits for the Core Platform engineering team.</p>
            </div>
            <div className="mt-auto pt-md border-t border-white/5 flex items-center justify-between text-label-sm">
              <span className="text-on-surface-variant">Modified: Oct 12</span>
              <button className="text-primary font-bold hover:underline">View Insights</button>
            </div>
          </div>

          {/* Report Card 4: High Density (Asymmetric) */}
          <div className="glass-card rounded-xl p-lg col-span-1 md:col-span-2 flex flex-col md:flex-row gap-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-radial-gradient from-[rgba(192,193,255,0.08)] to-transparent pointer-events-none"></div>
            <div className="flex-1 space-y-lg relative z-10">
              <div className="flex items-center gap-md">
                <div className="p-sm rounded-lg bg-white/5">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-h3 font-bold text-on-surface">Annual Operational Scaling</h3>
                  <p className="text-body-md text-on-surface-variant">Long-term analysis of infrastructure costs vs. AI throughput.</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-md">
                <div className="bg-surface-container-low p-md rounded-lg">
                  <p className="text-label-sm text-on-surface-variant mb-xs">Throughput</p>
                  <p className="text-h3 font-mono font-bold text-primary">+24.8%</p>
                </div>
                <div className="bg-surface-container-low p-md rounded-lg">
                  <p className="text-label-sm text-on-surface-variant mb-xs">Cost/Op</p>
                  <p className="text-h3 font-mono font-bold text-secondary">-12.3%</p>
                </div>
                <div className="bg-surface-container-low p-md rounded-lg">
                  <p className="text-label-sm text-on-surface-variant mb-xs">Uptime</p>
                  <p className="text-h3 font-mono font-bold text-tertiary">99.99%</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-48 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/5 pt-lg md:pt-0 md:pl-lg relative z-10">
              <div className="space-y-sm">
                <span className="bg-white/5 text-on-surface-variant text-[10px] font-bold px-sm py-1 rounded-full uppercase tracking-wider border border-white/10">Archived</span>
                <p className="text-label-sm text-on-surface-variant">Archived on Jan 04, 2024</p>
              </div>
              <button className="w-full bg-white/10 hover:bg-white/15 text-on-surface py-sm rounded-lg text-label-sm font-bold transition-colors">Restore Data</button>
            </div>
          </div>

          {/* Report Card 5: Empty/CTA */}
          <div className="border-2 border-dashed border-white/10 rounded-xl p-lg flex flex-col items-center justify-center text-center gap-md hover:bg-white/[0.02] transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center group-hover:scale-110 transition-transform">
              <FilePlus className="w-6 h-6 text-on-surface-variant" />
            </div>
            <div>
              <h3 className="text-body-lg font-bold text-on-surface">Generate New Report</h3>
              <p className="text-label-sm text-on-surface-variant">Select a template or define custom metrics.</p>
            </div>
          </div>
        </div>

        {/* Recent Activity / Stats */}
        <section className="glass-card rounded-2xl overflow-hidden">
          <div className="p-lg border-b border-white/5 flex items-center justify-between">
            <h3 className="text-h3 font-bold text-on-surface">Automated Report Scheduling</h3>
            <button className="text-primary text-label-sm font-bold hover:underline">Manage Schedules</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-label-sm text-on-surface-variant uppercase tracking-widest bg-white/[0.02]">
                  <th className="px-lg py-md font-medium">Task Identity</th>
                  <th className="px-lg py-md font-medium">Cadence</th>
                  <th className="px-lg py-md font-medium">Recipients</th>
                  <th className="px-lg py-md font-medium">Next Run</th>
                  <th className="px-lg py-md font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/[0.03] transition-colors group">
                  <td className="px-lg py-lg">
                    <div className="flex items-center gap-md">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div>
                        <p className="font-bold text-on-surface">System Health Summary</p>
                        <p className="text-label-sm text-on-surface-variant">Infrastructure & Network</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-lg text-body-md text-on-surface-variant">Daily (04:00 GMT)</td>
                  <td className="px-lg py-lg">
                    <div className="flex -space-x-2">
                      <img alt="user" className="w-8 h-8 rounded-full border-2 border-surface-container-highest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg8ET1TzZ3tosq8KWUsRLEn5PVOXlWsIJLnYx7MtQR09ZYbGY8i90msfkjH9KYne7VICnenSIetENuq4jsCwQHGE8I9pCMx1T4wdmAUGQaGc3BiRkTUDgYex3iVpYbGYiNSYnJJNy9_3OvWe4Iq46s_FbHq3UZgPhCM6fDzJoNhX7eA6hIpd9_wTTKH8tqWW7zTWDV7XmObZuMfZBa5cQ5UXZT8OE2_cwghgEeo7uUwNmF9ZGSmoI8xEh_kjiRfODFWodUMR11mg" />
                      <img alt="user" className="w-8 h-8 rounded-full border-2 border-surface-container-highest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3hGLGR1wj4wp2zT4VsLt7COahhnq1eJ92AI8-CCtzM3vkGdc4cDO1nkRDWueOJMZw96IkvtKwgiitgNaZQobrCGzm0uJnON3Yw0rvkbrNcjw2D4L3-0TJReOlHHx2FmWe_gZvpFPQLWXh5DweS9sn5OOER6HbCXAeqdiI1cVVHXJYSX9-5-FOdeFLAeF0-n-3u-qmb4O0XX_MxI_46rQDK5IZ3ZLyy5cDgoRgpK2mGaX-5TModMh0b5rBPO-q99R3ZLb3bvHY_g" />
                      <div className="w-8 h-8 rounded-full border-2 border-surface-container-highest bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">+4</div>
                    </div>
                  </td>
                  <td className="px-lg py-lg text-body-md text-on-surface">In 14 hours</td>
                  <td className="px-lg py-lg">
                    <span className="text-emerald-500 flex items-center gap-xs font-bold text-label-sm">
                      <CheckCircle className="w-4 h-4" />
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.03] transition-colors group">
                  <td className="px-lg py-lg">
                    <div className="flex items-center gap-md">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div>
                        <p className="font-bold text-on-surface">Regional Revenue Audit</p>
                        <p className="text-label-sm text-on-surface-variant">EMEA / North America</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-lg py-lg text-body-md text-on-surface-variant">Weekly (Monday)</td>
                  <td className="px-lg py-lg">
                    <div className="flex -space-x-2">
                      <img alt="user" className="w-8 h-8 rounded-full border-2 border-surface-container-highest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAzkReveEMeCx-0zJlnaz5cLttcbwGVSfHLjNBFp4Qw0u1sgvBniiIR71061w-SSC80UZbDyTH-bbCJx6yC4VobL-sVowc2_Bux6qpxCXeQLCLNZaAXCg5SQPRV_0CJDvSDKb0PsOjmaJnCv71zA1fkEBwev4d8VuDZnco_2OVZGOHVNCMTwoM9KRkAK7SpRWRvZBqn_AiH4enQQ9OfGl8W1c5Cj4HglWyfOjBsqR4q0lXUAIc_PfpRp7Q5srPt_UkKgDISHzx6A" />
                    </div>
                  </td>
                  <td className="px-lg py-lg text-body-md text-on-surface">In 3 days</td>
                  <td className="px-lg py-lg">
                    <span className="text-on-surface-variant flex items-center gap-xs font-bold text-label-sm">
                      <PauseCircle className="w-4 h-4" />
                      Paused
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Floating Action Button (FAB) - For New Report */}
      <button className="fixed bottom-lg right-lg w-16 h-16 rounded-full bg-gradient-to-tr from-primary via-primary-container to-secondary flex items-center justify-center text-on-primary shadow-2xl hover:scale-110 active:scale-95 transition-all primary-glow z-50">
        <Plus className="w-8 h-8" />
      </button>

      {/* Background Decorative Accents */}
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[150px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-64 w-1/4 h-1/4 bg-secondary-container/10 blur-[120px] -z-10 pointer-events-none"></div>
    </>
  );
};

export default AIReportsCenter;
