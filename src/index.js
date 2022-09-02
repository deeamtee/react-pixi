import React, { useCallback, useState } from 'react';
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
    const [display, setDisplay] = useState(true);
    const [rotation, setRotation] = useState(0);

    useTick((delta) => {
        setRotation(prev => prev + 0.1 * delta)
    });

    const handleClick = useCallback(() => {
        setDisplay(prev => !prev)
    }, []);

    return (
        <>
            <Sprite img={sprite} width={100} height={100} position={[100, 100]} rotation={rotation} onClick={handleClick} />
            {display && <Sprite img={sprite} width={100} height={100} position={[0, 0]} />}
        </>
    );
}