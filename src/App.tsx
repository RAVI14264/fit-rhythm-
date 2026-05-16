import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import './lib/i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BMICalculator from './components/BMICalculator';
import Chatbot from './components/Chatbot';
import { Programs, Membership, Trainers, Contact } from './components/Sections';
import Transformations from './components/Transformations';
import Footer from './components/Footer';
import { Dumbbell, Shield, Zap, Target, Heart, Award } from 'lucide-react';

function About() {
  const reasons = [
    { title: "Certified Trainers", icon: Award, desc: "Expert guidance from internationally certified professionals." },
    { title: "Premium Equipment", icon: Dumbbell, desc: "State-of-the-art machines from world-leading brands." },
    { title: "Personal Coaching", icon: Target, desc: "Customized workout and nutrition plans tailored to you." },
    { title: "Safety First", icon: Shield, desc: "Highest hygiene standards and safe training environment." },
    { title: "High Energy", icon: Zap, desc: "Motivational atmosphere with premium audio and lighting." },
    { title: "Holistic Health", icon: Heart, desc: "Beyond lifting - mental and physical rejuvenation." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-1 gap-y-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:p-12"
          >
            <h2 className="text-6xl md:text-8xl font-display leading-[0.85] mb-8">
              WE ARE <span className="text-brand-red">FIT RHYTHM.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-brand-red pl-6">
              Located in the heart of Vadodara, Fit Rhythm Fitness Studio is a sanctuary for those who seek to push their boundaries and redefine their potential through luxury grit.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6">
                <h4 className="text-brand-red font-display text-2xl mb-2">VISION</h4>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Inspire a healthier society through elite fitness education.</p>
              </div>
              <div className="glass p-6">
                <h4 className="text-brand-red font-display text-2xl mb-2">MISSION</h4>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Helping every member find their peak rhythmic performance.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1"
          >
            <div className="aspect-square glass p-2">
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-red p-8 flex flex-col shadow-[10px_10px_0_rgba(255,255,255,0.1)]">
              <div className="text-white text-5xl font-display leading-none">12+</div>
              <div className="text-white/70 font-bold text-[9px] uppercase tracking-[0.2em] mt-2">Years of Elite Practice</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 group hover:bg-white/5 transition-colors border-white/5"
            >
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center mb-6 skew-x-12 group-hover:skew-x-0 transition-transform">
                <reason.icon className="text-white w-5 h-5 -skew-x-12 group-hover:skew-x-0 transition-transform" />
              </div>
              <h3 className="text-lg font-display mb-3 tracking-widest group-hover:text-brand-red transition-colors">{reason.title}</h3>
              <p className="text-white/40 text-[11px] leading-relaxed font-medium uppercase tracking-tight">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-brand-black selection:bg-brand-red selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Membership />
        <Transformations />
        <BMICalculator />
        <Contact />
      </main>
      
      <Footer />
      <Chatbot />

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-6 z-50 md:hidden">
        <button className="btn-primary shadow-2xl">
          JOIN NOW
        </button>
      </div>

      <div className="fixed top-1/2 right-6 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-8">
        {['#', '#about', '#programs', '#trainers', '#membership', '#bmi', '#contact'].map((href, i) => (
          <a key={href} href={href} className="w-1 h-1 rounded-full bg-white/20 hover:bg-brand-red hover:scale-[3] transition-all" />
        ))}
      </div>
    </div>
  );
}
