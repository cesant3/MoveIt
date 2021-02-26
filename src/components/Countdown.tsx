import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'



export function Countdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado!
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button
                                type="button"
                                onClick={resetCountdown}
                                className={`${styles.countdownButton} ${styles.countdownButtonActive} `}
                            >
                                Abandonar o ciclo
                            </button>
                        ) : (

                                <button
                                    type="button"
                                    onClick={startCountdown}
                                    className={styles.countdownButton}
                                >
                                    Iniciar um ciclo
                                </button>
                            )
                        }
                    </>
                )}



        </div>
    )
}