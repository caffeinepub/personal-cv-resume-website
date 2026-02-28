import { useState } from 'react';
import { MapPin } from 'lucide-react';
import type { HeroData } from '../../data/cv';

interface HeroSectionProps {
  data: HeroData;
}

const FALLBACK_PHOTO = '/assets/generated/profile-photo.dim_400x400.png';

export function HeroSection({ data }: HeroSectionProps) {
  const [imgSrc, setImgSrc] = useState<string>(
    data.profilePhoto || FALLBACK_PHOTO
  );

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
            src={imgSrc}
            alt="Vibhanshu Meshram" 
            className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-primary shadow-lg object-cover object-top"
            onError={() => setImgSrc(FALLBACK_PHOTO)}
            referrerPolicy="no-referrer"
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
