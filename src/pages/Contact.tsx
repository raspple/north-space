import { useState } from 'react';
import { Mail, Clock, Send } from 'lucide-react';

const inputClass = 'w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900';
const selectClass = 'w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white';

export default function Contact() {
  const [form, setForm] = useState<Record<string, string>>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    location: '',
    urgency: '',
    referralSource: '',
    message: '',
    mail_handling: '',
    company_status: '',
    people_count: '',
    catering: '',
    meeting_type: '',
    duration: '',
    preferred_date: '',
    preferred_time: '',
    office_size: '',
    budget: '',
    budget_max: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const si = form.serviceInterest;

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
                      <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange} className={inputClass} placeholder="John Smith" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="john@company.co.uk" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="0191 123 4567" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className={inputClass} placeholder="Acme Ltd" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-slate-700 mb-1">Service Interest</label>
                    <select id="serviceInterest" name="serviceInterest" value={form.serviceInterest} onChange={handleChange} className={selectClass}>
                      <option value="">Please select...</option>
                      <option value="virtual_office">Virtual Office</option>
                      <option value="meeting_room">Meeting Room</option>
                      <option value="serviced_office">Serviced Office</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  {/* Preferred Location — shown for all service types */}
                  {si && si !== 'general' && (
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">Preferred Location</label>
                      <input id="location" name="location" type="text" value={form.location} onChange={handleChange} className={inputClass} placeholder="Newcastle, Durham, etc." />
                    </div>
                  )}

                  {/* Virtual Office specific fields */}
                  {si === 'virtual_office' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="mail_handling" className="block text-sm font-medium text-slate-700 mb-1">Mail Handling Preference</label>
                        <select id="mail_handling" name="mail_handling" value={form.mail_handling} onChange={handleChange} className={selectClass}>
                          <option value="">Please select...</option>
                          <option value="forward">Mail forwarding required</option>
                          <option value="collect">Collection only</option>
                          <option value="unsure">Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="company_status" className="block text-sm font-medium text-slate-700 mb-1">Company Status</label>
                        <select id="company_status" name="company_status" value={form.company_status} onChange={handleChange} className={selectClass}>
                          <option value="">Please select...</option>
                          <option value="new">New business</option>
                          <option value="existing">Existing business</option>
                          <option value="not_incorporated">Not yet incorporated</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Meeting Room specific fields */}
                  {si === 'meeting_room' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="preferred_date" className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                          <input id="preferred_date" name="preferred_date" type="date" value={form.preferred_date} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor="preferred_time" className="block text-sm font-medium text-slate-700 mb-1">Preferred Time</label>
                          <select id="preferred_time" name="preferred_time" value={form.preferred_time} onChange={handleChange} className={selectClass}>
                            <option value="">Please select...</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="full_day">Full Day</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="people_count" className="block text-sm font-medium text-slate-700 mb-1">Number of Attendees</label>
                          <select id="people_count" name="people_count" value={form.people_count} onChange={handleChange} className={selectClass}>
                            <option value="">Please select...</option>
                            <option value="1-4">1 – 4</option>
                            <option value="5-8">5 – 8</option>
                            <option value="9-16">9 – 16</option>
                            <option value="17-30">17 – 30</option>
                            <option value="30+">30+</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="catering" className="block text-sm font-medium text-slate-700 mb-1">Catering Required?</label>
                          <select id="catering" name="catering" value={form.catering} onChange={handleChange} className={selectClass}>
                            <option value="">Please select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="meeting_type" className="block text-sm font-medium text-slate-700 mb-1">Meeting Type</label>
                          <select id="meeting_type" name="meeting_type" value={form.meeting_type} onChange={handleChange} className={selectClass}>
                            <option value="">Please select...</option>
                            <option value="internal">Internal meeting</option>
                            <option value="client">Client meeting</option>
                            <option value="training">Training session</option>
                            <option value="interview">Interview</option>
                            <option value="workshop_event">Workshop / Event</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="duration" className="block text-sm font-medium text-slate-700 mb-1">Duration Required</label>
                          <select id="duration" name="duration" value={form.duration} onChange={handleChange} className={selectClass}>
                            <option value="">Please select...</option>
                            <option value="1-2hrs">1 – 2 hours</option>
                            <option value="half_day">Half day</option>
                            <option value="full_day">Full day</option>
                            <option value="multiple_days">Multiple days</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Serviced Office specific fields */}
                  {si === 'serviced_office' && (
                    <>
                      <div>
                        <label htmlFor="office_size" className="block text-sm font-medium text-slate-700 mb-1">Team Size</label>
                        <select id="office_size" name="office_size" value={form.office_size} onChange={handleChange} className={selectClass}>
                          <option value="">Please select...</option>
                          <option value="1-2">1 – 2</option>
                          <option value="3-5">3 – 5</option>
                          <option value="6-10">6 – 10</option>
                          <option value="10+">10+</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-slate-700 mb-1">Move-in Timeframe *</label>
                        <select id="urgency" name="urgency" required value={form.urgency} onChange={handleChange} className={selectClass}>
                          <option value="">Please select...</option>
                          <option value="asap">ASAP</option>
                          <option value="1_month">Within 1 month</option>
                          <option value="3_months">Within 3 months</option>
                          <option value="researching">Just researching</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">Budget (per month)</label>
                        <select id="budget" name="budget" value={form.budget} onChange={handleChange} className={selectClass}>
                          <option value="">Please select...</option>
                          <option value="under_250">Under £250/month</option>
                          <option value="250_500">£250 – £500/month</option>
                          <option value="500_1000">£500 – £1,000/month</option>
                          <option value="1000_plus">£1,000+/month</option>
                          <option value="unsure">Unsure</option>
                        </select>
                      </div>

                      {/* Conditional max budget field when £1,000+/month selected */}
                      {form.budget === '1000_plus' && (
                        <div>
                          <label htmlFor="budget_max" className="block text-sm font-medium text-slate-700 mb-1">Maximum Monthly Budget (£)</label>
                          <input id="budget_max" name="budget_max" type="number" min="0" value={form.budget_max} onChange={handleChange} className={inputClass} placeholder="e.g. 2500" />
                          <p className="mt-1.5 text-xs text-slate-500">This helps us identify suitable workspace options within your budget.</p>
                        </div>
                      )}
                    </>
                  )}

                  {/* Urgency + referral source: virtual office + general only */}
                  {(si === 'virtual_office' || si === 'general' || si === '') && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-slate-700 mb-1">How quickly do you need this?</label>
                        <select id="urgency" name="urgency" value={form.urgency} onChange={handleChange} className={selectClass}>
                          <option value="">Please select...</option>
                          <option value="asap">ASAP</option>
                          <option value="1_month">Within 1 month</option>
                          <option value="3_months">Within 3 months</option>
                          <option value="researching">Just researching</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="referralSource" className="block text-sm font-medium text-slate-700 mb-1">How did you hear about us?</label>
                        <select id="referralSource" name="referralSource" value={form.referralSource} onChange={handleChange} className={selectClass}>
                          <option value="">Please select...</option>
                          <option value="google">Google Search</option>
                          <option value="social">Social Media</option>
                          <option value="recommendation">Recommendation</option>
                          <option value="existing_customer">Existing Customer</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Referral source only: meeting room + serviced office */}
                  {(si === 'meeting_room' || si === 'serviced_office') && (
                    <div>
                      <label htmlFor="referralSource" className="block text-sm font-medium text-slate-700 mb-1">How did you hear about us?</label>
                      <select id="referralSource" name="referralSource" value={form.referralSource} onChange={handleChange} className={selectClass}>
                        <option value="">Please select...</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media</option>
                        <option value="recommendation">Recommendation</option>
                        <option value="existing_customer">Existing Customer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}

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
