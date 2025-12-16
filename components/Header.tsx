'use client'

import Link from 'next/link'
import { useState } from 'react'

interface HeaderProps {
  currentPage?: 'home' | 'diensten' | 'projecten' | 'contact'
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-terracotta">
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="w-12 h-12 bg-terracotta rounded"></div>
          <span className="text-2xl font-black text-navy">SOLISBOUW</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {currentPage === 'home' ? (
            <>
              <a href="#home" className="text-navy font-black text-lg hover:text-terracotta transition-colors">HOME</a>
              <a href="#diensten" className="text-navy font-black text-lg hover:text-terracotta transition-colors">DIENSTEN</a>
              <a href="#projecten" className="text-navy font-black text-lg hover:text-terracotta transition-colors">PROJECTEN</a>
              <a href="#reviews" className="text-navy font-black text-lg hover:text-terracotta transition-colors">REVIEWS</a>
            </>
          ) : (
            <>
              <Link href="/" className="font-black text-lg hover:text-terracotta transition-colors text-navy">HOME</Link>
              <Link href="/diensten" className={`font-black text-lg hover:text-terracotta transition-colors ${currentPage === 'diensten' ? 'text-terracotta' : 'text-navy'}`}>DIENSTEN</Link>
              <Link href="/projecten" className={`font-black text-lg hover:text-terracotta transition-colors ${currentPage === 'projecten' ? 'text-terracotta' : 'text-navy'}`}>PROJECTEN</Link>
            </>
          )}
          <Link href="/contact" className="bg-terracotta text-white px-8 py-4 font-black text-lg uppercase tracking-wide hover:bg-navy transition-colors">Contact Nu</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden z-50 flex flex-col gap-1.5 w-8 h-8 justify-center"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-full bg-navy transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-navy transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-navy transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-navy z-40 lg:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {currentPage === 'home' ? (
              <>
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-black text-3xl hover:text-terracotta transition-colors"
                >
                  HOME
                </a>
                <a
                  href="#diensten"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-black text-3xl hover:text-terracotta transition-colors"
                >
                  DIENSTEN
                </a>
                <a
                  href="#projecten"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-black text-3xl hover:text-terracotta transition-colors"
                >
                  PROJECTEN
                </a>
                <a
                  href="#reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-black text-3xl hover:text-terracotta transition-colors"
                >
                  REVIEWS
                </a>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-black text-3xl hover:text-terracotta transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/diensten"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-black text-3xl hover:text-terracotta transition-colors"
                >
                  DIENSTEN
                </Link>
                <Link
                  href="/projecten"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-black text-3xl hover:text-terracotta transition-colors"
                >
                  PROJECTEN
                </Link>
              </>
            )}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-terracotta text-white px-12 py-5 font-black text-2xl uppercase tracking-wide hover:bg-gold transition-colors"
            >
              Contact Nu
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
