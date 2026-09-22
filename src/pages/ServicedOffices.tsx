import { Link } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
import {
  Briefcase,
  Sofa,
  Wifi,
  Printer,
  ShieldCheck,
  Wrench,
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
} from 'lucide-react';

const features = [
  {
    icon: Sofa,
    title: 'Fully Furnished',
    description: 'Desks, chairs, storage, and meeting tables included. Move in with your laptop and start working.',
  },
  {
    icon: Wifi,
    title: 'All-Inclusive Bills',
    description: 'Rent covers electricity, heating, water, business rates, and high-speed internet. No surprise costs.',
  },
  {
    icon: Users,
    title: 'Reception & Support',
    description: 'Professional front-of-house team to greet visitors, handle post, and answer calls for your business.',
  },
  {
    icon: Printer,
    title: 'Shared Facilities',
    description: 'Access to kitchens, breakout areas, printing, photocopying, and secure bike storage.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Included',
    description: 'Cleaning, repairs, and building upkeep managed by the provider — not your problem.',
  },
  {
    icon: ShieldCheck,
    title: 'Flexible Terms',
    description: 'Licences from 3 months upwards. Scale up or down as your team grows or contracts.',
  },
];

const officeSizes = [
  { name: '1–2 Person Office', size: '10–15 sqm', price: 'From £350/mo' },
  { name: '3–5 Person Office', size: '20–30 sqm', price: 'From £650/mo' },
  { name: '6–10 Person Office', size: '35–55 sqm', price: 'From £1,100/mo' },
  { name: '10+ Person Suite', size: '60+ sqm', price: 'From £1,800/mo' },
];

export default function ServicedOffices() {
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
              <Briefcase className="w-4 h-4" />
              Serviced Offices
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Fully Managed Offices, Ready to Move In
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Skip the fit-out, furniture shopping, and utility contracts. Our serviced offices come fully equipped with everything your team needs to be productive from day one.
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
              One monthly fee covers rent, bills, furniture, cleaning, and support. Predictable costs, zero hassle.
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

      {/* Office sizes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Office Sizes & Pricing
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Indicative monthly costs. We’ll provide exact quotes based on your team size, location, and lease term.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeSizes.map((office) => (
              <div
                key={office.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-1">{office.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{office.size}</p>
                <div className="text-brand-700 font-bold text-lg">{office.price}</div>
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
                Serviced Offices Across the UK
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We work with operators in every major UK city and key regional hubs. Whether you want a riverside office in Newcastle, a historic building in Durham, or a modern business park in Sunderland, we’ll find the right space.
              </p>
              <ul className="space-y-3">
                {['Newcastle upon Tyne', 'Durham', 'Sunderland', 'Gateshead', 'Middlesbrough', 'York', 'Leeds'].map(
                  (loc) => (
                    <li key={loc} className="flex items-center gap-2 text-slate-700">
                      <MapPin className="w-4 h-4 text-brand-600" />
                      {loc}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Serviced office interior"
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
                Get a Serviced Office Quote
              </h2>
              <p className="mt-2 text-slate-600">
                Share your preferred location, office size, and move-in date. We’ll send tailored options within 24 hours.
              </p>
            </div>
            <EnquiryForm serviceType="serviced_office" buttonText="Get a Quote" />
          </div>
        </div>
      </section>
    </div>
  );
}
