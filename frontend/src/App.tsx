import { HeroSection } from './components/cv/HeroSection';
import { ExperienceSection } from './components/cv/ExperienceSection';
import { EducationSection } from './components/cv/EducationSection';
import { SkillsSection } from './components/cv/SkillsSection';
import { ProjectsSection } from './components/cv/ProjectsSection';
import { ContactSection } from './components/cv/ContactSection';
import { TopNav } from './components/cv/TopNav';
import { cvData } from './data/cv';
import { useSeoFromCvData } from './hooks/useSeoFromCvData';

function App() {
  useSeoFromCvData(cvData);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroSection data={cvData.hero} />
        <ExperienceSection data={cvData.experience} />
        <EducationSection data={cvData.education} />
        <SkillsSection data={cvData.skills} />
        <ProjectsSection data={cvData.projects} />
        <ContactSection data={cvData.contact} />
      </main>
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            Would love to connect and share my ideas and Vision about the data related work.
            <br />
            Regards Vibhanshu
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
