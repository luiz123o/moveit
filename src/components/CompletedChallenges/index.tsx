import { ChallengeContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'
import * as S from '../../styles/components/CompletedChallenges/styles'

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengeContext)

  return (
    <S.Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Container>
  )
}
export default CompletedChallenges
