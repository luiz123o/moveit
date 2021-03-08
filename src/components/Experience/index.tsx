import TogglerTheme from 'components/Toggler'
import { ChallengeContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'
import * as S from '../../styles/components/ExperienceBar/styles'

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  )

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  )

  return (
    <S.ExperienceBar>
      <span>0 xp</span>
      <S.ExperienceFinalBar>
        <S.ExperienceBarGreen percent={percentToNextLevel} />

        <S.CurrentExperienceBar percent={percentToNextLevel}>
          {currentExperience}xp
        </S.CurrentExperienceBar>
      </S.ExperienceFinalBar>
      <span>{experienceToNextLevel}xp</span>
      <TogglerTheme />
    </S.ExperienceBar>
  )
}
export default ExperienceBar
