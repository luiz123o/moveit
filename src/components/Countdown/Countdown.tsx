import { useEffect, useState } from 'react'
import * as S from '../../styles/components/Countdown/styles'

let countdownTimeout: NodeJS.Timeout
const Countdown = () => {
  const [time, setIsTime] = useState(0.1 * 60)
  const [isActive, setActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)

  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const startCount = () => {
    setActive(true)
  }
  const stopCount = () => {
    clearTimeout(countdownTimeout)
    setActive(false)
    setIsTime(0.1 * 60)
  }
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setIsTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setActive(false)
    }
  }, [isActive, time])

  return (
    <S.Container>
      <S.Content>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </S.Content>

      {hasFinished ? (
        <S.FinishedButton disabled>Ciclo encerrado</S.FinishedButton>
      ) : (
        <>
          {isActive ? (
            <S.StatsButton
              variant="secondary"
              onClick={stopCount}
              type="button"
            >
              Abandonar Ciclo
            </S.StatsButton>
          ) : (
            <S.StatsButton variant="primary" onClick={startCount} type="button">
              Iníciar Ciclo
            </S.StatsButton>
          )}
        </>
      )}
    </S.Container>
  )
}
export default Countdown
