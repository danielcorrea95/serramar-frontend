import { createContext, ReactNode, useState } from 'react'

interface ModalContextData {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext({} as ModalContextData)

interface ModalProviderProps {
  children: ReactNode
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
