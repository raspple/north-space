import { useState } from 'react';
import { Send } from 'lucide-react';

interface EnquiryFormProps {
  serviceType: 'virtual_office' | 'meeting_room' | 'serviced_office';
  defaultLocation?: string;
  buttonText?: string;
}

export default function EnquiryForm({ serviceType, defaultLocation = '', buttonText = 'Submit Enquiry' }: EnquiryFormProps) {
  const [form, setForm] = useState<Record<string, string>>({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: defaultLocation,
    message: '',
    mail_handling: '',
    people_count: '',
    catering: '',
    office_size: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form name="enquiry" method="POST" data-netlify="true" action="/thank-you" className="space-y-5">
      <input type="hidden" name="form-name" value="enquiry" />
      <input type="hidden" name="service-type" value={serviceType} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900"
            placeholder="john@company.co.uk"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900"
            placeholder="0191 123 4567"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900"
            placeholder="Acme Ltd"
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">Preferred Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={form.location}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900"
          placeholder="Newcastle, Durham, etc."
        />
      </div>

      {serviceType === 'virtual_office' && (
        <div>
          <label htmlFor="mail_handling" className="block text-sm font-medium text-slate-700 mb-1">
            Mail Handling Preference
          </label>
          <select
            id="mail_handling"
            name="mail_handling"
            value={form.mail_handling}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white"
          >
            <option value="">Please select...</option>
            <option value="forward">Forward mail to my address (postage fees apply)</option>
            <option value="collect">I will collect mail in person</option>
          </select>
          <p className="mt-1.5 text-xs text-slate-500">
            Forwarding includes a weekly post bundle. Collection is free of charge.
          </p>
        </div>
      )}

      {serviceType === 'meeting_room' && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="people_count" className="block text-sm font-medium text-slate-700 mb-1">
                How many people?
              </label>
              <select
                id="people_count"
                name="people_count"
                value={form.people_count}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white"
              >
                <option value="">Please select...</option>
                <option value="1-4">1 – 4 people</option>
                <option value="5-8">5 – 8 people</option>
                <option value="9-16">9 – 16 people</option>
                <option value="17-30">17 – 30 people</option>
                <option value="30+">30+ people</option>
              </select>
            </div>
            <div>
              <label htmlFor="catering" className="block text-sm font-medium text-slate-700 mb-1">
                Catering required?
              </label>
              <select
                id="catering"
                name="catering"
                value={form.catering}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white"
              >
                <option value="">Please select...</option>
                <option value="yes">Yes — tea, coffee &amp; lunch</option>
                <option value="no">No — room only</option>
              </select>
            </div>
          </div>
        </>
      )}

      {serviceType === 'serviced_office' && (
        <div>
          <label htmlFor="office_size" className="block text-sm font-medium text-slate-700 mb-1">
            What size office do you need?
          </label>
          <select
            id="office_size"
            name="office_size"
            value={form.office_size}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white"
          >
            <option value="">Please select...</option>
            <option value="1-2">1 – 2 people</option>
            <option value="3-5">3 – 5 people</option>
            <option value="6-10">6 – 10 people</option>
            <option value="10+">10+ people</option>
            <option value="unsure">Not sure yet — advise me</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Requirements / Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 resize-none"
          placeholder="Tell us about your workspace needs..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-700 text-white font-semibold hover:bg-brand-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm"
      >
        <Send className="w-4 h-4" />
        {buttonText}
      </button>
    </form>
  );
}
