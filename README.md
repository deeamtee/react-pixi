# Pixi with react fiber

An example of using technology for FrontendConf 2022

## Simple usage

```jsx
import React from "react";
import { render } from "./fiber/renderer";
import * as PIXI from "pixi.js";
import sprite from "./assets/sprite.png";

const canvas = document.getElementById("root");

const app = new PIXI.Application({
  width: 800,
  height: 600,
  view: canvas,
  backgroundColor: 0x4be3b3,
});

render(<App />, app.stage);

const texture = PIXI.Texture.from(sprite);

function App() {
  return <sprite texture={texture} width={100} height={100}></sprite>;
}
```

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
