export function Accommodations() {
  const hotels = [
    {
      name: 'Hotel Lucent',
      rate: '$139',
      link: 'https://reservations.travelclick.com/97542?groupID=5050053',
      code: null,
      notes: null,
      location: 'In downtown Menlo Park, not the most exciting downtown. Walkable (~30 mins) either downtown Palo Alto or Stanford Shopping Center. Walkable (also ~30 mins) to Isabelle\'s parents\' house.',
    },
    {
      name: 'Stanford Park Hotel',
      rate: '20% off',
      link: 'https://reservations.stanfordparkhotel.com/?adult=1&arrive=2026-01-01&chain=16684&child=0&currency=USD&depart=2026-01-02&hotel=62265&level=hotel&locale=en-US&productcurrency=USD&promo=SPH20SMERF26&rooms=1',
      code: 'SPH20SMERF26',
      notes: null,
      location: 'Very nice hotel, across the street from Stanford Shopping Center and ~10 mins to downtown Palo Alto. Walk in ~40 mins to Isabelle\'s parents\' house.',
    },
    {
      name: 'The Graduate Hilton',
      rate: '$229',
      link: 'https://book.passkey.com/go/tejadasapountziswedding',
      code: null,
      notes: 'If you would like to stay more nights, the hotel said they would help coordinate that to hopefully honor the block pricing. Text Isabelle if you want to do that.',
      location: 'Brand new hotel in Downtown Palo Alto (great location). Walk to Isabelle\'s parents\' house in ~an hour.',
    },
  ]

  return (
    <section className="py-20 px-6 bg-cream-dark relative">
      {/* Subtle green accent at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-sage-300 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Where to Stay</h2>
        
        {/* Decorative line under heading */}
        <div className="w-16 h-px bg-sage-400 mx-auto mb-8" />
        
        <p className="body-text text-center max-w-3xl mx-auto mb-8">
          We have set up hotel blocks at several local hotels. Booking under our discount 
          codes is generally until c. June 10, and there is a limited number of rooms saved 
          at each hotel, so we would recommend booking ASAP.
        </p>
        <p className="body-text text-center max-w-3xl mx-auto mb-12 text-charcoal-light">
          The block is set up July 10-12, but they will honor the discount if you only 
          stay for one night. Let Isabelle know if you are interested in staying more 
          nights, and we can ask the hotel if they would consider honoring the discount 
          for more nights.
        </p>
        
        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {hotels.map((hotel) => (
            <div key={hotel.name} className="bg-cream p-6 rounded-sm shadow-sm border-l-2 border-sage-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-garamond text-xl font-medium">{hotel.name}</h3>
                <span className="font-sans text-sage-600 font-medium bg-sage-50 px-2 py-1 rounded text-sm">{hotel.rate}</span>
              </div>
              <p className="text-sm text-charcoal-light mb-4">{hotel.location}</p>
              {hotel.notes && (
                <p className="text-sm text-charcoal-light mb-4 italic">{hotel.notes}</p>
              )}
              <a 
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sage-600 hover:text-sage-700 font-sans text-sm underline underline-offset-2 transition-colors"
              >
                Book Now →
              </a>
            </div>
          ))}
        </div>
        
        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto bg-cream rounded-sm shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-sage-200 bg-sage-50/50">
                <th className="text-left py-4 px-4 label-text">Hotel Name</th>
                <th className="text-left py-4 px-4 label-text">Rate</th>
                <th className="text-left py-4 px-4 label-text">Book</th>
                <th className="text-left py-4 px-4 label-text">Location</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel, index) => (
                <tr key={hotel.name} className={`border-b border-sage-100 hover:bg-sage-50/30 transition-colors ${index % 2 === 0 ? 'bg-cream' : 'bg-cream-dark/30'}`}>
                  <td className="py-4 px-4 font-garamond text-lg">{hotel.name}</td>
                  <td className="py-4 px-4">
                    <span className="font-sans text-sage-700 font-medium bg-sage-100 px-2 py-1 rounded text-sm">{hotel.rate}</span>
                  </td>
                  <td className="py-4 px-4">
                    <a 
                      href={hotel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-sage-600 hover:bg-sage-700 text-cream font-sans text-sm px-3 py-1.5 rounded transition-colors"
                    >
                      Book Now
                    </a>
                    {hotel.notes && (
                      <p className="text-xs text-charcoal-light mt-2 max-w-48">{hotel.notes}</p>
                    )}
                  </td>
                  <td className="py-4 px-4 text-sm text-charcoal-light max-w-sm">{hotel.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
