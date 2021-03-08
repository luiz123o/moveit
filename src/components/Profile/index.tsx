import { ChallengeContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'
import * as S from '../../styles/components/Profile/styles'

const Profile = () => {
  const { level } = useContext(ChallengeContext)

  return (
    <S.Container>
      <img src="https://github.com/luiz123o.png" alt="avatar" />
      <div>
        <strong>Luiz Otavio</strong>
        <p>
          <img src="icons/level.svg" alt="Seta verde para cima" />
          Level {level}
        </p>
      </div>
    </S.Container>
  )
}
export default Profile
