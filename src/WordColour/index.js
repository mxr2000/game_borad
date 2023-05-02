import styles from './index.module.css'
import {useEffect, useState} from "react";

const colors = ["red", "blue", "orange", "yellow", "green", "purple", "pink"]

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}

const getRandomColors = (target) => {
    const result = []
    while (result.length < 4) {
        const color = getRandomColor()
        if (!result.includes(color)) {
            result.push(color)
        }
    }
    if (!result.includes(target)) {
        result[Math.floor(Math.random() * 4)] = target
    }
    return result
};

const GAME_INIT = 0
const GAME_RUNNING = 1
const GAME_ENDED = 4

const WordColour = () => {
    const [currentColor, setCurrentColor] = useState("");
    const [gameState, setGameState] = useState(GAME_INIT)
    const [colors, setColors] = useState(["", "", "", ""]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setGameState(GAME_RUNNING)
            const target = getRandomColor()
            setCurrentColor(target)
            setColors(getRandomColors(target))
        }, 2000);
        return () => clearTimeout(timer);
    }, []);


    const handleClick = (color) => {
        if (color === currentColor) {
            const newState = gameState + 1
            setGameState(newState)
            if (newState === GAME_ENDED) {
                alert("You have won")
                setGameState(GAME_RUNNING)
            }
            const target = getRandomColor()
            setCurrentColor(target)
            setColors(getRandomColors(target))
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.left} style={{backgroundColor: currentColor}}/>
            <div className={styles.right}>
                {
                    colors.map(color => color === "" ? <div/> : <div style={{backgroundColor: color}} onClick={() => handleClick(color)}/>)
                }
            </div>
        </div>
    )
}

export default WordColour