import CompletedChallenges from 'components/CompletedChallenges/CompletedChallenges'
import Countdown from 'components/Countdown/Countdown'
import Profile from 'components/Profile/Profile'
import * as S from 'styles/pages/Home/styles'
import Head from 'next/Head'
import ExperienceBar from '../components/Experience/ExperienceBar'

export default function Home() {
  return (
    <S.Conteiner>
      <Head>
        <title>Inicio - MoveIt</title>
      </Head>
      <ExperienceBar />
      <S.Content>
        <S.ContentLeft>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </S.ContentLeft>
      </S.Content>
    </S.Conteiner>
  )
}
