import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We assess your current record-keeping state and identify areas for optimization and digitization.',
  },
  {
    number: '02',
    title: 'Secure Transfer',
    description: 'Your physical documents are securely transported to our facilities using tracked, climate-controlled vehicles.',
  },
  {
    number: '03',
    title: 'Digitization',
    description: 'Documents are scanned, indexed, and converted into searchable digital formats with high precision.',
  },
  {
    number: '04',
    title: 'Integration',
    description: 'Digital records are integrated into your systems, while physical copies are stored or securely destroyed.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Simple 4-Step Process</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We make the transition from physical to digital seamless and stress-free for your entire organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="mb-6">
                <span className="text-6xl font-black text-primary/5 group-hover:text-primary/10 transition-colors duration-300">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-px bg-primary/20"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
