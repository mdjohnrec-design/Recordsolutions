import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-accent rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Secure Your Business Records?</h2>
            <p className="text-xl text-white/90 mb-10">
              Join hundreds of organizations that have optimized their record management with Recordsolutions. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-semibold" render={<Link to="/contact" />}>
                Get a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold border-white text-white hover:bg-white hover:text-accent" render={<Link to="/services" />}>
                View All Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
