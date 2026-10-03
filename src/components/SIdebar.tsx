type SidebarProps = {
  stack: string[];
  removeFromStack: (technology: string) => void;
};

const Sidebar = ({ stack, removeFromStack }: SidebarProps) => {
  return (
    <aside className="rounded-xl bg-white p-6 shadow-sm">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Your Stack</h2>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-600">
            {stack.length}
          </span>

          {stack.length > 0 && (
            <button
              onClick={() => {
                stack.forEach((technology) => removeFromStack(technology));
              }}
              className="text-xs text-red-500"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <p className="mt-6 text-sm text-gray-500">
          Your stack is empty. Add some technologies!
        </p>
      ) : (
        <div className="mt-6 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology}
              className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
            >
              <span className="text-sm font-medium">{technology}</span>

              <button
                onClick={() => removeFromStack(technology)}
                className="text-xs text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
