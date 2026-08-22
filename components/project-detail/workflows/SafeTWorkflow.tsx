import { Fragment } from "react";
import MotionWrapper from "@/components/animations/MotionWrapper";
import {
  IdCard,
  ScanFace,
  UserCheck,
  ShieldCheck,
  HardHat,
  Users,
  PersonStanding,
  ParkingCircle,
  CheckCircle,
  ScanLine,
  LucideIcon,
  Scooter,
} from "lucide-react";

const registrationFlow = [
  {
    title: "신분증 촬영",
    icon: IdCard,
    description:
      "회원가입 시 운전면허증 또는 신분증을 촬영한다.",
  },
  {
    title: "OCR 정보 추출",
    icon: ScanLine,
    description:
      "OCR을 이용하여 이름과 생년월일 등 신분증 정보를 자동으로 입력한다.",
  },
  {
    title: "얼굴 동일성 검증",
    icon: ScanFace,
    description:
      "신분증 사진과 실시간 얼굴을 비교하여 본인 여부를 확인한다.",
  },
  {
    title: "회원가입 완료",
    icon: UserCheck,
    description:
      "인증된 사용자 정보와 얼굴 임베딩을 저장하여 계정을 생성한다.",
  },
];

const rentalFlow = [
  {
    title: "대여 요청",
    icon: Scooter,
    description:
      "사용자가 앱에서 전동킥보드 대여를 요청한다.",
  },
  {
    title: "얼굴 인증",
    icon: ShieldCheck,
    description:
      "등록된 얼굴 임베딩과 현재 얼굴을 비교하여 본인 여부를 확인한다.",
  },
  {
    title: "헬멧 착용 감지",
    icon: HardHat,
    description:
      "YOLOv8 기반 객체 탐지를 통해 헬멧 착용 여부를 확인한다.",
  },
  {
    title: "2인 이상 탑승 감지",
    icon: Users,
    description:
      "동시에 탑승한 인원을 탐지하여 안전 규정을 확인한다.",
  },
  {
    title: "횡단보도 주행 감지",
    icon: PersonStanding,
    description:
      "횡단보도에서 탑승한 채 주행하는 상황을 탐지한다.",
  },
  {
    title: "주차 위치 점검",
    icon: ParkingCircle,
    description:
      "반납 시 점자블록과 횡단보도 등 주차 금지 구역을 확인한다.",
  },
  {
    title: "대여 승인",
    icon: CheckCircle,
    description:
      "모든 인증과 안전 검사가 완료되면 전동킥보드 이용을 허용한다.",
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
  <Fragment key={`${title}-${step.title}`}>
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
        hover:shadow-xl
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
          서비스 이용 흐름
        </h2>

        <p className="text-gray-600 max-w-3xl leading-7 mb-14">
          회원가입 단계에서 OCR기반 신분증 정보 추출과 얼굴 인증을 수행하고,
대여 과정에서는 등록된 사용자 인증과 안전 검증 기능을 통해
전동킥보드 이용 전 안전 여부를 확인하는 서비스 흐름을 설계하였다.
        </p>

        <div className="space-y-10">

          <WorkflowCard
            title="사용자 등록 및 인증 과정"
            steps={registrationFlow}
          />

          <WorkflowCard
            title="킥보드 대여 과정"
            steps={rentalFlow}
          />

        </div>

      </section>

    </MotionWrapper>
  );
}