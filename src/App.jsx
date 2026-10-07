import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AIWelcome from "./components/AIWelcome";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

function App() {
  const [enteredPortfolio, setEnteredPortfolio] = useState(false);
  const navigate = useNavigate();

  const enterPortfolio = () => {
    setEnteredPortfolio(true);
    navigate("/");
  };

  return (
    <>
      {!enteredPortfolio ? (
        <AIWelcome onEnter={enterPortfolio} />
      ) : (
        <>
        <Navbar />
        <div className="pt-10">
          <Home />
          <About />
          <Education />
          <Experience />
        </div>
        </>
      )}
    </>
  );
}

export default App;