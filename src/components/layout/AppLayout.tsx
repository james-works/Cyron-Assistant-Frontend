import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-bg-base">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopNav />
        <main className="flex-1 px-6 pb-8 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mx-auto max-w-6xl"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

