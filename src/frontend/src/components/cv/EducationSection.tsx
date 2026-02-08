import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Section } from './Section';
import type { EducationEntry } from '../../data/cv';

interface EducationSectionProps {
  data: EducationEntry[];
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {data.map((entry, index) => (
          <div 
            key={index} 
            className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {entry.degree}
                </h3>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <GraduationCap size={16} />
                  <span>{entry.institution}</span>
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
            
            {entry.details && entry.details.length > 0 && (
              <ul className="space-y-1.5 mt-4">
                {entry.details.map((detail, i) => (
                  <li key={i} className="text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
