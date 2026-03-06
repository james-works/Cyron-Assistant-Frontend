import { motion } from 'framer-motion';

export const Knowledge = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="space-y-4"
    >
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Knowledge</h2>
          <p className="text-sm text-text-muted">
            Manage knowledge entries that power Cyron Assistant for this guild.
          </p>
        </div>
      </header>
      <div className="rounded-xl bg-white p-4 shadow-soft">
        <p className="text-sm text-text-muted">
          Knowledge management UI will go here (list, search, create, edit).
        </p>
      </div>
    </motion.section>
  );
};

