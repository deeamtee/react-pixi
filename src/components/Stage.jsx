import * as PIXI from "pixi.js";
import { render } from "../fiber/renderer";
import { AppProvider } from "../utils/context";

const Stage = ({ children, root, width, height, options }) => {
  const app = new PIXI.Application({
    width,
    height,
    view: root,
    ...options,
  });

  const provider = <AppProvider app={app}>{children}</AppProvider>;

  if (!root) {
    document.body.appendChild(app.view);
  }

  render(provider, app.stage);
};

Stage.defaultProps = {
  width: 800,
  height: 600,
  options: {},
};

export default Stage;
