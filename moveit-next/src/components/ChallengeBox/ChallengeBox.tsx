import styles from './ChallengeBox.module.css'

export function ChallengeBox() {
    const hasActiveChanllenge = true
    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChanllenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe Xp</header>
                    <main>
                        <img src="icons/body.svg" alt="" />
                        <strong>Novo Desafio</strong>
                        <p>Levante e tome agua!</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={() => {

                            }}>
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucessdButton}
                            onClick={() => {

                            }}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Inicie um ciclo para receber desafios a serem completados
                </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando desafios
                </p>
                </div>
            )}
        </div >
    )
}