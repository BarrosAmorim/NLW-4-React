import Head from 'next/head'
import { CompletedChanllenges } from "../components/CompletedChanllenges/CompletedChanllenges";
import { Countdown } from "../components/Countdown/Countdown";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";
import { Profile } from "../components/Profile/Profile";


import styles  from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.App}>
      <Head>
        <title>inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChanllenges />
          <Countdown />
        </div>
        <div>
        <ChallengeBox />
        </div>
      </section>
    </div>
  )
} 
