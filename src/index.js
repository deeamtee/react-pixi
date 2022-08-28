import React, { useCallback, useState } from 'react';
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
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleKeyDown = useCallback(({ key }) => {
        if (key === 'd') {
            setX(prev => prev + 50);
        } else if (key === 'a') {
            setX(prev => prev - 50);
        } else if (key === 'w') {
            setY(prev => prev - 50);
        }
        else if (key === 's') {
            setY(prev => prev + 50);
        }
    }, []);

    const params = {
        texture,
        width: 100,
        height: 100
    };
    return (<>
        <sprite {...params} x={x} y={y} onKeyDown={handleKeyDown} /></>);
}