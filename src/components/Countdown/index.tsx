import * as S from '../../styles/components/Countdown/styles'
import { CountdownContext } from '../../contexts/CountdownContext'

import {
  AiFillCaretRight,
  AiOutlineClose,
  AiOutlineCheckCircle
} from 'react-icons/ai'
import { useContext } from 'react'

export const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCount,
    stopCount
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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
        <S.FinishedButton disabled>
          Ciclo encerrado
          <AiOutlineCheckCircle />
        </S.FinishedButton>
      ) : (
        <>
          {isActive ? (
            <S.StatsButton
              variant="secondary"
              onClick={stopCount}
              type="button"
            >
              Abandonar Ciclo
              <AiOutlineClose />
            </S.StatsButton>
          ) : (
            <S.StatsButton variant="primary" onClick={startCount} type="button">
              Iníciar Ciclo
              <AiFillCaretRight />
            </S.StatsButton>
          )}
        </>
      )}
    </S.Container>
  )
}
