import * as S from '../../styles/components/Profile/styles'

const Profile = () => {
  return (
    <S.Container>
      <img src="https://github.com/luiz123o.png" alt="avatar" />
      <div>
        <strong>Luiz</strong>
        <p>
          <img src="icons/level.svg" alt="Seta verde para cima" />
          Level 1
        </p>
      </div>
    </S.Container>
  )
}
export default Profile
