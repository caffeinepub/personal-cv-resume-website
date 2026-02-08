import { ExternalLink, Github } from 'lucide-react';
import { Section } from './Section';
import type { ProjectEntry } from '../../data/cv';

interface ProjectsSectionProps {
  data: ProjectEntry[];
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-border hover:border-primary/50 flex flex-col"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 flex-grow">
              {project.description}
            </p>
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
            <div className="flex gap-3 pt-3 border-t border-border">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
