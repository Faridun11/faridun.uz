import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const { pathname } = useLocation()
    const [showIndicator, setShowIndicator] = useState(false)

    useEffect(() => {
        setShowIndicator(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })

        const timer = setTimeout(() => {
            setShowIndicator(false)
        }, 600)

        return () => clearTimeout(timer)
    }, [pathname])

    return (
        <>
            {showIndicator && <div className="scroll-indicator" />}
        </>
    )
}

export default ScrollToTop
