import { useState } from 'react';
import { Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    urgency: '',
    referralSource: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Have a question or ready to find your workspace? Our team is here to help. Fill in the form or reach out directly — we respond to every enquiry within one working day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Details</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <p className="text-slate-600">hello@northspace.co.uk</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Office Hours</p>
                      <p className="text-slate-600">Mon – Fri: 9:00 – 17:30</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">What happens next?</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Once you submit your enquiry, a workspace specialist will review your requirements and contact you within 24 hours with tailored recommendations.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10">
                <form name="contact" method="POST" data-netlify="true" action="/thank-you" className="space-y-5">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
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
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-slate-700 mb-1">Service Interest</label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={form.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white"
                    >
                      <option value="">Please select...</option>
                      <option value="virtual_office">Virtual Office</option>
                      <option value="meeting_room">Meeting Room</option>
                      <option value="serviced_office">Serviced Office</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-slate-700 mb-1">How quickly do you need this?</label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={form.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white"
                      >
                        <option value="">Please select...</option>
                        <option value="asap">ASAP</option>
                        <option value="1_month">Within 1 month</option>
                        <option value="3_months">Within 3 months</option>
                        <option value="researching">Just researching</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="referralSource" className="block text-sm font-medium text-slate-700 mb-1">How did you hear about us?</label>
                      <select
                        id="referralSource"
                        name="referralSource"
                        value={form.referralSource}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white"
                      >
                        <option value="">Please select...</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media</option>
                        <option value="recommendation">Recommendation</option>
                        <option value="existing_customer">Existing Customer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 resize-none"
                      placeholder="Tell us about your requirements, preferred locations, timescales and any other details that will help us find suitable workspace options."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-700 text-white font-semibold hover:bg-brand-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
