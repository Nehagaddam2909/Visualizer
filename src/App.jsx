import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative z-0 bg-primary">
        <Experience />
      </div>
    </>
  );
}

export default App;
