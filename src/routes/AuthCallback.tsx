import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const AuthCallback = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const { setAuthToken } = useAuth();

  useEffect(() => {
    const token = query.get('token');

    if (!token) {
      navigate('/login', { replace: true });
      return;
    }

    setAuthToken(token);
    navigate('/', { replace: true });
  }, [navigate, query, setAuthToken]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-base px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="rounded-2xl bg-white px-6 py-5 shadow-soft"
      >
        <p className="text-sm text-text-muted">
          Finishing sign-in with Discord...
        </p>
      </motion.div>
    </div>
  );
};

