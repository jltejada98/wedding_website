import { OliveBranch } from './OliveBranch'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Subtle green gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-sage-50/40 to-transparent" />
      
      {/* Decorative olive branch */}
      <div className="absolute top-8 right-4 md:top-16 md:right-16 w-48 md:w-72 opacity-80">
        <OliveBranch className="w-full h-auto" />
      </div>
      
      {/* Second olive branch on left, flipped */}
      <div className="absolute bottom-20 left-4 md:bottom-32 md:left-16 w-36 md:w-56 opacity-50 transform -scale-x-100 rotate-12">
        <OliveBranch className="w-full h-auto" />
      </div>
      
      <div className="text-center z-10">
        <p className="font-baskerville italic text-lg md:text-xl text-charcoal-light mb-6">
          Together with their families
        </p>
        
        <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl tracking-extra-wide text-charcoal mb-6 uppercase">
          Isabelle <span className="font-baskerville italic normal-case text-3xl md:text-5xl lg:text-6xl text-sage-600">&</span> Jose Luis
        </h1>
        
        <p className="font-baskerville italic text-lg md:text-xl text-charcoal-light mb-12">
          invite you to celebrate their marriage
        </p>
        
        {/* Decorative green line */}
        <div className="w-24 h-px bg-sage-400 mx-auto mb-8" />
        
        <div className="space-y-2">
          <p className="font-sans text-xl md:text-2xl tracking-wide uppercase">
            Saturday 11th <span className="font-baskerville italic normal-case text-sage-600">of</span> July
          </p>
          <p className="font-sans text-xl md:text-2xl tracking-wide uppercase">
            Five o&apos;clock
          </p>
          <p className="font-sans text-lg md:text-xl tracking-wide">
            <span className="font-baskerville italic text-sage-600">in</span>{' '}
            <span className="uppercase">Menlo Park, California</span>
          </p>
        </div>
        
        <p className="font-baskerville italic text-lg md:text-xl text-charcoal-light mt-12">
          Dinner and merriment to follow
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-sage-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  )
}
