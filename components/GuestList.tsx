export const SHOW_GUEST_LIST = false

export function GuestList() {

  const brideFamily = [
    'Mary & Ted Sapountzis',
    'Peter Sapountzis & Emma Menziuso',
    'Eugenia Sapountzi',
    'Greg Pazour & Jeffrey Anuszczyk',
    'Diane Olson'
  ]
  
  const brideFriends = [
    'Bonnie Chin & Jacob Mensah',
    'Raluca Ghilea',
    'Sofia Kritikopoulos',
    'Chloe & Alex Ellison',
    'Sydney Durden & Ethan Marsh',
    'Anna Cookson & Gard Berg Jensen',
    'Emma Cookson & Hugh Jones',
    'William Cookson',
    'Johanna & Rob Cookson',
    'Juliana Parie & Mike D\'Agostino',
    'Priscilla Tso & Evan Clarke'
  ]
  
  const groomFamily = [
    'Ursula Cavero & Jose Luis Tejada',
    'Andrea Tejada & Stefano Monteverde',
    'Diego Tejada',
    'Rosita Cavero & Richard Cacchione',
    'Claudia Cavero & Cesar Rubina', 
    'Felipe Tejada'
  ]
  
  const groomFriends = [
    'Eashan Thakuria & Natalie Marinack',
    'Mayuri & Prithwi Thakuria',
    'Victor Wallemacq & Katelin Bauer',
    'Karan Gidwani',
    'Cole Bressman & Paige Candelaria',
    'Lorenzo de la Puente & Aldonza Buerba ',
    'Gianluca Ferrari & Rafaela Camare',
    'Stefano Lozano & Sandra Wong',
    'Juan Diego Herrera'
  ]

  const allFamily = [
    'Mary & Ted Sapountzis',
    'Ursula & Jose Luis Tejada',
    'Peter Sapountzis & Emma Menziuso',
    'Andrea Tejada & Stefano Monteverde',
    'Diego Tejada',
    'Eugenia Sapountzi',
    'Rosita Cavero & Richard Cacchione',
    'Greg Pazour & Jeffrey Anuszczyk',
    'Claudia Cavero & Cesar Rubina', 
    'Diane Olson'
  ]
  const allFriends = [...brideFriends, ...groomFriends].sort()

  if (!SHOW_GUEST_LIST) {
    return null
  }

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
        
        <div className="space-y-16">
          {/* Family Section */}
          <div>
            <h3 className="font-sans text-xl font-medium text-center mb-8 flex items-center justify-center gap-2">
              <span>Family</span>
            </h3>
            
            <ul className="space-y-2 text-center max-w-2xl mx-auto">
              {allFamily.map((guest) => (
                <li key={guest} className="font-garamond text-lg hover:text-sage-700 transition-colors">{guest}</li>
              ))}
            </ul>
          </div>
          
          {/* Decorative divider */}
          <div className="w-16 h-px bg-sage-300 mx-auto" />
          
          {/* Friends Section */}
          <div>
            <h3 className="font-sans text-xl font-medium text-center mb-8 flex items-center justify-center gap-2">
              <span>Friends</span>
            </h3>
            
            <ul className="space-y-2 text-center max-w-2xl mx-auto">
              {allFriends.map((guest) => (
                <li key={guest} className="font-garamond text-lg hover:text-sage-700 transition-colors">{guest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
