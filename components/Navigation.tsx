'use client'

import { useState, useEffect } from 'react'
import { SHOW_GUEST_LIST } from './GuestList'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'Details', href: '#details' },
    { label: 'Stay', href: '#accommodations' },
    ...(SHOW_GUEST_LIST ? [{ label: 'Guests', href: '#guests' }] : []),
    { label: 'Playlist', href: '#playlist' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#top" 
          className="font-baskerville italic text-lg text-charcoal hover:text-sage-600 transition-colors"
        >
          I & JL
        </a>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-sm uppercase tracking-wide text-charcoal-light hover:text-sage-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-charcoal p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-sm border-t border-sage-100">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-sans text-sm uppercase tracking-wide text-charcoal-light hover:text-sage-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

