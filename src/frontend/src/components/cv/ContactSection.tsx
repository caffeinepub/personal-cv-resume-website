import { Mail, Phone, Linkedin, Globe, HardDrive } from 'lucide-react';
import { SiX } from 'react-icons/si';
import { Section } from './Section';
import type { ContactData } from '../../data/cv';

interface ContactSectionProps {
  data: ContactData;
}

export function ContactSection({ data }: ContactSectionProps) {
  const contactItems = [
    { icon: Mail, label: 'Email', value: data.email, href: data.email ? `mailto:${data.email}` : undefined },
    { icon: Phone, label: 'Phone', value: data.phone, href: data.phone ? `tel:${data.phone}` : undefined },
    { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: data.linkedin },
    { icon: HardDrive, label: 'Google Drive (Projects)', value: 'Google Drive (Projects)', href: data.googleDrive },
    { icon: Globe, label: 'Website', value: 'Personal Website', href: data.website },
    { icon: SiX, label: 'Twitter', value: 'Twitter Profile', href: data.twitter }
  ].filter(item => item.href);

  return (
    <Section id="contact" title="Get in Touch" className="bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-lg text-muted-foreground mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-all border border-border hover:border-primary/50 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={20} />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-foreground truncate">{item.value}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
