'use client'

import { useState, useEffect } from 'react'

const CORRECT_PASSWORD = 'boston'
const STORAGE_KEY = 'wedding-auth'

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Check if already authenticated
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password.toLowerCase() === CORRECT_PASSWORD) {
      setError(false)
      setIsExiting(true)
      localStorage.setItem(STORAGE_KEY, 'true')
      
      // Wait for exit animation
      setTimeout(() => {
        setIsAuthenticated(true)
      }, 500)
    } else {
      setError(true)
      setPassword('')
    }
  }

  // Don't render anything while checking auth status
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-cream z-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-sage-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      {children}
      
      {!isAuthenticated && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
            isExiting ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Blurred/grayed backdrop */}
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-md" />
          
          {/* Password form */}
          <div 
            className={`relative bg-cream rounded-lg shadow-2xl p-10 md:p-14 max-w-md mx-6 text-center transition-all duration-500 ${
              isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-sage-400 to-transparent" />
            
            <h2 className="font-baskerville italic text-2xl md:text-3xl text-charcoal mb-3">
              Welcome
            </h2>
            
            <p className="font-garamond text-charcoal-light mb-8">
              Please enter the password to view our wedding details
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError(false)
                  }}
                  placeholder="Enter password"
                  className={`w-full px-4 py-3 bg-white border rounded-md font-garamond text-lg text-center
                    focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent
                    transition-colors ${
                      error 
                        ? 'border-red-400 bg-red-50' 
                        : 'border-sage-200'
                    }`}
                  autoFocus
                />
                {error && (
                  <p className="mt-2 text-sm text-red-500 font-garamond">
                    Incorrect password, please try again
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-sage-500 hover:bg-sage-600 text-white font-sans text-sm uppercase tracking-wider rounded-md transition-colors"
              >
                Enter
              </button>
            </form>
            
            {/* Decorative bottom element */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-sage-300" />
              <span className="font-baskerville italic text-sage-400 text-sm">I & JL</span>
              <div className="w-8 h-px bg-sage-300" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

