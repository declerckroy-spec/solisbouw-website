import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header currentPage="projecten" />

      {children}

      <Footer />
    </>
  )
}
