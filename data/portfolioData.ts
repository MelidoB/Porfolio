import { Project, Experience, Skill, Education, Certification } from '../types';

export const personalInfo = {
  name: "Melido Bello",
  brand: "Software Engineer building AI-powered & data-driven applications.",
  titles: [
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Data Analyst",
    "Problem Solver"
  ],
  about: "New graduate specializing in machine learning and neuroscience applications. Currently researching brain-computer interfaces @ ThinkNeuro while developing data solutions through CodePath and COOP programs. Passionate about creating impactful digital experiences by combining creativity with functionality.",
  bio: "I'm a software engineer passionate about the full product lifecycle, from ideation and architecture to deployment and user feedback. My background in neuroscience drives my interest in building intelligent systems that can learn and adapt, while my software engineering skills allow me to bring these complex ideas to life in the form of robust, scalable applications. I thrive in collaborative environments where I can tackle challenging problems and contribute to creating technology that makes a meaningful impact.",
  headshotUrl: "https://i.ibb.co/6r0B0Bv/Custom-Design-0-1.jpg",
  contact: {
    email: "melido.bello.dev@gmail.com",
    github: "https://github.com/melidobello",
    linkedin: "https://www.linkedin.com/in/melidobello/"
  },
  resume: "https://github.com/melidobello/Resume/raw/main/Melido_Bello_Resume.pdf"
};

export const projects: Project[] = [
  {
    title: "Sole Sphere",
    description: "An AI-powered e-commerce platform for sneaker enthusiasts with personalized recommendations.",
    link: "https://github.com/MarkusCDev/CSC473-GroupProject",
    imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Node.js", "AI/ML", "E-commerce", "Firebase"],
    liveDemoUrl: "#",
    categories: ['Software Engineering', 'AI / Machine Learning'],
    caseStudy: {
      problem: "Sneaker buyers often struggle to find products that match their unique style. Generic e-commerce platforms lack the personalization needed to create a compelling and efficient shopping experience, leading to user frustration and abandoned carts.",
      solution: [
        "Architected and developed a recommendation engine using collaborative filtering to provide users with highly personalized sneaker suggestions based on their browsing history and preferences.",
        "Integrated an AI-powered chatbot for real-time customer support, style advice, and product inquiries, improving user engagement.",
        "Designed and implemented a scalable microservices architecture using Firebase functions to independently manage inventory, user data, and order processing.",
        "Built a responsive and intuitive user interface with React, ensuring a seamless and enjoyable shopping experience across all devices."
      ],
      learnings: "This project underscored the importance of data-driven personalization in modern e-commerce. Engineering a full-stack microservices-based system provided invaluable experience in building scalable, maintainable, and resilient applications from the ground up."
    }
  },
  {
    title: "SlitherAssist",
    description: "An AI vision model that enhances gameplay in Slither.io by predicting and assisting snake movements.",
    link: "https://github.com/MelidoB/SlitherAssist",
    imageUrl: "https://images.unsplash.com/photo-1554474052-51d2f21f3a05?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "AI", "Game Development", "Computer Vision"],
    liveDemoUrl: "#",
    categories: ['AI / Machine Learning'],
     caseStudy: {
      problem: "In fast-paced games like Slither.io, reaction time is critical. Human players face limitations in processing visual information and executing optimal movements quickly and consistently, creating a high skill ceiling.",
      solution: [
        "Developed a computer vision pipeline using OpenCV to capture and process real-time gameplay footage, identifying the player's snake, opponents, and food pellets.",
        "Trained a convolutional neural network (CNN) to analyze the game state and predict the optimal direction of movement to maximize growth and survival.",
        "Engineered a control system that translates the AI's decisions into automated mouse movements, providing real-time assistance to the player.",
        "Implemented performance optimizations to ensure the AI runs with minimal latency, making it effective in a real-time gaming environment."
      ],
      learnings: "This project was a deep dive into the practical application of computer vision and machine learning for real-time decision-making. I learned how to build and optimize a complete AI pipeline, from data capture and processing to model inference and hardware control."
    }
  },
  {
    title: "E-commerce DevOps",
    description: "A CI/CD pipeline for a microservices-based e-commerce app using Docker and Kubernetes.",
    link: "https://github.com/MelidoB/DevOps-Project",
    imageUrl: "https://images.unsplash.com/photo-1632571401024-3ea333a411b0?q=80&w=1200&auto=format&fit=crop",
    tags: ["Docker", "Kubernetes", "DevOps", "CI/CD", "Microservices"],
    liveDemoUrl: "#",
    categories: ['Software Engineering', 'Data Analytics'],
    caseStudy: {
      problem: "Deploying and managing a complex, multi-service e-commerce application manually is error-prone, time-consuming, and difficult to scale. Updates require significant downtime and coordinating changes across services is a major challenge.",
      solution: [
        "Containerized each microservice (e.g., product catalog, user cart, order processing) using Docker to create consistent, isolated, and portable environments.",
        "Orchestrated the containerized services using Kubernetes for automated deployment, scaling, and management, ensuring high availability and resilience.",
        "Built a complete CI/CD pipeline using GitHub Actions to automate the build, testing, and deployment process, enabling rapid and reliable updates.",
        "Implemented monitoring and logging solutions with Prometheus and Grafana to track application performance and analyze system health, enabling data-driven operational decisions."
      ],
      learnings: "This project provided hands-on experience in modern DevOps practices. I learned how to build a robust, automated infrastructure for a microservices application, significantly improving development velocity, deployment reliability, and system scalability."
    }
  },
];

