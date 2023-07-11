import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
