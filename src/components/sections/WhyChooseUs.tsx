import { CheckCircle2, Shield, Zap, Users } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    title: 'Unmatched Security',
    description: 'Military-grade encryption and highly secure physical facilities protect your most sensitive data.',
    icon: Shield,
  },
  {
    title: 'Efficiency First',
    description: 'Our automated systems reduce document retrieval time from hours to seconds.',
    icon: Zap,
  },
  {
    title: 'Expert Team',
    description: 'Over 20 years of experience in records management and digital transformation.',
    icon: Users,
  },
  {
    title: 'Full Compliance',
    description: 'We ensure your records meet all industry-specific regulatory standards (HIPAA, GDPR, etc.).',
    icon: CheckCircle2,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Modern Businesses Trust Recordsolutions</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              In an era where data is the most valuable asset, how you manage it determines your success. We don't just store records; we empower your business with organized, accessible, and secure information.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-primary-foreground/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/records/800/600" 
                alt="Secure Data Center" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </motion.div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-accent p-8 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">99.9%</div>
              <div className="text-sm font-medium uppercase tracking-wider">Security Accuracy</div>
            </div>
            <div className="absolute -top-8 -right-8 bg-white text-primary p-8 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">10M+</div>
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Records Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
