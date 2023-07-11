import * as AlertDialogRadix from '@radix-ui/react-alert-dialog'
import React from 'react'
import {
  ActionButton,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  CancelButton,
  Flex,
} from './styles'
import { Button } from '@danielcorrea-ui/react'

interface AlertDialogProps {
  children: React.ReactNode
  title: string
  description: string
  buttonCancel: boolean
  textButtonCancel: string
  textButtonConfirm: string
  onclick: () => void
}

export function AlertDialog({
  children,
  title,
  description,
  buttonCancel = false,
  textButtonCancel,
  textButtonConfirm,
  onclick,
}: AlertDialogProps) {
  return (
    <AlertDialogRadix.Root>
      <AlertDialogRadix.Trigger asChild>{children}</AlertDialogRadix.Trigger>
      <AlertDialogRadix.Portal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
          <Flex>
            {buttonCancel && (
              <CancelButton>
                <Button variant={'secondary'}>{textButtonCancel}</Button>
              </CancelButton>
            )}
            <ActionButton>
              <Button onClick={onclick}>{textButtonConfirm}</Button>
            </ActionButton>
          </Flex>
        </AlertDialogContent>
      </AlertDialogRadix.Portal>
    </AlertDialogRadix.Root>
  )
}
