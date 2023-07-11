import * as RadixToast from '@radix-ui/react-toast'
import { useRouter } from 'next/router'
import {
  Button,
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { useState } from 'react'

interface ToastProps {
  title: string
  description: string
  titleButton: string
  linkButton: string
  duration: number
  typeToast: 'success' | 'warning' | 'danger'
  size: 'small' | 'large'
}

export default function Toast({
  title,
  description,
  titleButton,
  linkButton,
  duration,
  typeToast,
  size,
}: ToastProps) {
  const [openToast, setOpenToast] = useState(true)
  const router = useRouter()

  window.setTimeout(() => {
    setOpenToast(false)
    router.push(linkButton)
  }, duration)

  return (
    <>
      <RadixToast.Provider swipeDirection="right">
        <ToastRoot
          open={openToast}
          onOpenChange={setOpenToast}
          variant={typeToast}
        >
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription asChild>
            <p>{description}</p>
          </ToastDescription>
          <ToastAction asChild altText="Goto schedule to undo">
            {linkButton ? (
              <Button
                size={size}
                variant={typeToast}
                onClick={() => {
                  router.push(linkButton)
                }}
              >
                {titleButton}
              </Button>
            ) : (
              <Button size={size} variant={typeToast}>
                {titleButton}
              </Button>
            )}
          </ToastAction>
        </ToastRoot>
        <ToastViewport />
      </RadixToast.Provider>
    </>
  )
}
