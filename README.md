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
  return <sprite texture={texture} width={100} height={100} />;
}
```

## Using with ReactDOM renderer

```jsx
import React from "react";
import * as PIXI from "pixi.js";
import sprite from "./assets/sprite.png";
import ReactDOM from "react-dom/client";
import Stage from "./components/Stage";

const container = document.getElementById("container");
const root = ReactDOM.createRoot(container);
root.render(<App />);

const texture = PIXI.Texture.from(sprite);

function App() {
  return (
    <Stage options={{ backgroundColor: 0x4be3b3 }}>
      <sprite texture={texture} width={100} height={100} x={100} y={100} />
    </Stage>
  );
}
```

## Pass canvas element

```jsx
import React from "react";
import * as PIXI from "pixi.js";
import sprite from "./assets/sprite.png";
import ReactDOM from "react-dom/client";
import Stage from "./components/Stage";

const container = document.getElementById("container");
const root = ReactDOM.createRoot(container);
root.render(<App />);

const canvas = document.getElementById("root");
const texture = PIXI.Texture.from(sprite);

function App() {
  return (
    <Stage root={canvas} options={{ backgroundColor: 0x4be3b3 }}>
      <sprite texture={texture} width={100} height={100} x={100} y={100} />
    </Stage>
  );
}
```
