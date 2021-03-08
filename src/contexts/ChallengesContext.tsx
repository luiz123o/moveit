import { ToastContext } from 'hooks/Toast'
import {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
  useContext
} from 'react'
import challenges from '../../challenges.json'

export type ActiveChallengeProps = {
  type: string
  description: string
  amount: number
}
export type ChallengeContextData = {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: ActiveChallengeProps | null
  startNewChallenge: () => void
  resetChallenge: () => void
  levelUp: () => void
  completeChallenge: () => void
}
export const ChallengeContext = createContext({} as ChallengeContextData)

export const ChallengeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [level, setLevel] = useState(1)
  const [
    activeChallenge,
    setActiveChallenge
  ] = useState<ActiveChallengeProps | null>(null)

  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const { addToast } = useContext(ToastContext)
  const experienceToNextLevel = Math.pow((level + 1.5) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp() {
    setLevel(level + 1)
  }
  function startNewChallenge() {
    const ramdomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[ramdomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      addToast({
        type: 'info',
        title: 'Você tem um Novo desafio',
        description: `Você receberá por ele ${challenge.amount} de Xp`
      })
    }
  }
  function resetChallenge() {
    setActiveChallenge(null)
    addToast({
      type: 'error',
      title: 'Que pena!',
      description: `Você não cumpriu seu desafio, se esforce mais!`
    })
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }
    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
      addToast({
        type: 'success',
        title: 'Você é incrivel!',
        description: `Subiu mais um nivel e chegou ao Level ${level}`
      })
    }
    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        resetChallenge,
        startNewChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
