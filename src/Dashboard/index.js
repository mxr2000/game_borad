import styles from './index.module.css'

const Dashboard = ({val}) => {

    return (
        <div className={styles.container}>
            <div> Wins to achieve: {val} (reset)</div>
            <div className={styles.secondLine}>Let's go!</div>
        </div>
    )
}

export default Dashboard