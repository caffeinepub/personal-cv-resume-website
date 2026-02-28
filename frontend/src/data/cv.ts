export interface HeroData {
  name: string;
  title: string;
  summary: string;
  location?: string;
  profilePhoto?: string;
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
    title: "IIoT Engineering Student · Python Developer · Embedded Systems Enthusiast",
    summary:
      "3rd-year B.Tech student specialising in Industrial Internet of Things at St. Vincent Pallotti College of Engineering, Nagpur. Fast learner with an adaptive mindset and a personal approach to problem-solving. Passionate about sensor fusion, real-time data processing, and building intelligent decision-making systems from raw sensor inputs.",
    location: "Nagpur, Maharashtra, India",
    profilePhoto: "/assets/generated/profile-photo.png",
  },
  experience: [
    {
      role: "IIoT Project Developer",
      company: "Academic & Self-Initiated Projects",
      location: "Nagpur, India",
      startDate: "Jan 2024",
      endDate: "Present",
      description: [
        "Designed and built end-to-end sensor processing pipelines with intelligent, rule-based decision-making capabilities.",
        "Implemented multi-sensor fusion algorithms to improve measurement accuracy and reduce noise in industrial environments.",
        "Developed a weight distribution analysis system using an array of pressure sensors with real-time load-balancing logic.",
        "Prototyped solutions rapidly in Python and optimised performance-critical modules in C/C++ for embedded targets.",
        "Documented system architectures and shared project artefacts via Google Drive for collaborative review.",
      ],
    },
    {
      role: "Student Researcher — Embedded Systems",
      company: "St. Vincent Pallotti College of Engineering",
      location: "Nagpur, India",
      startDate: "Aug 2023",
      endDate: "Dec 2023",
      description: [
        "Explored IoT communication protocols (MQTT, Modbus, OPC-UA) and their applicability in industrial settings.",
        "Conducted lab experiments on microcontroller interfacing (Arduino, ESP32) with various sensor modules.",
        "Collaborated with peers on a group project integrating temperature, humidity, and proximity sensors into a unified dashboard.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology — Industrial Internet of Things (IIoT)",
      institution: "St. Vincent Pallotti College of Engineering & Technology",
      location: "Nagpur, Maharashtra, India",
      startDate: "2023",
      endDate: "2027 (Expected)",
      details: [
        "Specialisation: Industrial Internet of Things (IIoT)",
        "Core subjects: Sensor Networks, Embedded Systems, Data Processing, Industrial Automation, Signal Processing",
        "Hands-on lab work with microcontrollers, sensor modules, and real-time operating systems",
        "Active participant in technical workshops and inter-college hackathons",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science (PCM)",
      institution: "Maharashtra State Board",
      location: "Nagpur, Maharashtra, India",
      startDate: "2021",
      endDate: "2023",
      details: [
        "Subjects: Physics, Chemistry, Mathematics",
        "Developed strong analytical and quantitative foundations that underpin current engineering studies",
      ],
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: ["Python", "C", "C++"],
    },
    {
      category: "IIoT & Embedded Systems",
      skills: [
        "Sensor Fusion",
        "Sensor Data Processing",
        "Embedded C",
        "Arduino",
        "ESP32",
        "MQTT",
        "Modbus",
        "OPC-UA",
        "Real-time Systems",
        "IoT Protocols",
      ],
    },
    {
      category: "Data & Analytics",
      skills: [
        "Data Analysis",
        "Signal Processing",
        "Algorithm Design",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Real-time Decision Logic",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Arduino IDE",
        "PlatformIO",
        "Google Colab",
        "Linux (Ubuntu)",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Fast Learner",
        "Adaptive Mindset",
        "Analytical Thinking",
        "Self-Motivated",
        "Team Collaboration",
        "Technical Documentation",
      ],
    },
  ],
  projects: [
    {
      title: "Multi-Sensor Fusion System",
      description:
        "Designed and implemented a sensor fusion system that combines readings from multiple heterogeneous sensors (accelerometer, gyroscope, pressure) to produce a single, high-confidence output. Applied complementary and Kalman filter techniques to reduce noise and drift, enabling more precise measurements for industrial monitoring applications.",
      technologies: ["Python", "C++", "Kalman Filter", "NumPy", "Sensor Integration"],
    },
    {
      title: "Weight Distribution Analysis System",
      description:
        "Built an intelligent load-monitoring system using an array of pressure sensors to analyse weight distribution patterns in real time. The system processes sensor data, detects imbalance conditions, and triggers automated alerts — useful for load balancing, structural safety monitoring, and logistics applications.",
      technologies: ["Python", "C", "Pressure Sensors", "Real-time Processing", "Decision Logic", "Matplotlib"],
    },
    {
      title: "End-to-End IIoT Data Pipeline",
      description:
        "Created a complete data pipeline that acquires raw sensor data, applies multi-stage filtering and feature extraction, and outputs actionable decisions via a lightweight dashboard. The pipeline demonstrates full-stack IIoT capabilities from hardware interfacing to data visualisation.",
      technologies: ["Python", "C/C++", "MQTT", "ESP32", "Pandas", "Matplotlib", "Decision Systems"],
    },
    {
      title: "Smart Environment Monitor",
      description:
        "Developed a low-cost environment monitoring node using ESP32 with DHT22 (temperature/humidity) and MQ-135 (air quality) sensors. Data is published over MQTT to a local broker and visualised on a real-time web dashboard, demonstrating end-to-end IoT connectivity.",
      technologies: ["ESP32", "Arduino IDE", "MQTT", "DHT22", "MQ-135", "JavaScript", "Node-RED"],
    },
  ],
  contact: {
    email: "vibhanshuinfo@gmail.com",
    linkedin: "https://www.linkedin.com/in/vibhanshumeshram2004",
    googleDrive:
      "https://drive.google.com/drive/folders/14-wxvAyq3ePvAnOJRftMr1endpOhBBTL?usp=drive_link",
  },
};
