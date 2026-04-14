import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold tracking-tight">Recordsolutions</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Professional data management and secure record keeping solutions for modern enterprises. Transforming physical archives into digital assets.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></Link>
              <Link to="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link to="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/services" className="hover:text-accent transition-colors">Document Digitization</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Records Management</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Secure Storage</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Compliance Solutions</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Process Optimization</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-accent transition-colors">Industries</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>123 Enterprise Way, Suite 500<br />Business District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>info@recordsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Recordsolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
