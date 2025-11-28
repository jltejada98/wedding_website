export function GuestList() {
  const brideFamily = [
    'Mary & Ted Sapountzis',
    'Peter Sapountzis & Emma Menziuso',
    'Eugenia Sapountzi',
    'Greg Pazour & Jeffrey Anuszczyk',
    'Diane Olson',
  ]
  
  const brideFriends = [
    'Bonnie Chin & Jacob Mensah',
    'Raluca Ghilea',
    'Sofia Kritikopoulos',
    'Chloe Ellison',
    'Sydney Durden & Ethan',
    'Anna Cookson & Gard Berg Jensen',
    'Emma Cookson & Hugh',
    'William Cookson',
    'Johanna & Rob Cookson',
    'Juliana Parie & Mike D\'Agostino',
    'Priscilla Tso & Evan Clarke',
  ]
  
  const groomFamily = [
    'Ursula Cavero & Jose Luis Tejada',
    'Andrea Tejada & Stefano',
    'Diego Tejada',
    'Rosita Cavero & Richard',
  ]
  
  const groomFriends = [
    'Natalie Marinack & Eashan Thakuria',
    'Mayuri & Prithwi Thakuria',
    'Katelin Bauer & Victor Wallemacq',
    'Karan Gidwani',
    'Paige Candelaria & Cole Bressman',
    'Aldonza & Lorenzo de la Puente',
    'Rafa & Gianluca Ferrari',
    'Sandra & Stefano ',
    'Juan Diego Herrera',
  ]

  return (
    <section className="py-20 px-6 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #6B7F5E 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      
      <div className="max-w-5xl mx-auto relative">
        <h2 className="section-heading">Our Guests</h2>
        
        {/* Decorative line under heading */}
        <div className="w-16 h-px bg-sage-400 mx-auto mb-12" />
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 relative">
          {/* Vertical divider line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage-300 to-transparent" />
          
          {/* Bride's Side */}
          <div className="md:pr-8">
            <h3 className="font-sans text-xl font-medium text-center mb-8 flex items-center justify-center gap-2">
              <span>Bride</span>
              <span>👰</span>
            </h3>
            
            <div className="mb-8">
              <h4 className="font-baskerville italic text-lg text-sage-600 mb-4 text-center">
                Family
              </h4>
              <ul className="space-y-2 text-center">
                {brideFamily.map((guest) => (
                  <li key={guest} className="font-garamond text-lg hover:text-sage-700 transition-colors">{guest}</li>
                ))}
              </ul>
            </div>
            
            {/* Small decorative divider */}
            <div className="w-8 h-px bg-sage-300 mx-auto my-6" />
            
            <div>
              <h4 className="font-baskerville italic text-lg text-sage-600 mb-4 text-center">
                Friends
              </h4>
              <ul className="space-y-2 text-center">
                {brideFriends.map((guest) => (
                  <li key={guest} className="font-garamond text-lg hover:text-sage-700 transition-colors">{guest}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Groom's Side */}
          <div className="md:pl-8">
            <h3 className="font-sans text-xl font-medium text-center mb-8 flex items-center justify-center gap-2">
              <span>Groom</span>
              <span>🤵</span>
            </h3>
            
            <div className="mb-8">
              <h4 className="font-baskerville italic text-lg text-sage-600 mb-4 text-center">
                Family
              </h4>
              <ul className="space-y-2 text-center">
                {groomFamily.map((guest) => (
                  <li key={guest} className="font-garamond text-lg hover:text-sage-700 transition-colors">{guest}</li>
                ))}
              </ul>
            </div>
            
            {/* Small decorative divider */}
            <div className="w-8 h-px bg-sage-300 mx-auto my-6" />
            
            <div>
              <h4 className="font-baskerville italic text-lg text-sage-600 mb-4 text-center">
                Friends
              </h4>
              <ul className="space-y-2 text-center">
                {groomFriends.map((guest) => (
                  <li key={guest} className="font-garamond text-lg hover:text-sage-700 transition-colors">{guest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
