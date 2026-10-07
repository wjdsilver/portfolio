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
        description="AI Security와 Graph Machine Learning 연구 경험 및 프로젝트를 효과적으로 소개하기 위해 Next.js 기반의 개인 포트폴리오 웹사이트를 설계하고 개발하였습니다. 재사용 가능한 컴포넌트 구조와 프로젝트 상세 페이지를 중심으로 연구 성과, 기술적 기여 및 문제 해결 과정을 체계적으로 정리하였습니다."
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
기존의 이력서형 포트폴리오에서는 프로젝트의 결과와 기술 스택은 보여줄 수 있지만,
연구에서 어떤 문제를 정의하고 어떤 과정을 거쳐 결과를 만들었는지까지 전달하기 어려웠습니다.
따라서 프로젝트의 문제 정의부터 구현 과정, 기술적 기여,
트러블슈팅 및 성과까지 하나의 흐름으로 확인할 수 있는
연구 중심 포트폴리오 웹사이트를 설계하였습니다.
`,
          `
프로젝트마다 내용을 직접 페이지에 구현하면 프로젝트가 늘어날수록
코드 중복과 수정 비용이 커질 것으로 판단했습니다.
따라서 Next.js와 React를 기반으로 프로젝트 카드와 상세 페이지를 컴포넌트화하고,
프로젝트별 콘텐츠와 공통 UI를 분리하는 구조를 설계하였습니다.
`,
          `
