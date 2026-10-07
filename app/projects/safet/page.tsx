import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectInfo from "@/components/project-detail/ProjectInfo";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import SafeTWorkflow from "@/components/project-detail/workflows/SafeTWorkflow";
import ProjectContributions from "@/components/project-detail/ProjectContributions";
import ProjectTroubleshooting from "@/components/project-detail/ProjectTroubleshooting";
import ProjectLessons from "@/components/project-detail/ProjectLessons";
import ProjectResources from "@/components/project-detail/ProjectResources";
import ProjectAchievements from "@/components/project-detail/ProjectAchievements";
import BackToProjects from "@/components/project-detail/BackToProjects";
import ScrollToTop from "@/components/animations/ScrollToTop";
import FloatingTOC from "@/components/project-detail/FloatingTOC";

export default function safeTPage() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden
    bg-gradient-to-b
      from-blue-50/40
      via-white
      to-white">
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
    title:"배운 점"
  },
  {
        id: "achievements",
        title: "주요 성과",
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
        title="safeT: AI 기반 스마트 전동킥보드 안전 시스템"
        duration="2024.03 – 2024.10"
        description="Flutter 기반 모바일 애플리케이션에 AI 기반 사용자 인증 및 객체 탐지 기능을 결합하여 전동킥보드 이용자의 신원 확인과 안전 운행을 지원하는 서비스 프로토타입을 개발했습니다. 회원가입부터 대여, 운행, 반납까지의 서비스 흐름을 구현하고, 그 과정에 AI 기반 인증 및 안전 검증 기능을 적용했습니다."
        image="/images/safet1.jpeg"
        imageClassName="scale-[1.1]"
        conferences={[
            {
            name: "ACK 2024",
            url: "https://www.manuscriptlink.com/society/kips/conference/ack2024/pastConf",
            },
            {
            name: "2024 ICT 멘토링",
            url: "https://www.hanium.or.kr/portal/index.do",
            },
        ]}
        techStack={[
            "Python",
            "OpenCV",
            "dlib",
            "face_recognition",
            "Flutter",
            "Dart",
            "YOLOv8",
        ]}
/>
      
      <ProjectInfo
        duration="2024.03 – 2024.10"
        role="사용자 인증 기능 · Flutter 개발"
        status="완료"
        team="4인 팀"
        />

        <ProjectOverview
        paragraphs={[
            `
            공유 전동킥보드 서비스에서는 신분증이나 계정을 다른 사람이 사용하는 문제와 
안전모 미착용, 다인 탑승 등의 안전 문제가 발생할 수 있습니다. 
이에 단순히 안전 기능 하나를 추가하기보다, 
회원가입부터 실제 대여와 운행까지의 서비스 흐름에서 사용자의 신원과 안전 상태를 
단계별로 확인할 수 있는 구조가 필요하다고 판단했습니다.
이를 바탕으로 AI 기반 사용자 인증과 안전 검증 기능을 결합한 
전동킥보드 안전 관리 서비스 프로토타입을 설계하고 구현했습니다.
            `,

            `
            회원가입 단계에서는 OCR을 활용해 신분증 정보를 입력받고 얼굴 인증을 수행하도록 구성했습니다. 
이 단계에서는 타인의 신분증을 이용한 가입을 방지하는 것을 목표로 했습니다.
하지만 회원가입 시점에만 본인 여부를 확인하면 이후 계정을 다른 사람이 사용하는 문제까지 
방지하기 어렵다고 판단하여, 대여 단계에서도 등록된 얼굴과 현재 사용자의 얼굴을 비교하도록 설계했습니다.

또한 실제 운행 과정에서 발생할 수 있는 안전 문제를 별도로 검증하기 위해 
YOLOv8 기반 객체 탐지를 활용해 안전모 착용과 다인 탑승 여부를 확인하고, 
주행 환경의 안전 여부를 검증하는 기능을 구현했습니다.
            `,
        ]}
        />
        <section 
        
        className="max-w-6xl mx-auto px-8 py-16">
          
  <h2 id="servicemap"
  className="text-3xl font-bold mb-8">
    서비스 구성도
  </h2>
  <p className="mt-8 text-gray-600 leading-8">
  Flutter 기반 모바일 애플리케이션과 Spring·MySQL 기반 Web Server를 중심으로
    사용자 인증 및 전동킥보드 이용 데이터를 관리하고, Flask 기반 AI 서버와
    OpenCV·dlib·YOLO를 활용한 얼굴 인증 및 안전 검증 기능을 연동하여
    전동킥보드 대여부터 반납까지의 서비스 흐름을 구현했습니다.
</p>
  <div className="rounded-2xl bg-white p-6 shadow-sm">
    
    <img
      src="/images/safeT_architecture.png"
      alt="safeT 스마트 전동킥보드 안전 시스템 구성도"
      className="w-full rounded-xl"
    />
  </div>
</section>
        <SafeTWorkflow />

        <ProjectContributions
        contributions={[
            {
            title: "사용자 인증 절차 설계",
            description:
  "신분증 도용과 계정 공유 문제를 각각 방지하기 위해 인증 시점을 회원가입과 대여 단계로 나누어 설계했습니다. 이를 실제 사용자가 따라가는 흐름으로 연결하기 위해 Flutter 기반 회원가입·인증·대여 화면을 구현했습니다.",
},
            {
            title: "OCR 기반 신분증 정보 자동 입력",
            description:
  "신분증 정보를 사용자가 직접 입력하는 대신 OCR을 활용해 필요한 정보를 자동으로 추출하도록 구성하여 회원가입 과정의 입력 단계를 줄였습니다."
},
            {
            title:"얼굴 임베딩 기반 동일인 인증 구현",
                description:
  "등록된 사용자와 현재 사용자의 얼굴이 동일한지를 비교하기 위해 얼굴 이미지를 직접 비교하는 대신 dlib 기반 특징 추출을 통해 얼굴 임베딩을 생성하고, 두 임베딩 간 Euclidean Distance를 기준으로 동일인 여부를 판단하는 방식을 구현했습니다."
},
            {
            title: "회원가입 및 대여 단계의 얼굴 인증 연동",
            description:
  "회원가입 시 생성한 얼굴 정보를 이후 인증에 재사용할 수 있도록 등록 얼굴 임베딩을 저장하고, 대여 시작 시 현재 사용자의 얼굴과 다시 비교하는 구조를 구현했습니다. 이를 통해 회원가입 이후 발생할 수 있는 계정 공유나 타인 대여 문제까지 검증 범위를 확장했습니다."
},
            {
            title: "ACK 논문 및 프로젝트 발표",
            description:
  "서비스 설계와 AI 기능 구현 결과를 단순 프로젝트 결과물로 남기지 않고 연구 형태로 정리하여 ACK 2024 논문과 포스터를 작성하고 발표했습니다."
},
        ]}
        />

        <ProjectTroubleshooting
        issues={[
            {
        problem:
        "실제 전동킥보드 운행 환경에서 AI 기능을 실시간으로 처리하기 위한 Edge Device 환경이 필요했습니다.",

        cause:
        "프로젝트 기간과 개발 환경의 제약으로 실제 기기에 AI 모델을 탑재하여 실시간 성능을 검증하기 어려웠습니다.",

        solution:
        "실제 하드웨어 환경을 완전히 구현하기보다 핵심 AI 기능과 서비스 workflow를 먼저 검증하는 것을 우선순위로 두고, 웹캠 기반 Prototype 환경을 구성했습니다.",

        result:
        "실제 서비스 시나리오를 기준으로 AI 인증 기능이 서비스 workflow에서 동작하는 것을 검증했습니다.",
        },

        {
        problem:
        "타인의 신분증을 이용한 회원가입을 방지해야 했습니다.",

        cause:
        "OCR만 사용할 경우 신분증 사진만 있으면 계정을 생성할 수 있었습니다.",

        solution:
        "신분증 사진만으로 가입이 완료되지 않도록, 신분증 등록 과정에서 실시간 얼굴을 함께 확인하는 Face Verification 절차를 추가했습니다.",

        result:
        "신분증 도용 가능성을 줄이는 사용자 인증 프로세스를 구현하였습니다.",
        },

        {
        problem:
        "등록된 계정을 다른 사람이 이용할 가능성이 있었습니다.",

        cause:
        "회원가입 이후에는 사용자 본인 여부를 확인할 수 없었습니다.",

        solution:
        "회원가입 시점의 인증만으로는 실제 대여자의 본인 여부를 보장하기 어렵다고 판단하여, 대여 시작 시 등록된 얼굴과 현재 얼굴을 다시 비교하도록 설계했습니다.",

        result:
        "계정 공유 및 무단 대여를 방지하는 인증 절차를 구현하였습니다.",
        },
        ]}
        />

      <ProjectLessons
        lessons={[
            {
  title:"AI 기능을 서비스 Workflow에 적용하는 경험",

  description:
    "AI 모델을 구현하는 것만으로 서비스가 완성되는 것이 아니라, 회원가입과 대여 과정에서 실제 사용자의 행동과 연결되도록 인증 기능을 서비스 workflow에 설계하고 연동하는 경험을 얻었습니다."
},

        {
  title:"인증 단계에 따른 보안 설계",

  description:
    "하나의 인증 절차만 추가하는 것으로는 신분증 도용과 계정 공유라는 서로 다른 문제를 해결하기 어렵다는 점을 경험했습니다. 문제 발생 지점을 기준으로 회원가입과 대여 단계에 서로 다른 인증 절차를 배치하는 방식으로 보안 흐름을 설계하는 중요성을 배웠습니다."
},

        {
  title:"제약 조건 안에서 Prototype으로 검증하기",

  description:
    "실제 Edge Device 환경까지 구현하기 어려운 제약이 있었지만, 전체 구현을 중단하기보다 핵심 기능을 검증할 수 있는 웹캠 기반 Prototype을 선택했습니다. 구현 가능한 범위에서 먼저 서비스 workflow를 검증하고 이후 확장 가능성을 남기는 방식으로 프로젝트를 진행하는 경험을 얻었습니다."
},
        ]}
        />

<ProjectAchievements
  achievements={[
    {
      title: "ACK 2024 학술발표대회",
      description:
        "safeT 프로젝트를 학술 논문으로 정리하여 ACK 2024에서 발표하였습니다.",
    },
    {
      title: "2024 이브와 ICT 멘토링 공모전 동상",
      description:
        "AI 기반 사용자 인증 및 안전 검증 기능을 구현한 전동킥보드 안전 시스템으로 동상을 수상하였습니다.",
      image: "/images/ibwa_award.jpg",
    },
  ]}
/>

        <ProjectResources
        resources={[
            {
            title: "GitHub",
            description:
                "safeT 프로젝트의 소스 코드 및 구현 내용",
            url: "https://github.com/safeT-CE",
            },
            {
            title: "ACK 2024 — Conference Paper",
            description:
                "ACK 2024 학술발표대회 논문",
            url: "https://doi.org/10.3745/PKIPS.y2024m10a.1043",
            },
            {
            title: "Project Video",
            description:
                "2024 이브와 ICT 멘토링 영상",
            url: "https://www.youtube.com/watch?v=SRanw6_HfDg",
            },
        ]}
        />
<BackToProjects />
<ScrollToTop />
    </main>
  );
}