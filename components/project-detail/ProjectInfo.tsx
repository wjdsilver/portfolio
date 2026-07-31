type ProjectInfoProps = {
  duration: string;
  role: string;
  status: string;
  team: string;
};

export default function ProjectInfo({
  duration,
  role,
  status,
  team,
}: ProjectInfoProps) {
  const items = [
    {
      label: "Duration",
      value: duration,
    },
    {
      label: "Role",
      value: role,
    },
    {
      label: "Status",
      value: status,
    },
    {
      label: "Team",
      value: team,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 pb-20">

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {items.map((item) => (
          <div
            key={item.label}
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <p className="text-sm text-gray-500">
              {item.label}
            </p>

            <p className="mt-3 text-lg font-semibold">
              {item.value}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}