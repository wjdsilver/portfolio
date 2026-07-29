export const profile = [
  "Jungeun Kim",
  "M.S. Student",
  "Computer Software Engineering"
];

export const researchInterests = [
  "AI Security",
  "Graph Machine Learning",
  "Phishing Detection"
];


export const skills = [
  "Python",
  "PyTorch",
  "NetworkX",
  "Next.js"
];


export const techStack = [
  {
    category: "AI / ML",
    skills: [
      "Python",
      "PyTorch",
      "Scikit-learn",
      "NetworkX"
    ]
  },

  {
    category: "Web",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ]
  },

  {
    category: "Tools",
    skills: [
      "Git",
      "Docker",
      "VS Code"
    ]
  }
];


export const projects = [
  {
    title: "Graph-based DOM Analysis for Phishing Detection",
    description:
      "A graph-based phishing detection method using DOM structure and Weisfeiler-Lehman subtree features.",
    tech: [
      "Python",
      "NetworkX",
      "Scikit-learn"
    ],
    link: "https://github.com/"
  },


  {
    title: "LLM-generated Phishing Dataset Analysis",
    description:
      "Analyzing structural characteristics of LLM-generated phishing webpages.",
    tech: [
      "LLM",
      "HTML",
      "Graph Machine Learning"
    ],
    link: "https://github.com/"
  },


  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and React.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS"
    ],
    link: "https://github.com/"
  }

];


export const publications = [
  {
    title:
      "Phishing Webpage Detection using DOM Graph-based Features",
    
    authors: [
        {
            name: "Jungeun Kim",
            highlight: true
        },
        {
            name: "Heejin Park",
            highlight: false
        }
    ],

    venue:
      "KCC 2026",

    year:
      "2026",

    description:
      "A phishing detection method using DOM graph representation and Weisfeiler-Lehman subtree features.",

    paper:
      "#",

    code:
      "https://github.com/"
  },


  {
    title:
      "Structural Analysis of LLM-generated Phishing Pages",

    authors: [
        {
            name: "Jungeun Kim",
            highlight: true
        },
        {
            name: "Heejin Park",
            highlight: false
        }
    ],

    venue:
      "ICONIP 2026",

    year:
      "2026",

    description:
      "An analysis of structural differences between human-crafted and LLM-generated phishing webpages.",

    paper:
      "#",

    code:
      "https://github.com/"
  }

];