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
  description="취업 준비 과정에서 자신의 면접 태도와 답변을 객관적으로 확인하기 어렵다는 문제에 주목하여, 웹캠 영상과 음성 데이터를 활용한 AI 기반 모의면접 서비스를 개발했습니다. GPT 기반 질문 생성·답변 분석과 음성·시선 분석을 결합하여 면접 종료 후 종합적인 피드백을 제공하는 Prototype을 구현했습니다."
  
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
면접을 평가할 때 답변 내용만으로는 실제 면접 태도를 충분히 확인하기 어렵다고 판단하여, 
답변 내용과 함께 음성 및 시선 정보를 함께 분석하는 방식으로 구성했습니다. 
GPT API를 활용하여 사용자의 직무에 맞는 면접 질문을 생성하고 TTS를 통해 질문을 제공했으며, 
사용자의 답변은 STT로 텍스트화한 뒤 GPT API를 활용해 답변 내용과 음성적 잉여표현을 분석했습니다. 
여기에 별도의 음성 및 시선 분석을 결합하여 면접 결과를 종합적으로 평가하도록 구성했습니다.
`,
`
저는 면접 환경에서 사용자마다 얼굴 크기와 카메라 위치가 달라 동일한 기준으로 시선을 판단하기 어렵다는 점을 고려하여, 
dlib 기반 시선 추적 모듈과 사용자별 Calibration 로직을 개발했습니다. 
또한 Django REST Framework를 활용하여 시선 분석 기능을 API로 연동하고, 
면접 시작·종료에 따른 분석 세션 관리와 Frontend로의 분석 결과 전달을 구현했습니다.
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
  React 기반 Frontend와 Django 기반 Backend로 구성된 서비스에서
  저는 시선 추적 기능과 Backend API 구현을 담당했습니다.
  dlib 기반 시선 분석 결과를 Backend에서 처리하고,
  면접 세션 단위로 관리한 뒤 API Response를 통해 Frontend에서
  결과를 확인할 수 있도록 연동했습니다.
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
      title: "사용자별 Calibration 기반 시선 추적 구현",
