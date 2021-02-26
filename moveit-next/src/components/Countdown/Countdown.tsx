import { useState, useEffect } from 'react'
import style from './Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
    const [time, setTime] = useState(25 * 60)
    const [isActive, setisActive] = useState(false)
    const [hasFinished, setHasFiniched] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        setisActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setisActive(false)
        setTime(25 * 60)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFiniched(true)
            setisActive(false)
        }
    }, [isActive, time])

    return (
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled className={style.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button type="button"
                                className={`${style.countdownButton} ${style.countdownButtonActive}`}
                                onClick={resetCountdown}>
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button type="button" className={style.countdownButton}
                                    onClick={startCountdown}>
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}
        </div>
    )
}