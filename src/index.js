import React from 'react';
import sprite from './assets/sprite.png';
import ReactDOM from 'react-dom/client';
import Stage from './components/Stage';
import Sprite from './components/Sprite';

const container = document.getElementById('container');
const root = ReactDOM.createRoot(container)
root.render(<App />)


function App() {
    return (
        <Stage options={{ backgroundColor: 0x4be3b3 }}>
            <Sprite img={sprite} width={100} height={100} onClick={(event) => console.log(event)} />
            <Sprite img={sprite} width={100} height={100} x={100} y={0} />
        </Stage>
    );
}