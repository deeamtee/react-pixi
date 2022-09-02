import React, { useState } from 'react';
import sprite from './assets/sprite.png';
import ReactDOM from 'react-dom/client';
import Stage from './components/Stage';
import Sprite from './components/Sprite';
import { useTick } from './utils/hooks';

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container)
root.render(<App />)


function App() {
    return (
        <Stage options={{ backgroundColor: 0x4be3b3 }}>
            <Scene />
        </Stage>
    );
}

function Scene() {
    const [x, setX] = useState(50);
    useTick((delta) => {
        setX(prev => prev + 2 * delta)
    });
    return (
        <>
            <Sprite img={sprite} width={100} height={100} x={100} y={100} onClick={(event) => console.log(event)} />
            <Sprite img={sprite} width={100} height={100} x={x} y={0} />
        </>
    );
}