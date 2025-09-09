import React from 'react';
import { ExternalLink, ArrowRight, Sparkles, TrendingUp, Target } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "BDO Accountants",
      description: "Moderne website voor een van Nederland's grootste accountantskantoren",
      image: "/BDO.PNG",
      category: "Corporate Website",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Independer",
      description: "Vergelijkingsplatform voor verzekeringen en financiële producten",
      image: "/Banner Independer.png",
      category: "Platform",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Bouwgarant",
      description: "Professionele website voor bouwgarantie services",
      image: "/Bouwgarant.PNG",
      category: "Service Website",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Juridisch Loket",
      description: "Toegankelijke website voor juridische dienstverlening",
      image: "/Juridisch Loket.PNG",
      category: "Legal Services",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden">
      {/* Unique wave transition from Process */}
      <div className="absolute top-0 left-0 right-0 -mt-1 z-10">
        <svg className="w-full h-32 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="#F7F3E9"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111.27,200.58,91.58,234.93,72.05,268.63,49.6,319.69,49.6,374.94,49.6,422.17,91.58,468.33,91.58,514.48,91.58,561.71,49.6,616.96,49.6,672.21,49.6,719.44,91.58,765.6,91.58,811.75,91.58,859,49.6,914.25,49.6,969.5,49.6,1016.73,91.58,1062.89,91.58,1109,91.58,1156.27,49.6,1200,49.6V0Z" fill="#F7F3E9" opacity=".8"></path>
        </svg>
      </div>

      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-drift-left"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F4C430 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              ONS WERK
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#F4C430] animate-pulse"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500 animate-pulse">Bekende</span> merken vertrouwen ons
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Van startups tot Fortune 500 bedrijven - onze AI-gedreven aanpak levert resultaten 
            die traditionele bureaus niet kunnen evenaren.
          </p>
          
          {/* Portfolio stats */}
          <div className="flex items-center justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4C430] animate-pulse">50+</div>
              <div className="text-sm text-gray-600">Projecten</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-[#F4C430] to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4C430] animate-pulse">100%</div>
              <div className="text-sm text-gray-600">Tevreden</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-[#F4C430] to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4C430] animate-pulse">4.9</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-white/20"
            >
              {/* Enhanced gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} group-hover:h-2 transition-all duration-300`}></div>
              
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-white transition-colors duration-300 shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                    <span>Bekijk Project</span>
                  </button>
                </div>
              </div>

              {/* Project info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#F4C430] group-hover:translate-x-2 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F4C430] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${project.color} rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#F4C430] rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 right-8 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/30 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-3xl transform rotate-1"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 left-4 w-8 h-8 bg-[#F4C430]/20 rounded-full animate-float-gentle"></div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-orange-400/20 rounded-full animate-float-gentle-delayed"></div>
              <div className="absolute bottom-4 left-8 w-4 h-4 bg-purple-400/20 rounded-full animate-drift-left"></div>
              <div className="absolute bottom-8 right-4 w-10 h-10 bg-pink-400/20 rounded-full animate-drift-right"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#F4C430] animate-spin-slow mr-3" />
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Klaar om je <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">volgende project</span> te starten?
                </h3>
                <TrendingUp className="w-8 h-8 text-[#F4C430] animate-bounce-slow ml-3" />
              </div>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Sluit je aan bij bekende merken die al profiteren van onze AI-gedreven aanpak.
                Van concept tot live website in slechts 1 week.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="https://wa.me/31612345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-transparent border-2 border-[#F4C430] text-gray-800 px-10 py-5 rounded-full font-medium hover:bg-[#F4C430] hover:text-black transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-center">
                    BEKIJK ONS PORTFOLIO
                  </div>
                </a>

                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Sparkles className="w-5 h-5 text-[#F4C430] mr-2" />
                    <span className="font-semibold">50+ Projecten</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="flex items-center">
                    <span className="font-semibold text-[#F4C430]">100% Tevreden</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unique curved transition to Testimonials */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-28 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="#F7F3E9"></path>
          <path d="M1200,120H0V49.6c43.27,0,90.5,41.98,136.66,41.98s93.19-41.98,148.44-41.98,101.22,41.98,147.38,41.98,93.19-41.98,148.44-41.98,101.22,41.98,147.38,41.98,93.19-41.98,148.44-41.98,101.22,41.98,147.38,41.98,93.19-41.98,148.44-41.98,101.22,41.98,147.38,41.98V120Z" fill="#F7F3E9" opacity=".5"></path>
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;