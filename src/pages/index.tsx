import CompletedChallenges from 'components/CompletedChallenges/CompletedChallenges'
import Profile from 'components/Profile/Profile'
import * as S from 'styles/pages/Home/styles'
import ExperienceBar from '../components/Experience/ExperienceBar'

export default function Home() {
  return (
    <S.Conteiner>
      <ExperienceBar />
      <S.Content>
        <S.ContentLeft>
          <Profile />
          <CompletedChallenges />
        </S.ContentLeft>
      </S.Content>
    </S.Conteiner>
  )
}
