import React from 'react';
import * as PIXI from "pixi.js";
import sprite from './assets/sprite.png';
import ReactDOM from 'react-dom/client';
import Stage from './components/Stage';

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container)
root.render(<App />)


const texture = PIXI.Texture.from(sprite);

function App() {
    return (
        <Stage options={{ backgroundColor: 0x4be3b3 }}>
            <sprite texture={texture} width={100} height={100} />
            <sprite texture={texture} width={100} height={100} x={100} y={0} />
        </Stage>
    );
}