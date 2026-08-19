import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectInfo from "@/components/project-detail/ProjectInfo";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import SafeTWorkflow from "@/components/project-detail/workflows/SafeTWorkflow";
import ProjectContributions from "@/components/project-detail/ProjectContributions";
import ProjectTroubleshooting from "@/components/project-detail/ProjectTroubleshooting";
import ProjectLessons from "@/components/project-detail/ProjectLessons";
import ProjectResources from "@/components/project-detail/ProjectResources";
import BackToProjects from "@/components/project-detail/BackToProjects";
import ScrollToTop from "@/components/animations/ScrollToTop";
import FloatingTOC from "@/components/project-detail/FloatingTOC";

export default function DomPhishingPage() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden">
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
        title="safeT: AI 기반 스마트 전동킥보드 안전 시스템"
        duration="2024.03 – 2024.10"
        description="Flutter 기반 모바일 애플리케이션과 AI 기반 인증·객체 탐지 기능을 결합하여 
        전동킥보드 이용자의 신원 확인과 안전 운행을 지원하는 서비스 프로토타입을 개발하였다.
        회원가입부터 대여, 운행, 반납 과정까지 사용자 인증 및 안전 검증 흐름을 설계하였다."
        image="/images/safet1.jpeg"
        conferences={[
            {
            name: "ACK 2024",
            url: "https://www.manuscriptlink.com/society/kips/conference/ack2024/pastConf",
            },
            {
            name: "ICT 멘토링",
            url: "https://www.youtube.com/watch?v=SRanw6_HfDg",
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
        role="AI Feature & Flutter Developer"
        status="Completed"
        team="4 Developers"
        />

        <ProjectOverview
        paragraphs={[
            `
            공유 전동킥보드 이용 증가와 함께
            무면허 운전, 타인의 계정 도용, 신분증 도용,
            그리고 안전모 미착용, 다인 탑승 등 다양한 안전 문제가
            사회적 이슈로 대두되고 있다.
            `,

            `
            본 프로젝트는 전동킥보드 대여 서비스 과정에서 발생하는
            신분증 도용, 계정 공유, 안전 규정 위반 문제를 해결하기 위해
            AI 기반 사용자 인증 및 안전 검증 기능을 통합한
            서비스 프로토타입을 개발하였다.
            `,

            `
            얼굴 인식 기반 사용자 인증과
            안전모 착용, 다인 탑승, 횡단보도 및
            주차 공간 검출 기능을 통합하여
            퍼스널 모빌리티 안전 관리 시스템의
            Prototype을 구현하였다.
            `,
        ]}
        />

        <SafeTWorkflow />

        <ProjectContributions
        contributions={[
            {
            title: "사용자 인증 절차 설계",
            description:
                "회원가입, 신분증 등록, 얼굴 인증, 킥보드 대여 흐름을 구현하기 위한 Flutter 애플리케이션 개발에 참여하였다.",
            },
            {
            title: "OCR 기반 신분증 정보 자동 입력",
            description:
                "OCR을 활용하여 신분증 정보를 추출하고 회원가입 과정에서 사용자 입력을 최소화하는 인증 화면을 구현하였다.",
            },
            {
            title:"얼굴 임베딩 기반 동일인 인증 구현",
                description:
                "dlib 기반 얼굴 특징 추출 모델을 활용하여 얼굴 임베딩을 생성하고, Euclidean Distance 기반 유사도 비교를 통해 동일인 여부를 판별하는 인증 기능을 구현하였다.",
                },
            {
            title: "사용자 인증 데이터 관리",
            description:
                "등록된 얼굴 임베딩 데이터를 관리하고 회원가입 및 대여 단계에서 사용자 인증 파이프라인을 구현하였다.",
            },
            {
                title:"AI 기능 통합 서비스 개발",
                description:
                "얼굴 인증 기능과 팀원이 개발한 객체 탐지 모듈을 Flutter 애플리케이션 서비스 흐름에 통합하여 Prototype을 구현하였다.",
                },
            {
            title: "ACK 논문 및 프로젝트 발표",
            description:
                "프로젝트 결과를 정리하여 ACK 2024 논문과 포스터를 작성하고 발표하였다.",
            },
        ]}
        />

        <ProjectTroubleshooting
        issues={[
            {
        problem:
        "실제 운행 환경에서 실시간 AI 처리를 위한 Edge Device 환경 구성이 필요했다.",

        cause:
        "제한된 개발 기간 내 Raspberry Pi 기반 카메라 연동 및 실시간 처리 환경 구축에 어려움이 있었다.",

        solution:
        "웹캠 기반 Prototype 환경을 구성하여 서비스 workflow와 AI 기능 동작을 검증하였다.",

        result:
        "실제 사용 시나리오 기반 인증 및 안전 검증 프로세스를 구현하였다.",
        },

        {
        problem:
        "타인의 신분증을 이용한 회원가입을 방지해야 했다.",

        cause:
        "OCR만 사용할 경우 신분증 사진만 있으면 계정을 생성할 수 있었다.",

        solution:
        "신분증 사진과 실시간 얼굴을 비교하는 Face Verification 절차를 추가하였다.",

        result:
        "신분증 도용 가능성을 줄이는 사용자 인증 프로세스를 구현하였다.",
        },

        {
        problem:
        "등록된 계정을 다른 사람이 이용할 가능성이 있었다.",

        cause:
        "회원가입 이후에는 사용자 본인 여부를 확인할 수 없었다.",

        solution:
        "대여 시작 시 등록된 얼굴과 현재 얼굴을 다시 비교하도록 설계하였다.",

        result:
        "계정 공유 및 무단 대여를 방지하는 인증 절차를 구현하였다.",
        },
        ]}
        />

      <ProjectLessons
        lessons={[
            {
        title:"사용자 인증 절차 설계의 중요성",

        description:
        "AI 모델뿐 아니라 회원가입과 대여 과정을 포함한 서비스 전체 인증 흐름을 설계하는 경험을 얻었다."
        },

        {
        title:"Prototype 기반 서비스 검증",

        description:
        "실제 Edge Device 환경은 구현하지 못했지만 Prototype을 통해 서비스 동작 가능성을 검증하였다."
        },

        {
        title:"AI 기능과 서비스 개발 경험",

        description:
        "AI 모델 구현뿐 아니라 Flutter 애플리케이션과 연결하여 실제 사용자 서비스 흐름 안에서 AI 기능을 적용하는 경험을 얻었다."
        },
        ]}
        />

        <ProjectResources
        resources={[
            {
            title: "GitHub - Backend",
            description:
                "Backend Repository",
            url: "https://github.com/safeT-CE/Backend",
            },
            {
            title: "GitHub - Frontend",
            description:
                "Flutter Application",
            url: "https://github.com/safeT-CE/Flutter_main",
            },
            {
            title: "Conference Paper",
            description:
                "ACK 2024 학술발표대회 논문",
            url: "#",
            },
            {
            title: "Project Video",
            description:
                "ICT 멘토링 시연 영상",
            url: "https://www.youtube.com/watch?v=SRanw6_HfDg",
            },
        ]}
        />
<BackToProjects />
<ScrollToTop />
    </main>
  );
}