import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Sparkles, ArrowRight, Clock, Phone, Mail, Calendar, Star, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9]">
      <Helmet>
        <title>Bedankt! - WebDesk AI | uw bericht is ontvangen</title>
        <meta name="description" content="Bedankt voor uw bericht! We hebben uw contactaanvraag ontvangen en nemen binnen 24 uur contact met u op voor een gratis adviesgesprek." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://webdeskai.com/thankyou" />
        
        <meta property="og:title" content="Bedankt! - WebDesk AI" />
        <meta property="og:description" content="Uw bericht is succesvol ontvangen. We nemen binnen 24 uur contact met u op!" />
        <meta property="og:url" content="https://webdeskai.com/thankyou" />
      </Helmet>
      <Header />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F4C430] via-orange-400 to-red-400 rounded-full blur-3xl animate-float-gentle"></div>
          <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-drift-left"></div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F4C430 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#F4C430] rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-16 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Success Icon */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce-in relative overflow-hidden">
              <CheckCircle className="w-16 h-16 text-white animate-scale-in" />
              
              {/* Floating sparkles around success icon */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-[#F4C430] rounded-full animate-ping opacity-60"></div>
              <div className="absolute -top-2 -right-6 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-5 h-5 bg-pink-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -left-6 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Bedankt</span> voor je bericht!
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Heart className="w-8 h-8 text-red-500 animate-pulse" />
              <p className="text-xl text-gray-600 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                We hebben je contactaanvraag ontvangen en zijn al aan de slag!
              </p>
              <Heart className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
          </div>

          {/* What happens next */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 mb-12 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-[#F4C430] animate-spin-slow mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Wat gebeurt er nu?</h2>
              <Sparkles className="w-8 h-8 text-[#F4C430] animate-spin-slow ml-3" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Binnen 24 uur</h3>
                <p className="text-gray-600">We nemen persoonlijk contact met je op voor een gratis adviesgesprek</p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Planning maken</h3>
                <p className="text-gray-600">We plannen een uitgebreid gesprek om je wensen en doelen te bespreken</p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F4C430] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">In 1 week live</h3>
                <p className="text-gray-600">Je nieuwe AI-gedreven website is klaar en online binnen een week</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Phone Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Spoed? Bel direct!</h3>
              <p className="text-gray-600 mb-4">Heb je haast of vragen? Bel ons direct voor snelle hulp</p>
              <a 
                href="tel:+31645830810" 
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                +31 6 45830810
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 animate-slide-in-right" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail ons</h3>
              <p className="text-gray-600 mb-4">Stuur aanvullende informatie of documenten</p>
              <a 
                href="mailto:hallo@webdeskai.com" 
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                hallo@webdeskai.com
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#F4C430]/10 to-orange-500/10 rounded-3xl p-8 border border-[#F4C430]/20 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ontdek meer over onze AI-gedreven aanpak</h3>
            <p className="text-gray-600 mb-6">Bekijk onze diensten en eerdere projecten terwijl je wacht</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/"
                className="group bg-transparent border-2 border-[#F4C430] text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-[#F4C430] hover:text-black transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-2 flex items-center"
              >
                Terug naar homepage
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Thank you message */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <p className="text-lg text-gray-600">
              <strong>Nogmaals bedankt voor je vertrouwen in WebDesk AI!</strong><br />
              We kijken ernaar uit om samen jouw digitale transformatie te realiseren.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYouPage;