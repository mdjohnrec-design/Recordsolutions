import { Database, FileText, Lock, BarChart, Cloud, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Document Digitization',
    description: 'Transform physical archives into high-quality, searchable digital assets with our advanced scanning technology.',
    icon: FileText,
  },
  {
    title: 'Records Management',
    description: 'Comprehensive lifecycle management for your business records, ensuring easy access and proper retention.',
    icon: Database,
  },
  {
    title: 'Secure Storage',
    description: 'State-of-the-art physical and cloud storage solutions with multi-layer security and 24/7 monitoring.',
    icon: Lock,
  },
  {
    title: 'Compliance Solutions',
    description: 'Stay ahead of regulatory requirements with our automated compliance tracking and reporting tools.',
    icon: Shield,
  },
  {
    title: 'Process Optimization',
    description: 'Improve business efficiency by automating document-heavy workflows and reducing manual handling.',
    icon: BarChart,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamlessly sync your records with your existing cloud infrastructure for global accessibility.',
    icon: Cloud,
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Core Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide end-to-end solutions for all your record management needs, helping you transition to a more efficient digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
