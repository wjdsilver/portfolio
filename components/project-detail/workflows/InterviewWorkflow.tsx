import { Fragment } from "react";
import MotionWrapper from "@/components/animations/MotionWrapper";
import {
  Briefcase,
  Sparkles,
  MessageCircleQuestionMark,
  Eye,
  ScanEye,
  MessagesSquare,
  Brain,
  FileText,
  Play,
  SquareText,
  AudioLines,
  ChartLine,
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
      "희망 직군과 지원 직무를 입력하여 면접에 필요한 정보를 설정합니다.",
  },
  {
    title: "GPT 기반 맞춤형 질문 생성",
    icon: Sparkles,
    description:
      "입력한 정보를 바탕으로 GPT API를 활용해 맞춤형 면접 질문을 생성하고, 공통 질문과 함께 면접 문항을 구성합니다.",
  },
  {
    title: "TTS 질문 제공",
    icon: MessageCircleQuestionMark,
    description:
      "생성된 면접 질문을 TTS로 변환하여 음성으로 제공하고, 사용자가 실제 면접과 유사한 환경에서 질문을 들을 수 있도록 합니다.",
  },
  {
    title: "Calibration",
    icon: ScanEye,
    description:
      "면접 시작 전 사용자의 얼굴과 카메라 환경에 맞는 시선 기준값을 생성하여 개인별 시선 추적을 위한 Calibration을 수행합니다.",
  },
  {
    title: "모의면접",
    icon: MessagesSquare,
    description:
      "제시된 질문에 답변하는 동안 웹캠 영상과 음성 데이터를 동시에 수집하여 면접 분석에 활용합니다.",
  },
  {
    title: "STT 답변 변환",
    icon: AudioLines,
    description:
      "면접 중 녹음된 음성을 STT를 통해 텍스트로 변환하여 답변 내용을 분석할 수 있는 형태로 처리합니다.",
  },
  {
    title: "GPT 기반 답변 분석",
    icon: Brain,
    description:
      "STT로 변환된 답변을 GPT API로 분석하여 답변 내용과 음성적 잉여표현 등을 평가합니다.",
  },
  {
    title: "음성·시선 분석",
    icon: ChartLine,
    description:
      "수집된 음성 데이터와 웹캠 영상을 분석하여 음성 특징과 시선 분포 등 면접 태도 관련 정보를 추출합니다.",
  },
  {
    title: "종합 피드백 리포트",
    icon: FileText,
    description:
      "답변 내용, 음성 및 시선 분석 결과를 종합하여 사용자의 면접 태도와 답변에 대한 맞춤형 결과 리포트를 제공합니다.",
  },
];

const gazePipeline = [
  {
    title: "API 시작",
    icon: Play,
    description:
      "면접 시작과 함께 시선 추적 세션을 생성합니다.",
  },
  {
    title: "얼굴 랜드마크 검출",
    icon: ScanFace,
    description:
      "dlib를 이용하여 얼굴과 68개의 랜드마크를 검출합니다.",
  },
  {
    title: "Calibration",
    icon: ScanEye,
    description:
      "사용자별 기준값을 생성하여 시선 오차를 보정합니다.",
  },
  {
    title: "동공 추적",
    icon: Eye,
    description:
      "동공 위치를 추적하고 수평·수직 시선 비율을 계산합니다.",
  },
  {
    title: "시선 분석",
    icon: Grid2x2,
    description:
      "6개 영역으로 시선을 분류하고 영역별 응시 횟수를 계산합니다.",
  },
  {
    title: "결과 시각화",
    icon: PencilSparkles,
    description:
      "영역별 응시 결과를 기반으로 시선 분포 이미지와 피드백을 생성합니다.",
  },
  {
    title: "Backend Response",
    icon: Database,
    description:
      "Base64 이미지와 분석 결과를 API를 통해 Frontend에 전달합니다.",
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

      <section 
      id="pipeline"
      className="max-w-6xl mx-auto px-8 py-20">

        <h2 className="text-3xl font-bold mb-4">
          서비스 이용 흐름
        </h2>

        <p className="text-gray-600 leading-7 mb-14">
        사용자가 모의면접을 시작하면 Calibration을 통해 개인별 시선 기준을 생성한 후 dlib 기반 시선 추적을 수행합니다. 면접 종료 시 누적된 시선 분포 데이터를 분석하여 시각화한 이미지와 피드백을 생성하고, 음성 및 답변 분석 결과와 함께 면접 리포트를 제공합니다.
</p>

        <div className="space-y-10">

  <WorkflowCard
    title="모의 면접 흐름"
    steps={interviewFlow}
  />

  <WorkflowCard
    title="시선 분석 흐름"
    steps={gazePipeline}
  />

</div>

      </section>

    </MotionWrapper>
  );
}