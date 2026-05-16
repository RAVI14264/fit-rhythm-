import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Info } from 'lucide-react';

export default function BMICalculator() {
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const result = Number((weight / (heightInMeters * heightInMeters)).toFixed(1));
      setBmi(result);
    }
  };

  const getStatus = (bmiValue: number) => {
    if (bmiValue < 18.5) return { label: 'Underweight', color: 'text-blue-400' };
    if (bmiValue < 25) return { label: 'Healthy', color: 'text-green-400' };
    if (bmiValue < 30) return { label: 'Overweight', color: 'text-yellow-400' };
    return { label: 'Obese', color: 'text-brand-red' };
  };

  return (
    <section id="bmi" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              TRACK YOUR <span className="text-brand-red">PROGRESS</span>
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Body Mass Index (BMI) is a simple measurement that uses your height and weight to work out if your weight is healthy. Knowing your BMI is the first step towards your fitness transformation.
            </p>
            
            <div className="glass p-8 rounded-3xl relative">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-white"
                    placeholder="70"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Height (cm)</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : '')}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-white"
                    placeholder="175"
                  />
                </div>
              </div>

              <button 
                onClick={calculateBMI}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Calculate BMI
              </button>

              {bmi && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 pt-8 border-t border-white/10 text-center"
                >
                  <div className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Your BMI Result</div>
                  <div className="text-6xl font-black text-brand-red mb-2">{bmi}</div>
                  <div className={`text-xl font-bold ${getStatus(bmi).color}`}>
                    {getStatus(bmi).label}
                  </div>
                  
                  {/* Progress Meter */}
                  <div className="mt-8 relative h-4 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(Math.max((bmi / 40) * 100, 5), 100)}%` }}
                      className={`h-full bg-gradient-to-r from-blue-400 via-green-400 to-brand-red`}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] font-bold text-white/20 uppercase tracking-tighter">
                    <span>Under</span>
                    <span>Healthy</span>
                    <span>Over</span>
                    <span>Obese</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-brand-red/20 blur-[100px] -z-10" />
            <table className="w-full text-left border-collapse glass rounded-3xl overflow-hidden">
              <thead>
                <tr className="border-bottom border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-xs uppercase tracking-widest font-black">BMI Range</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-widest font-black">Weight Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { range: 'Below 18.5', status: 'Underweight' },
                  { range: '18.5 – 24.9', status: 'Healthy Weight' },
                  { range: '25.0 – 29.9', status: 'Overweight' },
                  { range: '30.0 and Above', status: 'Obese' },
                ].map((row) => (
                  <tr key={row.range} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-sm">{row.range}</td>
                    <td className="px-6 py-4 font-semibold text-white/60">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
              <Info className="text-brand-red w-5 h-5 shrink-0" />
              <p className="text-xs text-white/40 italic leading-relaxed">
                *BMI is a useful screening tool but does not directly measure body fat. Professional consultation is recommended for personalized health assessment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
