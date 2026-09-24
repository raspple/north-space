import { useState } from 'react';
import { Send } from 'lucide-react';

interface EnquiryFormProps {
  serviceType: 'virtual_office' | 'meeting_room' | 'serviced_office';
  defaultLocation?: string;
  buttonText?: string;
}

const inputClass = 'w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900';
const selectClass = 'w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-white';

export default function EnquiryForm({ serviceType, defaultLocation = '', buttonText = 'Submit Enquiry' }: EnquiryFormProps) {
  const [form, setForm] = useState<Record<string, string>>({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: defaultLocation,
    message: '',
    urgency: '',
    referral_source: '',
    mail_handling: '',
    company_status: '',
    people_count: '',
    catering: '',
    meeting_type: '',
    duration: '',
    preferred_date: '',
    office_size: '',
    budget: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form name="enquiry" method="POST" data-netlify="true" action="/thank-you" className="space-y-5">
      <input type="hidden" name="form-name" value="enquiry" />
      <input type="hidden" name="service-type" value={serviceType} />

      {/* Serviced office: timeframe + budget near the top */}
      {serviceType === 'serviced_office' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-slate-700 mb-1">Move-in Timeframe *</label>
            <select
              id="urgency"
              name="urgency"
              required
              value={form.urgency}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Please select...</option>
              <option value="asap">ASAP</option>
              <option value="1_month">Within 1 month</option>
              <option value="3_months">Within 3 months</option>
              <option value="researching">Just researching</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">Budget (per month)</label>
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Please select...</option>
              <option value="under_250">Under £250</option>
              <option value="250_500">£250 – £500</option>
              <option value="500_1000">£500 – £1,000</option>
              <option value="1000_plus">£1,000+</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>
        </div>
      )}

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
            className={inputClass}
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
            className={inputClass}
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
            className={inputClass}
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
            className={inputClass}
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
          className={inputClass}
          placeholder="Newcastle, Durham, etc."
        />
      </div>

      {/* Virtual Office specific fields */}
      {serviceType === 'virtual_office' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="mail_handling" className="block text-sm font-medium text-slate-700 mb-1">
              Mail Handling Preference
            </label>
            <select
              id="mail_handling"
              name="mail_handling"
              value={form.mail_handling}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Please select...</option>
              <option value="forward">Mail forwarding required</option>
              <option value="collect">Collection only</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="company_status" className="block text-sm font-medium text-slate-700 mb-1">
              Company Status
            </label>
            <select
              id="company_status"
              name="company_status"
              value={form.company_status}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Please select...</option>
              <option value="new">New business</option>
              <option value="existing">Existing business</option>
              <option value="not_incorporated">Not yet incorporated</option>
            </select>
          </div>
        </div>
      )}

      {/* Meeting Room specific fields */}
      {serviceType === 'meeting_room' && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="people_count" className="block text-sm font-medium text-slate-700 mb-1">
                Number of Attendees
              </label>
              <select
                id="people_count"
                name="people_count"
                value={form.people_count}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Please select...</option>
                <option value="1-4">1 – 4</option>
                <option value="5-8">5 – 8</option>
                <option value="9-16">9 – 16</option>
                <option value="17-30">17 – 30</option>
                <option value="30+">30+</option>
              </select>
            </div>
            <div>
              <label htmlFor="catering" className="block text-sm font-medium text-slate-700 mb-1">
                Catering Required?
              </label>
              <select
                id="catering"
                name="catering"
                value={form.catering}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Please select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="meeting_type" className="block text-sm font-medium text-slate-700 mb-1">
                Meeting Type
              </label>
              <select
                id="meeting_type"
                name="meeting_type"
                value={form.meeting_type}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Please select...</option>
                <option value="internal">Internal</option>
                <option value="client">Client</option>
                <option value="training">Training</option>
                <option value="interview">Interview</option>
                <option value="workshop_event">Workshop / Event</option>
              </select>
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-slate-700 mb-1">
                Duration
              </label>
              <select
                id="duration"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Please select...</option>
                <option value="1-2hrs">1 – 2 hrs</option>
                <option value="half_day">Half day</option>
                <option value="full_day">Full day</option>
                <option value="multiple_days">Multiple days</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="preferred_date" className="block text-sm font-medium text-slate-700 mb-1">
              Preferred Date
            </label>
            <input
              id="preferred_date"
              name="preferred_date"
              type="date"
              value={form.preferred_date}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </>
      )}

      {/* Serviced Office specific fields */}
      {serviceType === 'serviced_office' && (
        <div>
          <label htmlFor="office_size" className="block text-sm font-medium text-slate-700 mb-1">
            Team Size
          </label>
          <select
            id="office_size"
            name="office_size"
            value={form.office_size}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Please select...</option>
            <option value="1-2">1 – 2</option>
            <option value="3-5">3 – 5</option>
            <option value="6-10">6 – 10</option>
            <option value="10+">10+</option>
          </select>
        </div>
      )}

      {/* General fields: urgency + referral source (not for serviced office — urgency already at top) */}
      {serviceType !== 'serviced_office' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-slate-700 mb-1">How quickly do you need this?</label>
            <select
              id="urgency"
              name="urgency"
              value={form.urgency}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Please select...</option>
              <option value="asap">ASAP</option>
              <option value="1_month">Within 1 month</option>
              <option value="3_months">Within 3 months</option>
              <option value="researching">Just researching</option>
            </select>
          </div>
          <div>
            <label htmlFor="referral_source" className="block text-sm font-medium text-slate-700 mb-1">How did you hear about us?</label>
            <select
              id="referral_source"
              name="referral_source"
              value={form.referral_source}
              onChange={handleChange}
              className={selectClass}
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
      )}

      {/* Referral source for serviced office (urgency already at top) */}
      {serviceType === 'serviced_office' && (
        <div>
          <label htmlFor="referral_source" className="block text-sm font-medium text-slate-700 mb-1">How did you hear about us?</label>
          <select
            id="referral_source"
            name="referral_source"
            value={form.referral_source}
            onChange={handleChange}
            className={selectClass}
          >
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
