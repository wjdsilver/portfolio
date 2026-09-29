export const profile = [
  "Jungeun Kim",
  "M.S. Student",
  "Computer Software Engineering"
];

export const researchInterests = [
  "AI Security",
  "Graph Machine Learning",
  "Computer Vision",
  "Applied AI"
];

export const languagesAndCertifications = [
  "TOEIC 925",
  "OPIc IH",
];



export const publications = [
  {
    slug:"phishing",
    title:
      "Do Structural Phishing Patterns Generalize to LLM-Generated Webpages?",

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
      "International Conference on Neural Information Processing (ICONIP)",

      year: "2026",

      status: "초록 발표 채택 · 현장 포스터 발표 예정",
  
      description:
        "앞선 연구에서 학습한 DOM Graph의 구조적 특징이 LLM이 생성한 피싱 웹페이지에도 일반화될 수 있는지 연구했습니다. WL Subtree Feature를 활용해 실제 피싱 웹페이지로 모델을 학습하고 LLM 생성 피싱 웹페이지를 대상으로 평가했으며, 0.995의 phishing recall을 달성했습니다.",
  
      
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

    venue: "한국컴퓨터종합학술대회 (KCC)",
    year: "2026",

    status: "현장 포스터 발표",

    award: "우수발표논문상",

    description:
 "웹페이지의 HTML 구조를 DOM Graph로 표현하고, WL Subtree Feature를 활용해 피싱 웹페이지의 구조적 특징을 학습하고 탐지하는 방법을 연구했습니다. 실제 피싱 웹페이지를 대상으로 다양한 Feature를 비교·평가했으며, 최고 96.19%의 Accuracy를 달성했습니다.",
    paper:
      "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12929706",

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
      "ACK",

    year:
      "2024 (31권 2호)",
      status: "현장 포스터 발표",

    description:
    "OCR 기반 신분증 정보 추출과 얼굴 임베딩 기반 본인 인증 기능을 구현하여 사용자 인증 파이프라인을 구축했습니다. Python 기반 AI 기능을 FastAPI 서버와 Flutter 애플리케이션에 연동하여 스마트 전동 킥보드 안전 시스템의 프로토타입을 개발했습니다.",
    paper:
      "https://doi.org/10.3745/PKIPS.y2024m10a.1043",

    code:
      "https://github.com/safeT-CE"
  },

  

];