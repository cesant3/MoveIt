import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/cesant3.png" alt="Carlos Eduardo" />
            <div>
                <strong>Carlos Eduardo</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}