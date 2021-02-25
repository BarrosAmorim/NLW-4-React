import { CompletedChanllenges } from "../components/CompletedChanllenges/CompletedChanllenges";
import { Countdown } from "../components/Countdown/Countdown";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";

import Head from 'next/head'

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
        <div></div>
      </section>
    </div>
  )
} 
