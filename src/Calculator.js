import React, { useState } from "react";
import {
  FaPercent,
  FaMinus,
  FaPlus,
  FaPlusMinus,
  FaX,
  FaDivide,
  FaEquals,
} from "react-icons/fa6";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [theme, setTheme] = useState("dark"); // State to manage theme

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      const sanitizedInput = input.replace(/(?<!\d)0+(\d+)/g, "$1");
      setResult(eval(sanitizedInput.replace("%", "/100")).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handlePlusMinus = () => {
    setInput(input.startsWith("-") ? input.substring(1) : `-${input}`);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handlePercentage = () => {
    if (!isNaN(input.slice(-1))) {
      const percentageResult = (parseFloat(input) / 100).toString();
      setResult(percentageResult);
      setInput(percentageResult);
    }
  };
  return (
    <div className={`calculator-${theme}`}>
      <div className={`theme-${theme}`}>
        <label class="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span class="slider"></span>
        </label>
      </div>
      <div className={`display-${theme}`}>
        <div className={`result-${theme}`}>{result}</div>
        <div>
          <input
            className={`inp-${theme}`}
            type="text"
            value={input}
            readOnly
          />
        </div>
      </div>

      <div className={`buttons-${theme}`}>
        <div className={`btn-row-${theme}`}>
          <button className={`btn-${theme} color-b`} onClick={handleClear}>
            AC
          </button>
          <button className={`btn-${theme} color-b`} onClick={handlePlusMinus}>
            <FaPlusMinus />
          </button>
          <button className={`btn-${theme} color-b`} onClick={handlePercentage}>
            <FaPercent />
          </button>
          <button
            className={`btn-${theme} color-a`}
            onClick={() => handleInput("/")}
          >
            <FaDivide />
          </button>
        </div>
        <div className={`btn-row-${theme}`}>
          <button className={`btn-${theme}`} onClick={() => handleInput("1")}>
            1
          </button>
          <button className={`btn-${theme}`} onClick={() => handleInput("2")}>
            2
          </button>
          <button className={`btn-${theme}`} onClick={() => handleInput("3")}>
            3
          </button>
          <button
            className={`btn-${theme} color-a`}
            onClick={() => handleInput("+")}
          >
            <FaPlus />
          </button>
        </div>
        <div className={`btn-row-${theme}`}>
          <button className={`btn-${theme}`} onClick={() => handleInput("4")}>
            4
          </button>
          <button className={`btn-${theme}`} onClick={() => handleInput("5")}>
            5
          </button>
          <button className={`btn-${theme}`} onClick={() => handleInput("6")}>
            6
          </button>
          <button
            className={`btn-${theme} color-a`}
            onClick={() => handleInput("-")}
          >
            <FaMinus />
          </button>
        </div>
        <div className={`btn-row-${theme}`}>
          <button className={`btn-${theme}`} onClick={() => handleInput("7")}>
            7
          </button>
          <button className={`btn-${theme}`} onClick={() => handleInput("8")}>
            8
          </button>
          <button className={`btn-${theme}`} onClick={() => handleInput("9")}>
            9
          </button>
          <button
            className={`btn-${theme} color-a`}
            onClick={() => handleInput("*")}
          >
            <FaX />
          </button>
        </div>
        <div className={`btn-row-${theme}`}>
          <button
            className={`btn-bg-${theme}`}
            onClick={() => handleInput("0")}
          >
            0
          </button>
          <button className={`btn-${theme}`} onClick={() => handleInput(".")}>
            .
          </button>

          <button
            className={`btn-${theme} color-a`}
            value="="
            onClick={handleCalculate}
          >
            <FaEquals />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
