import { OliveBranch } from './OliveBranch'

export function Footer() {
  return (
    <footer className="py-16 px-6 text-center relative bg-gradient-to-b from-cream to-sage-50/30">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent" />
      
      <div className="max-w-2xl mx-auto">
        <OliveBranch className="w-32 h-auto mx-auto mb-8 opacity-70" />
        
        <p className="font-baskerville italic text-2xl md:text-3xl text-charcoal mb-4">
          We can&apos;t wait to celebrate with you!
        </p>
        
        <p className="font-garamond text-lg text-charcoal-light mb-8">
          Saturday, July 11, 2026 <span className="text-sage-500">•</span> Menlo Park, California
        </p>
        
        <div className="flex justify-center gap-8 text-sm text-charcoal-light font-sans">
          <div className="group">
            <p className="uppercase tracking-wide text-xs mb-1 text-sage-600">Isabelle</p>
            <a href="tel:650-862-6765" className="hover:text-sage-600 transition-colors">
              650-862-6765
            </a>
          </div>
          <div className="w-px bg-sage-300" />
          <div className="group">
            <p className="uppercase tracking-wide text-xs mb-1 text-sage-600">Jose Luis</p>
            <a href="tel:765-637-3005" className="hover:text-sage-600 transition-colors">
              765-637-3005
            </a>
          </div>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="w-8 h-px bg-sage-300" />
          <p className="text-xs text-sage-600 font-sans tracking-wide">Shoutout Peter for the GOATED website #vibecodegod</p>
          <div className="w-8 h-px bg-sage-300" />
        </div>
      </div>
    </footer>
  )
}
