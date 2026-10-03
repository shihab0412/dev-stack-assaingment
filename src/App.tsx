import { useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import Sidebar from "./components/Sidebar";

function App() {
  const [stack, setStack] = useState<string[]>([]);
  const addToStack = (technology: string) => {
    setStack((previousStack) => {
      if (previousStack.includes(technology)) {
        return previousStack;
      }

      return [...previousStack, technology];
    });
  };

  return (
    <>
      <Nav />
      <Banner />
      <Technologies addToStack={addToStack} />
      const removeFromStack = (technology: string) => {
  setStack((previousStack) => {
    return previousStack.filter((item) => item !== technology);
  });
};

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <Sidebar stack={stack} 
          removeFromStack={removeFromStack}/>
      </div>
    </>
  );
}

export default App;
