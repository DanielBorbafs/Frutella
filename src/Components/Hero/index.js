import styles from './Hero.module.css'
import HeroContent from '../../Components/HeroContent'


function Hero() {
    return (
        <section className={styles.heroSection}>
            <HeroContent />
        </section>



    )
}

export default Hero