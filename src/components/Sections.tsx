import { motion } from 'motion/react';
import { PROGRAMS, MEMBERSHIPS, TRAINERS, TRANSFORMATIONS, TESTIMONIALS, GYM_INFO } from '../constants';
import { Check, Star, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, ChevronRight, ArrowRight } from 'lucide-react';

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-16 px-4 border-l-4 border-brand-red">
          <div>
            <h2 className="text-4xl md:text-6xl font-display">PREMIUM <span className="text-brand-red">PROGRAMS</span></h2>
            <p className="text-white/40 text-xs uppercase tracking-[0.2em] mt-2 font-bold">Engineered for elite performance</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 hover:bg-brand-red/5 transition-all cursor-pointer group border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 -skew-x-12 translate-x-12 -translate-y-12 transition-transform group-hover:translate-x-8" />
              <div className="text-brand-red mb-6 font-display text-4xl opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
              <h3 className="text-2xl font-display mb-4 group-hover:text-brand-red transition-colors">{program.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-8">{program.description}</p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-red">
                Join Program <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Membership() {
  return (
    <section id="membership" className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-8xl font-display leading-[0.85] mb-4">CHOOSE <span className="text-brand-red">RANK.</span></h2>
          <div className="w-24 h-1 bg-brand-red mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-1">
          {MEMBERSHIPS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-10 flex flex-col h-full glass backdrop-blur-none border-white/5 ${
                plan.isPopular ? 'bg-brand-red/5 border-brand-red/30' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-brand-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  Best Value
                </div>
              )}
              <div className="mb-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{plan.name}</span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-display text-white">{plan.price}</span>
                  <span className="text-white/40 text-[10px] font-bold">/ {plan.period.toUpperCase()}</span>
                </div>
              </div>
              <ul className="flex-1 space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[11px] text-gray-300 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-red mt-1 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-white text-black font-display text-lg tracking-wider hover:bg-brand-red hover:text-white transition-all">
                SECURE MEMBERSHIP
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">THE <span className="text-brand-red">ARCHITECTS</span></h2>
          <p className="text-white/40 max-w-xl">World-class trainers with international certifications ready to craft your dream physique.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden"
            >
              <img src={trainer.image} alt={trainer.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-brand-red font-black text-xs uppercase tracking-widest mb-1">{trainer.specialization}</div>
                <h3 className="text-2xl font-black text-white mb-2">{trainer.name}</h3>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {trainer.socials.instagram && <Instagram className="w-5 h-5 text-white/60 hover:text-brand-red cursor-pointer" />}
                  {trainer.socials.twitter && <Twitter className="w-5 h-5 text-white/60 hover:text-brand-red cursor-pointer" />}
                  {trainer.socials.linkedin && <Linkedin className="w-5 h-5 text-white/60 hover:text-brand-red cursor-pointer" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">GET IN <span className="text-brand-red">TOUCH</span></h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 shrink-0">
                  <MapPin className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Our Location</h4>
                  <p className="text-white/80 leading-relaxed">{GYM_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 shrink-0">
                  <Phone className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Phone Number</h4>
                  <p className="text-white/80">{GYM_INFO.phone}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 shrink-0">
                  <Mail className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Email Address</h4>
                  <p className="text-white/80">{GYM_INFO.email}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <button className="bg-white/5 p-4 rounded-2xl hover:bg-brand-red transition-colors group">
                <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button className="bg-white/5 p-4 rounded-2xl hover:bg-brand-red transition-colors group">
                <Twitter className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button className="bg-white/5 p-4 rounded-2xl hover:bg-brand-red transition-colors group">
                <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="glass p-8 md:p-12 rounded-[40px] border border-white/10">
            <h3 className="text-2xl font-black mb-8">BOOK FREE <span className="text-brand-red">TRIAL</span></h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-red transition-colors" />
                <input type="tel" placeholder="Phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-red transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-red transition-colors" />
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-red transition-colors appearance-none">
                <option value="">Select Priority Program</option>
                {PROGRAMS.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
              </select>
              <textarea placeholder="Tell us your goals..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-red transition-colors" />
              <button className="btn-primary w-full py-4 text-sm tracking-[0.2em]">SEND REQUEST</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