description:
  "사용자마다 얼굴 크기와 카메라 위치가 달라 동일한 기준으로 시선을 판단하기 어렵다고 판단하여, dlib Shape Predictor 68 Face Landmarks를 활용한 얼굴 랜드마크 검출과 사용자별 Calibration을 적용했습니다. 면접 시작 전 기준값을 생성하고 이를 바탕으로 시선 방향을 분석하도록 구현했습니다.",
},
    {
      title: "화면 영역 기반 시선 분석",
description:
  "단순히 시선 좌표를 기록하는 대신 면접 중 사용자가 화면의 어느 영역을 바라보는지 해석할 수 있도록 화면을 6개 영역으로 분할했습니다. 동공 위치를 기준으로 시선 방향을 분류하고 영역별 응시 횟수와 정면 응시 비율을 계산하도록 구현했습니다.",
},
    {
    title: "Django REST Framework 기반 API 구현",
description:
  "시선 추적 모듈을 실제 서비스에서 사용할 수 있도록 Backend API로 연결해야 했고, 프로젝트 진행 중 Backend 담당자의 이탈로 해당 역할까지 직접 맡게 되었습니다. Django REST Framework를 새롭게 학습하여 면접 시작·종료에 따른 분석 세션 관리와 시선 분석 결과 전달 API를 구현했습니다.",
},
    {
    title: "시선 분석 결과의 API 전달",
description:
  "시선 분석 결과를 Frontend에서 바로 확인할 수 있어야 했기 때문에, 분석 과정에서 생성된 시선 분포 이미지와 분석 데이터를 API Response에 포함하여 전달하는 구조를 구현했습니다.",},
    {
      title: "Backend 담당자 이탈 이후 역할 확장",
description:
  "프로젝트 진행 중 Backend 담당자의 이탈로 기존에 담당하지 않았던 Backend 연동까지 직접 해결해야 했습니다. 프로젝트를 중단하거나 기능 범위를 축소하기보다 필요한 기술을 직접 학습하기로 결정하고, Django REST Framework와 Postman을 활용해 API를 구현·테스트하며 AI 모듈과 Frontend를 연결했습니다.",
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
    "한 사용자가 여러 면접을 진행할 수 있어 사용자 정보만으로는 각 면접의 분석 데이터를 구분하기 어려웠습니다.",

  solution:
    "user_id, interview_id, question_id를 조합한 키를 사용하여 GazeTrackingSession을 관리하고, Start API와 Stop API에서 동일한 세션을 참조하도록 구현했습니다.",

  result:
    "면접 단위로 독립적인 시선 추적 세션을 유지하고, 면접 종료 시 해당 세션의 분석 결과를 생성할 수 있었습니다.",
},
      {
  problem:
    "면접 중 수집된 영상 데이터를 기반으로 시선 분석 결과를 생성해야 했습니다.",

  cause:
    "영상 전체를 프레임 단위로 분석하고 시선 분포를 시각화하는 과정이 필요해 면접 중 실시간으로 처리하기에는 구현 복잡도가 높았습니다.",

  solution:
    "실시간 분석보다 면접 종료 후 결과를 제공하는 방식으로 우선 구현하여, Backend에서 영상을 분석하고 생성된 결과 이미지를 API Response로 전달하는 구조를 구성했습니다.",

  result:
    "면접 종료 후 시선 분석 결과와 피드백을 함께 제공할 수 있었습니다.",
},

  {
  problem:
  "사용자마다 눈의 위치와 카메라 환경이 달라 동일한 기준으로 시선을 판단하기 어려웠습니다.",

  cause:
  "동공 좌표만으로는 사용자별 얼굴 크기와 카메라 위치 차이를 보정할 수 없었습니다.",

  solution:
  "절대적인 동공 좌표를 그대로 사용하는 대신 사용자별 상대적인 기준을 만들 필요가 있다고 판단하여, 면접 시작 전 화면 각 모서리를 응시하도록 하는 Calibration 과정을 추가했습니다. 수집한 기준값을 바탕으로 이후 시선 방향을 계산하도록 구현했습니다.",

  result:
  "사용자별 편차를 줄여 보다 안정적인 시선 추적 결과를 얻을 수 있었습니다.",
  },
  {
  problem:
    "프로젝트 진행 중 Backend 담당 인원의 이탈로 AI 기능과 서비스 연동을 직접 수행해야 했습니다.",

  cause:
    "기존 Backend 개발을 담당하던 인원이 프로젝트에서 이탈하면서 AI 모듈과 Frontend를 연결할 Backend 구현이 필요해졌습니다.",

  solution:
    "프로젝트를 계속 진행하기 위해 필요한 기술을 직접 학습하기로 결정하고, Django REST Framework를 학습하여 API를 구현했습니다. 이후 Postman을 활용해 API를 테스트하고 시선 추적 결과가 Frontend까지 전달되는 전체 흐름을 확인했습니다.",

  result:
    "기존에 담당하지 않았던 Backend 영역까지 역할을 확장하여 AI 모듈과 Frontend를 연결하고 전체 서비스 workflow를 완성했습니다.",
},
    ]}
  />

      <ProjectLessons
  lessons={[
    {
  title:"AI 기능은 모델보다 서비스 연결이 중요하다는 점",

  description:
    "시선 추적 알고리즘을 구현하는 것만으로는 실제 서비스가 완성되지 않았습니다. 분석 세션 관리, API, Frontend 전달까지 연결하면서 AI 기능을 실제 사용자 흐름 안에서 동작하게 만드는 과정의 중요성을 경험했습니다."
},

    {
  title:"문제 발생 시 역할의 경계를 넘는 경험",

  description:
    "Backend 담당자의 이탈이라는 예상하지 못한 상황에서 기존 역할만 고수하기보다 프로젝트를 계속 완성하는 데 필요한 기술을 직접 학습하고 Backend 구현까지 맡았습니다. 문제를 해결하기 위해 필요한 역할을 스스로 확장하는 경험을 얻었습니다."
},
    {
  title:"Computer Vision 결과를 서비스 데이터로 전환하는 경험",

  description:
    "Computer Vision 알고리즘의 출력값을 단순히 로컬에서 확인하는 데 그치지 않고, 세션 단위로 관리하고 API를 통해 Frontend에 전달하면서 분석 결과를 서비스에서 활용 가능한 데이터로 만드는 과정을 경험했습니다."
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