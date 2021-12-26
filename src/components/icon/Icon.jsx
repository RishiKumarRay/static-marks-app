import React from "react";
import cn from "classnames";

import "./Icon.scss";

const Icon = ({ name, position, style }) => {
  return (
    <svg
      className={cn("icon", {
        [`icon-${position}`]: position,
      })}
      style={style}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
