import { motion } from 'motion/react';
import { FileText, Database, Lock, Shield, BarChart, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'digitization',
    title: 'Document Digitization',
    description: 'Convert your physical archives into high-resolution, searchable digital formats. Our process includes prep, scanning, indexing, and quality control.',
    icon: FileText,
    benefits: ['Reduce physical storage costs', 'Instant document retrieval', 'Enhanced data security', 'Disaster recovery readiness'],
    useCases: ['Medical records', 'Legal case files', 'Financial archives', 'Historical documents'],
  },
  {
    id: 'management',
    title: 'Records Management',
    description: 'A comprehensive system to track, manage, and maintain your records throughout their entire lifecycle, from creation to final disposition.',
    icon: Database,
    benefits: ['Centralized record tracking', 'Automated retention scheduling', 'Easy audit trails', 'Reduced administrative burden'],
    useCases: ['Corporate governance', 'HR records', 'Project documentation', 'Asset management'],
  },
  {
    id: 'storage',
    title: 'Secure Storage',
    description: 'Highly secure, climate-controlled facilities for your physical records and encrypted, redundant cloud storage for your digital assets.',
    icon: Lock,
    benefits: ['24/7 biometric security', 'Fire and flood protection', 'End-to-end encryption', 'Scalable storage options'],
    useCases: ['Sensitive client data', 'Backup media', 'Confidential contracts', 'Intellectual property'],
  },
  {
    id: 'compliance',
    title: 'Compliance Solutions',
    description: 'Ensure your organization meets all regulatory requirements with our automated compliance monitoring and reporting tools.',
    icon: Shield,
    benefits: ['HIPAA & GDPR compliance', 'Automated audit reports', 'Risk mitigation', 'Legal defensibility'],
    useCases: ['Healthcare providers', 'Financial institutions', 'Government agencies', 'Publicly traded companies'],
  },
  {
    id: 'optimization',
    title: 'Process Optimization',
    description: 'We analyze your document workflows and implement automated solutions to eliminate bottlenecks and improve operational efficiency.',
    icon: BarChart,
    benefits: ['Faster turnaround times', 'Reduced manual errors', 'Improved collaboration', 'Cost savings'],
    useCases: ['Accounts payable', 'Onboarding processes', 'Claims processing', 'Contract management'],
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Tailored solutions designed to solve your most complex record management challenges.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col lg:items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="flex-1">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-primary">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 p-6 rounded-xl mb-8">
                  <h4 className="font-bold text-primary mb-3 uppercase text-xs tracking-widest">Common Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase) => (
                      <span key={useCase} className="bg-white px-3 py-1 rounded-full text-sm border border-slate-200 text-muted-foreground">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild size="lg">
                  <Link to="/contact">Request Information</Link>
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
