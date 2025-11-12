import { Building2, Globe, Shield, Zap, CheckCircle, ArrowRight, Menu, X, Moon, Sun, MessageCircle, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import TrustBadges from './components/TrustBadges';
import LLCForm from './components/LLCForm';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';

type Language = 'en' | 'fr';
type Theme = 'light' | 'dark';

const translations = {
  en: {
    services: 'Services',
    benefits: 'Benefits',
    process: 'Process',
    contact: 'Contact',
    getStarted: 'Get Started',
    startLLC: 'Start Your LLC',
    learnMore: 'Learn More',
  },
  fr: {
    services: 'Services',
    benefits: 'Avantages',
    process: 'Processus',
    contact: 'Contact',
    getStarted: 'Commencer',
    startLLC: 'Démarrer votre LLC',
    learnMore: 'En savoir plus',
  }
};

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language || 'en';
    const savedTheme = localStorage.getItem('theme') as Theme || 'light';
    setLanguage(savedLanguage);
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            {language === 'en' ? 'Launch Your US LLC' : 'Lancez votre LLC américaine'}
            <br />
            <span className="text-blue-200">{language === 'en' ? 'in 48 Hours' : 'en 48 heures'}</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            {language === 'en'
              ? 'Fast, reliable, and hassle-free LLC formation for entrepreneurs worldwide. Start your American business today.'
              : 'Formation de LLC rapide, fiable et sans tracas pour les entrepreneurs du monde entier. Commencez votre entreprise américaine aujourd\'hui.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <a
              href="/apply"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 group"
            >
              <span>{t.startLLC}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {t.learnMore}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-600">
            {[
              { number: '10K+', label: 'LLCs Formed' },
              { number: '150+', label: 'Countries' },
              { number: '48h', label: 'Average Time' },
              { number: '99%', label: 'Success Rate' }
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose OGS Solution?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We handle everything so you can focus on building your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12 text-blue-600" />,
                title: 'Lightning Fast',
                description: 'Complete LLC formation in just 48 hours with our streamlined process'
              },
              {
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                title: '100% Compliant',
                description: 'Full legal compliance with US regulations and state requirements'
              },
              {
                icon: <Globe className="h-12 w-12 text-blue-600" />,
                title: 'Global Access',
                description: 'Serve clients from anywhere in the world with no US presence needed'
              },
              {
                icon: <Building2 className="h-12 w-12 text-blue-600" />,
                title: 'Complete Package',
                description: 'EIN, bank account support, registered agent included'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group cursor-pointer border-2 border-transparent hover:border-blue-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our comprehensive LLC package includes all essential services to launch and maintain your US business.
              </p>

              <div className="space-y-4">
                {[
                  'Complete LLC registration and filing',
                  'Federal EIN (Tax ID) number',
                  'Registered agent service (1 year included)',
                  'Operating agreement template',
                  'US business address',
                  'Bank account setup assistance',
                  'Ongoing compliance support',
                  '24/7 customer support'
                ].map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start space-x-3 animate-fade-in-left"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">$499</div>
                  <div className="text-blue-200 mb-8">One-time fee</div>
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5" />
                      <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5" />
                      <span>Money-back guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5" />
                      <span>Free 1-year registered agent</span>
                    </div>
                  </div>
                  <a
                    href="/apply"
                    className="block w-full bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    {language === 'en' ? 'Get Started Now' : 'Commencer Maintenant'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From application to approval in just 48 hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Fill Application',
                description: 'Complete our simple online form with your business details in just 10 minutes'
              },
              {
                step: '02',
                title: 'We Process',
                description: 'Our experts handle all paperwork and filing with the state'
              },
              {
                step: '03',
                title: 'You Launch',
                description: 'Receive your LLC documents and start doing business in the US'
              }
            ].map((step, index) => (
              <div
                key={step.step}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-6xl font-bold text-blue-100 mb-4 group-hover:text-blue-200 transition-colors duration-300">{step.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      <Testimonials />

      <FAQ />

      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Start Your US Business?
            </h2>
            <p className="text-xl text-blue-100">
              Fill out the form below and our team will contact you within 24 hours
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-blue-500" />
                <span className="text-white font-bold text-lg">OGS Solution</span>
              </div>
              <p className="text-sm">{language === 'en' ? 'Your trusted partner for US LLC formation worldwide.' : 'Votre partenaire de confiance pour la formation de LLC américaine dans le monde.'}</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 OGS Solution. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</p>
          </div>
        </div>
      </footer>

      <ChatBot language={language} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<LLCForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
