/* eslint-disable react/prop-types */
import chroma from "chroma-js";

export const Color = ({ id, color, handleClick, lockClick, blocked }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        color: chroma(color).luminance() < 0.5 ? "white" : "black",
      }}
    >
      {color}
      <i
        className="fa-solid fa-arrows-rotate"
        onClick={() => handleClick(id)}
      />
      <i
        className={blocked ? "fa-solid fa-lock" : "fa-solid fa-lock-open"}
        onClick={() => lockClick(id)}
      />
    </div>
  );
};

//<i class="fa-solid fa-lock"></i>
