import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Start transition when location changes
    setIsTransitioning(true)
    setIsLoading(true)
    
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 200) // Slightly longer transition
    
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => {
      clearTimeout(timer)
      clearTimeout(loadingTimer)
    }
  }, [location.pathname])

  return (
    <div className="relative">
      {/* Loading indicator */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 z-50">
          <div className="h-full bg-blue-600 animate-pulse"></div>
        </div>
      )}
      
      <div 
        className={`transition-all duration-300 ease-out transform ${
          isTransitioning 
            ? 'opacity-0 translate-y-4 scale-[0.98]' 
            : 'opacity-100 translate-y-0 scale-100'
        }`}
      >
        {children}
      </div>
    </div>
  )
}