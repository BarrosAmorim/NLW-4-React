import style from './Profile.module.css'

export function Profile() {
    return (
        <div className={style.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/24548784?s=460&u=a5b71887ae8ee0d2aab2e9eff952b8bc8c25ccb7&v=4" alt="Rafael" />
            <div>
                <strong>Rafael Barros</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}