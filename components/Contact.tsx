export default function Contact() {
  return (
    <section
      id="contact"
      className="
        scroll-mt-20
        px-4 py-20
        md:px-10
      "
    >
      <div>
        <h2 className="text-4xl font-bold">
          Contact
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:wjdsilver@hanyang.ac.kr"
            className="
              group
              rounded-2xl
              bg-white
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
              shadow
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Email
                </p>

                <p className="mt-3 text-base font-medium text-gray-900">
                  wjdsilver@hanyang.ac.kr
                </p>
              </div>

              <span className="text-gray-400 transition-transform group-hover:translate-x-1
              group-hover:text-indigo-600">
                →
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/wjdsilver"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-2xl
              bg-white
              p-6
              shadow
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  GitHub
                </p>

                <p className="mt-3 text-base font-medium text-gray-900">
                  github.com/wjdsilver
                </p>
              </div>

              <span className="text-gray-400 transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/jungeun-kim-262036331"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        rounded-2xl
                        bg-white
                        p-6
                        shadow
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                      "
                    >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  LinkedIn
                </p>

                <p className="mt-3 text-base font-medium text-gray-900">
                  linkedin.com/in/jungeun-kim-262036331
                </p>
              </div>

              <span className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600">
                →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}