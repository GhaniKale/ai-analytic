import { Download, Award, Filter, MoreVertical, ChevronLeft, ChevronRight, Zap, Brain, TrendingUp } from 'lucide-react';

const EmployeePerformance = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between items-end mb-xl">
        <div>
          <h2 className="font-display text-h1 text-on-surface tracking-tight">Employee Insights</h2>
          <p className="text-on-surface-variant text-body-lg mt-base">Real-time performance metrics and talent distribution across the enterprise.</p>
        </div>
        <div className="flex gap-md">
          <button className="glass-card flex items-center gap-sm px-lg py-sm rounded-lg text-on-surface font-medium hover:bg-white/10 transition-colors">
            <Download className="w-5 h-5" />
            Export CSV
          </button>
          <button className="primary-gradient text-white px-lg py-sm rounded-lg font-bold glow-accent shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform">
            Add Employee
          </button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-lg">
        {/* Team Leaderboard Bento Card */}
        <div className="col-span-12 lg:col-span-4 glass-card rounded-2xl p-lg flex flex-col">
          <div className="flex items-center justify-between mb-lg">
            <h3 className="font-display text-h3 text-on-surface">Team Leaderboard</h3>
            <Award className="w-6 h-6 text-tertiary" />
          </div>
          <div className="space-y-lg flex-1">
            {/* Top 1 */}
            <div className="flex items-center gap-md p-md rounded-xl bg-primary/5 border border-primary/10">
              <div className="relative">
                <img alt="Sophia Miller" className="w-12 h-12 rounded-full border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT9HlcrEUJa4bKwq61__f4ipcbg1NENT5dMGn2IRyX1U1ZHYb9xs_zBVk1NVyHRXZhX-hCRf5yToTCjolISDcrxe3Oqz2pde5yAcDZSe3m51SmsXlvSok8oNAPfRjSJ2xARSU_FHSrHQo_77RYeoL6lKUMsAD1BAlFqYVxpwKUoqR6vrpQCEl4fNk6jO67P2hp9PCutan3c2L6cyktqcuxUE5bTUqKwgw12y-daHdGAwJbXZDaTO0X8EZCT0BhA3tRGoahyKcRNQ" />
                <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">1</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-on-surface">Sophia Miller</p>
                <p className="text-label-sm text-on-surface-variant">Product Engineering</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-primary font-bold text-h3">98.4</p>
                <p className="text-[10px] text-tertiary uppercase tracking-wider">Score</p>
              </div>
            </div>
            {/* Top 2 */}
            <div className="flex items-center gap-md p-md rounded-xl hover:bg-white/5 transition-colors">
              <div className="relative">
                <img alt="Marcus Wright" className="w-12 h-12 rounded-full border-2 border-transparent object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-4c_gGyfGzUFNFDJ3rARwWjltTt5YS6Ehm1cgTOX9yZB0-fT9XbRAVwzky5eFkevUvSDbj8xSYoIPduEYHuhm7nWjiFWLGTSYiQFGDrbhGGeDqvHpvFCfkBiHj2CgZInuFqi81gxxfQ8Vs7d9vtTVkOAI1E3yBYL2rUNAdzwVPxXwN9-PCM_7YSdvYRi-wPKHRIACgLZZpf6XU25wveYuCXnjDP7GR5DSCYVegj-h-oD2NCD4SBWP2SCal4bUO0txHM95PxAodw" />
                <span className="absolute -top-1 -right-1 bg-surface-container-highest text-on-surface text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">2</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-on-surface">Marcus Wright</p>
                <p className="text-label-sm text-on-surface-variant">AI Infrastructure</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-on-surface font-bold text-h3">94.1</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Score</p>
              </div>
            </div>
            {/* Top 3 */}
            <div className="flex items-center gap-md p-md rounded-xl hover:bg-white/5 transition-colors">
              <div className="relative">
                <img alt="Elena Rodriguez" className="w-12 h-12 rounded-full border-2 border-transparent object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgbxH_0pGcjTD7EejjM4zFNargO19zB9LSm2ZeNmJ5ApcqCCJQZHMNkAlpV9hjI49xyEH0oQbgRexJtu1VciMA2k-0eveP_c1idfNqXOekj-7IkWEJxgriABflV5YlOg0QnPRKaZXpj9iWbdoumblENe7jVAXLikiftpd0my_3OjTn_-OgeprRChv1GRo1rEwHEh-5PNtkhaJx8w_dInnTXXiEDnKD4UVC-jV3rmEe5UuhJArXV-XiSaXEvHhZqeG1QcZrQKhlUg" />
                <span className="absolute -top-1 -right-1 bg-surface-container-highest text-on-surface text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">3</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-on-surface">Elena Rodriguez</p>
                <p className="text-label-sm text-on-surface-variant">Data Strategy</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-on-surface font-bold text-h3">92.8</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Score</p>
              </div>
            </div>
          </div>
          <button className="mt-lg text-primary text-body-md font-bold flex items-center justify-center gap-sm hover:underline">
            View Full Rankings <TrendingUp className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Main Table Section */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-lg">
          {/* Filters Bar */}
          <div className="glass-card rounded-2xl p-md flex items-center gap-lg">
            <div className="flex items-center gap-sm text-on-surface-variant px-sm">
              <Filter className="w-5 h-5" />
              <span className="text-label-sm font-bold uppercase tracking-widest">Filters</span>
            </div>
            <div className="flex-1 flex gap-md">
              <select className="bg-surface-container-highest border-none rounded-lg text-body-md text-on-surface px-lg py-sm focus:ring-1 ring-primary/50 outline-none cursor-pointer">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Operations</option>
              </select>
              <select className="bg-surface-container-highest border-none rounded-lg text-body-md text-on-surface px-lg py-sm focus:ring-1 ring-primary/50 outline-none cursor-pointer">
                <option>Global Locations</option>
                <option>San Francisco</option>
                <option>London</option>
                <option>Singapore</option>
              </select>
              <select className="bg-surface-container-highest border-none rounded-lg text-body-md text-on-surface px-lg py-sm focus:ring-1 ring-primary/50 outline-none cursor-pointer">
                <option>Any Rating</option>
                <option>Exceeds Expectation</option>
                <option>Meets Expectation</option>
              </select>
            </div>
            <div className="flex items-center gap-sm">
              <span className="text-label-sm text-on-surface-variant">Active: 1,248 Users</span>
            </div>
          </div>

          {/* Comprehensive Data Table */}
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-white/5">
                    <th className="px-lg py-lg text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">Name</th>
                    <th className="px-lg py-lg text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">Role</th>
                    <th className="px-lg py-lg text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">Performance Rating</th>
                    <th className="px-lg py-lg text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">Status</th>
                    <th className="px-lg py-lg text-label-sm font-bold uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {/* Row 1 */}
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center font-bold text-secondary">JD</div>
                        <div>
                          <p className="font-bold text-on-surface">Julianne Dorsey</p>
                          <p className="text-label-sm text-on-surface-variant">j.dorsey@aiperformance.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <p className="text-body-md text-on-surface">Sr. UX Architect</p>
                      <p className="text-label-sm text-on-surface-variant">Design Ops</p>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className="h-full bg-tertiary" style={{ width: '92%' }}></div>
                        </div>
                        <span className="font-mono font-bold text-tertiary">9.2</span>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <span className="inline-flex items-center gap-xs px-md py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-label-sm font-bold uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        High Performer
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <img alt="Kevin Patel" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpZo0uLa9kpex8FyKTi2cQf_iX7pGB3T2EREtrPZtSA6UqW59u7UzLlp9p0TiEakSCVBMboSobINRlEtoOFXjmtbrHK-t_ITpWuojgL6ipREKJ-wZeAFZiodLMt49D0wjMxfSnZlp_oOAwSRyLC93VYOTwUBha4FCVeaERfsRguWd1h_0zHFHbDqqqk9k5sfpny4y__kOp7xKoXug7qZlSgQRyfSORWqAN7UbabFsg0EpLSs9Z6eLg3kSCwy2cW0xkBfE_lzDV7Q" />
                        <div>
                          <p className="font-bold text-on-surface">Kevin Patel</p>
                          <p className="text-label-sm text-on-surface-variant">k.patel@aiperformance.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <p className="text-body-md text-on-surface">ML Engineer</p>
                      <p className="text-label-sm text-on-surface-variant">Data Infrastructure</p>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: '78%' }}></div>
                        </div>
                        <span className="font-mono font-bold text-primary">7.8</span>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <span className="inline-flex items-center gap-xs px-md py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-label-sm font-bold uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        On Track
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-error-container/30 flex items-center justify-center font-bold text-error">LM</div>
                        <div>
                          <p className="font-bold text-on-surface">Lana Morris</p>
                          <p className="text-label-sm text-on-surface-variant">l.morris@aiperformance.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <p className="text-body-md text-on-surface">Account Executive</p>
                      <p className="text-label-sm text-on-surface-variant">Sales & Growth</p>
                    </td>
                    <td className="px-lg py-md">
                      <div className="flex items-center gap-md">
                        <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className="h-full bg-error" style={{ width: '45%' }}></div>
                        </div>
                        <span className="font-mono font-bold text-error">4.5</span>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <span className="inline-flex items-center gap-xs px-md py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-label-sm font-bold uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        Needs Review
                      </span>
                    </td>
                    <td className="px-lg py-md text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Table Pagination */}
            <div className="p-lg border-t border-white/5 flex items-center justify-between">
              <span className="text-label-sm text-on-surface-variant">Showing 1 to 3 of 1,248 results</span>
              <div className="flex gap-sm">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface hover:bg-white/10 transition-colors disabled:opacity-50" disabled>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold text-label-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface hover:bg-white/10 transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface hover:bg-white/10 transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface hover:bg-white/10 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Analytics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mt-lg">
        <div className="glass-card rounded-2xl p-lg flex flex-col gap-sm">
          <div className="flex items-center gap-md text-tertiary">
            <Zap className="w-5 h-5" />
            <span className="text-label-sm font-bold uppercase tracking-widest">Global Velocity</span>
          </div>
          <p className="text-h2 font-mono font-bold text-on-surface">+12.4%</p>
          <p className="text-label-sm text-on-surface-variant">Increase in sprint completion across all teams this quarter.</p>
        </div>
        <div className="glass-card rounded-2xl p-lg flex flex-col gap-sm">
          <div className="flex items-center gap-md text-primary">
            <Brain className="w-5 h-5" />
            <span className="text-label-sm font-bold uppercase tracking-widest">Skill Density</span>
          </div>
          <p className="text-h2 font-mono font-bold text-on-surface">84.2</p>
          <p className="text-label-sm text-on-surface-variant">AI-calculated technical proficiency score across the enterprise.</p>
        </div>
        <div className="glass-card rounded-2xl p-lg flex flex-col gap-sm">
          <div className="flex items-center gap-md text-secondary">
            <TrendingUp className="w-5 h-5" />
            <span className="text-label-sm font-bold uppercase tracking-widest">Growth Retention</span>
          </div>
          <p className="text-h2 font-mono font-bold text-on-surface">96.8%</p>
          <p className="text-label-sm text-on-surface-variant">Percentage of high performers retained in the last 12 months.</p>
        </div>
      </div>
    </>
  );
};

export default EmployeePerformance;
