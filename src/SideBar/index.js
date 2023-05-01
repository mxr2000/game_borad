import styles from './index.module.css'
import img from './img.png'

const SideBar = () => {
    return (

        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={img} alt="logo"/>
            </div>
            <nav className={styles.navLinks}>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/wordcolour">Word Colour</a></li>
                    <li><a href="/frogger">Frogger</a></li>
                    <li><a href="/findaword">Find-a-word</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar