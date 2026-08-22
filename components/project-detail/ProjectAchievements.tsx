import Image from "next/image";

type Achievement = {
  title: string;
  description: string;
  image?: string;
};

type ProjectAchievementsProps = {
  achievements: Achievement[];
};

export default function ProjectAchievements({
  achievements,
}: ProjectAchievementsProps) {
  return (
    <section
      id="achievements"
      className="max-w-6xl mx-auto px-8 py-16"
    >
      <h2 className="text-3xl font-bold mb-8">
        주요 성과
      </h2>

      <div className="mt-8 space-y-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="
              rounded-xl
              shadow
              p-6
              bg-white
            "
          >
            <h3 className="font-semibold">
              {achievement.title}
            </h3>

            {achievement.description && (
              <p className="mt-2 text-gray-600">
                {achievement.description}
              </p>
            )}

            {achievement.image && (
              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-gray-500">
                  수상 증서
                </p>

                <Image
                  src={achievement.image}
                  alt={`${achievement.title} 수상 증서`}
                  width={800}
                  height={1100}
                  className="
                    mx-auto
                    max-w-2xl
                    rounded-xl
                    border
                  "
                />
              </div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}