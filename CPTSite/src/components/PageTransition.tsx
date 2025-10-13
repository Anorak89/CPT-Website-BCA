import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Start transition when location changes
    setIsTransitioning(true)
    
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 150) // Simple fade duration

    return () => {
      clearTimeout(timer)
    }
  }, [location.pathname])

  return (
    <div 
      className={`transition-opacity duration-150 ease-out ${
        isTransitioning 
          ? 'opacity-0' 
          : 'opacity-100'
      }`}
    >
      {children}
    </div>
  )
}