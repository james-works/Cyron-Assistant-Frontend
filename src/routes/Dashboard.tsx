import { motion } from 'framer-motion';

export const Dashboard = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="space-y-4"
    >
      <h2 className="text-lg font-semibold">Overview</h2>
      <p className="text-sm text-text-muted">
        Welcome to your Cyron Assistant dashboard. Select a guild from the left
        to manage knowledge, usage and ticket settings.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-4 shadow-soft">
          <p className="text-xs font-medium text-text-muted">Today</p>
          <p className="mt-2 text-2xl font-semibold text-primary">—</p>
          <p className="text-xs text-text-muted">Tickets created</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-soft">
          <p className="text-xs font-medium text-text-muted">This month</p>
          <p className="mt-2 text-2xl font-semibold text-primary">—</p>
          <p className="text-xs text-text-muted">Tokens used</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-soft">
          <p className="text-xs font-medium text-text-muted">Concurrency</p>
          <p className="mt-2 text-2xl font-semibold text-primary">—</p>
          <p className="text-xs text-text-muted">Active AI sessions</p>
        </div>
      </div>
    </motion.section>
  );
};

