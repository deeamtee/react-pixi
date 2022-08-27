import React from 'react';
import { render } from './fiber/renderer';
import * as PIXI from "pixi.js";
import sprite from './assets/sprite.png';

const canvas = document.getElementById('root');

const app = new PIXI.Application({
    width: 800,
    height: 600,
    view: canvas,
    backgroundColor: 0x4be3b3,
});


render(<App />, app.stage);


const texture = PIXI.Texture.from(sprite);

function App() {
    return (<sprite texture={texture} width={100} height={100}></sprite>);
}