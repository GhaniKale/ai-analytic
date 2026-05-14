import { Brain, ChevronDown, Coins, Key, Plus, Network, Eye, Trash2, FlaskConical, BellRing, ShieldCheck, Info } from 'lucide-react';

const SystemSettings = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-xl">
          <h2 className="font-display text-h1 font-bold text-primary mb-xs">Platform Settings</h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl">Manage your enterprise environment, AI configurations, and security protocols.</p>
        </div>

        {/* Tabbed Navigation */}
        <div className="flex items-center gap-xl border-b border-white/10 mb-xl overflow-x-auto custom-scrollbar">
          <button className="pb-md px-base text-body-md font-medium text-on-surface-variant hover:text-on-surface transition-all border-b-2 border-transparent">General</button>
          <button className="pb-md px-base text-body-md font-bold text-primary transition-all border-b-2 border-primary">AI Configuration</button>
          <button className="pb-md px-base text-body-md font-medium text-on-surface-variant hover:text-on-surface transition-all border-b-2 border-transparent">Billing</button>
          <button className="pb-md px-base text-body-md font-medium text-on-surface-variant hover:text-on-surface transition-all border-b-2 border-transparent">Security</button>
        </div>

        {/* Bento Layout Sections */}
        <div className="grid grid-cols-12 gap-lg">
          {/* AI Model Selection - Large Card */}
          <section className="col-span-12 lg:col-span-8 glass-card rounded-xl p-lg shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
            <div className="flex items-center gap-sm mb-lg">
              <Brain className="w-6 h-6 text-primary" />
              <h3 className="text-h3 font-bold text-on-surface">Model Architecture</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div className="space-y-md">
                <label className="block text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Primary Enterprise LLM</label>
                <div className="relative">
                  <select className="w-full bg-surface-container-high border border-white/10 rounded-lg py-3 px-md text-body-md focus:ring-1 focus:ring-primary focus:border-primary appearance-none outline-none">
                    <option>GPT-4 Turbo (Azure Enterprise)</option>
                    <option>Claude 3.5 Sonnet</option>
                    <option>Custom Llama-3-70B (On-Premise)</option>
                    <option>Gemini 1.5 Pro</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant w-5 h-5" />
                </div>
                <p className="text-label-sm text-on-surface-variant/60">Selected model handles 95% of routine analytical queries.</p>
              </div>
              <div className="space-y-md">
                <label className="block text-label-sm font-bold text-on-surface-variant uppercase tracking-wider">Fallback Model</label>
                <div className="relative">
                  <select className="w-full bg-surface-container-high border border-white/10 rounded-lg py-3 px-md text-body-md focus:ring-1 focus:ring-primary focus:border-primary appearance-none outline-none">
                    <option>GPT-3.5 (Optimized Speed)</option>
                    <option>Claude 3 Haiku</option>
                    <option>Mixtral 8x7B</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant w-5 h-5" />
                </div>
                <p className="text-label-sm text-on-surface-variant/60">Used when primary latency exceeds 1500ms.</p>
              </div>
            </div>
            <div className="mt-xl pt-lg border-t border-white/5">
              <div className="flex items-center justify-between mb-md">
                <div>
                  <h4 className="text-body-lg font-bold">Context Window Limit</h4>
                  <p className="text-label-sm text-on-surface-variant">Adjust the maximum tokens per interaction.</p>
                </div>
                <span className="font-mono text-primary font-bold">128k Tokens</span>
              </div>
              <input className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
            </div>
          </section>

          {/* Status Badges / Quota - Side Card */}
          <section className="col-span-12 lg:col-span-4 glass-card rounded-xl p-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-sm mb-lg">
                <Coins className="w-6 h-6 text-secondary" />
                <h3 className="text-h3 font-bold text-on-surface">API Usage</h3>
              </div>
              <div className="space-y-xl">
                <div>
                  <div className="flex justify-between text-label-sm mb-xs">
                    <span className="text-on-surface-variant">Monthly Credits</span>
                    <span className="text-on-surface">82% Used</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[82%]"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-md">
                  <div className="p-md rounded-lg bg-white/5 border border-white/5">
                    <p className="text-label-sm text-on-surface-variant mb-xs">Request Rate</p>
                    <p className="text-h3 font-bold text-on-surface">1.2k<span className="text-label-sm font-normal text-on-surface-variant ml-xs">/min</span></p>
                  </div>
                  <div className="p-md rounded-lg bg-white/5 border border-white/5">
                    <p className="text-label-sm text-on-surface-variant mb-xs">Avg Latency</p>
                    <p className="text-h3 font-bold text-emerald-400">42ms</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-xl w-full py-sm border border-white/10 rounded-lg text-body-md font-medium hover:bg-white/5 transition-colors">View Usage Logs</button>
          </section>

          {/* API Key Management - Wide Card */}
          <section className="col-span-12 glass-card rounded-xl p-lg">
            <div className="flex items-center justify-between mb-lg">
              <div className="flex items-center gap-sm">
                <Key className="w-6 h-6 text-primary" />
                <h3 className="text-h3 font-bold text-on-surface">Key Management</h3>
              </div>
              <button className="flex items-center gap-xs px-md py-sm bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-label-sm font-bold">
                <Plus className="w-4 h-4" />
                GENERATE NEW KEY
              </button>
            </div>
            <div className="space-y-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md p-md rounded-xl bg-white/5 hover:bg-white/[0.07] transition-all border border-white/5">
                <div className="flex items-center gap-lg">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Network className="w-5 h-5 text-on-surface-variant" />
                  </div>
                  <div>
                    <p className="text-body-md font-bold">Production_Main_Endpoint</p>
                    <p className="font-mono text-xs text-on-surface-variant opacity-40">sk_live_••••••••••••••••••••3a9b</p>
                  </div>
                </div>
                <div className="flex items-center gap-lg self-end sm:self-auto">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-widest border border-emerald-500/20">ACTIVE</span>
                  <div className="flex items-center gap-sm">
                    <button className="p-2 text-on-surface-variant hover:text-on-surface"><Eye className="w-4 h-4" /></button>
                    <button className="p-2 text-on-surface-variant hover:text-error"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md p-md rounded-xl bg-white/5 hover:bg-white/[0.07] transition-all border border-white/5">
                <div className="flex items-center gap-lg">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <FlaskConical className="w-5 h-5 text-on-surface-variant" />
                  </div>
                  <div>
                    <p className="text-body-md font-bold">Staging_Test_Environment</p>
                    <p className="font-mono text-xs text-on-surface-variant opacity-40">sk_test_••••••••••••••••••••f921</p>
                  </div>
                </div>
                <div className="flex items-center gap-lg self-end sm:self-auto">
                  <span className="px-3 py-1 rounded-full bg-on-surface-variant/10 text-on-surface-variant text-[10px] font-bold tracking-widest border border-white/10">INACTIVE</span>
                  <div className="flex items-center gap-sm">
                    <button className="p-2 text-on-surface-variant hover:text-on-surface"><Eye className="w-4 h-4" /></button>
                    <button className="p-2 text-on-surface-variant hover:text-error"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notification Preferences - Medium Card */}
          <section className="col-span-12 md:col-span-6 glass-card rounded-xl p-lg">
            <div className="flex items-center gap-sm mb-lg">
              <BellRing className="w-6 h-6 text-secondary" />
              <h3 className="text-h3 font-bold text-on-surface">Communication</h3>
            </div>
            <div className="space-y-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-md font-bold">Model Drift Alerts</p>
                  <p className="text-label-sm text-on-surface-variant">Notify when accuracy drops below 85%.</p>
                </div>
                <button className="w-12 h-6 bg-primary rounded-full relative transition-colors shadow-inner shrink-0">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-md font-bold">Billing Thresholds</p>
                  <p className="text-label-sm text-on-surface-variant">Email alerts at 50%, 80%, and 100% usage.</p>
                </div>
                <button className="w-12 h-6 bg-primary rounded-full relative transition-colors shadow-inner shrink-0">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-md font-bold">New Model Availability</p>
                  <p className="text-label-sm text-on-surface-variant">In-app notifications for architecture updates.</p>
                </div>
                <button className="w-12 h-6 bg-white/10 rounded-full relative transition-colors shadow-inner shrink-0">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white/40 rounded-full"></div>
                </button>
              </div>
            </div>
          </section>

          {/* Privacy & Data - Medium Card */}
          <section className="col-span-12 md:col-span-6 glass-card rounded-xl p-lg">
            <div className="flex items-center gap-sm mb-lg">
              <ShieldCheck className="w-6 h-6 text-tertiary" />
              <h3 className="text-h3 font-bold text-on-surface">Data Privacy</h3>
            </div>
            <div className="space-y-lg">
              <div className="flex items-center gap-md">
                <input defaultChecked className="w-5 h-5 rounded bg-white/5 border-white/10 text-primary focus:ring-primary focus:ring-offset-background shrink-0" type="checkbox" />
                <div>
                  <p className="text-body-md font-bold">Data Sovereignty</p>
                  <p className="text-label-sm text-on-surface-variant">Store all AI training data within EU regions.</p>
                </div>
              </div>
              <div className="flex items-center gap-md">
                <input defaultChecked className="w-5 h-5 rounded bg-white/5 border-white/10 text-primary focus:ring-primary focus:ring-offset-background shrink-0" type="checkbox" />
                <div>
                  <p className="text-body-md font-bold">Anonymize Queries</p>
                  <p className="text-label-sm text-on-surface-variant">Strip PII before routing to public endpoints.</p>
                </div>
              </div>
              <div className="p-md rounded-lg bg-tertiary/10 border border-tertiary/20 flex gap-md">
                <Info className="w-5 h-5 text-tertiary shrink-0" />
                <p className="text-label-sm text-on-surface-variant">Changes to data residency may take up to 24 hours to propagate across global nodes.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Action Bar */}
        <div className="mt-2xl py-lg flex flex-wrap justify-end gap-md border-t border-white/5">
          <button className="px-xl py-md text-body-md font-bold text-on-surface-variant hover:text-on-surface transition-colors">Discard Changes</button>
          <button className="px-2xl py-md text-body-md font-bold bg-primary text-on-primary rounded-xl primary-glow active:scale-95 transition-all">Save Global Settings</button>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[5%] left-[20%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full"></div>
      </div>
    </>
  );
};

export default SystemSettings;
