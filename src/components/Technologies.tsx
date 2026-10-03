import { useEffect, useState } from "react";
import TechCard from "./TechCard";

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
type TechnologiesProps = {
  addToStack: (technology: string) => void;
};

const Technologies = ({ addToStack }: TechnologiesProps) => {
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

  return (
    <section id="technologies" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">

        {/* Heading */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore{" "}
            <span className="text-purple-400">
              Technologies
            </span>
          </h2>

          <p className="mt-3 text-gray-500">
            Choose the technologies you need to build your development stack.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              technology={tech}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;