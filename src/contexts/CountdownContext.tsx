import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react'
import { ChallengeContext } from './ChallengesContext'

export type CountdownContextData = {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCount: () => void
  stopCount: () => void
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: ReturnType<typeof setTimeout>

export function CountdownProvider({ children }: PropsWithChildren<unknown>) {
  const { startNewChallenge } = useContext(ChallengeContext)

  const [time, setIsTime] = useState(0.1 * 60)
  const [isActive, setActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)

  const seconds = time % 60

  const startCount = () => {
    setActive(true)
  }
  const stopCount = () => {
    clearTimeout(countdownTimeout)
    setActive(false)
    setIsTime(0.1 * 60)
    setHasFinished(false)
  }
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setIsTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setActive(false)
      startNewChallenge()
    }
  }, [isActive, time, startNewChallenge])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCount,
        stopCount
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
