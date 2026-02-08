import { MapPin } from 'lucide-react';
import type { HeroData } from '../../data/cv';

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/generated/cv-hero-bg.dim_2400x1200.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      
      <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center pt-16">
        <div className="mb-6 flex justify-center">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQHqceyOzMUFgw/profile-displayphoto-scale_200_200/B4DZw8ags0JEAY-/0/1770540112025?e=1772064000&v=beta&t=4iOYe_UUUeQiMMLmufHpz2BQDP7PqV_rgafiasTwEnY" 
            alt="Vibhanshu Meshram" 
            className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-primary shadow-lg object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
          {data.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          {data.title}
        </p>
        
        {data.location && (
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin size={18} />
            <span>{data.location}</span>
          </div>
        )}
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {data.summary}
        </p>
        
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md"
          >
            Get in Touch
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
