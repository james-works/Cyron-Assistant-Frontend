import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';

export const Login = () => {
  const { loginWithDiscord } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-base px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-soft"
      >
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-white">
            CA
          </div>
          <div>
            <h1 className="text-lg font-semibold">Cyron Assistant</h1>
            <p className="text-xs text-text-muted">AI Ticket Bot Dashboard</p>
          </div>
        </div>

        <p className="mb-6 text-sm text-text-muted">
          Connect your Discord server and manage AI-powered ticketing, knowledge
          and usage limits from a single, clean dashboard.
        </p>

        <Button
          className="flex w-full items-center justify-center gap-2"
          onClick={loginWithDiscord}
        >
          <span>Login with Discord</span>
        </Button>

        <p className="mt-4 text-center text-[11px] text-text-muted">
          By continuing, you agree to the Cyron Assistant Terms of Service and
          Privacy Policy.
        </p>
      </motion.div>
    </div>
  );
};

