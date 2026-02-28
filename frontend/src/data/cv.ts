export interface HeroData {
  name: string;
  title: string;
  summary: string;
  location?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  github?: string;
}

export interface ContactData {
  email?: string;
  phone?: string;
  linkedin?: string;
  googleDrive?: string;
  website?: string;
  twitter?: string;
}

export interface CVData {
  hero: HeroData;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillCategory[];
  projects: ProjectEntry[];
  contact: ContactData;
}

export const cvData: CVData = {
  hero: {
    name: "Vibhanshu Meshram",
    title: "B.Tech 3rd Year • IIoT Engineering Student",
    summary: "Fast learner with an adaptive mindset and a personal approach to problem-solving. Specializing in Industrial Internet of Things (IIoT) with strong Python skills and experience in C/C++. Passionate about sensor fusion, data processing, and building intelligent decision-making systems from sensor inputs.",
    location: "Nagpur, India"
  },
  experience: [
    {
      role: "IIoT Project Developer",
      company: "Academic Projects",
      location: "Nagpur",
      startDate: "2024",
      endDate: "Present",
      description: [
        "Developed end-to-end sensor processing systems with intelligent decision-making capabilities",
        "Implemented sensor fusion algorithms for improved data accuracy and reliability",
        "Built weight distribution analysis systems using multiple pressure sensors",
        "Applied Python for rapid prototyping and C/C++ for performance-critical components"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Industrial Internet of Things (IIoT)",
      institution: "St. Vincent Pallotti College of Engineering",
      location: "Nagpur, India",
      startDate: "2023",
      endDate: "Present (3rd Year)",
      details: [
        "Specialization: Industrial Internet of Things (IIoT)",
        "Focus Areas: Sensor Networks, Data Processing, Embedded Systems",
        "Hands-on experience with sensor integration and real-time data analysis"
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: ["Python (Primary)", "C", "C++"]
    },
    {
      category: "IIoT & Sensors",
      skills: ["Sensor Fusion", "Sensor Data Processing", "Weight Distribution Analysis", "Real-time Decision Systems", "Embedded Systems", "IoT Protocols"]
    },
    {
      category: "Technical Skills",
      skills: ["Data Analysis", "Algorithm Design", "System Integration", "Signal Processing", "Problem Solving"]
    },
    {
      category: "Soft Skills",
      skills: ["Fast Learner", "Adaptive Mindset", "Personal Problem-Solving Approach", "Analytical Thinking", "Self-Motivated"]
    }
  ],
  projects: [
    {
      title: "Sensor Fusion System",
      description: "Developed a sensor fusion system that combines data from multiple sensors to improve accuracy and reliability. Implemented advanced algorithms to merge sensor readings and reduce noise, enabling more precise measurements for industrial applications.",
      technologies: ["Python", "C++", "Sensor Integration", "Data Fusion Algorithms"]
    },
    {
      title: "Weight Distribution Analysis System",
      description: "Built an intelligent system using multiple pressure sensors to analyze weight distribution patterns. The system processes sensor data in real-time and makes automated decisions based on distribution metrics, useful for load balancing and safety monitoring applications.",
      technologies: ["Python", "C", "Pressure Sensors", "Real-time Processing", "Decision Logic"]
    },
    {
      title: "End-to-End Sensor Processing Pipeline",
      description: "Created a complete system that takes raw input from sensors, processes the data through multiple stages, and outputs intelligent decisions. The pipeline includes data acquisition, filtering, analysis, and automated decision-making, demonstrating full-stack IIoT capabilities.",
      technologies: ["Python", "C/C++", "Sensor Networks", "Data Processing", "Decision Systems"]
    }
  ],
  contact: {
    email: "vibhanshuinfo@gmail.com",
    linkedin: "https://www.linkedin.com/in/vibhanshumeshram2004",
    googleDrive: "https://drive.google.com/drive/folders/14-wxvAyq3ePvAnOJRftMr1endpOhBBTL?usp=drive_link"
  }
};
