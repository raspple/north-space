import { Link } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
import {
  Users,
  Monitor,
  Wifi,
  Coffee,
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
  MapPin,
} from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'AV & Presentation Equipment',
    description: 'HD screens, projectors, video conferencing, and clickers included as standard.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    description: 'Dedicated business-grade internet with guest and private network options.',
  },
  {
    icon: Coffee,
    title: 'Tea, Coffee & Refreshments',
    description: 'Complimentary hot drinks and optional catering for longer sessions.',
  },
  {
    icon: Clock,
    title: 'Flexible Booking',
    description: 'Book by the hour, half-day, or full day. No membership or long-term commitment required.',
  },
  {
    icon: Calendar,
    title: 'Same-Day Availability',
    description: 'Many of our partner locations accept bookings with just a few hours’ notice.',
  },
  {
    icon: Users,
    title: 'All Room Sizes',
    description: 'From 2-person interview rooms to 50-person training suites and boardrooms.',
  },
];

const roomTypes = [
  { name: 'Interview Rooms', capacity: '2–4 people', price: 'From £25/hr' },
  { name: 'Meeting Rooms', capacity: '4–12 people', price: 'From £40/hr' },
  { name: 'Boardrooms', capacity: '12–24 people', price: 'From £85/hr' },
  { name: 'Training Suites', capacity: '20–50 people', price: 'From £120/hr' },
];

export default function MeetingRooms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Meeting Rooms
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Book Professional Meeting Rooms by the Hour
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Impress clients and collaborate effectively in fully equipped meeting and conference rooms across the North. Book for an hour or a full day — no membership required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#enquire"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-900/20"
              >
                Request Availability
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
              Everything You Need for a Productive Meeting
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Our partner meeting rooms come fully equipped so you can focus on the agenda, not the logistics.
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

      {/* Room types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Room Types & Pricing
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Transparent indicative pricing. We’ll confirm exact rates and availability for your dates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomTypes.map((room) => (
              <div
                key={room.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{room.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{room.capacity}</p>
                <div className="text-brand-700 font-bold text-lg">{room.price}</div>
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
                Meeting Rooms Across the North
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                From city-centre business hubs to out-of-town creative spaces, we have meeting room options in every major town and city. Whether you need a boardroom in Newcastle or a training suite in Durham, we’ll find it.
              </p>
              <ul className="space-y-3">
                {['Newcastle upon Tyne', 'Durham', 'Sunderland', 'Gateshead', 'Middlesbrough'].map(
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
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Meeting room"
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
                Check Availability & Book
              </h2>
              <p className="mt-2 text-slate-600">
                Let us know how many people, whether you need catering, and your preferred location. We’ll confirm availability and pricing within a few hours.
              </p>
            </div>
            <EnquiryForm serviceType="meeting_room" buttonText="Request Availability" />
          </div>
        </div>
      </section>
    </div>
  );
}
