import { BarChart, Mail, Lock, ArrowRight, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container/30 min-h-screen">
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Abstract AI Glows */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] ai-glow rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] ai-glow rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-secondary-container/10 rounded-full blur-3xl"></div>
        </div>

        {/* Branding (Top Left) */}
        <header className="absolute top-0 left-0 p-xl z-10 hidden md:flex items-center gap-sm">
          <div className="w-10 h-10 gradient-button rounded-xl flex items-center justify-center">
            <BarChart className="w-6 h-6 text-white" />
          </div>
          <span className="font-display text-h3 font-bold text-primary tracking-tight">AIPerformance</span>
        </header>

        {/* Login Canvas */}
        <main className="relative z-10 w-full max-w-md px-md">
          {/* Mobile Branding Center */}
          <div className="md:hidden flex flex-col items-center mb-xl">
            <div className="w-12 h-12 gradient-button rounded-xl flex items-center justify-center mb-sm">
              <BarChart className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-display text-h3 font-bold text-primary tracking-tight">AIPerformance</h1>
          </div>

          {/* Glassmorphic Login Card */}
          <div className="glass-card rounded-2xl p-xl flex flex-col gap-lg">
            <div className="space-y-base">
              <h2 className="font-display text-h2 text-on-surface">Welcome back</h2>
              <p className="text-on-surface-variant font-body-md">Access your elite enterprise dashboard</p>
            </div>
            
            <form className="space-y-lg" onSubmit={handleSignIn}>
              {/* Email Field */}
              <div className="space-y-sm">
                <label className="font-label-sm text-on-surface-variant ml-xs" htmlFor="email">Professional Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-on-surface-variant">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    className="w-full bg-surface-container-low/50 border border-white/5 rounded-xl py-md pl-xl pr-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary/50 transition-all placeholder:text-outline-variant"
                    id="email"
                    name="email"
                    placeholder="jane.doe@enterprise.ai"
                    required
                    type="email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-sm">
                <div className="flex justify-between items-center px-xs">
                  <label className="font-label-sm text-on-surface-variant" htmlFor="password">Password</label>
                  <a className="font-label-sm text-primary hover:text-primary-container transition-colors" href="#">Forgot password?</a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-on-surface-variant">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    className="w-full bg-surface-container-low/50 border border-white/5 rounded-xl py-md pl-xl pr-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary/50 transition-all placeholder:text-outline-variant"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-sm px-xs">
                <input
                  className="w-4 h-4 rounded border-white/10 bg-surface-container-low text-primary focus:ring-primary/50 focus:ring-offset-background"
                  id="remember"
                  type="checkbox"
                />
                <label className="font-body-md text-on-surface-variant select-none" htmlFor="remember">Remember this session</label>
              </div>

              {/* Sign In Button */}
              <button
                className="w-full gradient-button text-white font-display text-body-lg font-bold py-md rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-sm group"
                type="submit"
              >
                Sign In
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="relative py-md">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5"></span></div>
              <div className="relative flex justify-center text-label-sm uppercase tracking-widest"><span className="bg-transparent px-md text-outline-variant">OR SSO ACCESS</span></div>
            </div>

            {/* SSO Options */}
            <div className="grid grid-cols-2 gap-md">
              <button className="flex items-center justify-center gap-sm bg-surface-container-high/40 hover:bg-surface-container-high/60 border border-white/5 rounded-xl py-sm transition-all text-on-surface font-label-sm">
                <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgtmxeqKeTgL8aHVo2gMFmWRW_Gjnf0VXpyNJX8aq3t2q476C3gvwh5ggqWYHKw5dz-QNTkc9jvY2uzDCZ0ED3ywf92W_cA_s2kLnyFQh24_m0qhFSStrhFYO4UDoIlg3HftdR_R-7uoOGzLTMaJDaKvCqATrj6_yXCGd17FlhyDlhIfKh_h2tJ1OAN2eCOHP-84eq51R21XB0cx-cmghXdgnFHVMkTjiO2JPza8b7Ig0zo0OR86ODl49B6ueFuO55McJL18rCxQ" />
                Google
              </button>
              <button className="flex items-center justify-center gap-sm bg-surface-container-high/40 hover:bg-surface-container-high/60 border border-white/5 rounded-xl py-sm transition-all text-on-surface font-label-sm">
                <Building className="w-5 h-5" />
                Okta
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <footer className="mt-xl flex justify-center gap-lg text-on-surface-variant font-label-sm">
            <a className="hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
            <span className="text-outline-variant">•</span>
            <a className="hover:text-on-surface transition-colors" href="#">Security Center</a>
            <span className="text-outline-variant">•</span>
            <a className="hover:text-on-surface transition-colors" href="#">Support</a>
          </footer>
        </main>

        {/* Decorative UI Element */}
        <div className="fixed bottom-0 right-0 p-2xl pointer-events-none hidden lg:block opacity-40">
          <div className="glass-card w-64 h-64 rounded-full flex flex-col items-center justify-center gap-md border border-white/10">
            <div className="w-16 h-1 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-2/3"></div>
            </div>
            <div className="text-center">
              <p className="font-mono text-primary text-[10px] uppercase tracking-tighter">System Integrity</p>
              <p className="font-display font-bold text-h3 text-on-surface">99.98%</p>
            </div>
            <div className="flex gap-xs">
              <div className="w-1 h-1 rounded-full bg-tertiary"></div>
              <div className="w-1 h-1 rounded-full bg-tertiary"></div>
              <div className="w-1 h-1 rounded-full bg-tertiary"></div>
              <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
