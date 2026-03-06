import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation, useParams } from 'react-router-dom';
import { api } from '../../lib/api';

interface Guild {
  id: string;
  name: string;
  icon_url?: string | null;
  plan?: 'free' | 'pro' | 'business' | string;
}

async function fetchGuilds(): Promise<Guild[]> {
  const res = await api.get<Guild[]>('/guilds');
  return res.data;
}

export const Sidebar = () => {
  const { data: guilds, isLoading } = useQuery({
    queryKey: ['guilds'],
    queryFn: fetchGuilds,
  });
  const location = useLocation();
  const params = useParams();

  return (
    <aside className="hidden w-64 flex-shrink-0 border-r border-slate-200 bg-white/80 backdrop-blur-lg md:flex">
      <div className="flex h-full flex-col px-4 py-6">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-white">
            CA
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">Cyron Assistant</p>
            <p className="text-xs text-text-muted">AI Ticket Bot</p>
          </div>
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
          Guilds
        </p>

        <div className="flex-1 space-y-1 overflow-y-auto pr-1">
          {isLoading && (
            <p className="text-xs text-text-muted">Loading guilds...</p>
          )}
          {!isLoading &&
            guilds?.map((guild, index) => {
              const isActive =
                location.pathname.includes(`/guilds/${guild.id}`) ||
                (!params.guildId && location.pathname === '/' && index === 0);

              return (
                <motion.div
                  key={guild.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    to={`/guilds/${guild.id}/knowledge`}
                    className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-text-muted hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                      {guild.icon_url ? (
                        <img
                          src={guild.icon_url}
                          alt={guild.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        (guild.name[0] ?? '?').toUpperCase()
                      )}
                    </div>
                    <div className="flex flex-1 flex-col">
                      <span className="truncate text-xs font-medium">
                        {guild.name}
                      </span>
                      {guild.plan && (
                        <span className="mt-0.5 inline-flex w-fit rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium capitalize text-slate-600">
                          {guild.plan}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
        </div>
      </div>
    </aside>
  );
};

