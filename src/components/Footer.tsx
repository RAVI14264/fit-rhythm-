import { Dumbbell, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { GYM_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-red p-2 rounded-lg">
                <Dumbbell className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black italic tracking-tighter text-white">
                FIT <span className="text-brand-red">RHYTHM</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed pr-8">
              Vadodara's most premium fitness destination. We believe in high-energy training and luxury recovery. Join our community today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-brand-red transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/40 hover:text-brand-red transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-white/40 hover:text-brand-red transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Training Programs', 'Membership Plans', 'BMI Calculator', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="h-[1px] w-0 bg-brand-red group-hover:w-4 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Gym Location</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/40 text-sm italic">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                {GYM_INFO.address}
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm italic">
                <Phone className="w-5 h-5 text-brand-red" />
                {GYM_INFO.phone}
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm italic">
                <Mail className="w-5 h-5 text-brand-red" />
                {GYM_INFO.email}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6 italic">Subscribe for fitness tips and exclusive membership deals.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-red text-white p-2 rounded-full hover:scale-110 transition-transform">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-medium tracking-widest">
            © 2026 FIT RHYTHM FITNESS STUDIO. ALL RIGHTS RESERVED.
          </p>
          <p className="text-white/20 text-xs italic">
            "The only bad workout is the one that didn't happen."
          </p>
        </div>
      </div>
    </footer>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
  );
}
