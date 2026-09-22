import { Link } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
import {
  Video,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Building2,
  Shield,
} from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Prestigious Business Address',
    description: 'Use a prime UK address on your website, stationery, and Companies House registration.',
  },
  {
    icon: Mail,
    title: 'Mail Handling & Forwarding',
    description: 'We collect your post daily and forward it to you weekly, or scan and email it instantly.',
  },
  {
    icon: Phone,
    title: 'Call Answering Service',
    description: 'A professional receptionist answers calls in your company name and forwards messages.',
  },
  {
    icon: Building2,
    title: 'Meeting Room Access',
    description: 'Bookable access to professional meeting rooms when you need to meet clients face-to-face.',
  },
  {
    icon: Shield,
    title: 'No Long-Term Contract',
    description: 'Most virtual office packages run month-to-month. Upgrade, downgrade, or cancel anytime.',
  },
  {
    icon: CheckCircle,
    title: 'Company Formation Support',
    description: 'Need to register a new UK company? We can guide you through the process.',
  },
];

const locations = [
  'Newcastle upon Tyne',
  'Durham',
  'Sunderland',
  'Gateshead',
  'Middlesbrough',
  'York',
  'Leeds',
  'Manchester',
];

export default function VirtualOffices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Virtual Offices
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Professional Business Addresses Across the UK
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Establish credibility with a prestigious virtual office address. Perfect for startups, remote teams, and businesses expanding into new cities without the cost of physical premises.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#enquire"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-900/20"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/locations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
              >
                View Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What’s Included
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Our virtual office packages bundle everything you need to run a professional presence remotely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Three simple steps to a professional business address.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell Us Your Needs',
                description: 'Submit a quick enquiry with your preferred city, services, and budget.',
              },
              {
                step: '02',
                title: 'We Compare Options',
                description: 'Our team sources available virtual office packages from top UK providers.',
              },
              {
                step: '03',
                title: 'You Choose & Move In',
                description: 'Review tailored recommendations, ask questions, and sign up directly.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-2xl font-extrabold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Available in Major UK Cities
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We partner with workspace providers in city centres and business parks across the country. If you don’t see your city listed, get in touch — we likely still have options.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                    {loc}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office building"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Request a Virtual Office Quote
              </h2>
              <p className="mt-2 text-slate-600">
                Tell us your requirements — including how you’d like mail handled — and we’ll send tailored options within 24 hours.
              </p>
            </div>
            <EnquiryForm serviceType="virtual_office" buttonText="Get a Quote" />
          </div>
        </div>
      </section>
    </div>
  );
}