export const experiences: Experience[] = [
  {
    role: "AI R&D Co-Associate & Research Intern",
    company: "ThinkNeuro, LLC",
    period: "May 2025 - Present",
    location: "New York, NY (Remote)",
    type: "Internship",
    description: [
      "Co-leading the development of a GPT-powered assistant to support students learning R programming.",
      "Structuring prompts, testing AI responses, and proposing UI/platform integration strategies.",
      "Exploring Cognitive & Computational Neuroscience, Neuroimaging, and enhancing skills in R, computational modeling, and scientific writing."
    ],
    skills: ["R Programming", "GPT Prompt Engineering", "AI", "Computational Neuroscience"]
  },
  {
    role: "Tech Fellow",
    company: "CodePath",
    period: "May 2025 - Present",
    type: "Apprenticeship",
    location: "New York, NY (Remote)",
    description: [
        "Engaging in a 10-week Technical Interview Prep Pathway focusing on advanced algorithms, data structures, and technical communication.",
        "Sharpening problem-solving skills through AI-supported coding challenges and mock interviews with mentorship from senior engineers."
    ],
    skills: ["Algorithms", "Data Structures", "Python", "Problem Solving"]
  },
  {
      role: "Data Analytics Fellow",
      company: "COOP Careers Fellowship",
      period: "May 2025 - Present",
      type: "Internship",
      location: "New York, NY (On-site)",
      description: [
          "Specializing in Data Analytics, enhancing skills in data visualization, SQL, and collaborative projects.",
          "Building professional networks in NYC through monthly onsite sessions."
      ],
      skills: ["Data Analytics", "SQL", "Data Visualization", "Tableau"]
  }
];

export const skills: Skill[] = [
    { name: "Python", category: "Language" },
    { name: "JavaScript / TypeScript", category: "Language" },
    { name: "SQL", category: "Language" },
    { name: "R", category: "Language" },
    { name: "PyTorch", category: "AI & Data Science" },
    { name: "LangChain", category: "AI & Data Science" },
    { name: "Tableau", category: "AI & Data Science" },
    { name: "Pandas", category: "AI & Data Science" },
    { name: "FastAPI", category: "Backend & Frontend" },
    { name: "React", category: "Backend & Frontend" },
    { name: "Node.js", category: "Backend & Frontend" },
    { name: "HTML/CSS", category: "Backend & Frontend" },
    { name: "Docker", category: "Cloud/DevOps" },
    { name: "Git / GitHub", category: "Cloud/DevOps" },
    { name: "CI/CD", category: "Cloud/DevOps" },
    { name: "AWS", category: "Cloud/DevOps" },
    { name: "Firebase", category: "Cloud/DevOps" },
    { name: "VS Code", category: "Tool" },
    { name: "Kubernetes", category: "Cloud/DevOps" },
];

export const education: Education[] = [
    {
        institution: "The City College of New York (CUNY)",
        degree: "Bachelor of Science in Computer Science",
        period: "Aug 2019 - Jan 2025",
        details: "Relevant Coursework: Software Engineering, Algorithms, Data Structures, Computer Organization, Python Programming."
    }
];

export const certifications: Certification[] = [
    {
        name: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
        link: "https://github.com/MelidoB/Oracle-Cloud-Infrastructure-Foundations?tab=readme-ov-file",
        imageUrl: "https://picsum.photos/seed/oraclecert/200/200"
    }
];