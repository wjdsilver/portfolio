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
        duration="2026.02 – 현재"
        description="피싱 웹페이지의 HTML에 존재하는 구조적 패턴에 주목하여, DOM Graph와 Weisfeiler-Lehman Subtree Feature를 활용한 구조 기반 피싱 탐지 방법을 연구했습니다. 나아가 LLM이 생성한 피싱 웹페이지로 연구를 확장하여, 실제 피싱 웹페이지에서 학습한 구조적 특징이 새로운 형태의 피싱에도 일반화될 수 있는지 검증했습니다."

        conferences={[
          {
            name: "KCC 2026",
            url: "https://www.kiise.or.kr/conference/kcc/2026/",
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
        duration="2026. 02 – 현재"
        role="제1저자"
        status="진행 중"
        team="개인 연구"
      />

        <ProjectOverview
        paragraphs={[
          '기존 피싱 웹페이지 탐지 방법이 URL 문자열이나 시각적·표면적 정보에 주로 의존한다는 점에 주목하여, 웹페이지의 HTML 구조 자체를 활용한 피싱 탐지 방법을 연구했습니다. HTML 문서를 DOM Graph로 표현하고 Weisfeiler-Lehman Subtree Feature를 추출하여, 피싱 웹페이지에 나타나는 구조적 패턴을 학습하고 Random Forest 기반으로 탐지했습니다.',

          '이후 연구를 LLM이 생성한 피싱 웹페이지로 확장했습니다. 실제 피싱 웹페이지만으로 학습한 모델을 LLM 생성 피싱 웹페이지에 적용하여, 학습된 구조적 특징이 새로운 형태의 피싱 페이지에서도 일반화될 수 있는지 검증했습니다. 이를 통해 실제 피싱 웹페이지에 대한 탐지 성능뿐만 아니라 생성형 AI 환경에서 구조 기반 탐지 방법의 일반화 가능성까지 분석했습니다.',
        ]}
        />

        <ImplementationPipeline
        

        pipeline={<PhishingPipeline />}

        steps={[
  {
    title: "HTML Parsing",
    description:
      "BeautifulSoup을 이용하여 HTML 문서를 분석하고 DOM 구조를 생성했습니다.",
  },

  {
    title: "DOM Tree Construction",
    description:
      "HTML Element 간의 부모-자식 관계를 기반으로 계층적인 DOM Tree를 구성했습니다.",
  },

  {
    title: "Graph Conversion",
    description:
      "구성한 DOM Tree를 NetworkX 기반 Graph 구조로 변환하여 웹페이지의 구조적 관계를 표현했습니다.",
  },

  {
    title: "WL Feature Extraction",
    description:
      "Weisfeiler-Lehman Subtree 알고리즘을 적용하여 DOM Graph의 구조적 패턴을 Feature로 추출했습니다.",
  },

  {
    title: "Feature Selection",
    description:
      "Top-K Feature Selection을 적용하여 주요 구조적 Feature를 선별하고 Feature 차원을 축소했습니다.",
  },

  {
    title: "Classification",
    description:
      "Random Forest 모델을 이용하여 추출한 Feature를 기반으로 피싱 여부를 분류했습니다.",
  },
  {
  title: "Generalization Evaluation",
  description:
    "실제 피싱 웹페이지로 학습한 모델을 LLM 생성 피싱 웹페이지에 적용하여 구조적 Feature의 일반화 성능을 평가했습니다.",
},
]}

        />

        <ProjectContributions

contributions={[

  {
    title:"DOM Graph 생성 파이프라인 구현",
 description:
 "HTML 문서를 DOM 기반 Graph 구조로 변환하는 데이터 처리 파이프라인을 설계 및 구현했습니다.",
  },


  {
    title:"WL Subtree Feature 및 Random Forest 기반 탐지 구현",
 description:
 "Weisfeiler-Lehman 알고리즘을 활용해 DOM Graph의 구조적 Feature를 추출하고, Random Forest 기반 피싱 분류 실험을 수행했습니다.",
  },


  {
    title:"Feature 비교 및 성능 분석",
 description:
 "Tag Count, Semantic Feature, DOM Statistical Feature, WL Subtree Feature 등 다양한 Feature를 활용하여 피싱 탐지 성능을 비교 및 분석했습니다.",
  },


  {
    title:"LLM 생성 피싱 웹페이지 일반화 실험",
 description:
 "실제 피싱 웹페이지로 학습한 탐지 모델을 LLM 생성 피싱 웹페이지에 적용하여, 구조적 Feature의 일반화 성능을 평가했습니다.",
  },


  {
    title:"논문 작성 및 연구 결과 정리",
 description:
 "연구 결과를 정리하여 KCC 및 ICONIP 논문을 작성하고 연구 결과를 학술 발표 형태로 정리했습니다.",
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
      "WL Feature 차수가 증가하면서 Feature 수가 급격하게 증가",

    cause:
      "높은 차수의 WL Subtree Feature에서 Feature Explosion 및 Sparse Feature 발생",

    solution:
      "Top-K Feature Selection을 적용하여 상위 3,000개 Feature 사용",

    result:
      "Feature 차원을 축소하고 분류 성능을 안정적으로 비교",
  },

]}

/>
<ProjectResults
title= "KCC 2026 — 실제 피싱 웹페이지 탐지"
description="실제 피싱 웹페이지를 대상으로 다양한 Feature의 탐지 성능을 비교하고, WL Subtree 기반 구조적 Feature의 효과를 평가했습니다."
  
  metrics={[
    {
      name: "Accuracy",
      value: "96.19%",
    },
    {
      name: "Phishing Recall",
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
    accuracy: "95.02%",
    recall: "92.23%",
    f1: "93.76%",
  },
  {
    method: "Semantic Count",
    accuracy: "95.37%",
    recall: "91.84%",
    f1: "94.15%",
  },
  {
    method: "DOM Statistical",
    accuracy: "92.76%",
    recall: "88.87%",
    f1: "90.87%",
  },
  {
    method: "WL Subtree (h=1)",
    accuracy: "95.91%",
    recall: "93.09%",
    f1: "94.87%",
  },
  {
    method: "WL Subtree (h=2)",
    accuracy: "96.19%",
    recall: "93.76%",
    f1: "95.22%",
  },
  {
    method: "WL Subtree (h=3)",
    accuracy: "96.11%",
    recall: "93.67%",
    f1: "95.13%",
  },
]}




      additionalResult={{
    title: "ICONIP 2026 — LLM-generated Phishing Generalization",
    description:
      "실제 피싱 웹페이지로만 학습한 모델을 Claude Haiku 4.5가 생성한 피싱 웹페이지에 적용하여 구조적 Feature의 일반화 성능을 평가했습니다.",
    metrics: [
      {
        name: "Phishing Recall",
        value: "99.5%",
      },
      {
        name: "Evaluation Pages",
        value: "200",
      },
      {
        name: "Training Pages",
        value: "12,820",
      },
    ],
  }}
/>

      <ProjectAchievements
  achievements={[
    {
      title: "KCC 2026 우수발표논문상",
      description:
        "DOM Graph 기반 피싱 웹페이지 탐지 연구의 발표 성과를 인정받아 KCC 2026 우수발표논문상을 수상하였습니다.",
      image: "/images/KCC_award.jpg",
    },
    {
      title: "ICONIP 2026 Extended Abstract",
      description:
        "기존 DOM Graph 기반 피싱 탐지 연구를 LLM 생성 피싱 웹페이지로 확장하고, 실제 피싱 웹페이지에서 학습한 구조적 Feature가 새로운 생성형 피싱 환경에서도 일반화될 수 있는지 검증했습니다.",
    },
  ]}
/>

      <ProjectLessons

lessons={[

  {
    title:
"웹페이지 구조 기반 표현의 가능성",

description:
"HTML DOM 구조를 Graph로 표현하여 URL이나 시각적 정보에 의존하지 않고 구조적 Feature만으로 피싱 웹페이지를 분류할 수 있음을 확인했습니다."
  },


  {
    title:
"WL Subtree Feature의 효과",

description:
"Weisfeiler-Lehman Subtree Feature가 피싱과 정상 웹페이지 간 구조적 차이를 효과적으로 표현할 수 있음을 확인하였습니다."
  },


  {
    title:
"생성형 AI 환경에서의 일반화 가능성",

description:
"실제 피싱 웹페이지에서 학습한 국소적 DOM 구조 Feature가 LLM 생성 피싱 웹페이지에서도 효과적으로 활용될 수 있음을 확인했습니다."
  },

]}

/>
<ProjectResources

resources={[

  {
    title: "KCC 2026 — Conference Paper",
    description:
      "DOM Graph 기반 피싱 탐지 연구 논문",
    url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12929706",
  },


  {
    title: "KCC 2026 — GitHub",
    description:
      "연구 코드와 실험 결과 및 발표 포스터",
    url: "https://github.com/wjdsilver/phishing-dom-wl-kcc2026",
  },
/*
  {
    title: "ICONIP 2026 — Extended Abstract",
    description:
      "LLM 생성 피싱 웹페이지 환경으로 확장한 연구",
    url: "ICONIP_PAPER_URL",
  },
*/
  {
    title: "ICONIP 2026 — GitHub",
    description:
      "LLM 생성 피싱 웹페이지로 확장한 연구 코드 및 실험 자료",
    url: "https://github.com/wjdsilver/phishing-dom-wl-kcc2026",
  },
]}

/>
<BackToProjects />
<ScrollToTop />
    </main>
  );
}