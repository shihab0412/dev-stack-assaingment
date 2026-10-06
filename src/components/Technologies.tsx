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
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load technologies");
        }

        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load technologies.");
        setLoading(false);
      });
  }, []);

  return (
    <section id="technologies" className="bg-gray-50 py-16">
      <div className="w-full px-4">
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore <span className="text-purple-400">Technologies</span>
          </h2>

          <p className="mt-3 text-gray-500">
            Choose the technologies you need to build your development stack.
          </p>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading technologies...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                technology={tech}
                addToStack={addToStack}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;