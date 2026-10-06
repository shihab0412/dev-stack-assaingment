import type { ReactNode } from "react";

type MainLayoutProps = {
  technologies: ReactNode;
  sidebar: ReactNode;
};

const MainLayout = ({
  technologies,
  sidebar,
}: MainLayoutProps) => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-4">

      {/* Technologies */}
      <div className="lg:col-span-3">
        {technologies}
      </div>

      {/* Your Stack */}
      <div className="lg:col-span-1">
        {sidebar}
      </div>

    </div>
  );
};

export default MainLayout;