import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Section } from './Section';
import type { ExperienceEntry } from '../../data/cv';

interface ExperienceSectionProps {
  data: ExperienceEntry[];
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <Section id="experience" title="Experience" className="bg-muted/30">
      <div className="space-y-8">
        {data.map((entry, index) => (
          <div 
            key={index} 
            className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            
            <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {entry.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Briefcase size={16} />
                    <span>{entry.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{entry.startDate} - {entry.endDate}</span>
                  </div>
                  {entry.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{entry.location}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {entry.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
