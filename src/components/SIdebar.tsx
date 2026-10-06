import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

type SidebarProps = {
  stack: string[];
  removeFromStack: (technology: string) => void;
  clearStack: () => void;
};

const icons: any = {
  React: FaReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Node.js": FaNodeJs,
  Java: FaJava,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  "Tailwind CSS": SiTailwindcss,
  Docker: FaDocker,
  Git: FaGitAlt,
  "Next.js": SiNextdotjs,
};

const categories: any = {
  React: "Frontend",
  JavaScript: "Language",
  TypeScript: "Language",
  "Node.js": "Backend",
  Java: "Language",
  "Express.js": "Backend",
  MongoDB: "Database",
  PostgreSQL: "Database",
  "Tailwind CSS": "Styling",
  Docker: "DevOps",
  Git: "DevOps",
  "Next.js": "Frontend",
};

const Sidebar = ({
  stack,
  removeFromStack,
  clearStack,
}: SidebarProps) => {
  return (
    <aside className="rounded-2xl bg-white p-6 shadow-sm">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          {stack.length} Technology Selected
        </p>
      </div>

      {/* Stack Items */}
      {stack.length === 0 ? (
        <div className="rounded-xl bg-gray-50 py-10 text-center">
          <p className="text-sm text-gray-400">
            Your stack is empty.
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Add some technologies!
          </p>
        </div>
      ) : (
        <div className="space-y-3">

          {stack.map((technology) => {
            const Icon = icons[technology];

            return (
              <div
                key={technology}
                className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
              >

                {/* Left side */}
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-2xl shadow-sm">
                    {Icon ? <Icon /> : null}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {technology}
                    </h3>

                    <p className="text-xs text-gray-400">
                      {categories[technology]}
                    </p>
                  </div>

                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromStack(technology)}
                  className="text-2xl font-light text-gray-400 transition hover:text-red-500"
                >
                  ×
                </button>

              </div>
            );
          })}

          {/* Remove All */}
          <button
            onClick={clearStack}
            className="mt-5 w-full rounded-xl border border-red-200 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>

        </div>
      )}

    </aside>
  );
};

export default Sidebar;