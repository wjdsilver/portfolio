import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectInfo from "@/components/project-detail/ProjectInfo";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import InterviewWorkflow from "@/components/project-detail/workflows/InterviewWorkflow";
import ProjectContributions from "@/components/project-detail/ProjectContributions";
import ProjectTroubleshooting from "@/components/project-detail/ProjectTroubleshooting";
import ProjectLessons from "@/components/project-detail/ProjectLessons";
import ProjectResources from "@/components/project-detail/ProjectResources";
import BackToProjects from "@/components/project-detail/BackToProjects";
import ScrollToTop from "@/components/animations/ScrollToTop";
import FloatingTOC from "@/components/project-detail/FloatingTOC";

export default function DomPhishingPage() {
  return (
    <main 
    className="w-full min-w-0 overflow-x-hidden
      bg-gradient-to-b
      from-blue-50/40
      via-white
      to-white
    ">
      <FloatingTOC

sections={[
  {
    id:"overview",
    title:"Overview"
  },
  {
    id:"pipeline",
    title:"Implementation"
  },
  {
    id:"contributions",
    title:"Contributions"
  },
  {
    id:"troubleshooting",
    title:"Troubleshooting"
  },
  {
    id:"results",
    title:"Results"
  },
  {
    id:"lessons",
    title:"Lessons"
  },
  {
    id:"resources",
    title:"Resources"
  },
]}

/>
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-8 pt-8">
        <BackToProjects />
      </div>

      <ProjectHero
  category="AI Service · Computer Vision"
  title="똑똑: AI 기반 태도 분석 모의면접 서비스"
  image="/images/interview1.png"
  duration="2024.03 – 2024.10"
  description="웹캠 영상과 음성 데이터를 활용하여 사용자의 면접 태도를 분석하는 AI 기반 모의면접 서비스를 개발하였다.
시선 추적과 음성 분석 기능을 통합하여 면접 종료 후 맞춤형 피드백과 결과 리포트를 제공하는 Prototype을 구현하였다."
  
  conferences={[
    {
      name: "ICT 멘토링",
      url: "#",
    },
  ]}
  techStack={[
    "Python",
    "OpenCV",
    "dlib",
    "Django REST Framework",
    "Postman",
    "Google Cloud",
  ]}
/>
      
      <ProjectInfo
  duration="2024.03 – 2024.10"
  role="Backend & Gaze Tracking Developer"
  status="Completed"
  team="4 Developers"
/>

        <ProjectOverview
  paragraphs={[
`
취업 준비 과정에서 자신의 면접 태도를 객관적으로 확인하기 어렵다는 문제를 해결하기 위해
웹캠 영상과 음성 데이터를 활용한 AI 기반 모의면접 서비스를 개발하였다.
`,
`
본 프로젝트는 GPT 기반 맞춤형 면접 질문 생성과
웹캠·음성 분석을 결합하여
시선, 음성 및 답변 내용을 종합 평가하는
AI 기반 모의면접 서비스를 개발하였다.
`,
`
나는 dlib 기반 시선 추적 모듈 개발과
Django REST Framework 기반 Backend 연동을 담당하였으며,
사용자별 Calibration을 적용하여 시선 방향을 분석하고
Frontend에서 활용 가능한 형태의 API를 구현하였다.
`,
]}
/>

        <InterviewWorkflow />

        <ProjectContributions
  contributions={[
    {
      title: "Calibration 기반 시선 추적 알고리즘 구현",
      description:
        "dlib Shape Predictor 68 Face Landmarks 모델을 활용하여 얼굴 랜드마크를 검출하고, 사용자별 Calibration 과정을 통해 시선 추적 정확도를 향상시켰다.",
    },
    {
      title: "6개 영역 기반 시선 분석 알고리즘 개발",
      description:
        "동공 위치를 기반으로 화면을 6개의 영역으로 분할하여 사용자의 시선 분포를 분석하고, 정면 응시 비율과 영역별 응시 횟수를 계산하는 로직을 구현하였다.",
    },
    {
    title:"시선 분석 Backend 개발",

    description:
    "Base64 형식의 결과 이미지와 분석 데이터를 Frontend와 연동하였으며, Postman을 활용하여 API를 검증하였다."
    },
    {
    title:"시선 추적 세션 관리",

    description:
    "면접 시작(Start)과 종료(Stop)를 분리한 API 구조를 설계하여 시선 추적 세션 생성, 분석 종료 및 결과 반환 과정을 구현하였다."
    },
    {
      title: "서비스 통합 및 배포 지원",
      description:
        "Google Cloud 환경에서 서비스 배포를 지원하고 AI 기능이 실제 서비스 흐름에서 동작할 수 있도록 통합 작업에 참여하였다.",
    },
    {
      title: "ICT 멘토링 프로젝트 입상",
      description:
        "프로젝트 결과를 바탕으로 ICT 멘토링 최종 발표를 수행하고 서비스 Prototype을 완성하였다.",
    },
  ]}
/>

<ProjectTroubleshooting
    issues={[
      {
  problem:
  "사용자별 면접 세션을 독립적으로 관리해야 했다.",

  cause:
  "시선 추적은 면접 시작부터 종료까지 상태를 유지해야 하므로 사용자별 분석 세션을 관리할 필요가 있었다.",

  solution:
  "user_id, interview_id, question_id를 조합한 키를 사용하여 GazeTrackingSession을 관리하고 Start API와 Stop API에서 동일한 세션을 참조하도록 구현하였다.",

  result:
  "사용자별 독립적인 시선 추적 세션을 유지하며 분석 결과를 생성할 수 있었다.",
  },
      {
  problem:
  "시선 분석은 영상 기반 처리이므로 실시간으로 결과를 생성하기 어려웠다.",

  cause:
  "업로드된 영상을 다운로드한 뒤 프레임 단위 분석과 시각화 이미지를 생성하는 과정이 필요하였다.",

  solution:
  "면접 종료 후 백엔드에서 시선 분석을 수행하고, 결과 이미지를 Base64 형식으로 인코딩하여 API Response로 전달하는 구조를 설계하였다.",

  result:
  "구현 복잡도를 낮추면서도 Frontend에서 분석 완료 후 시선 분포 이미지와 피드백을 함께 제공할 수 있었다.",
  },

  {
  problem:
  "사용자마다 눈의 위치와 카메라 환경이 달라 동일한 기준으로 시선을 판단하기 어려웠다.",

  cause:
  "동공 좌표만으로는 사용자별 얼굴 크기와 카메라 위치 차이를 보정할 수 없었다.",

  solution:
  "면접 시작 전 화면 각 모서리를 응시하도록 하는 Calibration 과정을 추가하여 사용자별 기준값을 저장하고 이를 기반으로 시선 방향을 계산하였다.",

  result:
  "사용자별 편차를 줄여 보다 안정적인 시선 추적 결과를 얻을 수 있었다.",
  },
  {
  problem:
  "동시에 여러 사용자가 면접을 진행할 경우 각 사용자의 시선 분석 상태를 구분해야 했다.",

  cause:
  "시선 추적은 면접 시작부터 종료까지 상태를 유지해야 하므로 사용자별 분석 세션을 관리할 필요가 있었다.",

  solution:
  "user_id, interview_id, question_id를 조합한 키를 사용하여 GazeTrackingSession을 관리하고 Start API와 Stop API에서 동일한 세션을 참조하도록 구현하였다.",

  result:
  "사용자별 독립적인 시선 추적 세션을 유지하며 분석 결과를 생성할 수 있었다.",
  },
  {
  problem:
  "프로젝트 진행 중 Backend 담당 인원의 이탈로 AI 기능과 서비스 연동을 직접 수행해야 했다.",

  cause:
  "기존 통합 구조가 변경되면서 AI 모듈과 Backend API를 새롭게 연결해야 했다.",

  solution:
  "Django REST Framework를 학습하여 API를 직접 구현하고 Postman으로 테스트를 수행하며 시선 추적 결과를 저장하고 Frontend와 연동하였다.",

  result:
  "서비스 기능을 정상적으로 통합하여 프로젝트를 완성할 수 있었다.",
  },
    ]}
  />

      <ProjectLessons
  lessons={[
    {
    title:"AI 기능의 서비스 통합 경험",

    description:
    "AI 분석 모듈을 구현하는 것뿐 아니라 Backend API, Frontend, 데이터 저장 구조까지 고려하여 실제 서비스 형태로 통합하는 경험을 얻었다."
    },

    {
    title:"Computer Vision과 Backend 통합",

    description:
    "dlib 기반 Computer Vision 알고리즘을 Django REST Framework와 연결하여 실제 서비스에서 활용 가능한 AI 기능을 구현하였다."
    },

    {
    title:"서비스 통합 과정의 중요성",

    description:
    "AI 모델 구현뿐 아니라 Frontend, Backend, API 설계 및 배포 환경까지 고려해야 실제 서비스가 완성된다는 점을 경험하였다."
    },
      ]}
    />

<ProjectResources
  resources={[
    {
      title: "GitHub - Backend",
      description: "Backend Repository",
      url: "#",
    },
    {
      title: "GitHub - Frontend",
      description: "Frontend Repository",
      url: "#",
    },
    {
      title: "Project Presentation",
      description: "ICT 멘토링 최종 발표",
      url: "#",
    },
  ]}
/>
<BackToProjects />
<ScrollToTop />
    </main>
  );
}