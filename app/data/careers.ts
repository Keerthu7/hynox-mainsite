export interface Job {
  slug: string;
  title: string;
  description: string;
  requirements: string[];
  type: string;
  location: string;
  stipend: string;
  duration: string;
}

export const jobs: Job[] = [
  {
    slug: "graphic-design-video-editing-intern",
    title: "Graphic Design & Video Editing Intern",
    description: "Join our creative team to design stunning visual content, including posters, social media assets, and high-quality video edits. You'll help shape our brand's visual identity across all digital platforms.",
    requirements: [
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro) or similar tools",
      "Experience in graphic design with a strong portfolio of posters and digital assets",
      "Knowledge of video editing techniques and motion graphics (After Effects is a plus)",
      "Strong understanding of typography, color theory, and layout design",
      "Ability to translate complex ideas into engaging visual stories",
      "Attention to detail and ability to work within brand guidelines"
    ],
    type: "Internship",
    location: "Hybrid",
    stipend: "Performance-based",
    duration: "6 months"
  },
  {
    slug: "content-creation-intern",
    title: "Content Creation Intern",
    description: "Be part of our content strategy team and help create engaging content across multiple platforms. You'll learn content marketing, social media strategy, and brand storytelling.",
    requirements: [
      "Strong writing and communication skills",
      "Experience with social media platforms and content creation",
      "Basic knowledge of graphic design tools (Canva, Photoshop)",
      "Understanding of current digital trends and viral content",
      "Creative thinking and ideation skills",
      "Portfolio of content creation work or personal projects"
    ],
    type: "Internship",
    location: "Hybrid",
    stipend: "Performance-based",
    duration: "6 months"
  },
  {
    slug: "software-development-intern",
    title: "Software Development Intern",
    description: "Join our tech team and contribute to cutting-edge software solutions. You'll work on real-world projects involving AI/ML implementations, full-stack web applications, and innovative digital products using modern technologies.",
    requirements: [
      "Strong knowledge of MERN stack (MongoDB, Express.js, React, Node.js)",
      "Proficiency in JavaScript, TypeScript, and Python",
      "Understanding of AI/ML concepts and frameworks (TensorFlow, PyTorch)",
      "Experience with version control systems (Git/GitHub)",
      "Knowledge of database management and API development",
      "Portfolio of coding projects and GitHub repositories"
    ],
    type: "Internship",
    location: "Hybrid",
    stipend: "Performance-based",
    duration: "6 months"
  },
  {
    slug: "ui-ux-designer-intern",
    title: "UI/UX Designer Intern",
    description: "Join our design team and help create exceptional user experiences across digital platforms. You'll work on user interface design, user research, prototyping, and collaborate with developers to bring designs to life using modern design tools and methodologies.",
    requirements: [
      "Proficiency in design tools (Figma, Adobe XD, Sketch, or similar)",
      "Understanding of UI/UX design principles and user-centered design",
      "Knowledge of wireframing, prototyping, and user flow creation",
      "Basic understanding of HTML/CSS and responsive design principles",
      "Experience with design systems and component libraries",
      "Basic understanding of HTML/CSS and responsive design principles",
      "Portfolio showcasing UI/UX projects and design process"
    ],
    type: "Internship",
    location: "Hybrid",
    stipend: "Performance-based",
    duration: "6 months"
  },
  {
    slug: "flutter-app-development-intern",
    title: "Flutter App Development Intern",
    description: "Join our mobile development team and gain hands-on experience in building cross-platform applications using Flutter. You'll work on exciting projects, contribute to UI/UX implementation, and learn best practices in mobile app development.",
    requirements: [
      "Basic understanding of Flutter and Dart",
      "Familiarity with mobile UI/UX principles",
      "Knowledge of state management (e.g., Provider, Bloc)",
      "Experience with version control systems (Git/GitHub)",
      "Ability to write clean, maintainable code",
      "Portfolio of personal projects or academic work in Flutter"
    ],
    type: "Internship",
    location: "Hybrid",
    stipend: "Performance-based",
    duration: "6 months"
  },
  {
    slug: "ai-ml-engineer-developer-intern",
    title: "AI/ML Development Intern",
    description: "Contribute to innovative AI/ML projects, developing and implementing machine learning models and algorithms. You'll gain experience in data preprocessing, model training, and deployment.",
    requirements: [
      "Basic understanding of machine learning algorithms and concepts",
      "Proficiency in Python and relevant libraries (TensorFlow, PyTorch, scikit-learn)",
      "Familiarity with data manipulation and analysis (Pandas, NumPy)",
      "Knowledge of cloud platforms (AWS, Azure, GCP) is a plus",
      "Experience with version control systems (Git/GitHub)",
      "Academic projects or personal portfolio showcasing AI/ML work"
    ],
    type: "Internship",
    location: "Hybrid",
    stipend: "Performance-based",
    duration: "6 months"
  },
  {
    slug: "cloud-security-intern",
    title: "Cloud Security Intern",
    description: "Join our cybersecurity team to gain practical experience in cloud security. You'll assist in implementing security measures, conducting vulnerability assessments, and monitoring cloud environments.",
    requirements: [
      "Basic understanding of cloud computing concepts (AWS, Azure, GCP)",
      "Familiarity with cybersecurity principles and best practices",
      "Knowledge of network security and data protection",
      "Understanding of security tools and technologies",
      "Ability to analyze security logs and identify threats",
      "Academic background in Computer Science, Cybersecurity, or related field"
    ],
    type: "Internship",
    location: "Hybrid",
    stipend: "Performance-based",
    duration: "6 months"
  },
  {
    slug: "sales-executive",
    title: "Sales Executive",
    description: "Drive sales growth by identifying new business opportunities, building client relationships, and closing deals. You'll be responsible for the entire sales cycle from lead generation to post-sales support.",
    requirements: [
      "Proven experience in sales, preferably in a B2B environment",
      "Strong negotiation and communication skills",
      "Ability to build and maintain client relationships",
      "Goal-oriented with a proven track record of meeting sales targets",
      "Knowledge of CRM software (e.g., Salesforce)",
      "Bachelor's degree in Business, Marketing, or a related field"
    ],
    type: "Full-time",
    location: "Hybrid",
    stipend: "Performance-based",
    duration: "6 Months"
  }
];
