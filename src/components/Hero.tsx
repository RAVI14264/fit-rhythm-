import { motion } from 'motion/react';
import { Play, TrendingUp, Users, Award, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    { label: 'Total Members', value: '5K+', icon: Users },
    { label: 'Expert Trainers', value: '25+', icon: Award },
    { label: 'Years Experience', value: '12+', icon: Clock },
    { label: 'Transformations', value: '1K+', icon: TrendingUp },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
        >
          {/* Fallback to high quality image if video not provided */}
          <source src="" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-brand-red text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              VADODARA'S LUXURY STUDIO
            </div>
            
            <h1 className="text-7xl md:text-9xl font-display leading-[0.85] mb-8 select-none">
              TRANSFORM YOUR <span className="text-brand-red">BODY.</span><br />
              ELEVATE YOUR <span className="red-text-glow">LIFE.</span>
            </h1>

            <p className="text-gray-400 text-base mb-10 max-w-lg leading-relaxed border-l-2 border-brand-red pl-6">
              Premier personal training and high-energy group classes at Vadodara's most exclusive fitness destination. Experience elite rhythm.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary red-glow">
                {t('join_now')}
              </button>
              <button className="btn-outline">
                EXPLORE PLANS
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-12"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="group">
                <div className="flex flex-col">
                  <span className="text-brand-red font-display text-4xl leading-none">{stat.value}</span>
                  <span className="text-[9px] uppercase tracking-widest opacity-50 mt-2 font-bold">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-[-10%] top-[20%] w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute left-[20%] bottom-0 w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
}
