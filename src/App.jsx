import { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (response.ok) {
        const data = await response.json();
        setAdvice(data.slip.advice);
      } else {
        console.error("Failed to fetch advice");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <div className="background-container">
        {advice && <p className="advice-text">{advice}</p>}

        <button className="generate-button" onClick={fetchData}>
          Quote of the Day
        </button>
      </div>
    </div>
  );
};

export default App;
