import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-brand-400" />
              <span className="text-lg font-bold text-white">NorthSpace</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connecting Businesses with Flexible Workspace Solutions
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/virtual-offices" className="hover:text-brand-400 transition-colors">Virtual Offices</Link></li>
              <li><Link to="/meeting-rooms" className="hover:text-brand-400 transition-colors">Meeting Rooms</Link></li>
              <li><Link to="/serviced-offices" className="hover:text-brand-400 transition-colors">Serviced Offices</Link></li>
              <li><Link to="/locations" className="hover:text-brand-400 transition-colors">Locations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span>0191 123 4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span>hello@northspace.co.uk</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400 shrink-0" />
                <span>Newcastle upon Tyne, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} NorthSpace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
