import { motion } from 'motion/react';
import { Building2, Stethoscope, Gavel, Landmark, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const industries = [
  {
    title: 'Healthcare',
    description: 'HIPAA-compliant digitization of patient records, ensuring secure access for providers while protecting patient privacy.',
    icon: Stethoscope,
    color: 'bg-blue-500',
  },
  {
    title: 'Legal',
    description: 'Secure management of case files, discovery documents, and sensitive contracts with full audit trails and chain of custody.',
    icon: Gavel,
    color: 'bg-slate-700',
  },
  {
    title: 'Finance',
    description: 'Regulatory-compliant storage and management of financial records, loan documents, and sensitive client information.',
    icon: Landmark,
    color: 'bg-emerald-600',
  },
  {
    title: 'Government',
    description: 'Efficient digitization and archiving of public records, ensuring transparency and long-term preservation of historical data.',
    icon: Building2,
    color: 'bg-red-700',
  },
  {
    title: 'Corporate',
    description: 'Streamlining HR records, accounts payable, and general business documentation for improved operational efficiency.',
    icon: Briefcase,
    color: 'bg-primary',
  },
  {
    title: 'Education',
    description: 'Secure management of student records, transcripts, and administrative documentation for schools and universities.',
    icon: GraduationCap,
    color: 'bg-amber-600',
  },
];

export default function Industries() {
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
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">Industries We Serve</h1>
          <p className="text-xl text-muted-foreground">
            We provide specialized solutions tailored to the unique regulatory and operational needs of various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-none shadow-lg overflow-hidden group">
                <div className={`h-2 w-full ${industry.color}`}></div>
                <CardHeader>
                  <div className={`h-12 w-12 rounded-xl ${industry.color} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Don't See Your Industry?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Our flexible record management framework can be adapted to any business environment. Contact us to discuss a custom solution.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-10 rounded-full transition-colors">
            Contact Our Specialists
          </button>
        </div>
      </div>
    </motion.div>
  );
}