특히 AI 보안 연구, Computer Vision 프로젝트,
논문 및 학회 활동 등 서로 다른 형태의 경험을
일관된 디자인 시스템 안에서 표현하는 것을 목표로 하였습니다.
`,
        ]}
      />

      <ProjectContributions
        contributions={[
          {
  title: "연구 중심 포트폴리오 정보 구조 설계",
  description:
    "프로젝트의 결과만 나열하면 연구 과정과 문제 해결 방식이 드러나지 않는다고 판단했습니다. 따라서 About, Publications, Projects를 분리하고, 각 프로젝트를 배경 → 구현 → 문제 해결 → 결과 → 성과의 흐름으로 구성했습니다.",
},

          {
  title: "재사용 가능한 프로젝트 상세 페이지 컴포넌트 구현",
  description:
    "프로젝트마다 동일한 구조를 반복 구현하지 않도록 ProjectHero, ProjectInfo, ProjectOverview, ProjectContributions, ProjectTroubleshooting, ProjectResults, ProjectLessons, ProjectResources 등 공통 컴포넌트를 설계했습니다. 프로젝트별 내용은 Props로 전달하도록 구성했습니다.",
},

          {
  title: "프로젝트 데이터 기반 카드 구조 설계",
  description:
    "프로젝트가 추가될 때마다 UI 코드를 수정하는 방식은 확장성이 떨어진다고 판단했습니다. 프로젝트 정보를 객체 형태로 분리하고 ProjectCard가 데이터를 기반으로 렌더링하도록 구성하여 콘텐츠 추가와 수정이 코드 변경을 최소화하도록 설계했습니다.",
},

          {
  title: "연구 성과의 맥락을 함께 보여주는 구조 설계",
  description:
    "논문이나 수상 이력을 단순 목록으로 나열하기보다 어떤 프로젝트에서 나온 성과인지 연결해서 볼 수 있도록 프로젝트 상세 페이지에 학회, 논문, 수상 정보를 함께 배치했습니다.",
},

          {
  title: "콘텐츠 탐색을 위한 인터랙션 설계",
  description:
    "정적인 정보 나열보다 콘텐츠 간 시각적 계층을 명확하게 전달하기 위해 Framer Motion을 활용해 스크롤 기반 Fade In과 Hover Interaction을 적용하여 콘텐츠의 계층과 변화를 자연스럽게 전달했습니다.",
},


          {
            title: "프로젝트 상세 페이지 탐색 기능 구현",
            description:
              "Floating Table of Contents와 Scroll To Top 기능을 추가하여 긴 프로젝트 상세 페이지에서도 사용자가 원하는 섹션으로 빠르게 이동할 수 있도록 구현하였습니다.",
          },
        ]}
      />

      <ProjectTroubleshooting
        issues={[
          {
  problem:
    "프로젝트마다 상세 페이지 UI를 개별적으로 구현하면서 동일한 구조의 코드가 반복되는 문제가 발생했습니다.",
  cause:
    "프로젝트별 콘텐츠와 공통 UI가 하나의 페이지에 함께 구현되어 있었습니다.",
  solution:
    "공통 레이아웃과 콘텐츠 영역을 컴포넌트로 분리하고, 프로젝트별 내용은 Props로 전달하도록 구조를 변경했습니다.",
  result:
    "새로운 프로젝트를 추가할 때 기존 UI를 재작성하지 않고 콘텐츠 데이터만 추가할 수 있도록 개선했습니다.",
},

          {
  problem:
    "AI 연구 프로젝트와 Computer Vision 서비스 프로젝트처럼 프로젝트의 성격에 따라 필요한 정보와 콘텐츠 분량이 달랐습니다.",
  cause:
    "모든 프로젝트에 동일한 콘텐츠 구성을 강제하면 일부 프로젝트에서는 불필요한 영역이 생기거나 중요한 내용이 축소될 수 있었습니다.",
  solution:
    "Overview, Contributions, Troubleshooting, Results, Lessons, Resources를 공통 정보 구조로 정의하되 프로젝트에 필요한 섹션만 선택적으로 구성하도록 설계했습니다.",
  result:
    "일관된 사용자 경험을 유지하면서도 프로젝트의 특성에 맞게 콘텐츠를 구성할 수 있었습니다.",
},
{
  problem:
    "데스크톱 화면을 기준으로 구현한 일부 콘텐츠가 작은 화면에서 너비를 초과하면서 모바일 환경에서 가로 스크롤이 발생했습니다.",
  cause:
    "프로젝트 상세 페이지에 긴 텍스트와 표, 기술 스택 등의 콘텐츠가 포함되면서 화면 너비에 따른 레이아웃 대응이 충분하지 않은 부분이 있었습니다.",
  solution:
    "화면 크기에 따라 콘텐츠의 너비와 배치를 조정하고, 고정된 요소와 가변적인 요소를 구분하여 반응형 레이아웃을 수정했습니다.",
  result:
    "모바일에서도 콘텐츠가 화면 너비를 벗어나지 않도록 개선하고 다양한 화면 크기에서 일관된 사용자 경험을 유지할 수 있었습니다.",
},

          {
  problem:
    "프로젝트의 문제 정의부터 구현, 결과까지 하나의 페이지에 담으면서 원하는 정보를 찾기 어려운 문제가 있었습니다.",
  cause:
    "콘텐츠가 길어질수록 사용자가 페이지를 직접 스크롤하며 원하는 영역을 찾아야 했습니다.",
  solution:
    "Floating TOC와 Smooth Scroll을 적용하여 페이지의 전체 구조를 확인하고 필요한 섹션으로 바로 이동할 수 있도록 구성했습니다.",
  result:
    "긴 프로젝트 상세 페이지에서도 원하는 정보를 빠르게 탐색할 수 있도록 개선했습니다.",
},

          {
  problem:
    "Next.js App Router 환경에서 Framer Motion을 적용한 컴포넌트에서 Server Component와 Client Component 간 충돌이 발생했습니다.",
  cause:
    "애니메이션과 브라우저 인터랙션을 사용하는 컴포넌트는 Client Component가 필요했지만, 페이지 전체를 Client Component로 전환하는 것은 구조적으로 적절하지 않았습니다.",
  solution:
    "애니메이션과 브라우저 인터랙션이 필요한 컴포넌트만 Client Component로 분리하고 나머지 콘텐츠 영역은 Server Component 구조를 유지하도록 컴포넌트 경계를 조정했습니다.",
  result:
    "필요한 영역에서만 클라이언트 기능을 사용하면서 Next.js App Router의 컴포넌트 구조를 유지할 수 있었습니다.",
},
        ]}
      /> 

      <ProjectLessons
        lessons={[
          {
            title: "컴포넌트 설계의 중요성",
            description:
              "처음에는 하나의 페이지를 완성하는 것에 집중했지만, 프로젝트가 증가하면서 재사용 가능한 컴포넌트 구조를 설계하는 것이 유지보수성과 확장성에 큰 영향을 준다는 점을 경험하였습니다.",
          },

          {
            title: "연구 경험을 제품처럼 표현하는 방법",
            description:
              "논문과 연구 결과를 단순히 나열하는 것이 아니라 문제 정의, 구현, 실험, 성과 및 배운 점으로 구조화함으로써 연구 경험을 비전공자도 이해할 수 있는 형태로 전달하는 방법을 고민하였습니다.",
          },

          {
            title: "Next.js App Router 구조 이해",
            description:
              "Server Component와 Client Component의 역할을 구분하고 애니메이션 및 사용자 인터랙션 기능을 적절히 분리하면서 Next.js 기반 애플리케이션 구조에 대한 이해를 높일 수 있었습니다.",
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