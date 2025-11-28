import Image from 'next/image'

export function Welcome() {
  return (
    <section className="py-20 px-6 bg-cream-dark relative">
      {/* Subtle green accent line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-sage-300 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="section-heading md:text-left">
              We&apos;re so excited you&apos;re here!
            </h2>
            
            <div className="body-text space-y-4">
              <p>
                We&apos;re getting married on <strong className="text-sage-700">Saturday, July 11, 2026</strong> in 
                Isabelle&apos;s parents&apos; backyard in Menlo Park, California.
              </p>
              <p className="text-charcoal-light">
                1099 Coleman Avenue, Menlo Park, California, 94025
              </p>
              <p>
                We have put together this website to share key info, but please 
                reach out with any questions.
              </p>
              <div className="pt-4 space-y-1 text-base">
                <p>Isabelle: <a href="tel:650-862-6765" className="text-sage-600 hover:text-sage-700 transition-colors">650-862-6765</a></p>
                <p>Jose Luis: <a href="tel:765-637-3005" className="text-sage-600 hover:text-sage-700 transition-colors">765-637-3005</a></p>
              </div>
              <p className="pt-4 font-medium">
                We kindly request RSVPs by <span className="text-sage-700">May 1, 2026</span>.
              </p>
              <p className="pt-6 font-baskerville italic text-xl">
                Thank you for being a part of our lives and our wedding. 
                We can&apos;t wait to celebrate with everyone.
              </p>
              <p className="font-baskerville italic text-sage-600">
                Lots of love,<br />
                Isabelle, Jose Luis, & our families
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            {/* Photo with green border accent */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-sage-200 via-sage-100 to-sage-200 rounded-sm opacity-60" />
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-sm shadow-lg overflow-hidden border-2 border-sage-200">
                <Image
                  src="/couple.jpg"
                  alt="Isabelle and Jose Luis"
                  width={288}
                  height={384}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
