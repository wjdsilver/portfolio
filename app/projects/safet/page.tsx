import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectInfo from "@/components/project-detail/ProjectInfo";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ImplementationPipeline from "@/components/project-detail/ImplementationPipeline";
import ProjectContributions from "@/components/project-detail/ProjectContributions";
import ProjectTroubleshooting from "@/components/project-detail/ProjectTroubleshooting";
import ProjectResults from "@/components/project-detail/ProjectResults";
import ProjectLessons from "@/components/project-detail/ProjectLessons";
import ProjectResources from "@/components/project-detail/ProjectResources";
import BackToProjects from "@/components/project-detail/BackToProjects";
import PhishingPipeline from "@/components/project-detail/pipelines/PhishingPipeline";

export default function DomPhishingPage() {
  return (
    <main>

      <ProjectHero
  category="AI · Computer Vision"
  title="safeT: AI 기반 스마트 전동킥보드 안전 시스템"
  duration="2024.03 – 2024.10"
  description="AI 기반 얼굴 인식과 객체 탐지 기술을 활용하여 전동킥보드의 안전한 운행을 지원하는 스마트 안전 시스템을 개발하였다. 운전자 인증과 안전 규정 준수를 자동으로 확인하여 사고 예방을 목표로 하였다."
  image="/images/projects/safet-thumbnail.png"
  conferences={[
    {
      name: "ACK 2024",
      url: "#",
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
    "Pandas",
    "NumPy",
    "Flutter",
    "FastAPI",
  ]}
/>
      
      <ProjectInfo
  duration="2024.03 – 2024.10"
  role="AI Developer (Face Recognition)"
  status="Completed"
  team="4 Developers"
/>

        <ProjectOverview
  paragraphs={[
    `
    전동킥보드 이용 증가와 함께 무면허 운전,
    안전모 미착용, 다인 탑승 등 다양한 안전 문제가
    사회적 이슈로 대두되고 있다.
    `,

    `
    본 프로젝트는 딥러닝 기반 얼굴 인식과 객체 탐지 기술을
    활용하여 이용자 인증과 안전 규정 준수를 자동으로
    확인하는 스마트 전동킥보드 시스템을 개발하였다.
    `,

    `
    얼굴 인식 기반 사용자 인증과
    안전모 착용, 다인 탑승, 횡단보도 및
    주차 공간 검출 기능을 통합하여
    보다 안전한 퍼스널 모빌리티 환경을 구축하였다.
    `,
  ]}
/>

        <ImplementationPipeline
  
  steps={[
    {
      title: "User Authentication",
      description:
        "등록된 사용자 정보를 기반으로 얼굴 인증을 수행한다.",
    },
    {
      title: "Face Recognition",
      description:
        "OpenCV와 face_recognition을 이용하여 동일인 여부를 판별한다.",
    },
    {
      title: "Helmet Detection",
      description:
        "YOLOv8을 이용하여 안전모 착용 여부를 탐지한다.",
    },
    {
      title: "Rider Detection",
      description:
        "2인 이상 탑승 여부를 실시간으로 탐지한다.",
    },
    {
      title: "Road & Parking Detection",
      description:
        "횡단보도 및 점자블록을 탐지하여 안전한 주행과 반납을 지원한다.",
    },
    {
      title: "Safety Decision",
      description:
        "탐지 결과를 종합하여 운행 가능 여부와 경고를 제공한다.",
    },
  ]}
/>

        <ProjectContributions
  contributions={[
    {
      title: "얼굴 인증 시스템 개발",
      description:
        "128차원 얼굴 임베딩 간 유사도(Euclidean Distance)를 이용하여 계정에 등록된 사용자와 운전자의 얼굴 동일성 검증 기능을 구현하였다.",
    },
    {
      title: "실시간 얼굴 인식 파이프라인 구현",
      description:
        "카메라 입력 영상을 처리하고 얼굴 인코딩 및 유사도 비교를 수행하는 인증 파이프라인을 개발하였다.",
    },
    {
      title: "얼굴 특징 데이터 관리",
      description:
        "CSV 기반 얼굴 특징 데이터를 관리하여 사용자 등록 및 인증 기능을 구현하였다.",
    },
    {
      title: "AI 기능 통합",
      description:
        "얼굴 인증 결과와 YOLO 기반 안전 감지 기능을 연동하여 전체 시스템과 통합하였다.",
    },
    {
      title: "논문 작성 및 포스터 발표",
      description:
        "ACK 2024 학술발표대회 논문 작성 및 프로젝트 결과 정리에 참여하였다.",
    },
  ]}
/>

<ProjectTroubleshooting
  issues={[
    {
      problem:
        "조명 변화에 따라 얼굴 인식 정확도가 감소",
      cause:
        "촬영 환경에 따라 얼굴 특징 추출 결과가 달라짐",
      solution:
        "여러 환경에서 얼굴 데이터를 등록하고 유사도 임계값을 조정",
      result:
        "다양한 환경에서 안정적인 얼굴 인증 가능",
    },
    {
      problem:
        "실시간 얼굴 인식 처리 속도 저하",
      cause:
        "매 프레임마다 얼굴 인코딩을 수행",
      solution:
        "필요한 프레임만 추출하여 얼굴 인코딩 수행",
      result:
        "실시간 처리 성능 향상",
    },
    {
      problem:
        "AI 모듈 간 결과 연동",
      cause:
        "얼굴 인식과 객체 탐지 결과를 동시에 관리해야 함",
      solution:
        "각 AI 모듈의 결과를 통합하는 구조를 설계",
      result:
        "운행 가능 여부를 종합적으로 판단",
    },
  ]}
/>
<ProjectResults
  metrics={[
    {
      name: "Team",
      value: "4 Developers",
    },
    {
      name: "Award",
      value: "🥉 Bronze",
    },
    {
      name: "Conference",
      value: "ACK 2024",
    },
  ]}
  comparisons={[
    {
      method: "Face Recognition",
      accuracy: "OpenCV",
      recall: "face_recognition",
      f1: "Real-time",
    },
    {
      method: "Helmet Detection",
      accuracy: "YOLOv8",
      recall: "Roboflow",
      f1: "Detection",
    },
    {
      method: "Parking Detection",
      accuracy: "YOLOv8",
      recall: "Crosswalk",
      f1: "Braille Block",
    },
  ]}
  confusionMatrixImage="/images/projects/safet-demo.png"
/>
      <ProjectLessons
  lessons={[
    {
      title:
        "AI 모듈 통합 개발 경험",
      description:
        "얼굴 인식과 객체 탐지 모델을 하나의 서비스로 통합하는 경험을 쌓을 수 있었다.",
    },
    {
      title:
        "실시간 Computer Vision 시스템 개발",
      description:
        "실시간 영상 처리 환경에서 정확도와 처리 속도의 균형이 중요함을 경험하였다.",
    },
    {
      title:
        "협업 기반 프로젝트 수행",
      description:
        "4명의 개발자가 역할을 분담하여 AI, Frontend, Backend를 통합하는 협업 경험을 쌓았다.",
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
    </main>
  );
}