import { useState, useEffect } from 'react'

function App() {
  const [time, setTime] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Animate in the content
    const timer = setTimeout(() => setIsVisible(true), 100)
    
    // Update time every second
    const interval = setInterval(() => setTime(new Date()), 1000)
    
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  return (
    <div className="min-h-screen maintenance-gradient flex items-center justify-center p-4 relative">
      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle small"></div>
        <div className="particle medium"></div>
        <div className="particle large"></div>
        <div className="particle small"></div>
        <div className="particle xlarge"></div>
        <div className="particle medium"></div>
        <div className="particle small"></div>
        <div className="particle large"></div>
        <div className="particle medium"></div>
        <div className="particle xlarge"></div>
        <div className="particle small"></div>
        <div className="particle large"></div>
        <div className="particle medium"></div>
        <div className="particle small"></div>
        <div className="particle xlarge"></div>
        <div className="particle medium"></div>
        <div className="particle large"></div>
        <div className="particle small"></div>
        <div className="particle medium"></div>
        <div className="particle xlarge"></div>
        <div className="particle small"></div>
        <div className="particle large"></div>
        <div className="particle medium"></div>
        <div className="particle small"></div>
        <div className="particle xlarge"></div>
        <div className="particle medium"></div>
        <div className="particle large"></div>
        <div className="particle small"></div>
        <div className="particle medium"></div>
        <div className="particle xlarge"></div>
      </div>

      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 relative z-10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Main Content Card */}
        <div className="glass-effect rounded-3xl p-8 md:p-12 glow-effect animate-pulse">
          
          {/* Animated Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-6 animate-pulse border border-white/20">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#ffffff'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg" style={{color: '#ffffff'}}>
            We're Moving!
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow" style={{color: '#ffffff'}}>
            We're currently moving and my sites will be down until I can set it up again. 
          </p>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow" style={{color: '#ffffff'}}>
            Thank you for your patience.
          </p>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-white/10 rounded-full h-2 mb-4 backdrop-blur-sm">
              <div className="bg-white/40 h-2 rounded-full animate-pulse glow-effect" style={{width: '50%'}}></div>
            </div>
            <p className="text-white text-sm" style={{color: '#ffffff'}}>Move expected to be finished by 9/3/2025</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-white" style={{color: '#ffffff'}}>
              Need immediate assistance? 
              <br />
              Contact me at {' '} <a href="mailto:Chuck@chuck-builds.com" className="text-white font-semibold hover:underline hover:text-white/80 transition-colors" style={{color: '#ffffff'}}>
                 Chuck@chuck-builds.com
              </a> or on <a href="https://discord.gg/wQuwSM8tdq" className="text-white font-semibold hover:underline hover:text-white/80 transition-colors" style={{color: '#ffffff'}}>
                Discord
              </a>.
            </p>
            
            {/* Social Media Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-6" style={{color: '#ffffff'}}>
                Follow My Journey
              </h3>
              <div className="flex justify-center items-center space-x-12 md:space-x-16">
                {/* YouTube */}
                <a 
                  href="https://youtube.com/@chuckbuilds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center text-white hover:text-white/80 transition-all duration-300 hover:scale-110 transform group min-w-[80px]"
                  style={{color: '#ffffff'}}
                >
                  <svg className="w-10 h-10 mb-3" fill="currentColor" viewBox="0 0 24 24" style={{color: '#ffffff'}}>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-sm font-medium text-center">YouTube</span>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/chuckbuilds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center text-white hover:text-white/80 transition-all duration-300 hover:scale-110 transform group min-w-[80px]"
                  style={{color: '#ffffff'}}
                >
                  <svg className="w-10 h-10 mb-3" fill="currentColor" viewBox="0 0 24 24" style={{color: '#ffffff'}}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm font-medium text-center">GitHub</span>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/chuckbuilds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center text-white hover:text-white/80 transition-all duration-300 hover:scale-110 transform group min-w-[80px]"
                  style={{color: '#ffffff'}}
                >
                  <svg className="w-10 h-10 mb-3" fill="currentColor" viewBox="0 0 24 24" style={{color: '#ffffff'}}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm font-medium text-center">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-white text-sm" style={{color: '#ffffff'}}>
          <p>© 2025 Chuck Builds. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default App
