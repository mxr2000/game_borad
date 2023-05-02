import styles from './index.module.css'
import {useState} from "react";

const initGrid = () => {
    const grid = []
    for (let i = 0; i < 4; i++) {
        const row = []
        for (let j = 0; j < 4; j++) {
            row.push("A")
        }
        grid.push(row)
    }
    return grid
}

const Cell = ({char}) => {
    return (
        <div className={styles.word}>
            {char}
        </div>
    )
}

const FindAWord = ({decX}) => {
    const [grid, setGrid] = useState(initGrid)
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {
                    grid.map(row => row.map(cell => <Cell char={cell}/>))
                }
            </div>
        </div>
    )
}

export default FindAWord