import { motion } from 'motion/react';
import { Shield, Target, Eye, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">About Recordsolutions</h1>
          <p className="text-xl text-muted-foreground">
            We are dedicated to helping organizations navigate the complexities of data management in the digital age.
          </p>
        </div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-10 rounded-3xl">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To provide secure, efficient, and innovative record management solutions that empower businesses to protect their history and optimize their future.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl">
            <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-6">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be the global leader in digital transformation, setting the standard for security and efficiency in records lifecycle management.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We uphold the highest ethical standards in everything we do.' },
              { title: 'Security', desc: 'Protecting your data is our absolute top priority.' },
              { title: 'Innovation', desc: 'We constantly evolve our technology to better serve you.' },
              { title: 'Excellence', desc: 'We strive for perfection in every record we manage.' },
            ].map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Stand Out */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Why Recordsolutions Stands Out</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">
                Unlike traditional storage companies, we take a holistic approach to records management. We don't just provide space; we provide intelligence.
              </p>
              <ul className="space-y-3">
                {[
                  'Proprietary high-speed scanning technology',
                  'Custom-built compliance tracking software',
                  '24/7 climate-controlled secure facilities',
                  'Dedicated account managers for every client',
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/seed/team/800/600" 
              alt="Our Team" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
