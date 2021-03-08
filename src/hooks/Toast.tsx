import React, {
  createContext,
  useCallback,
  useState,
  PropsWithChildren
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import ToastContainer from '../components/ToastContainer/index'

export type ToastMessage = {
  id: string
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void
  removeToast(id: string): void
}

// primeiro passo atribuo o create context
export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
)

export function ToastProvider({ children }: PropsWithChildren<unknown>) {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  // uso o omit para omitir um campo no caso o id
  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuidv4()

      const toast = {
        id,
        type,
        title,
        description
      }
      setMessages((oldMessages) => [...oldMessages, toast])
    },
    []
  )

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}
