import { CircleDollarSign, Gauge, Building, Rocket, PenTool, Terminal } from 'lucide-react';

const FinancialAnalytics = () => {
  return (
    <>
      {/* Header Section */}
      <div className="mb-xl">
        <h2 className="font-display text-h1 text-on-surface mb-xs">Financial Overview</h2>
        <p className="text-on-surface-variant font-display text-body-lg">Real-time enterprise performance metrics and fiscal health tracking.</p>
      </div>

      {/* Top Grid: Bento Layout */}
      <div className="grid grid-cols-12 gap-lg mb-xl">
        {/* Main Chart Card */}
        <div className="col-span-8 glass-card rounded-2xl p-lg relative overflow-hidden">
          <div className="radial-glow absolute -top-24 -right-24 w-64 h-64 pointer-events-none"></div>
          <div className="flex justify-between items-center mb-xl">
            <div>
              <h3 className="font-display text-h3 text-on-surface">Projected vs Actual Revenue</h3>
              <p className="text-label-sm text-outline">Quarter-to-date performance vs initial targets</p>
            </div>
            <div className="flex gap-md">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-label-sm text-on-surface-variant">Actual</span>
              </div>
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
                <span className="text-label-sm text-on-surface-variant">Projected</span>
              </div>
            </div>
          </div>
          {/* Simulated Multi-Series Chart */}
          <div className="h-[300px] flex items-end gap-md px-md">
            <div className="flex-1 flex flex-col items-center gap-base">
              <div className="w-full flex items-end gap-1">
                <div className="flex-1 bg-tertiary/20 rounded-t-sm h-[40%]"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[45%]"></div>
              </div>
              <span className="text-[10px] text-outline-variant font-mono">JAN</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-base">
              <div className="w-full flex items-end gap-1">
                <div className="flex-1 bg-tertiary/20 rounded-t-sm h-[60%]"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[55%]"></div>
              </div>
              <span className="text-[10px] text-outline-variant font-mono">FEB</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-base">
              <div className="w-full flex items-end gap-1">
                <div className="flex-1 bg-tertiary/20 rounded-t-sm h-[50%]"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[65%] shadow-[0_-4px_12px_rgba(192,193,255,0.2)]"></div>
              </div>
              <span className="text-[10px] text-outline-variant font-mono">MAR</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-base">
              <div className="w-full flex items-end gap-1">
                <div className="flex-1 bg-tertiary/20 rounded-t-sm h-[80%]"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[85%] shadow-[0_-4px_12px_rgba(192,193,255,0.2)]"></div>
              </div>
              <span className="text-[10px] text-outline-variant font-mono">APR</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-base">
              <div className="w-full flex items-end gap-1">
                <div className="flex-1 bg-tertiary/20 rounded-t-sm h-[70%]"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[75%] shadow-[0_-4px_12px_rgba(192,193,255,0.2)]"></div>
              </div>
              <span className="text-[10px] text-outline-variant font-mono">MAY</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-base">
              <div className="w-full flex items-end gap-1">
                <div className="flex-1 bg-tertiary/20 rounded-t-sm h-[90%]"></div>
                <div className="flex-1 bg-primary rounded-t-sm h-[95%] shadow-[0_-4px_12px_rgba(192,193,255,0.2)]"></div>
              </div>
              <span className="text-[10px] text-outline-variant font-mono">JUN</span>
            </div>
          </div>
        </div>

        {/* Operational Costs Widget */}
        <div className="col-span-4 flex flex-col gap-lg">
          <div className="glass-card flex-1 rounded-2xl p-lg flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <CircleDollarSign className="w-6 h-6 text-secondary" />
              <span className="text-label-sm text-error bg-error-container/30 px-sm py-1 rounded-full font-bold">+12.4%</span>
            </div>
            <div>
              <p className="text-on-surface-variant text-label-sm mb-base uppercase tracking-wider">Operational Costs</p>
              <h4 className="font-display text-[32px] bg-clip-text text-transparent bg-gradient-to-r from-[#c0c1ff] to-[#ddb7ff] font-bold">$1.42M</h4>
            </div>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <div className="bg-secondary w-[70%] h-full"></div>
            </div>
          </div>
          {/* EBITDA Margin Widget */}
          <div className="glass-card flex-1 rounded-2xl p-lg flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Gauge className="w-6 h-6 text-tertiary" />
              <span className="text-label-sm text-primary bg-primary-container/30 px-sm py-1 rounded-full font-bold">Optimal</span>
            </div>
            <div>
              <p className="text-on-surface-variant text-label-sm mb-base uppercase tracking-wider">EBITDA Margin</p>
              <h4 className="font-display text-[32px] bg-clip-text text-transparent bg-gradient-to-r from-[#c0c1ff] to-[#ddb7ff] font-bold">28.4%</h4>
            </div>
            <div className="flex gap-1">
              <div className="h-2 w-full rounded-full bg-tertiary"></div>
              <div className="h-2 w-full rounded-full bg-tertiary"></div>
              <div className="h-2 w-full rounded-full bg-tertiary/20"></div>
              <div className="h-2 w-full rounded-full bg-tertiary/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Table Section */}
      <div className="glass-card rounded-2xl p-lg">
        <div className="flex justify-between items-center mb-xl">
          <h3 className="font-display text-h3 text-on-surface">Recent Financial Transactions</h3>
          <button className="text-primary text-body-md hover:underline font-medium">Export CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-md text-label-sm text-outline uppercase font-bold px-md">Entity / Description</th>
                <th className="pb-md text-label-sm text-outline uppercase font-bold px-md">ID</th>
                <th className="pb-md text-label-sm text-outline uppercase font-bold px-md">Date</th>
                <th className="pb-md text-label-sm text-outline uppercase font-bold px-md text-right">Amount</th>
                <th className="pb-md text-label-sm text-outline uppercase font-bold px-md text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {/* Row 1 */}
              <tr className="hover:bg-white/[0.02] transition-colors group">
                <td className="py-md px-md">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Building className="w-5 h-5 text-outline-variant" />
                    </div>
                    <div>
                      <p className="text-on-surface font-bold text-body-md">Cloud Infrastructure</p>
                      <p className="text-outline text-label-sm">Amazon Web Services</p>
                    </div>
                  </div>
                </td>
                <td className="py-md px-md text-mono text-outline-variant">#INV-98212</td>
                <td className="py-md px-md text-on-surface-variant text-body-md">Oct 24, 2023</td>
                <td className="py-md px-md text-right font-mono font-bold text-on-surface">$12,450.00</td>
                <td className="py-md px-md text-center">
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-sm py-1 rounded-md text-[10px] font-extrabold uppercase">Paid</span>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-white/[0.02] transition-colors group">
                <td className="py-md px-md">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-outline-variant" />
                    </div>
                    <div>
                      <p className="text-on-surface font-bold text-body-md">Marketing Retainer</p>
                      <p className="text-outline text-label-sm">Velocity Media Group</p>
                    </div>
                  </div>
                </td>
                <td className="py-md px-md text-mono text-outline-variant">#INV-98213</td>
                <td className="py-md px-md text-on-surface-variant text-body-md">Oct 22, 2023</td>
                <td className="py-md px-md text-right font-mono font-bold text-on-surface">$8,200.00</td>
                <td className="py-md px-md text-center">
                  <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-sm py-1 rounded-md text-[10px] font-extrabold uppercase">Pending</span>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-white/[0.02] transition-colors group">
                <td className="py-md px-md">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <PenTool className="w-5 h-5 text-outline-variant" />
                    </div>
                    <div>
                      <p className="text-on-surface font-bold text-body-md">Office Expansion (NY)</p>
                      <p className="text-outline text-label-sm">BuildRight Structures</p>
                    </div>
                  </div>
                </td>
                <td className="py-md px-md text-mono text-outline-variant">#INV-98205</td>
                <td className="py-md px-md text-on-surface-variant text-body-md">Oct 15, 2023</td>
                <td className="py-md px-md text-right font-mono font-bold text-on-surface">$45,000.00</td>
                <td className="py-md px-md text-center">
                  <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-sm py-1 rounded-md text-[10px] font-extrabold uppercase">Overdue</span>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-white/[0.02] transition-colors group">
                <td className="py-md px-md">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-outline-variant" />
                    </div>
                    <div>
                      <p className="text-on-surface font-bold text-body-md">Licensing: AI Engines</p>
                      <p className="text-outline text-label-sm">DeepCore Systems</p>
                    </div>
                  </div>
                </td>
                <td className="py-md px-md text-mono text-outline-variant">#INV-98199</td>
                <td className="py-md px-md text-on-surface-variant text-body-md">Oct 12, 2023</td>
                <td className="py-md px-md text-right font-mono font-bold text-on-surface">$2,300.00</td>
                <td className="py-md px-md text-center">
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-sm py-1 rounded-md text-[10px] font-extrabold uppercase">Paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-lg flex justify-center">
          <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-xl py-sm rounded-lg text-body-md font-medium transition-all">View All Transactions</button>
        </div>
      </div>
    </>
  );
};

export default FinancialAnalytics;
