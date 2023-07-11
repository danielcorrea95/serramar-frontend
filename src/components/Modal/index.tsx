import React, { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { ButtonClose, Content, OpenModal, Overlay } from './styles'
import { X } from '@phosphor-icons/react'
import { ModalContext } from '@/contexts/UseModalContext'

interface ModalProps {
  children: React.ReactNode
  linkName: string
  title?: string
  closeButton?: boolean
}

export default function Modal({
  children,
  linkName,
  title,
  closeButton,
}: ModalProps) {
  const { isOpen, openModal, closeModal } = useContext(ModalContext)
  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={openModal}>
        <Dialog.Trigger asChild>
          <OpenModal onClick={openModal}>{linkName}</OpenModal>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Overlay />
          <Content>
            {title && <Dialog.Title>{title}</Dialog.Title>}
            {closeButton && (
              <ButtonClose onClick={closeModal}>
                <X size={24} />
              </ButtonClose>
            )}

            {children}
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
