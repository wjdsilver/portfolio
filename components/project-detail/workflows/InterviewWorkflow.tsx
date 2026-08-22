import { Fragment } from "react";
import MotionWrapper from "@/components/animations/MotionWrapper";
import {
  Briefcase,
  Sparkles,
  Eye,
  ScanEye,
  MessageCircleQuestion,
  Brain,
  FileText,
  Play,
  ScanFace,
  PencilSparkles,
  Grid2x2,
  Database,
  LucideIcon,
} from "lucide-react";

const interviewFlow = [
  {
    title: "직무 선택",
    icon: Briefcase,
    description:
      "희망 기업과 직무를 입력하여 면접 정보를 설정한다.",
  },
  {
    title: "질문 생성",
    icon: Sparkles,
    description:
      "GPT API를 활용하여 사용자 맞춤형 질문과 공통 질문을 조합해 면접을 구성한다.",
  },
  {
    title: "Calibration",
    icon: ScanEye,
    description:
      "면접 시작 전 개인별 시선 기준값을 생성하기 위한 Calibration을 수행한다.",
  },
  {
    title: "모의면접",
    icon: MessageCircleQuestion,
    description:
      "질문에 답변하는 동안 영상과 음성을 동시에 수집한다.",
  },
  {
    title: "면접 분석",
    icon: Brain,
    description:
      "시선, 음성, 답변 내용을 종합 분석하여 면접 결과를 생성한다.",
  },
  {
    title: "결과 리포트",
    icon: FileText,
    description:
      "시선 분석, 음성 분석, 답변 스크립트 및 맞춤형 피드백을 제공한다.",
  },
];

const gazePipeline = [
  {
    title: "API 시작",
    icon: Play,
    description:
      "면접 시작과 함께 시선 추적 세션을 생성한다.",
  },
  {
    title: "얼굴 랜드마크 검출",
    icon: ScanFace,
    description:
      "dlib를 이용하여 얼굴과 68개의 랜드마크를 검출한다.",
  },
  {
    title: "Calibration",
    icon: ScanEye,
    description:
      "사용자별 기준값을 생성하여 시선 오차를 보정한다.",
  },
  {
    title: "동공 추적",
    icon: Eye,
    description:
      "동공 위치를 추적하고 수평·수직 시선 비율을 계산한다.",
  },
  {
    title: "시선 분석",
    icon: Grid2x2,
    description:
      "6개 영역으로 시선을 분류하고 영역별 응시 횟수를 계산한다.",
  },
  {
    title: "결과 시각화",
    icon: PencilSparkles,
    description:
      "영역별 응시 결과를 기반으로 시선 분포 이미지와 피드백을 생성한다.",
  },
  {
    title: "Backend Response",
    icon: Database,
    description:
      "Base64 이미지와 분석 결과를 API를 통해 Frontend에 전달한다.",
  },
];

function WorkflowCard({
  title,
  steps,
}: {
  title: string;
  steps: {
    title: string;
    icon: LucideIcon;
    description: string;
  }[];
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h3 className="text-2xl font-semibold mb-8">
        {title}
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-4">

      {steps.map((step, index) => (
  <Fragment key={step.title}>
    <div
      className="
        w-52
        h-56
        rounded-xl
        p-6
        shadow
        flex
        flex-col
        justify-center
        items-center
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="mb-4 text-indigo-800">
        <step.icon
          size={42}
          strokeWidth={1.8}
        />
      </div>

      <h4 className="font-semibold text-lg">
        {step.title}
      </h4>

      <p className="mt-3 text-sm text-gray-600 leading-6">
        {step.description}
      </p>
    </div>

    {index !== steps.length - 1 && (
      <div className="text-2xl text-indigo-800 font-bold">
        →
      </div>
    )}
  </Fragment>
))}

      </div>
    </div>
  );
}

export default function SafeTWorkflow() {
  return (
    <MotionWrapper>

      <section className="max-w-6xl mx-auto px-8 py-20">

        <h2 className="text-3xl font-bold mb-4">
          Service Workflow
        </h2>

        <p className="text-gray-600 max-w-3xl leading-7 mb-14">
  사용자가 모의면접을 시작하면 Calibration을 통해 개인별 시선 기준을 생성한 후
  dlib 기반 시선 추적을 수행한다. 면접 종료 시 누적된 시선 분포 데이터를 분석하여 시각화한 이미지와 피드백을 생성, 음성 및 답변 분석 결과와 함께 면접 리포트를 제공하였다.
</p>

        <div className="space-y-10">

  <WorkflowCard
    title="Interview Flow"
    steps={interviewFlow}
  />

  <WorkflowCard
    title="Gaze Analysis Pipeline"
    steps={gazePipeline}
  />

</div>

      </section>

    </MotionWrapper>
  );
}