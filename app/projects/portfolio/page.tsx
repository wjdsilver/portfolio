import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectInfo from "@/components/project-detail/ProjectInfo";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ProjectContributions from "@/components/project-detail/ProjectContributions";
import ProjectTroubleshooting from "@/components/project-detail/ProjectTroubleshooting";
import ProjectLessons from "@/components/project-detail/ProjectLessons";
import ProjectResources from "@/components/project-detail/ProjectResources";
import BackToProjects from "@/components/project-detail/BackToProjects";
import ScrollToTop from "@/components/animations/ScrollToTop";
import FloatingTOC from "@/components/project-detail/FloatingTOC";

export default function PortfolioPage() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden
    bg-gradient-to-b
      from-blue-50/40
      via-white
      to-white">
      <FloatingTOC
        sections={[
          {
            id: "overview",
            title: "프로젝트 소개",
          },
          {
            id: "contributions",
            title: "주요 기여",
          },
          {
            id: "troubleshooting",
            title: "트러블슈팅",
          },
          {
            id: "lessons",
            title: "배운 점",
          },
          {
            id: "resources",
            title: "관련 자료",
          },
        ]}
      />

      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-8 pt-8">
        <BackToProjects />
      </div>

      <ProjectHero
        category="Frontend Development · UI/UX"
        title="개인 연구 및 프로젝트 포트폴리오 웹사이트"
        duration="2026.07 – 현재"
        description="AI Security와 Graph Machine Learning 연구 경험 및 프로젝트를 효과적으로 소개하기 위해 Next.js 기반의 개인 포트폴리오 웹사이트를 설계하고 개발하였다. 재사용 가능한 컴포넌트 구조와 프로젝트 상세 페이지를 중심으로 연구 성과, 기술적 기여 및 문제 해결 과정을 체계적으로 정리하였다."
        conferences={[]}
        techStack={[
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Git",
          "GitHub",
        ]}
      />

      <ProjectInfo
        duration="2026.07 – 현재"
        role="프론트엔드 · UI/UX 디자인"
        status="진행중" 
        team="개인 프로젝트"
      />

      <ProjectOverview
        paragraphs={[
          `
기존의 단순한 이력서 형식 포트폴리오가 아닌,
연구 프로젝트의 문제 정의부터 구현 과정, 기술적 기여,
트러블슈팅 및 성과까지 하나의 흐름으로 보여줄 수 있는
연구 중심 포트폴리오 웹사이트를 개발하였다.
`,
          `
Next.js와 React를 기반으로 페이지를 구성하고,
프로젝트 카드와 상세 페이지를 컴포넌트화하여
여러 프로젝트에 동일한 정보 구조를 재사용할 수 있도록 설계하였다.
`,
          `
특히 AI 보안 연구, Computer Vision 프로젝트,
논문 및 학회 활동 등 서로 다른 형태의 경험을
일관된 디자인 시스템 안에서 표현하는 것을 목표로 하였다.
`,
        ]}
      />

      <ProjectContributions
        contributions={[
          {
            title: "연구 중심 포트폴리오 정보 구조 설계",
            description:
              "About, Publications, Projects 등 주요 콘텐츠를 구성하고, 프로젝트별 연구 배경부터 구현 과정, 결과, 성과까지 하나의 흐름으로 확인할 수 있도록 정보 구조를 설계하였다.",
          },

          {
            title: "재사용 가능한 프로젝트 상세 페이지 컴포넌트 구현",
            description:
              "ProjectHero, ProjectInfo, ProjectOverview, ProjectContributions, ProjectTroubleshooting, ProjectResults, ProjectLessons, ProjectResources 등 공통 컴포넌트를 설계하여 여러 프로젝트에서 동일한 구조를 재사용할 수 있도록 구현하였다.",
          },

          {
            title: "프로젝트 데이터 기반 카드 구조 설계",
            description:
              "프로젝트 정보를 객체 형태로 관리하고 ProjectCard 컴포넌트에서 이를 렌더링하도록 구성하여 프로젝트 추가 및 수정이 용이한 구조를 구현하였다.",
          },

          {
            title: "연구 성과 및 학술 활동 시각화",
            description:
              "학회 발표, 논문 게재, 우수발표논문상 등 프로젝트의 연구 성과를 프로젝트 카드와 상세 페이지에서 명확하게 확인할 수 있도록 구성하였다.",
          },

          {
            title: "Framer Motion 기반 인터랙션 구현",
            description:
              "스크롤 기반 Fade In 애니메이션과 Hover Interaction을 적용하여 콘텐츠 탐색 과정에서 자연스러운 움직임과 시각적 피드백을 제공하였다.",
          },

          {
            title: "반응형 UI 및 사용자 경험 개선",
            description:
              "Tailwind CSS를 활용하여 화면 크기에 따라 레이아웃이 자연스럽게 조정되도록 구현하고, 모바일 환경에서 가로 스크롤 문제가 발생하지 않도록 페이지 구조를 개선하였다.",
          },

          {
            title: "프로젝트 상세 페이지 탐색 기능 구현",
            description:
              "Floating Table of Contents와 Scroll To Top 기능을 추가하여 긴 프로젝트 상세 페이지에서도 사용자가 원하는 섹션으로 빠르게 이동할 수 있도록 구현하였다.",
          },
        ]}
      />

      <ProjectTroubleshooting
        issues={[
          {
            problem:
              "여러 프로젝트에서 동일한 상세 페이지 UI를 반복 구현해야 했다.",

            cause:
              "프로젝트마다 페이지를 개별적으로 작성할 경우 코드 중복이 증가하고 디자인 수정 시 모든 페이지를 수정해야 하는 문제가 있었다.",

            solution:
              "ProjectHero, ProjectInfo, ProjectOverview 등 콘텐츠 영역을 공통 컴포넌트로 분리하고, 프로젝트별 내용은 Props를 통해 전달하는 구조로 변경하였다.",

            result:
              "새로운 프로젝트 페이지를 추가할 때 공통 UI를 다시 구현하지 않고 콘텐츠 데이터만 작성하여 일관된 디자인을 유지할 수 있었다.",
          },

          {
            problem:
              "프로젝트 상세 페이지마다 콘텐츠 양과 구조가 달라 디자인 일관성을 유지하기 어려웠다.",

            cause:
              "AI 연구 프로젝트와 Computer Vision 기반 서비스 프로젝트는 결과물과 설명 방식이 달라 동일한 UI를 적용하기 어려웠다.",

            solution:
              "모든 프로젝트에서 Overview, Contributions, Troubleshooting, Results, Lessons, Resources와 같은 공통 정보 구조를 사용하고 필요한 섹션만 선택적으로 구성하도록 설계하였다.",

            result:
              "프로젝트의 성격은 유지하면서도 전체 포트폴리오에서 통일된 사용자 경험을 제공할 수 있었다.",
          },

          {
            problem:
              "긴 프로젝트 상세 페이지에서 원하는 내용을 빠르게 찾기 어려웠다.",

            cause:
              "연구 과정과 실험 결과, 트러블슈팅 등 콘텐츠가 증가하면서 사용자가 전체 페이지를 스크롤해야 하는 문제가 발생하였다.",

            solution:
              "섹션별 id를 기반으로 Floating Table of Contents를 구현하고 smooth scrolling을 적용하여 원하는 섹션으로 이동할 수 있도록 하였다.",

            result:
              "긴 프로젝트 페이지에서도 주요 내용을 빠르게 탐색할 수 있어 콘텐츠 접근성이 향상되었다.",
          },

          {
            problem:
              "Framer Motion을 적용하는 과정에서 Server Component와 Client Component 관련 오류가 발생하였다.",

            cause:
              "Next.js App Router 환경에서는 animation 기능과 브라우저 API를 사용하는 컴포넌트를 Client Component로 관리해야 했다.",

            solution:
              "MotionWrapper와 애니메이션 관련 컴포넌트에 use client를 적용하고, Server Component에서 직접 Motion Component를 호출하지 않도록 구조를 분리하였다.",

            result:
              "Next.js의 Server Component 구조를 유지하면서도 스크롤 기반 애니메이션을 안정적으로 적용할 수 있었다.",
          },
        ]}
      /> 

      <ProjectLessons
        lessons={[
          {
            title: "컴포넌트 설계의 중요성",
            description:
              "처음에는 하나의 페이지를 완성하는 것에 집중했지만, 프로젝트가 증가하면서 재사용 가능한 컴포넌트 구조를 설계하는 것이 유지보수성과 확장성에 큰 영향을 준다는 점을 경험하였다.",
          },

          {
            title: "연구 경험을 제품처럼 표현하는 방법",
            description:
              "논문과 연구 결과를 단순히 나열하는 것이 아니라 문제 정의, 구현, 실험, 성과 및 배운 점으로 구조화함으로써 연구 경험을 비전공자도 이해할 수 있는 형태로 전달하는 방법을 고민하였다.",
          },

          {
            title: "Next.js App Router 구조 이해",
            description:
              "Server Component와 Client Component의 역할을 구분하고 애니메이션 및 사용자 인터랙션 기능을 적절히 분리하면서 Next.js 기반 애플리케이션 구조에 대한 이해를 높일 수 있었다.",
          },
        ]}
      />

      <ProjectResources
        resources={[
          {
            title: "GitHub",
            description:
              "포트폴리오 웹사이트의 전체 소스 코드와 개발 기록",
            url: "https://github.com/wjdsilver/portfolio",
          },
        ]}
      />

      <BackToProjects />
      <ScrollToTop />
    </main>
  );
}