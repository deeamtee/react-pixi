import React from "react";
import * as PIXI from "pixi.js";

const Stage = ({ children, width, height, options }) => {
  const app = new PIXI.Application({
    width,
    height,
    ...options,
  });

  return <>{children}</>;
};

Stage.defaultProps = {
  width: 800,
  height: 600,
  options: {},
};

export default Stage;
