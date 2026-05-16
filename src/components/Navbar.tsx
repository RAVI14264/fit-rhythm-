import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Dumbbell, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t('home'), href: '#' },
    { name: t('about'), href: '#about' },
    { name: t('programs'), href: '#programs' },
    { name: t('trainers'), href: '#trainers' },
    { name: t('membership'), href: '#membership' },
    { name: t('bmi'), href: '#bmi' },
    { name: t('contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'gu', name: 'ગુજરાતી' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-brand-red px-2 py-1 skew-x-12 group-hover:skew-x-0 transition-transform">
            <Dumbbell className="text-white w-6 h-6 -skew-x-12 group-hover:skew-x-0 transition-transform" />
          </div>
          <span className="text-2xl font-display tracking-tighter text-white">
            FIT <span className="text-brand-red">RHYTHM</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-brand-red transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest glass px-3 py-1.5 hover:bg-white/10 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              {i18n.language.toUpperCase()}
            </button>
            
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 glass py-2 overflow-hidden border-t-2 border-brand-red"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-bold uppercase hover:bg-brand-red hover:text-white transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="px-5 py-2 border border-brand-red text-brand-red text-[10px] font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all duration-300">
            {t('join_now')}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-brand-red"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      i18n.language === lang.code ? 'bg-brand-red text-white' : 'bg-white/10 text-white/70'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              <button className="btn-primary w-full mt-4">
                {t('join_now')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
