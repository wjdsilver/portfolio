import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectInfo from "@/components/project-detail/ProjectInfo";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ProjectArchitecture from "@/components/project-detail/ImplementationPipeline";
import ProjectContributions from "@/components/project-detail/ProjectContributions";
import ProjectTroubleshooting from "@/components/project-detail/ProjectTroubleshooting";
import ProjectResults from "@/components/project-detail/ProjectResults";
import ProjectLessons from "@/components/project-detail/ProjectLessons";
import ProjectResources from "@/components/project-detail/ProjectResources";
import BackToProjects from "@/components/project-detail/BackToProjects";

export default function DomPhishingPage() {
  return (
    <main>
        <ProjectHero
  category="Web Development"
  title="Research Portfolio Website"
  duration="2026.07 – Present"
  description="연구 성과와 프로젝트를 효과적으로 소개하기 위해 Next.js 기반 개인 포트폴리오 웹사이트를 설계하고 구현하였다. 컴포넌트 기반 구조와 애니메이션을 적용하여 유지보수성과 사용자 경험을 개선하였다."
  image="/images/projects/portfolio-thumbnail.png"
  conferences={[]}
  techStack={[
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
  ]}
/>

<ProjectInfo
  duration="2026.07 – Present"
  role="Developer & Designer"
  status="Completed"
  team="1 Developer"
/>

<ProjectOverview
  paragraphs={[
    `
    기존 포트폴리오는 프로젝트와 연구 내용을 체계적으로
    정리하기 어려웠으며 유지보수가 쉽지 않았다.
    `,
    `
    이를 해결하기 위해 Next.js App Router와
    컴포넌트 기반 구조를 적용하여
    확장 가능한 포트폴리오를 설계하였다.
    `,
    `
    연구 프로젝트, 논문, 기술 스택 등을
    일관된 디자인으로 제공하고,
    반응형 UI와 애니메이션을 적용하여
    사용자 경험을 향상시켰다.
    `,
  ]}
/>

<ProjectArchitecture
  image="/images/projects/portfolio-architecture.png"
  steps={[
    {
      title: "Planning",
      description:
        "페이지 구조와 사용자 흐름을 설계하였다.",
    },
    {
      title: "UI Design",
      description:
        "Tailwind CSS를 활용하여 일관된 디자인 시스템을 구성하였다.",
    },
    {
      title: "Component Design",
      description:
        "Hero, Projects, Publications 등 재사용 가능한 컴포넌트를 설계하였다.",
    },
    {
      title: "Animation",
      description:
        "Framer Motion을 적용하여 자연스러운 화면 전환과 인터랙션을 구현하였다.",
    },
    {
      title: "Responsive Layout",
      description:
        "데스크톱과 모바일 환경 모두에서 사용할 수 있도록 반응형 레이아웃을 적용하였다.",
    },
    {
      title: "Deployment",
      description:
        "GitHub와 Vercel을 이용하여 지속적으로 배포 및 관리하였다.",
    },
  ]}
/>

<ProjectContributions
  contributions={[
    {
      title: "전체 UI/UX 설계",
      description:
        "연구자 포트폴리오에 적합한 디자인과 페이지 구성을 직접 설계하였다.",
    },
    {
      title: "컴포넌트 기반 개발",
      description:
        "재사용 가능한 컴포넌트를 작성하여 유지보수성을 높였다.",
    },
    {
      title: "애니메이션 구현",
      description:
        "Framer Motion을 이용하여 스크롤 및 페이지 전환 애니메이션을 구현하였다.",
    },
    {
      title: "프로젝트 상세 페이지 개발",
      description:
        "프로젝트별 상세 페이지와 공통 레이아웃을 구현하였다.",
    },
    {
      title: "배포 및 버전 관리",
      description:
        "GitHub와 Vercel을 이용하여 프로젝트를 관리하고 배포하였다.",
    },
  ]}
/>

<ProjectTroubleshooting
  issues={[
    {
      problem:
        "Framer Motion이 App Router 환경에서 동작하지 않음",
      cause:
        "Server Component에서 motion 컴포넌트를 직접 사용",
      solution:
        "MotionWrapper를 별도 Client Component로 분리",
      result:
        "애니메이션이 정상적으로 동작",
    },
    {
      problem:
        "프로젝트 상세 페이지마다 코드 중복 발생",
      cause:
        "레이아웃과 UI를 반복 작성",
      solution:
        "공통 컴포넌트(ProjectHero, ProjectInfo 등)로 분리",
      result:
        "재사용성과 유지보수성 향상",
    },
    {
      problem:
        "컴포넌트 간 디자인 일관성이 부족",
      cause:
        "초기 개발 과정에서 스타일이 개별적으로 작성됨",
      solution:
        "공통 색상, 간격, Typography를 통일",
      result:
        "전체 UI의 완성도 향상",
    },
  ]}
/>

<ProjectResults
  metrics={[
    {
      name: "Pages",
      value: "10+",
    },
    {
      name: "Reusable Components",
      value: "20+",
    },
    {
      name: "Responsive",
      value: "100%",
    },
  ]}
  
  confusionMatrixImage="/images/projects/portfolio-preview.png"
/>

<ProjectLessons
  lessons={[
    {
      title:
        "컴포넌트 기반 설계의 중요성",
      description:
        "공통 컴포넌트를 활용하면 유지보수성과 확장성이 크게 향상됨을 경험하였다.",
    },
    {
      title:
        "디자인 시스템 구축",
      description:
        "일관된 간격과 Typography를 적용하여 사용자 경험을 개선할 수 있었다.",
    },
    {
      title:
        "실제 서비스 개발 경험",
      description:
        "기획부터 구현, 배포까지 전체 개발 과정을 직접 수행하며 프로젝트 운영 경험을 쌓았다.",
    },
  ]}
/>

<ProjectResources
  resources={[
    {
      title: "GitHub Repository",
      description:
        "프로젝트 소스코드",
      url: "https://github.com/your-id",
    },
    {
      title: "Live Demo",
      description:
        "배포된 포트폴리오",
      url: "https://your-portfolio.vercel.app",
    },
  ]}
/>

<BackToProjects />
      
    </main>
  );
}