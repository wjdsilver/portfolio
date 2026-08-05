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
    <main>
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
  duration="2024.03 – 2024.10"
  description="웹캠 영상과 음성 데이터를 활용하여 사용자의 면접 태도를 분석하는 AI 기반 모의면접 서비스를 개발하였다.
시선 추적과 음성 분석 기능을 통합하여 면접 종료 후 맞춤형 피드백과 결과 리포트를 제공하는 Prototype을 구현하였다."
  image="/images/projects/ddokddok-thumbnail.png"
  conferences={[
    {
      name: "ICT 멘토링",
      url: "#",
    },
    {
      name: "입상",
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
        본 프로젝트는 시선 분석과 음성 분석 기능을 통합하여
        실제 면접과 유사한 환경을 제공하고,
        면접 종료 후 시선 분석 결과와 음성 분석 결과를 종합한
        맞춤형 피드백 리포트를 제공하도록 설계하였다.
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
      title: "Django REST Framework API 개발",
      description:
        "시선 추적 시작 및 종료 API를 구현하고 분석 결과를 모델에 저장하여 Frontend에서 결과 리포트를 생성할 수 있도록 Backend를 개발하였다.",
    },
    {
      title: "AI 기능과 Backend 연동",
      description:
        "시선 추적 모듈과 Django Backend를 연결하고 Postman을 활용하여 API를 검증하였으며, Frontend와 데이터 연동을 위한 Response 구조를 설계하였다.",
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
"실시간 시선 추적 결과를 Frontend에 지속적으로 전달해야 했다.",

cause:
"초기에는 WebSocket 기반 실시간 통신을 고려했지만 개발 기간과 시스템 복잡도를 고려할 때 구현 부담이 컸다.",

solution:
"면접 시작 시 시선 추적을 시작하고 종료 시 분석 결과를 반환하는 REST API 구조로 변경하였다. 분석 과정에서는 프레임별 시선 정보를 누적하여 최종 결과만 전달하도록 설계하였다.",

result:
"구현 복잡도를 낮추면서도 안정적으로 시선 분석 결과를 제공할 수 있었다.",
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
title:"실시간 AI 서비스 구조 설계 경험",

description:
"실시간 처리 방식과 REST API 기반 처리 방식을 비교하며 프로젝트 환경에 적합한 시스템 구조를 설계하는 경험을 얻었다."
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