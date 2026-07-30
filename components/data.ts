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




export const publications = [
  {
    title:
      "Structural Phishing Detection Using Weisfeiler-Lehman Subtree Features on DOM Graphs",

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
  },

    {
    title:
      "DOM 구조 기반 Graph Feature를 이용한 Phishing 웹페이지 탐지",
    
    authors: [
        {
            name: "김정은",
            highlight: true
        },
        {
            name: "박희진",
            highlight: false
        }
    ],

    venue:
      "KCC 2026",

    year:
      "2026",

    description:
      "최근 phishing 웹페이지는 정상 웹페이지와 매우 유사하게 제작되어 기존의 URL 및 콘텐츠 기반 탐지 방법에는 한계가 존재한다. 본 연구에서는 웹페이지 DOM 구조를 그래프로 표현하고, Weisfeiler-Lehman(WL) subtree feature를 활용하여 구조 기반으로 phishing 웹페이지를 탐지한다. 실험 결과, 제안 방법은 기존 DOM 통계 특징 대비 높은 recall을 보였으며, 웹페이지 구조가 phishing 탐지에 유의미한 정보를 제공함을 확인하였다. 또한 tag 기반 방법과의 비교를 통해, WL 기반 구조 feature가 기존 방법이 놓친 phishing 샘플을 보완적으로 탐지할 수 있음을 확인하였다.",

    paper:
      "https://github.com/user-attachments/files/29327766/KCC2026_15_505_DOM.Graph.Feature.Phishing.pdf",

    code:
      "https://github.com/wjdsilver/phishing-dom-wl-kcc2026"
  },


  {
    title:
      "AI 기술을 이용한 스마트 전동 킥보드 안전 시스템",

    authors: [
        {
            name: "김정은",
            highlight: true
        },
        {
            name: "김현진",
            highlight: false
        },
        {
            name: "박효영",
            highlight: false
        },
        {
            name: "이민영",
            highlight: false
        },
        {
            name: "이주영",
            highlight: false
        }
    ],

    venue:
      "ACK 2024 (31권 2호)",

    year:
      "2024",

    description:
      "교통사고분석 시스템(TAAS, 도로교통공단) 통계에 따르면 PM(Personal Mobility) 관련 교통사고는 2023년 2389건으로, 2019년 447건 대비 5배 이상 증가하였다. 증가하는 교통사고를 예방하기 위해 본 논문에서는 AI 기술을 이용한 스마트 전동 킥보드 안전 시스템을 제시한다. AI 딥러닝 기반 모델을 적용해 무면허, 헬멧 미착용, 2인 이상 탑승, 횡단보도 주행, 교통안전에 위배되는 무단 주차를 제한한다. 본 시스템을 통해 전동 킥보드 이용자들의 도로 교통법 준수와 공공의 안전 강화를 기대한다.",

    paper:
      "https://www.manuscriptlink.com/society/kips/conference/ack2024/file/downloadSoConfManuscript/abs/KIPS_C2024B0165",

    code:
      "https://github.com/safeT-CE"
  },

  

];