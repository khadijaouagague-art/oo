import { Building2, Menu, X, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  language: 'en' | 'fr';
  setLanguage: (lang: 'en' | 'fr') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function Navbar({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  language,
  setLanguage,
  theme,
  setTheme,
}: NavbarProps) {
  const navigate = useNavigate();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? (theme === 'dark' ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-lg') : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Building2 className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`} />
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? (theme === 'dark' ? 'text-white' : 'text-gray-900') : 'text-white'
            }`}>
              OGS
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Services', href: '#services' },
              { name: 'Benefits', href: '#benefits' },
              { name: 'Process', href: '#process' },
              { name: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative transition-colors duration-300 hover:text-blue-600 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled
                    ? theme === 'dark'
                      ? 'text-gray-200'
                      : 'text-gray-700'
                    : 'text-white after:bg-white hover:after:bg-blue-600'
                }`}
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className={`px-3 py-1 rounded-full transition-all duration-300 ${
                isScrolled
                  ? theme === 'dark'
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-200 text-gray-900'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>

            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? theme === 'dark'
                    ? 'bg-gray-700 text-yellow-400'
                    : 'bg-gray-200 text-gray-900'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <a
              href="/apply"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
            >
              {language === 'en' ? 'Get Started' : 'Commencer'}
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="text-sm font-semibold"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-t animate-slide-down`}>
          <div className="px-4 py-4 space-y-4">
            {[
              { name: 'Services', href: '#services' },
              { name: 'Benefits', href: '#benefits' },
              { name: 'Process', href: '#process' },
              { name: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block transition-colors ${theme === 'dark' ? 'text-gray-200 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/apply"
              className="block w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all text-center"
            >
              {language === 'en' ? 'Get Started' : 'Commencer'}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
