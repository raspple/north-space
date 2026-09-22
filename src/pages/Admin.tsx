import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { Lock, Mail, Loader2, LogOut, Search, Filter, Inbox, Trash2, X } from 'lucide-react';

interface Enquiry {
  id: string;
  created_at: string;
  service_type: string | null;
  location: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  message: string | null;
  status: string | null;
  mail_handling: string | null;
  people_count: string | null;
  catering: boolean | null;
  office_size: string | null;
}

const serviceLabels: Record<string, string> = {
  virtual_office: 'Virtual Office',
  meeting_room: 'Meeting Room',
  serviced_office: 'Serviced Office',
  general: 'General Enquiry',
};

export default function Admin() {
  const [session, setSession] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterService, setFilterService] = useState('all');
  const [selected, setSelected] = useState<Enquiry | null>(null);

  const checkSession = useCallback(async () => {
    const { data } = await supabase.auth.getSession();
    setSession(!!data.session);
  }, []);

  useEffect(() => {
    checkSession();
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      checkSession();
    });
    return () => sub.subscription.unsubscribe();
  }, [checkSession]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setAuthError(error.message);
    }
    setAuthLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSelected(null);
  };

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) {
      setEnquiries(data as Enquiry[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (session) fetchEnquiries();
  }, [session, fetchEnquiries]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('enquiries').delete().eq('id', id);
    if (!error) {
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
      if (selected?.id === id) setSelected(null);
    }
  };

  const filtered = enquiries.filter((e) => {
    const matchesSearch =
      !search ||
      [e.name, e.email, e.company, e.location, e.message]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(search.toLowerCase()));
    const matchesService = filterService === 'all' || e.service_type === filterService;
    return matchesSearch && matchesService;
  });

  if (session === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-brand-600" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-brand-700 flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Admin Sign In</h1>
                <p className="text-sm text-slate-500">NorthSpace Enquiry Dashboard</p>
              </div>
            </div>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label htmlFor="admin-email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="admin-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input
                  id="admin-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900"
                  placeholder="••••••••"
                />
              </div>
              {authError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                  {authError}
                </div>
              )}
              <button
                type="submit"
                disabled={authLoading}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-brand-700 text-white font-semibold hover:bg-brand-800 disabled:opacity-60 transition-colors"
              >
                {authLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Inbox className="w-6 h-6 text-brand-700" />
              <h1 className="text-lg font-bold text-slate-900">Enquiries</h1>
              <span className="px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium">
                {enquiries.length}
              </span>
            </div>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, company, location, or message..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white"
            />
          </div>
          <div className="relative">
            <Filter className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="pl-10 pr-8 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white appearance-none"
            >
              <option value="all">All Services</option>
              <option value="virtual_office">Virtual Office</option>
              <option value="meeting_room">Meeting Room</option>
              <option value="serviced_office">Serviced Office</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-brand-600" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">No enquiries found</p>
            <p className="text-slate-400 text-sm mt-1">New form submissions will appear here automatically.</p>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Service</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((e) => (
                    <tr
                      key={e.id}
                      className="hover:bg-slate-50 cursor-pointer transition-colors"
                      onClick={() => setSelected(e)}
                    >
                      <td className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">
                        {new Date(e.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{e.name || '—'}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 text-xs font-medium">
                          {e.service_type ? serviceLabels[e.service_type] || e.service_type : '—'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{e.location || '—'}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        <div>{e.email || '—'}</div>
                        <div className="text-xs text-slate-400">{e.phone || ''}</div>
                      </td>
                      <td className="px-6 py-4 text-right" onClick={(ev) => ev.stopPropagation()}>
                        <button
                          onClick={() => handleDelete(e.id)}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete enquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="lg:hidden space-y-3">
              {filtered.map((e) => (
                <div
                  key={e.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 cursor-pointer hover:border-brand-300 transition-colors"
                  onClick={() => setSelected(e)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-slate-900">{e.name || '—'}</p>
                      <p className="text-sm text-slate-500">{e.email || '—'}</p>
                    </div>
                    <span className="inline-flex px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 text-xs font-medium">
                      {e.service_type ? serviceLabels[e.service_type] || e.service_type : '—'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{e.location || 'No location'}</span>
                    <span>{new Date(e.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Detail drawer */}
      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Enquiry Details</h2>
              <button
                onClick={() => setSelected(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <DetailRow label="Date" value={new Date(selected.created_at).toLocaleString('en-GB')} />
              <DetailRow label="Name" value={selected.name} />
              <DetailRow label="Email" value={selected.email} />
              <DetailRow label="Phone" value={selected.phone} />
              <DetailRow label="Company" value={selected.company} />
              <DetailRow label="Service" value={selected.service_type ? serviceLabels[selected.service_type] || selected.service_type : null} />
              <DetailRow label="Location" value={selected.location} />
              <DetailRow label="Mail Handling" value={selected.mail_handling} />
              <DetailRow label="People Count" value={selected.people_count} />
              <DetailRow label="Catering" value={selected.catering === null ? null : selected.catering ? 'Yes' : 'No'} />
              <DetailRow label="Office Size" value={selected.office_size} />
              <DetailRow label="Message" value={selected.message} />
            </div>
            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-6 py-4">
              <button
                onClick={() => handleDelete(selected.id)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-red-200 text-red-600 font-medium hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Delete Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
      <p className="text-sm text-slate-700 whitespace-pre-wrap">{value || '—'}</p>
    </div>
  );
}
