import styles from './index.module.css'

const Dashboard = ({val, resetX}) => {

    return (
        <div className={styles.container}>
            <div> Wins to achieve: {val} <button onClick={resetX}>reset</button></div>
            <div className={styles.secondLine}>Let's go!</div>
        </div>
    )
}

export default Dashboard