import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectInfo from "@/components/project-detail/ProjectInfo";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ImplementationPipeline from "@/components/project-detail/ImplementationPipeline";
import ProjectContributions from "@/components/project-detail/ProjectContributions";
import ProjectTroubleshooting from "@/components/project-detail/ProjectTroubleshooting";
import ProjectResults from "@/components/project-detail/ProjectResults";
import ProjectAchievements from "@/components/project-detail/ProjectAchievements";
import ProjectLessons from "@/components/project-detail/ProjectLessons";
import ProjectResources from "@/components/project-detail/ProjectResources";
import BackToProjects from "@/components/project-detail/BackToProjects";
import PhishingPipeline from "@/components/project-detail/pipelines/PhishingPipeline";
import ScrollToTop from "@/components/animations/ScrollToTop";
import FloatingTOC from "@/components/project-detail/FloatingTOC";

export default function DomPhishingPage() {
  return (
    <main>
      <FloatingTOC

  sections={[
  {
  id: "overview",
  title: "프로젝트 소개",
},
{
  id: "pipeline",
  title: "구현 과정",
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
  id: "results",
  title: "결과 및 성능",
},
{
  id: "achievements",
  title: "주요 성과",
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
        category="AI 보안"
        title="DOM Graph 기반 피싱 웹페이지 탐지"
        duration="2026.02 – Present"
        description="URL 기반 탐지 방식의 한계를 극복하기 위해 HTML 문서를 DOM Graph로 표현하고 Weisfeiler-Lehman Subtree Feature를 활용하여 구조 기반 피싱 웹페이지 탐지 방법을 연구하였다."
        image="/images/projects/dom-architecture.png"
        conferences={[
          {
            name: "KCC 2026",
            url: "https://www.kiise.or.kr/",
          },
          {
            name: "ICONIP 2026",
            url: "https://iconip2026.org/",
          },
        ]}
        techStack={[
          "Python",
          "BeautifulSoup",
          "NetworkX",
          "Scikit-learn",
          "Random Forest",
          "Graph ML",
        ]}
      />
      
      <ProjectInfo
        duration="2026. 02 – Present"
        role="First Author"
        status="Ongoing Research"
        team="1 Researcher"
      />

        <ProjectOverview
        paragraphs={[
            `
            기존의 피싱 탐지 방법은 URL 문자열이나
            웹페이지 시각적 특징에 의존하여 탐지하는 방식이
            주로 사용되어 왔다.
            `,

            `
            하지만 URL 난독화 및 정교하게 제작된
            피싱 페이지 증가로 인해 구조적인 분석 방법의
            필요성이 증가하고 있다.
            `,

            `
            본 프로젝트에서는 HTML 문서를 DOM Graph로 변환하고,
            Weisfeiler-Lehman Subtree Feature를 활용하여
            피싱 웹페이지를 탐지하는 방법을 제안하였다.
            `,
        ]}
        />

        <ImplementationPipeline

        pipeline={<PhishingPipeline />}

        steps={[

        {
            title: "HTML Parsing",
            description:
            "BeautifulSoup을 이용하여 HTML 문서를 분석하고 DOM 구조를 생성한다.",
        },


        {
            title: "DOM Tree Construction",
            description:
            "HTML Element를 계층 구조의 DOM Tree 형태로 표현한다.",
        },


        {
            title: "Graph Conversion",
            description:
            "DOM Tree를 NetworkX 기반 그래프 구조로 변환한다.",
        },


        {
            title: "WL Feature Extraction",
            description:
            "Weisfeiler-Lehman Subtree Feature를 추출하여 구조적 패턴을 분석한다.",
        },


        {
            title: "Feature Selection",
            description:
            "Top-K Feature Selection을 통해 Feature 차원을 감소시킨다.",
        },


        {
            title: "Classification",
            description:
            "Random Forest 모델을 이용하여 피싱 여부를 분류한다.",
        },

        ]}

        />

        <ProjectContributions

contributions={[

  {
    title:"DOM Graph 생성 파이프라인 구현",
 description:
 "HTML 문서를 DOM 기반 Graph 구조로 변환하는 데이터 처리 파이프라인을 설계 및 구현하였다.",
  },


  {
    title:"WL Subtree Feature 구현",
 description:
 "Weisfeiler-Lehman 알고리즘 기반 구조 Feature 추출 방법을 구현하였다.",
  },


  {
    title:"피싱 데이터셋 구축",
 description:
 "실제 피싱 데이터와 LLM 생성 피싱 데이터를 포함한 실험 데이터셋을 구축하였다.",
  },


  {
    title:"머신러닝 실험 및 성능 평가",
 description:
 "Random Forest 기반 분류 실험과 다양한 Feature 비교 실험을 수행하였다.",
  },


  {
    title:"논문 작성 및 연구 결과 정리",
 description:
 "연구 결과를 정리하여 KCC 및 ICONIP 학술 논문 작성에 참여하였다.",
  },

]}

/>

<ProjectTroubleshooting

issues={[

  {
    problem:
      "대규모 HTML Graph 생성 과정에서 MemoryError 발생",

    cause:
      "전체 Graph 데이터를 메모리에 저장하는 방식으로 인해 메모리 사용량 증가",

    solution:
      "Generator 기반 iter_graphs() 방식을 적용하여 순차 처리",

    result:
      "대규모 웹페이지 데이터셋 처리 가능",
  },



  {
    problem:
      "LLM 생성 피싱 페이지에서 기존 Feature와 다른 HTML 패턴 발생",

    cause:
      "생성 페이지에서 Custom Tag 및 단순화된 HTML 구조 증가",

    solution:
      "Semantic Label 기반 Feature 변환 적용",

    result:
      "AI 생성 피싱 페이지에 대한 탐지 Robustness 향상",
  },



  {
    problem:
      "WL Feature 차수 증가(h=3)에 따른 성능 감소",

    cause:
      "높은 차수 Feature로 인한 Feature Explosion 및 Sparse Feature 발생",

    solution:
      "Top-K Feature Selection 적용 및 상위 3000개 Feature 사용",

    result:
      "Feature 복잡도 감소와 안정적인 성능 유지",
  },

]}

/>
<ProjectResults

      metrics={[
        {
          name: "Accuracy",
          value: "95.87%",
        },
        {
          name: "Recall",
          value: "93.76%",
        },
        {
          name: "F1-score",
          value: "95.22%",
        },
      ]}


      comparisons={[
        {
          method: "Tag Count",
          accuracy: "95.37%",
          recall: "92.10%",
          f1: "94.80%",
        },

        {
          method: "Semantic Label",
          accuracy: "95.56%",
          recall: "92.85%",
          f1: "95.01%",
        },

        {
          method: "WL Subtree Feature",
          accuracy: "95.87%",
          recall: "93.76%",
          f1: "95.22%",
        },
      ]}


      confusionMatrixImage="/images/projects/confusion-matrix.png"

      />

      <ProjectAchievements
  achievements={[
    {
      title: "KCC 2026 우수발표논문상",
      description:
        "DOM Graph 기반 피싱 웹페이지 탐지 연구의 발표 성과를 인정받아 KCC 2026 우수발표논문상을 수상하였다.",
      image: "/images/projects/phishing/kcc-award.png",
    },
  ]}
/>

      <ProjectLessons

lessons={[

  {
    title:
"웹페이지 구조 기반 표현의 가능성",

description:
"HTML DOM 구조를 Graph로 표현함으로써 URL이나 시각적 정보 없이도 구조적 특징 기반 피싱 탐지가 가능함을 확인하였다."
  },


  {
    title:
"WL Subtree Feature의 효과",

description:
"Weisfeiler-Lehman Subtree Feature가 피싱과 정상 웹페이지 간 구조적 차이를 효과적으로 표현할 수 있음을 확인하였다."
  },


  {
    title:
"AI 생성 피싱 대응 가능성",

description:
"LLM이 생성한 피싱 웹페이지에서도 실제 피싱과 유사한 구조적 특징이 존재함을 확인하였다."
  },

]}

/>
<ProjectResources

resources={[

  {
    title: "Conference Paper",
    description:
      "DOM Graph 기반 피싱 탐지 연구 논문",
    url: "#",
  },


  {
    title: "Poster",
    description:
      "연구 방법 및 실험 결과를 정리한 발표 포스터",
    url: "#",
  },


  {
    title: "GitHub",
    description:
      "연구 코드 및 구현 내용을 확인할 수 있는 저장소",
    url: "https://github.com/your-id",
  },


  {
    title: "Presentation",
    description:
      "연구 발표 자료 및 실험 분석 내용",
    url: "#",
  },

]}

/>
<BackToProjects />
<ScrollToTop />
    </main>
  );
}