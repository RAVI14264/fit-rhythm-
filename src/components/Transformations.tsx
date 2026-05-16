import { motion } from 'motion/react';
import { TRANSFORMATIONS } from '../constants';

export default function Transformations() {
  return (
    <section className="py-24 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4">THE <span className="text-brand-red">EVOLUTION</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">Real people, real results. Witness the power of consistency and expert guidance.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {TRANSFORMATIONS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative glass rounded-[40px] overflow-hidden p-6"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-8">
                {/* Before Image */}
                <div className="absolute inset-0 z-0">
                  <img src={item.imageBefore} alt="Before" className="w-full h-full object-cover grayscale opacity-50" />
                </div>
                
                {/* After Image with Slider Effect */}
                <motion.div 
                  className="absolute inset-0 z-10 overflow-hidden border-r-2 border-brand-red shadow-[0_0_20px_rgba(255,0,0,0.5)]"
                  initial={{ width: "50%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <img src={item.imageAfter} alt="After" className="w-full h-full object-cover h-[100%]" style={{ width: '100%' }} />
                </motion.div>

                <div className="absolute top-4 left-4 z-20 glass px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">BEFORE</div>
                <div className="absolute top-4 right-4 z-20 bg-brand-red px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">AFTER</div>
              </div>

              <h3 className="text-2xl font-black mb-2 text-white">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
