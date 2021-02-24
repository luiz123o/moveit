import * as S from '../../styles/components/ExperienceBar/styles'

const ExperienceBar = () => {
  return (
    <S.ExperienceBar>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />

        <S.CurrentExperienceBar style={{ left: '50%' }}>
          300 xp
        </S.CurrentExperienceBar>
      </div>
      <span>600 xp</span>
    </S.ExperienceBar>
  )
}
export default ExperienceBar
