import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10">
          <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-emerald-900 mb-3">Thank You</h1>
          <p className="text-emerald-700 mb-8 leading-relaxed">
            Your enquiry has been received. One of our workspace specialists will be in touch within one working day to discuss your requirements.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-700 text-white font-semibold hover:bg-brand-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
