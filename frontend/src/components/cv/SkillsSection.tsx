import { Section } from './Section';
import type { SkillCategory } from '../../data/cv';

interface SkillsSectionProps {
  data: SkillCategory[];
}

export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <Section id="skills" title="Skills" className="bg-muted/30">
      <div className="grid gap-8 md:grid-cols-2">
        {data.map((category, index) => (
          <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
