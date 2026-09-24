import { Link } from 'react-router-dom';
import { MapPin, Building2, ArrowRight } from 'lucide-react';

const locations = [
  {
    name: 'Manchester',
    description:
      "The North's powerhouse for business. From Spinningfields to the Northern Quarter, Manchester offers every type of workspace imaginable.",
    spaces: 45,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/27878164/pexels-photo-27878164.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Leeds',
    description:
      "One of the North's largest financial centres. Extensive choice of Grade A offices, coworking spaces, and corporate meeting facilities.",
    spaces: 32,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/30389574/pexels-photo-30389574.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Newcastle upon Tyne',
    description:
      "The North East's commercial capital. Choose from modern towers on Quayside, creative hubs in Ouseburn, or professional suites in the city centre.",
    spaces: 24,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/35113644/pexels-photo-35113644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'York',
    description:
      'A historic city with a thriving professional and tech scene. Premium addresses for businesses that value heritage and reputation.',
    spaces: 10,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/10569318/pexels-photo-10569318.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Sheffield',
    description:
      "A city reinventing itself with a booming creative and digital sector. Affordable workspace with a strong sense of community and growing investment.",
    spaces: 18,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/12698033/pexels-photo-12698033.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Durham',
    description:
      'A blend of heritage and innovation. Ideal for professional services, education-linked ventures, and businesses seeking a prestigious address.',
    spaces: 12,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/18510493/pexels-photo-18510493.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Sunderland',
    description:
      'A growing digital and creative cluster with excellent transport links. Affordable workspace with strong public and private investment.',
    spaces: 9,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/34957642/pexels-photo-34957642.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Gateshead',
    description:
      'Home to the Sage and Baltic. Modern office developments along the river with easy access to Newcastle city centre.',
    spaces: 7,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/9347431/pexels-photo-9347431.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Middlesbrough',
    description:
      'A resurgent Teesside hub with new commercial developments, strong logistics connectivity, and competitive rates.',
    spaces: 6,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/36802785/pexels-photo-36802785.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Darlington',
    description:
      'A well-connected market town with a growing business community. Great rail links and a steady supply of modern, flexible office space.',
    spaces: 5,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/30404020/pexels-photo-30404020.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Harrogate',
    description:
      'An elegant spa town with a premium business address. Popular with professional services, finance, and boutique agencies.',
    spaces: 8,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/9428514/pexels-photo-9428514.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Stockton-on-Tees',
    description:
      'Part of the Tees Valley regeneration. Cost-effective workspace with strong logistics and a growing entrepreneurial scene.',
    spaces: 4,
    services: ['Virtual Offices', 'Meeting Rooms', 'Serviced Offices'],
    image: 'https://images.pexels.com/photos/35612934/pexels-photo-35612934.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Locations() {
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
              <MapPin className="w-4 h-4" />
              Locations
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Workspace Locations Across the North
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              From Manchester and Leeds in the south to Newcastle and Sunderland in the north — and every city in between. Browse our directory of locations and submit an enquiry for any city across the North.
            </p>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="group rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${loc.image}')` }} />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-brand-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{loc.name}</h3>
                        <p className="text-sm text-slate-500">{loc.spaces} spaces available</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-5">{loc.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {loc.services.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100"
                      >
                        <Building2 className="w-3 h-3" />
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-brand-700 font-semibold hover:text-brand-800 transition-colors"
                  >
                    Enquire in {loc.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Every City in Between
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't see your town listed? We cover every city and town across the North — from the Pennines to the coast. Submit an enquiry and we'll source options in your preferred location.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-brand-700 font-bold hover:bg-brand-50 transition-colors shadow-lg"
          >
            Submit an Enquiry
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
