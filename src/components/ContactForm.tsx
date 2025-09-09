import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Bedankt!</h1>
            <p className="text-xl text-gray-600 mb-8">
              We hebben je bericht ontvangen en nemen binnen 24 uur contact met je op.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#F4C430] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#E6B020] transition-colors"
            >
              Nieuw bericht versturen
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
            Laten we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">praten</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Klaar om je digitale transformatie te starten? Neem contact op voor een gratis adviesgesprek.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stuur ons een bericht</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F4C430] focus:border-transparent"
                    placeholder="Je volledige naam"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F4C430] focus:border-transparent"
                    placeholder="je@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bedrijf
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F4C430] focus:border-transparent"
                    placeholder="Je bedrijfsnaam"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F4C430] focus:border-transparent"
                    placeholder="+31 6 12345678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F4C430] focus:border-transparent"
                >
                  <option value="">Selecteer een service</option>
                  <option value="website">Website</option>
                  <option value="webshop">Webshop</option>
                  <option value="webapp">Webapp</option>
                  <option value="marketing">Online Marketing</option>
                  <option value="design">AI Design</option>
                  <option value="automation">AI Automatisering</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bericht *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F4C430] focus:border-transparent resize-vertical"
                  placeholder="Vertel ons over je project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F4C430] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#E6B020] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                    Versturen...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Verstuur Bericht
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-[#F4C430] mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Bel ons direct</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Heb je haast of vragen? Bel ons direct voor snelle hulp.
              </p>
              <a
                href="tel:+31645830810"
                className="text-[#F4C430] font-semibold text-lg hover:text-orange-500 transition-colors"
              >
                +31 6 45830810
              </a>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-[#F4C430] mr-3" />
                <h3 className="text-xl font-bold text-gray-900">E-mail ons</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Stuur aanvullende informatie of documenten.
              </p>
              <a
                href="mailto:hallo@webdeskai.com"
                className="text-[#F4C430] font-semibold text-lg hover:text-orange-500 transition-colors"
              >
                hallo@webdeskai.com
              </a>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-[#F4C430] mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Reactietijd</h3>
              </div>
              <p className="text-gray-600">
                We reageren binnen <span className="font-semibold text-[#F4C430]">24 uur</span> op alle berichten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;