import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  Tag, 
  Smartphone, 
  Laptop, 
  Gamepad2, 
  ChevronDown, 
  CheckCircle2, 
  X,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-brand-600 text-white p-1.5 rounded-lg">
                <Laptop size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">
                Rollo<span className="text-brand-600">Tech</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-brand-600 transition-colors">Services</a>
              <a href="#why-us" className="hover:text-brand-600 transition-colors">Why Us</a>
              <a href="#faq" className="hover:text-brand-600 transition-colors">FAQ</a>
            </div>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            >
              Get Instant Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-white to-white -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 font-medium text-sm mb-6"
            >
              <CheckCircle2 size={16} />
              <span>Fix it once. Fix it right.</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Get Your Device <br className="hidden sm:block" />
              <span className="text-brand-600">Back to Life Today.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl"
            >
              Premium repairs for smartphones, laptops, and consoles. Backed by our signature 1-hour average turnaround and lowest-price guarantee.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group"
              >
                Get a Free Instant Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
                <ShieldCheck size={18} className="text-emerald-500" />
                No Fix, No Fee Guarantee
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Banner */}
      <section className="bg-slate-900 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {[
              { icon: Clock, title: "1-Hour Turnaround", desc: "For most smartphone & tablet repairs." },
              { icon: ShieldCheck, title: "90-Day Warranty", desc: "Parts and labor fully covered." },
              { icon: Tag, title: "Price Match Guarantee", desc: "We beat local competitors by $5." },
            ].map((feature, idx) => (
              <div key={idx} className={`flex items-center gap-4 ${idx !== 0 ? 'md:pl-8 pt-6 md:pt-0' : ''}`}>
                <div className="bg-brand-500/20 p-3 rounded-xl text-brand-400">
                  <feature.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialized Repair Services</h2>
            <p className="text-slate-600">We don't just figure it out as we go. Our technicians are specialized across three core disciplines to ensure safe, reliable repairs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-brand-50 w-14 h-14 rounded-xl flex items-center justify-center text-brand-600 mb-6">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">iPhone & Samsung</h3>
              <p className="text-brand-600 font-semibold text-sm mb-4 bg-brand-50 inline-block px-3 py-1 rounded-full">Focus: Maximum Speed</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We know you can't be disconnected. Most screen, battery, and charging port replacements are completed in under an hour with strict diagnostic testing before and after.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> OEM-Spec OLED/LCD replacements</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> Battery health restoration</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center text-slate-700 mb-6">
                <Laptop size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">MacBook & PC</h3>
              <p className="text-slate-700 font-semibold text-sm mb-4 bg-slate-100 inline-block px-3 py-1 rounded-full">Focus: Data Security</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                From logic board component-level repairs to screen replacements. Your local files, photos, and crucial work data are strictly secured and never compromised.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> Liquid damage recovery</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> Keyboard & trackpad repair</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-purple-50 w-14 h-14 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Gamepad2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gaming Consoles</h3>
              <p className="text-purple-700 font-semibold text-sm mb-4 bg-purple-50 inline-block px-3 py-1 rounded-full">Focus: Hardware Expertise</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                PS5, Xbox Series X, and Nintendo Switch. We handle microsoldering for broken HDMI ports, resolve overheating issues, and replace failing hard drives.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> HDMI port microsoldering</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> Thermal paste & fan service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loss Aversion / Why Choose Us */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 rounded-3xl p-8 md:p-12 border border-red-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-red-600 font-bold tracking-wide uppercase text-sm mb-4">
                <AlertTriangle size={18} />
                The true cost of waiting
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Don't gamble with your digital life.</h2>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  A simple cracked screen isn't just cosmetic—it breaks the device's moisture seal. One drop of rain or sweat can short-circuit the motherboard, turning a simple $100 fix into a $1,000 complete device replacement (and total data loss).
                </p>
                <p>
                  <strong className="text-slate-900">Considering a DIY kit?</strong> Cheap replacement parts often have dead zones, void your manufacturer warranty immediately, and risk permanent damage to the logic board if a tiny ribbon cable tears.
                </p>
                <p className="font-semibold text-slate-900">
                  Trust the professionals. We do it right the first time, safely, so you don't pay double later.
                </p>
              </div>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="mt-8 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Secure Your Repair Today
              </button>
            </div>
            <div className="flex-1 w-full bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-6">The RolloTech Difference</h3>
              <div className="space-y-4">
                {[
                  { title: "Zero Data Risk", desc: "We never wipe your phone unless explicitly required & approved." },
                  { title: "Premium Parts Only", desc: "No cheap knockoffs. Your screen will look exactly like it did on day one." },
                  { title: "Trained Specialists", desc: "Micro-soldering certified technicians, not amateurs watching YouTube." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50">
                    <CheckCircle2 className="text-brand-600 shrink-0 mt-0.5" size={20} />
                    <div>
                      <span className="block font-semibold text-slate-900 text-sm mb-1">{item.title}</span>
                      <span className="text-sm text-slate-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-600">We believe in transparent pricing and clear expectations.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Do I lose my data during the repair?",
                a: "Normally, no. We prioritize data preservation. Unlike Apple or carrier stores, we don't wipe your device as a 'standard policy'. Your files, photos, and apps remain perfectly safe during screen, battery, and component repairs."
              },
              {
                q: "Are your replacement parts original?",
                a: "We use strictly OEM-spec components. For Apple devices, we source Premium Aftermarket OLEDs or Genuine refurbished screens that exactly match the original color accuracy, touch sensitivity, and refresh rate."
              },
              {
                q: "How long does a typical repair take?",
                a: "Over 80% of our smartphone repairs (screens, batteries, ports) are completed within 45 to 60 minutes. iPads and computer diagnostic repairs generally take 24-48 hours depending on parts availability."
              },
              {
                q: "What does the 90-day warranty cover?",
                a: "Our warranty covers the parts we installed and the labor we provided. If your new screen decides to stop responding or your new battery drains too fast, we replace it for free. (Note: Accidental damage like dropping it again is not covered)."
              },
              {
                q: "Do I need an appointment?",
                a: "Walk-ins are always welcome! However, booking a free estimate online allows us to reserve the exact part for your specific model, guaranteeing the fastest possible turnaround when you arrive."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-slate-900 select-none">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown size={20} className="text-slate-400" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm border-t border-slate-50 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA & Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 text-white p-1.5 rounded-lg">
              <Laptop size={20} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Rollo<span className="text-brand-500">Tech</span>
            </span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Rollo Tech Repair. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <QuoteModal onClose={() => setIsQuoteModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function QuoteModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<'form' | 'submitting' | 'success'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('submitting');
    // Simulate network request
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto"
        >
          {step === 'form' && (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Get Your Estimate</h2>
                <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <p className="text-slate-600 text-sm mb-6">Tell us about your device. We usually respond within 15 minutes during business hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="device" className="text-sm font-medium text-slate-700">Device Type</label>
                  <select id="device" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all">
                    <option value="">Select your device...</option>
                    <option value="iphone">Apple iPhone</option>
                    <option value="samsung">Samsung Galaxy</option>
                    <option value="ipad">iPad / Tablet</option>
                    <option value="macbook">MacBook</option>
                    <option value="pc">Windows Laptop / PC</option>
                    <option value="console">Gaming Console</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="issue" className="text-sm font-medium text-slate-700">What's wrong with it?</label>
                  <input id="issue" type="text" required placeholder="e.g., Cracked screen, won't charge" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400" />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                  <input id="email" type="email" required placeholder="name@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400" />
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1"><ShieldCheck size={12}/> We'll never spam you or sell your data.</p>
                </div>

                <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-4 font-bold text-lg mt-4 transition-all hover:shadow-lg active:scale-[0.98]">
                  Get Instant Estimate
                </button>
              </form>
            </div>
          )}

          {step === 'submitting' && (
            <div className="p-16 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 border-4 border-slate-100 border-t-brand-600 rounded-full animate-spin mb-6" />
              <h2 className="text-xl font-bold text-slate-900">Calculating estimate...</h2>
              <p className="text-slate-500 mt-2 text-sm">Checking exact part availability.</p>
            </div>
          )}

          {step === 'success' && (
            <div className="p-12 flex flex-col items-center justify-center text-center bg-emerald-50">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-2">Request Received!</h2>
              <p className="text-emerald-700 mb-8">We're reviewing the exact parts needed. Check your email shortly for a price and timeframe.</p>
              <button 
                onClick={onClose}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Close and Return to Site
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}

