const Notifications = () => {
  return (
    <div className="rounded-[32px] border border-white/10 bg-surface/60 p-10 shadow-2xl shadow-black/10 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
          <span className="text-xl font-bold">🔔</span>
        </div>
        <div>
          <h1 className="text-h4 font-semibold text-on-surface">Notifications</h1>
          <p className="text-sm text-on-surface-variant">Overview of alerts, messages, and updates.</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-on-surface-variant">You have no unread notifications at the moment.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-body-lg font-semibold text-on-surface">System updates</h2>
          <p className="mt-2 text-sm text-on-surface-variant">Latest product alerts and feature announcements will appear here.</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
