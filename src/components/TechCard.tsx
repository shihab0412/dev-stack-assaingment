import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaDocker } from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const icons: any = {
  react: FaReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nodejs: FaNodeJs,
  java: FaJava,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  tailwind: SiTailwindcss,
  docker: FaDocker,
  git: FaGitAlt,
  nextjs: SiNextdotjs,
};

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechCardProps = {
  technology: Technology;
  addToStack: (technology: string) => void;
};

const TechCard = ({ technology, addToStack }: TechCardProps) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      {/* Icon */}
      <div className="mb-4 text-4xl text-purple-500">
        <div className="mb-4 text-4xl text-purple-500">
          {(() => {
            const Icon = icons[technology.icon];
            return Icon ? <Icon /> : null;
          })()}
        </div>
      </div>

      {/* Badge */}
      <span className="rounded-full bg-pink-100 px-3 py-1 text-xs text-pink-600">
        {technology.badge}
      </span>

      {/* Name */}
      <h3 className="mt-4 text-xl font-bold">{technology.name}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-500">{technology.description}</p>

      {/* Category + Difficulty */}
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs text-gray-500">{technology.difficulty}</span>
      </div>

      {/* Rating */}
      <div className="mt-4 text-sm">⭐ {technology.rating}</div>

      {/* Button */}
      <button
        onClick={() => addToStack(technology.name)}
        className="mt-5 w-full rounded-lg bg-pink-500 py-2.5 text-sm font-semibold text-white"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
