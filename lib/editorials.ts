export interface Editorial {
  title: string
  organization: string
  role: string
  description: string
  link?: string
  year: string
  highlights: string[]
}

export const editorials: Editorial[] = [
  {
    title: "Research Assistant - Object Detection",
    organization: "University of Debrecen - Faculty of Informatics",
    role: "Research Assistant",
    description:
      "Created and validated a dataset of 5,000+ annotated satellite and microscopy images to support training of YOLO-based object detection models. Integrated curated datasets into automated detection pipelines for machine learning experiments.",
    year: "April 2025 - June 2025",
    highlights: [
      "Created and validated a dataset of 5,000+ annotated satellite and microscopy images",
      "Supported training of YOLO-based object detection models",
      "Integrated curated datasets into automated detection pipelines",
    ],
  },
  {
    title: "Hungarian Startup University Program",
    organization: "University of Debrecen",
    role: "Software Developer",
    description:
      "Developed a real-time chat application with a secure backend, implementing JWT-based authentication and OAuth for session management, and designing a scalable publish-subscribe architecture using WebSockets. Improved system performance and reliability by integrating Redis caching. Worked within an Agile/Scrum environment.",
    link: "https://github.com/PrakarshSrivastav/ChatApp-WebSocket",
    year: "Mar 2025 - Sep 2025",
    highlights: [
      "Developed a real-time chat application with a secure backend using JWT, OAuth, and WebSockets",
      "Improved system performance and reliability with Redis caching",
      "Contributed in an Agile/Scrum environment through sprint planning, code reviews, and iterative delivery",
    ],
  },
  {
    title: "Flying High Magazine",
    organization: "Indian Language School",
    role: "Developer & Editorial Team Member",
    description:
      "Recognized as part of the core development team that created the first-ever digital edition of the school magazine during the COVID-19 pandemic. Contributed to over 20,000 lines of code and 400+ man-hours of work.",
    link: "https://ils-magazine.github.io/Flying_High/HomePage/Editorial.html",
    year: "2020-2021",
    highlights: [
      "Part of the 5-member student development team",
      "Contributed to coding and proofreading",
      "Helped create the historical digital edition",
    ],
  },
  {
    title: "Aid Global Foundation",
    organization: "Aid Global NGO",
    role: "Backend Developer - Admin Dashboard",
    description:
      "Contributed to the development of the Aid Global Foundation website, focusing on backend development for the admin dashboard to help manage and streamline organizational operations.",
    link: "https://www.aidglobal.ngo/developers",
    year: "2025",
    highlights: ["Backend developer for admin dashboard", "Open source contribution", "NGO platform development"],
  },
]
