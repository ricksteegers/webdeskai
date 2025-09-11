import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Building, Sparkles, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

const ContactForm: React.FC = () => {

  const services = [
    'Website Ontwikkeling',
    'Webshop Ontwikkeling',
    'Web Applicaties',
    'Online Marketing',
    'AI Design',
    'AI Automatisering',
    'Anders / Niet zeker'
  ];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden">
      {/* Modern Background decorative elements */}
      <div className="absolute inset-0 opacity-8 z-10">
        <div className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-[35rem] h-[35rem] bg-gradient-to-br from-purple-400 via-indigo-400 to-blue-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-[25rem] h-[25rem] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur-3xl animate-drift-left"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[28rem] h-[28rem] bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 rounded-full blur-3xl animate-drift-right"></div>
      </div>

      {/* Enhanced animated patterns */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, #3B82F6 2px, transparent 0),
            radial-gradient(circle at 1px 1px, #F4C430 1px, transparent 0)
          `,
          backgroundSize: '60px 60px, 40px 40px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-20 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping shadow-lg"></div>
        <div className="absolute top-40 right-32 w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping shadow-md" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping shadow-md" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-ping shadow-lg" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-8 w-2.5 h-2.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-ping shadow-md" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-8 w-3.5 h-3.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-blue-200 hover:scale-110 transition-all duration-300">
              CONTACT
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Laten we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 animate-pulse relative">
              praten
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-40 animate-pulse"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Klaar om je digitale transformatie te starten? Neem contact op voor een gratis adviesgesprek
            en ontdek hoe onze AI-gedreven oplossingen je bedrijf kunnen helpen groeien.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white/98 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100 relative overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Form header gradient */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-t-3xl"></div>
            
            {/* Floating form decorations */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-cyan-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <form 
                id="contact-form"
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-6"
              >
                {/* Web3Forms configuration */}
                <input type="hidden" name="access_key" value="65891996-5409-46d7-86d9-0501060aa925" />
                <input type="hidden" name="redirect" value="https://webdeskai.com/bedankt" />
                <input type="hidden" name="to" value="hallo@webdeskai.com" />
                
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Naam *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-blue-300 hover:shadow-md"
                        placeholder="Je volledige naam"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-blue-300 hover:shadow-md"
                        placeholder="je.email@bedrijf.nl"
                      />
                    </div>
                  </div>
                </div>

                {/* Company and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Bedrijf *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-blue-300 hover:shadow-md"
                        placeholder="Je bedrijfsnaam"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefoon *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-blue-300 hover:shadow-md"
                        placeholder="+31 6 12345678"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gewenste Service *
                  </label>
                  <div className="relative">
                    <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/90 backdrop-blur-sm appearance-none hover:border-blue-300 hover:shadow-md"
                    >
                      <option value="">Selecteer een service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Bericht
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/90 backdrop-blur-sm resize-none hover:border-blue-300 hover:shadow-md"
                      placeholder="Vertel ons over je project, doelen en hoe we je kunnen helpen..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-5 rounded-full font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-center justify-center">
                    <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    Verstuur Bericht
                  </div>
                  
                  {/* Enhanced floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </button>
              </form>

            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="group bg-white/98 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-t-3xl"></div>
                
                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-blue-500/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-cyan-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                <div className="flex items-center">
                  <div className="w-18 h-18 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">E-mail</h3>
                    <p className="text-gray-600 mb-2">Stuur ons een e-mail</p>
                    <a href="mailto:hallo@webdeskai.com" className="text-blue-500 font-bold hover:text-cyan-500 transition-colors duration-300 flex items-center group/link">
                      hallo@webdeskai.com
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group bg-white/98 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-green-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-t-3xl"></div>
                
                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-green-500/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-emerald-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                <div className="flex items-center">
                  <div className="w-18 h-18 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Telefoon</h3>
                    <p className="text-gray-600 mb-2">Bel ons direct</p>
                    <a href="tel:+31645830810" className="text-green-500 font-bold hover:text-emerald-500 transition-colors duration-300 flex items-center group/link">
                      +31 6 45830810
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="group bg-white/98 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-green-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 rounded-t-3xl"></div>
                
                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-green-500/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-green-600/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                <div className="flex items-center">
                  <div className="w-18 h-18 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Chat direct met ons</p>
                    <a 
                      href="https://wa.me/31645830810" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-500 font-bold hover:text-emerald-500 transition-colors duration-300 flex items-center group/link"
                    >
                      Start WhatsApp Chat
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="group bg-white/98 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-purple-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 rounded-t-3xl"></div>
                
                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-purple-500/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-indigo-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                <div className="flex items-center">
                  <div className="w-18 h-18 bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Kantooruren</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Maandag - Vrijdag: 9:00 - 18:00</p>
                      <p>Weekend: Op afspraak</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-3xl p-8 border border-blue-300/30 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-cyan-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-8 h-8 text-blue-500 mr-3 animate-spin-slow" />
                  <h3 className="text-2xl font-bold text-gray-900">Snelle Reactie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Gegarandeerd</span></h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse shadow-md"></div>
                    <span className="font-semibold">Reactie binnen 24 uur</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse shadow-md"></div>
                    <span className="font-semibold">Gratis adviesgesprek</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-3 animate-pulse shadow-md"></div>
                    <span className="font-semibold">Geen verplichtingen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;