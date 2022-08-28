import * as PIXI from "pixi.js";
import { render } from "../fiber/renderer";

const Stage = ({ children, root, width, height, options }) => {
  const app = new PIXI.Application({
    width,
    height,
    view: root,
    ...options,
  });

  if (!root) {
    document.body.appendChild(app.view);
  }

  render(children, app.stage);
};

Stage.defaultProps = {
  width: 800,
  height: 600,
  options: {},
};

export default Stage;
