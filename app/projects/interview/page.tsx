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

export default function InterviewPage() {
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
    title:"프로젝트 소개"
  },
  {
    id:"servicemap",
    title:"서비스 구성도"
  },
  {
    id:"pipeline",
    title:"서비스 이용 흐름"
  },
  {
    id:"contributions",
    title:"주요 기여"
  },
  {
    id:"troubleshooting",
    title:"트러블 슈팅"
  },
  {
    id:"lessons",
    title:"배운점"
  },
  {
    id:"resources",
    title:"관련 자료"
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
  description="웹캠 영상과 음성 데이터를 활용하여 사용자의 면접 태도와 답변을 분석하는 AI 기반 모의면접 서비스를 개발했습니다. GPT API를 활용해 사용자의 직무에 맞는 면접 질문을 생성하고, TTS·STT 및 GPT 기반 답변 분석과 음성·시선 분석을 결합하여 면접 종료 후 종합적인 피드백과 결과 리포트를 제공하는 Prototype을 구현했습니다.
"
  
  conferences={[
    {
            name: "2024 ICT 멘토링",
            url: "https://www.hanium.or.kr/portal/index.do",
            },
  ]}
  techStack={[
    "Python",
    "OpenCV",
    "dlib",
    "Django",
    "Django REST Framework",
    "Postman",
    "Google Cloud",
    "GPT API",
     "TTS",
     "STT",
     "React",
     "Unreal",
  ]}
/>
      
      <ProjectInfo
  duration="2024.03 – 2024.10"
  role="Backend · 시선 추적 개발"
  status="완료"
  team="(5인→)4인 팀"
/>

        <ProjectOverview
  paragraphs={[
`
취업 준비 과정에서 자신의 면접 태도와 답변을 객관적으로 확인하기 어렵다는 문제에 주목하여 웹캠 영상과 음성 데이터를 활용한 AI 기반 모의면접 서비스를 개발했습니다.
`,
`
GPT API를 활용하여 사용자의 직무에 맞는 면접 질문을 생성하고, TTS를 통해 질문을 제공했습니다. 사용자의 답변은 STT로 텍스트화한 뒤 GPT API를 활용해 답변 내용과 음성적 잉여표현을 분석하고, 별도로 음성 및 시선 분석을 수행하여 면접 결과를 종합적으로 평가하도록 구성했습니다.
`,
`
저는 dlib 기반 시선 추적 모듈과 사용자별 Calibration 로직을 개발하고, Django REST Framework를 활용하여 시선 분석 기능을 서비스에 연동했습니다. 또한 면접 시작·종료에 따른 분석 세션 관리와 Frontend로의 분석 결과 전달을 구현했습니다.
`,
]}
/>
<section 
id="servicemap"
className="max-w-6xl mx-auto px-8 py-16">
  <h2 className="text-3xl font-bold mb-8">
    서비스 구성도
  </h2>
  <p className="mt-8 text-gray-600 leading-8">
  React 기반 Frontend와 Django 기반 Backend를 중심으로
  시선·음성 분석 기능을 연동하여 면접 데이터를 종합적으로 분석하고
  결과를 사용자에게 제공하는 서비스 구조를 구현했습니다.
</p>
  <div className="rounded-2xl bg-white p-6 shadow-sm">
    
    <img
      src="/images/interview_architecture.png"
      alt="똑똑 AI 모의면접 서비스 구성도"
      className="w-full rounded-xl"
    />
  </div>
</section>

        <InterviewWorkflow />

        <ProjectContributions
  contributions={[
    {
      title: "Calibration 기반 시선 추적 알고리즘 구현",
      description:
        "dlib Shape Predictor 68 Face Landmarks를 활용하여 얼굴 랜드마크를 검출하고, 사용자별 Calibration을 통해 시선 기준값을 생성하여 시선 방향을 분석하는 기능을 구현하였습니다.",
    },
    {
      title: "6개 영역 기반 시선 분석",
      description:
        "화면을 6개 영역으로 분할하고 동공 위치를 기반으로 시선 방향을 분류하여 영역별 응시 횟수와 정면 응시 비율을 계산하는 로직을 구현하였습니다.",
    },
    {
    title:"Django REST Framework 기반 API 구현",

    description:
    "시선 추적 기능을 Backend API로 구현하고, 면접 시작·종료에 따른 분석 세션을 관리하여 Frontend에서 분석 결과를 활용할 수 있도록 연동하였습니다."
    },
    {
    title:"시선 분석 결과 시각화 및 전달",

    description:
    "시선 분포를 이미지로 생성하고 분석 결과와 함께 Base64 형태로 변환하여 API Response를 통해 Frontend에 전달하였습니다."
    },
    {
      title: "Backend 담당자 이탈 이후 서비스 통합",
      description:
        "프로젝트 진행 중 Backend 담당자의 이탈로 Django REST Framework를 직접 학습하여 AI 모듈과 Backend API를 연동하고, Postman을 활용해 API를 테스트하며 서비스 통합을 완료하였습니다.",
    },
    {
      title: "ICT 멘토링 프로젝트 발표",
      description:
        "프로젝트 결과를 바탕으로 ICT 멘토링 최종 발표를 수행하고 서비스 Prototype을 완성하였습니다.",
    },
  ]}
/>

<ProjectTroubleshooting
    issues={[
      {
  problem:
  "면접 시작부터 종료까지 사용자의 시선 분석 상태를 유지하면서 각 면접의 데이터를 독립적으로 관리해야 했습니다.",

  cause:
  "면접 시작부터 종료까지 사용자의 시선 분석 상태를 유지하면서 각 면접의 데이터를 독립적으로 관리해야 했습니다.",

  solution:
  "user_id, interview_id, question_id를 조합한 키를 사용하여 GazeTrackingSession을 관리하고 Start API와 Stop API에서 동일한 세션을 참조하도록 구현하였습니다.",

  result:
  "면접 단위로 독립적인 시선 추적 세션을 유지하고 종료 시 분석 결과를 생성할 수 있었습니다.",
  },
      {
  problem:
  "면접 중 수집된 영상 데이터를 기반으로 시선 분석 결과를 생성해야 했습니다.",

  cause:
  "영상 다운로드, 프레임 단위 분석 및 시선 분포 시각화 과정이 필요했습니다.",

  solution:
  "면접 종료 후 Backend에서 영상을 분석하고, 생성된 결과 이미지를 Base64로 인코딩하여 API Response로 전달하는 구조를 구현하였습니다.",

  result:
  "Frontend에서 면접 종료 후 시선 분석 결과와 피드백을 함께 제공할 수 있었습니다.",
  },

  {
  problem:
  "사용자마다 눈의 위치와 카메라 환경이 달라 동일한 기준으로 시선을 판단하기 어려웠습니다.",

  cause:
  "동공 좌표만으로는 사용자별 얼굴 크기와 카메라 위치 차이를 보정할 수 없었습니다.",

  solution:
  "면접 시작 전 화면 각 모서리를 응시하도록 하는 Calibration 과정을 추가하여 사용자별 기준값을 저장하고 이를 기반으로 시선 방향을 계산하였습니다.",

  result:
  "사용자별 편차를 줄여 보다 안정적인 시선 추적 결과를 얻을 수 있었습니다.",
  },
  {
  problem:
  "프로젝트 진행 중 Backend 담당 인원의 이탈로 AI 기능과 서비스 연동을 직접 수행해야 했습니다.",

  cause:
  "기존 통합 구조가 변경되면서 AI 모듈과 Backend API를 새롭게 연결해야 했습니다.",

  solution:
  "Django REST Framework를 학습하여 API를 직접 구현하고 Postman으로 테스트를 수행하며 시선 추적 결과를 저장하고 Frontend와 연동하였습니다.",

  result:
  "기존 AI 모듈을 Backend API와 연동하고 Frontend까지 연결하여 전체 서비스 workflow를 완성하였습니다.",
  },
    ]}
  />

      <ProjectLessons
  lessons={[
    {
    title:"AI 기능의 서비스 통합 경험",

    description:
    "AI 모델이나 분석 알고리즘을 구현하는 것뿐 아니라 API와 데이터 흐름을 설계하여 실제 서비스 workflow에 연결하는 경험을 얻었습니다."
    },

    {
    title:"Computer Vision과 Backend 연동",

    description:
    "dlib 기반 시선 추적 알고리즘을 Django REST Framework와 연결하고, 분석 결과를 API를 통해 Frontend에 전달하는 전체 흐름을 경험했습니다."
    },

    {
    title:"새로운 기술을 빠르게 습득하여 문제 해결",

    description:
    "프로젝트 진행 중 Backend 담당자의 이탈이라는 상황에서 Django REST Framework를 새롭게 학습하고 API 구현과 테스트까지 수행하며 프로젝트를 완성했습니다."
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