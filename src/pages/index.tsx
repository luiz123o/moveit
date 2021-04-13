import CompletedChallenges from 'components/CompletedChallenges'
import { Countdown } from 'components/Countdown'
import Profile from 'components/Profile'
import ChallengeBox from 'components/ChallengeBox'
import * as S from 'styles/pages/Home/styles'
import Head from 'next/head'
import ExperienceBar from '../components/Experience'

import { CountdownProvider } from 'contexts/CountdownContext'

export default function Home() {
  return (
    <S.Conteiner>
      <Head>
        <title>Inicio - MoveIt</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <S.Content>
          <S.ContentLeft>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </S.ContentLeft>
          <S.ContentRight>
            <ChallengeBox />
          </S.ContentRight>
        </S.Content>
      </CountdownProvider>
    </S.Conteiner>
  )
}
