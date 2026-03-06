import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';

export const TopNav = () => {
  const { user, logout } = useAuth();

  const initials = user?.username
    ? user.username
        .split(' ')
        .map((p) => p[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'U';

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 px-6 py-3 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <h1 className="text-base font-semibold">Dashboard</h1>
          <p className="text-xs text-text-muted">
            Manage your Cyron Assistant guilds and usage.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
              {user?.avatar_url ? (
                <img
                  src={user.avatar_url}
                  alt={user.username}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                initials
              )}
            </div>
            <div className="hidden flex-col text-right text-xs sm:flex">
              <span className="font-medium">{user?.username ?? 'User'}</span>
              <span className="text-text-muted">Logged in with Discord</span>
            </div>
          </div>
          <Button variant="ghost" onClick={logout} className="text-xs font-medium">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

