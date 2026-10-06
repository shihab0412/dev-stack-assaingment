import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Nav";
import Hero from "./components/Banner";
import Technologies from "./components/Technologies";
import Sidebar from "./components/SIdebar";
import MainLayout from "./components/MainLayout";

function App() {
  const [stack, setStack] = useState<string[]>([]);

  // Add technology
  const addToStack = (technology: string) => {
    if (stack.includes(technology)) {
      toast.info(`${technology} is already in your stack!`);
      return;
    }

    setStack((previousStack) => {
      return [...previousStack, technology];
    });

    toast.success(`${technology} added to your stack!`);
  };

  // Remove one technology
  const removeFromStack = (technology: string) => {
    setStack((previousStack) => {
      return previousStack.filter((item) => item !== technology);
    });

    toast.error(`${technology} removed from your stack!`);
  };

  // Remove all technologies
  const clearStack = () => {
    setStack([]);

    toast.info("All technologies removed!");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero / Banner */}
      <Hero />

      {/* Technologies + Sidebar */}
      <MainLayout
        technologies={
          <Technologies addToStack={addToStack} />
        }
        sidebar={
          <Sidebar
            stack={stack}
            removeFromStack={removeFromStack}
            clearStack={clearStack}
          />
        }
      />

      {/* Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;