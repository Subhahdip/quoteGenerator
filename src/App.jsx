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
      <div className=" w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Quote of the Day
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {advice}
        </p>
        <button
          onClick={fetchData}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-800 rounded-lg hover:bg-teal-900"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default App;
