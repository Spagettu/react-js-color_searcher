/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import "./App.css";
import { Color } from "./components/colors/color";
import { generateColor, colorBoxArray } from "./components/colors/colorHelpers";

function App() {
  const [colors, setColors] = useState(
    localStorage.length > 0
      ? JSON.parse(localStorage.getItem("colors"))
      : colorBoxArray
  );

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  const lockClick = (id) => {
    setColors((prev) =>
      prev.map((el, index) =>
        index === id ? { ...el, blocked: !el.blocked } : el
      )
    );
  };

  const handleClick = (id) => {
    if (!colors[id].blocked) {
      setColors((prev) =>
        prev.map((el, index) =>
          index === id ? { ...el, color: generateColor() } : el
        )
      );
    }
  };

  return (
    <>
      <div className="container">
        {colors.map((element, index) => (
          <Color
            {...element}
            key={index}
            lockClick={lockClick}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}

export default App;
