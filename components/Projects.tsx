import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "DOM 그래프 기반 피싱 웹페이지 탐지",
    slug: "phishing",
    category: "AI 보안 연구 · 석사 연구 (KCC 2026 → ICONIP 2026 → 졸업논문)",
    description: [
        "HTML의 계층적 구조를 활용하기 위해 DOM을 Graph로 표현",
"구조적 패턴을 표현하는 WL Subtree Feature를 설계하고 탐지 성능 비교",
"동일한 Dataset과 분류 환경에서 Feature Representation의 효과를 검증",
"6개 LLM × 8개 시나리오, 1,200개 Synthetic Dataset으로 일반화 가능성 검증",
    ],
    contribution: [
        "DOM 구조 기반 Graph 생성 및 Feature Extraction 파이프라인 설계·구현",
        "WL Subtree 기반 구조적 특징 추출 및 Random Forest 활용한 피싱 분류 실험",
        "실제 피싱 웹페이지와 다양한 Feature를 활용한 성능 비교·분석",
        "LLM 생성 피싱 웹페이지 데이터셋을 구축하고 기존 탐지 모델의 일반화 성능 평가",
    ],

    conferences: [
      "KCC 2026",
      "ICONIP 2026 (Accepted)",
    ],
    achievements: [
      "96.19% Accuracy",
"93.76% Phishing Recall",
    "KCC 2026 우수발표논문상",
    "KCC 2026 한국 정보과학회 학술발표논문집 논문 게재",
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
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12929706",
    },
    {
      label: "코드",
      url: "https://github.com/wjdsilver/phishing-dom-wl-kcc2026",
    },
    ],
  },


  {
  title: "safeT: AI 기술을 이용한 스마트 전동킥보드 안전 시스템",
  slug: "safet",
  image: "/images/safet1.jpeg",
  category: "AI · 컴퓨터 비전",
  description: [
        "AI 기반 전동킥보드 사용자 본인 인증",
        "YOLOv8 기반 안전모 착용 및 다인 탑승 탐지",
        "주행 환경 분석을 통한 안전 운행 지원",
  ],
  contribution: [
  "신분증 정보와 실시간 얼굴 비교를 통한 사용자 본인 인증 구현",
  "신분증 정보와 실시간 얼굴 비교를 통한 사용자 본인 인증 구현",
  "Flutter 기반 회원가입·인증·대여 화면 및 사용자 흐름 구현",
],
  conferences: [
      "ACK 2024",
    ],
  achievements: [
    "2024 이브와 ICT멘토링 동상",
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
      url: "https://doi.org/10.3745/PKIPS.y2024m10a.1043",
    },
    {
      label: "코드",
      url: "https://github.com/safeT-CE",
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
        "GPT API 기반 직무 맞춤형 면접 질문 생성 및 TTS 제공",
        "STT와 GPT API를 활용한 답변 내용 및 음성적 잉여표현 분석",
        "답변·음성·시선 분석 결과를 종합한 AI 면접 피드백 리포트 생성",
    ],
    contribution: [
        "사용자별 Calibration 기반 시선 추적 기능 구현",
        "dlib 68-point Face Landmark 기반 시선 영역 분석 로직 개발",
        "Django REST Framework 기반 AI 분석 API 구현 및 Frontend 연동",
        "Backend 담당자 이탈 이후 필요한 기술을 직접 학습하여 서비스 통합",
    ],
    achievements: [
        "2024 이브와 ICT멘토링 참여",
    ],
    technologies: [
        "Python",
        "OpenCV",
        "dlib",
        "django",
        "Django Rest Framework"
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
    category: "웹 개발",
    description: [
      "연구 프로젝트의 문제 정의부터 성과까지 보여주는 정보 구조 설계",
  "프로젝트별 콘텐츠를 재사용할 수 있도록 Next.js 기반 컴포넌트 구조화",
  "긴 프로젝트 상세 페이지의 탐색성과 모바일 반응형 UI 개선",
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
        px-4 
        md:px-10
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
        Projects
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