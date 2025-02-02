"use client";
import { useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
      setInput((prev) => prev + value);
  };

  const handleBack = () => {
    setInput((prev) => prev.slice(0, -1)); // Remove the last character
  }

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="w-80 bg-gray-900 text-white p-5 rounded-lg shadow-lg mx-auto mt-10">
        <h2 className="text-2xl text-center mb-3">Calculator</h2>

        {/* Display */}
        <div className="bg-gray-800 p-3 rounded text-right">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full bg-transparent text-2xl outline-none text-white mb-1"
          />
          <div className="text-xl text-gray-400">{result}</div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((char) => (
            <button
              key={char}
              onClick={() =>
                char === "=" ? handleCalculate() : handleClick(char)
              }
              className="bg-gray-700 p-3 rounded text-xl hover:bg-gray-600 transition"
            >
              {char}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-3 bg-red-600 p-3 rounded text-xl hover:bg-red-700 transition"
          >
            C
          </button>
          <button
            onClick={handleBack}
            className="bg-gray-700 p-3 rounded text-xl hover:bg-gray-600 transition"
          >
            ⌫
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
