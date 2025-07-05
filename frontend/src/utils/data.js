import Resume1 from "../assets/Resume1.png"
import Resume2 from "../assets/Resume2.png"
import Resume3 from "../assets/Resume3.png"

export const resumeTemplates = [
    {
        id: "01",
        thumbnailImg: Resume1,
        colorPaletteCode: "themeOne"
    },
    {
        id: "02",
        thumbnailImg: Resume2,
        colorPaletteCode: "themeTwo"
    },
    {
        id: "03",
        thumbnailImg: Resume3,
        colorPaletteCode: "themeThree"
    },
]

export const DUMMY_RESUME_DATA = {
    profileInfo: {
        previewUrl: "",
        fullName: "Nakul Yadav",
        designation: "Software Engineer",
        summary: "Full-stack developer with  years of experience building scalable web applications using modern JavaScript frameworks. Specialized in React, Node.js, and cloud technologies with a strong focus on clean code architecture and performance optimization. Passionate about mentoring junior developers and implementing agile best practices.",
    },
    contactInfo: {
        email: "work.nakul.08@gmail.com",
        phone: "98*******",
        location: "New Delhi",
        linkedin: "https://www.linkedin.com/in/nakul-yadav-02a73527b",
        github: "https://github.com/NAKUL-XD/",
        website: "https://example.com",
    },
    education: [
        {
            institution: "Maharaja Surajmal Institute of Technology",
            degree: "BTECH",
            major: "Computer Science",
            minors: "Data Science",
            location: "delhi",
            graduationYear: "2028"
        },
        {
            institution: "GGSIPU",
            degree: "BTECH",
            major: "Software Engineering",
            minors: "example",
            location: "location",
            graduationYear: "20--"
        }
    ],
    workExperience: [
        {
            role: "Senior Software Engineer",
            company: "xyz",
            location: "xyz",
            startDate: "date",
            endDate: "date",
            description: "Led a team of 5 developers in building a SaaS platform serving 50,000+ users.\nArchitected microservices using Node.js and React that improved system performance by 40%.\nImplemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes.\nMentored junior developers through code reviews and pair programming sessions."
        },
        {
            role: "Software Developer",
            company: "xyz",
            location: "location",
            startDate: "date",
            endDate: "end",
            description: "Developed RESTful APIs handling 10,000+ requests per minute with 99.9% uptime.\nRedesigned legacy frontend using React, improving page load speed by 60%.\nCollaborated with UX team to implement responsive designs for mobile users.\nAutomated testing processes increasing test coverage from 65% to 95%."
        }
    ],
    projects: [
        {
            title: "dice-game",
            startDate: "2024-11-01",
            endDate: "2025-01-01",
            description: "fun web-based game where you can roll dice, compete with your friends",
            technologies: ["React", "js", "css", "MongoDB"],
            github: "https://github.com/NAKUL-XD/dice-game",
            liveDemo: ""
        },
        {
            title: "FOOD delivery app",
            startDate: "2025-05-22",
            endDate: "2025-07-15",
            description: "our all-in-one food delivery app connects users with diverse restaurants, offering seamless ordering, real-time tracking, and secure payments for ultimate convenience.",
           echnologies: ["React.js", "CSS", "Axios", "Node.js", "Express.js", "Python", "TensorFlow", "Socket.io", "MongoDB", "GitHub API", "AI"],
            github: "https://github.com/NAKUL-XD/food-delivery-v2",
            liveDemo: "https://finedine.netlify.app/"
        }
    ],
    skills: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Python" },
        { name: "AWS" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "GraphQL" },
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "Git" },
        { name: "Agile" },
        { name: "Scrum" },
        { name: "JIRA" }
    ],
    certifications: [
        {
            title: "AWS Certified Solutions Architect",
            year: "2025"
        },
        {
            title: "Google Professional Cloud Architect",
            year: "2024"
        },
        
    ],
    interests: [
        "Open Source Contributions",
        "Machine Learning",
        "Blockchain Technology",
        "AI",
        "Photography"
    ]
};