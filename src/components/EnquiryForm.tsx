import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const payload: Record<string, unknown> = {
      service_type: serviceType,
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      company: form.company || null,
      location: form.location || null,
      message: form.message || null,
    };

    if (serviceType === 'virtual_office') {
      payload.mail_handling = form.mail_handling || null;
    }
    if (serviceType === 'meeting_room') {
      payload.people_count = form.people_count || null;
      payload.catering = form.catering === 'yes' ? true : form.catering === 'no' ? false : null;
    }
    if (serviceType === 'serviced_office') {
      payload.office_size = form.office_size || null;
    }

    const { error } = await supabase.from('enquiries').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or contact us directly.');
    } else {
      setStatus('success');
      setForm({
        name: '', email: '', phone: '', company: '', location: defaultLocation, message: '',
        mail_handling: '', people_count: '', catering: '', office_size: '',
      });

      fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-enquiry-notification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-emerald-900 mb-2">Enquiry Received</h3>
        <p className="text-emerald-700 max-w-md mx-auto">
          Thank you for your enquiry. One of our workspace specialists will be in touch within 24 hours to discuss your requirements.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-700 text-white font-semibold hover:bg-brand-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {buttonText}
          </>
        )}
      </button>
    </form>
  );
}
