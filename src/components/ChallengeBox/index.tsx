import { ChallengeContext } from 'contexts/ChallengesContext'
import { CountdownContext } from 'contexts/CountdownContext'
import { useContext } from 'react'
import * as S from '../../styles/components/ChallengeBox/styles'

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengeContext
  )
  const { stopCount } = useContext(CountdownContext)
  function handleChallengeSucceeded() {
    completeChallenge()
    stopCount()
  }
  function handleChallengeFailed() {
    resetChallenge()
    stopCount()
  }

  return (
    <S.Container>
      {activeChallenge ? (
        <>
          <S.ChallengeActive>
            <header>Ganhe {activeChallenge.amount}</header>
            <main>
              {activeChallenge.type === 'body' ? (
                <img src="icons/body.svg" alt="caminhar" />
              ) : (
                <img src="icons/eye.svg" alt="caminhar" />
              )}
              <strong>Exercite-se</strong>
              <p>{activeChallenge.description}</p>
            </main>
            <footer>
              <S.FailureButton onClick={handleChallengeFailed} type="button">
                Falhei
              </S.FailureButton>
              <S.CompleteButton
                onClick={handleChallengeSucceeded}
                type="button"
              >
                Completei
              </S.CompleteButton>
            </footer>
          </S.ChallengeActive>
        </>
      ) : (
        <>
          <S.ChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="seta verde virada para cima" />
              Avance de level conquistando desafios
            </p>
          </S.ChallengeNotActive>
        </>
      )}
    </S.Container>
  )
}
export default ChallengeBox
