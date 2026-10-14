import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Nav";
import Hero from "./components/Banner";
import Technologies from "./components/Technologies";
import Sidebar from "./components/SIdebar";
import MainLayout from "./components/MainLayout";
import Footer from "./components/footer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [stack, setStack] = useState<string[]>([]);

 
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


  const removeFromStack = (technology: string) => {
    setStack((previousStack) => {
      return previousStack.filter((item) => item !== technology);
    });

    toast.error(`${technology} removed from your stack!`);
  };

 
  const clearStack = () => {
    setStack([]);

    toast.info("All technologies removed!");
  };

  return (
    <>
      
      <Navbar />

     
      <Hero />

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
        
         <Footer />
   
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