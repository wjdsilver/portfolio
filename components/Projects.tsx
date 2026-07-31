import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "DOM 그래프 기반 피싱 웹페이지 탐지",
    slug: "phishing",
    image: "/images/phishing.png",
    category: "AI 보안 연구 · 석사 연구 (KCC 2026 → ICONIP 2026 → 졸업논문)",
    description: [
        "DOM 트리를 그래프로 변환하여 웹페이지 구조 표현",
        "WL Subtree 기반 구조 특징 추출",
        "Random Forest를 이용한 피싱 웹페이지 분류",
    ],
    contribution: [
        "DOM 구조 기반 그래프 생성 파이프라인 설계 및 구현",
        "WL Subtree 구조 특징 추출 알고리즘 구현",
        "Random Forest 기반 성능 평가 및 실험 수행",
    ],

    conferences: [
      "KCC 2026",
      "ICONIP 2026",
    ],
    technologies: [
      "Python",
      "LLM",
      "BeautifulSoup",
      "NetworkX",
      "Scikit-learn",
      "Pandas",
    ],

    links: [
    {
      label: "논문",
      url: "https://github.com/user-attachments/files/29327766/KCC2026_15_505_DOM.Graph.Feature.Phishing.pdf",
    },
    {
      label: "코드",
      url: "https://github.com/wjdsilver/phishing-dom-wl-kcc2026",
    },
    {
      label: "포스터",
      url: "https://private-user-images.githubusercontent.com/104892553/612933443-c38c7e2a-c5ac-4980-b180-bf82d1205fe7.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODUzNzc0NzgsIm5iZiI6MTc4NTM3NzE3OCwicGF0aCI6Ii8xMDQ4OTI1NTMvNjEyOTMzNDQzLWMzOGM3ZTJhLWM1YWMtNDk4MC1iMTgwLWJmODJkMTIwNWZlNy5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNzMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDczMFQwMjA2MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OWEzOTIwNDc3Y2Y0NmIxY2I5M2YxOGE4ZTVjYjUxYWZlZTlkMDEzODE3MTI4YWZkN2RmZDRkNzQ0ZGFjMDc0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZqcGVnIn0.oH2ZO9KNvIjbUUhzSBQscnXSfpBDd4KS8ztL87StYjk",
    },
    ],
  },


  {
  title: "safeT: AI 기술을 이용한 스마트 전동킥보드 안전 시스템",
  slug: "safet",
  image: "/images/safet1.jpeg",
  category: "AI · 컴퓨터 비전",
  description: [
        "얼굴 인식을 통한 사용자 인증",
        "YOLOv8 기반 안전모 착용 및 다인 탑승 탐지",
        "주행 환경 분석을 통한 안전 운행 지원",
  ],
  contribution: [
  "얼굴 인식 기반 사용자 인증 기능 개발",
  "Face Recognition 모델을 활용한 동일인 판별 기능 구현",
  "AI 기능과 시스템 연동 및 성능 검증",
],
  conferences: [
      "ACK 2024",
    ],
  achievements: [
    "2024 이브와 ICT멘토링 동상 수상",
    "ACK 2024 학술발표대회 논문 게재",
  ],
  technologies: [
    "Python",
    "OpenCV",
    "YOLOv8",
    "Dlib",
    "Flutter",
    "face_recognition",
    "Google Colab",
  ],
  links: [
    {
      label: "논문",
      url: "https://www.manuscriptlink.com/society/kips/conference/ack2024/file/downloadSoConfManuscript/abs/KIPS_C2024B0165",
    },
    {
      label: "코드",
      url: "https://github.com/safeT-CE",
    },
    {
      label: "포스터",
      url: "https://github.com/user-attachments/files/30528522/ACK.pdf",
    },
    {
      label: "동영상",
      url: "https://youtu.be/SRanw6_HfDg?si=4GFTbLj0-FNsLzbF",
    }
    ],
},

  {
    title: "똑부러지는 취업, 똑바른 자세부터 똑똑: AI 기반 태도 분석 모의면접 서비스",
    slug: "interview",
    image: "/images/interview1.png",
    category: "AI · 컴퓨터 비전",
    description: [
        "얼굴 랜드마크 기반 시선 추적",
        "음성 특징 분석을 통한 면접 피드백 제공",
        "AI 기반 면접 결과 리포트 생성",
    ],
    contribution: [
        "시선 추적 알고리즘 설계 및 구현",
        "Face Landmark 기반 시선 분석 기능 개발",
        "백엔드 API 연동 및 성능 검증",
    ],
    achievements: [
        "2024 이브와 ICT멘토링 입상",
    ],
    technologies: [
        "Python",
        "OpenCV",
        "dlib",
        "Flask",
    ],
    links: [
    {
      label: "코드",
      url: "https://github.com/BBoglePops",
    },
    
    ],
    },



  {
    title: "개인 포트폴리오 웹사이트",
    slug: "portfolio",
    image: "/images/portfolio.png",
    category: "웹 개발",
    description: [
      "연구 중심 포트폴리오 웹사이트 개발",
  "Next.js 기반 컴포넌트 구조 설계",
  "Tailwind CSS를 활용한 반응형 UI 구현",
    ],
    contribution: [
  "컴포넌트 기반 UI 설계",
  "프로젝트 및 논문 소개 페이지 구현",
  "반응형 디자인 및 사용자 경험 개선",
],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    links: [
    {
      label: "코드",
      url: "https://github.com/wjdsilver/portfolio",
    },
    ],
  },
];

export default function Projects() {
  return (
    <section
        id="projects"
      className="
        py-20
        px-10
        scroll-mt-20
      "
    >
      <h2
        className="
          text-4xl
          font-bold
          mb-10
        "
      >
        프로젝트
      </h2>

      <div className="grid gap-8">

        {projects.map((project) => (

          <ProjectCard
            key={project.slug}
            project={project}
          />

        ))}

      </div>

    </section>
  );
}