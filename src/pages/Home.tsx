import { Link } from 'react-router-dom';
import {
  Building2,
  Video,
  Users,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  PoundSterling,
  MapPin,
} from 'lucide-react';

const services = [
  {
    title: 'Virtual Offices',
    description:
      'Establish a prestigious UK business address without the overhead of physical office space. Mail handling, call answering, and meeting room access included.',
    icon: Video,
    link: '/virtual-offices',
    cta: 'Explore Virtual Offices',
  },
  {
    title: 'Meeting Rooms',
    description:
      'Book professional meeting and conference rooms by the hour or day. Fully equipped with AV, high-speed Wi-Fi, and refreshments across the North.',
    icon: Users,
    link: '/meeting-rooms',
    cta: 'Find Meeting Rooms',
  },
  {
    title: 'Serviced Offices',
    description:
      'Move into a fully furnished, ready-to-go office with flexible lease terms. All utilities, cleaning, and reception services included in one monthly fee.',
    icon: Briefcase,
    link: '/serviced-offices',
    cta: 'View Serviced Offices',
  },
];

const benefits = [
  'Free, impartial workspace advice',
  'Access to exclusive rates not advertised elsewhere',
  'We negotiate on your behalf',
  'No obligation — enquire without commitment',
  'Local knowledge of the Northern market',
  'Fast turnaround — viewings within 48 hours',
];

const locations = [
  { name: 'Manchester', count: '45 spaces' },
  { name: 'Leeds', count: '32 spaces' },
  { name: 'Newcastle', count: '24 spaces' },
  { name: 'Sheffield', count: '18 spaces' },
];

const partners = [
  'Regus',
  'WeWork',
  'Workspace Group',
  'Citibase',
  'BizSpace',
  'Orega',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Find the Perfect Workspace Across the North
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              We connect businesses with premium virtual offices, meeting rooms, and serviced offices. Tell us what you need — we’ll source the best options, negotiate rates, and arrange viewings at no cost to you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-900/20"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/locations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
              >
                Browse Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            We work with leading workspace providers
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {partners.map((p) => (
              <span key={p} className="text-slate-400 font-semibold text-sm tracking-wide">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Workspace Solutions Tailored to You
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Whether you need a virtual address, a room for the afternoon, or a full-time office, we source and compare options so you don’t have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors">
                  <s.icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{s.description}</p>
                <Link
                  to={s.link}
                  className="inline-flex items-center gap-1.5 text-brand-700 font-semibold hover:text-brand-800 transition-colors"
                >
                  {s.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why use us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Why Use NorthSpace?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                As an independent workspace referral service, we act in your best interests — not the landlord’s. We compare availability, pricing, and contract terms across dozens of providers to find the right fit for your business.
              </p>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <Shield className="w-8 h-8 text-brand-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-1">Independent Advice</h4>
                <p className="text-sm text-slate-600">No ties to any single provider. We recommend what suits you.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <PoundSterling className="w-8 h-8 text-brand-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-1">Cost Free to You</h4>
                <p className="text-sm text-slate-600">Our service is funded by workspace operators, not by you.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <Clock className="w-8 h-8 text-brand-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-1">Save Time</h4>
                <p className="text-sm text-slate-600">One enquiry reaches multiple providers. No endless browsing.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <Building2 className="w-8 h-8 text-brand-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-1">Premium Spaces</h4>
                <p className="text-sm text-slate-600">From city-centre towers to creative hubs across the North.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Popular Locations
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              We cover workspace options across the North. Here are some of our most requested cities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.name}
                to="/locations"
                className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[4/3] hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900/20 z-10" />
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>{loc.count}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{loc.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-700 text-white font-semibold hover:bg-brand-800 transition-colors shadow-sm"
            >
              View All Locations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Find Your Workspace?
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
            Submit a quick enquiry and we’ll send you tailored recommendations within one working day. No spam, no hard sell.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-brand-700 font-bold hover:bg-brand-50 transition-colors shadow-lg"
          >
            Request Availability
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
