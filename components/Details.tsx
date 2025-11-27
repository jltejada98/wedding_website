export function Details() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">The Details</h2>
        
        {/* Decorative line under heading */}
        <div className="w-16 h-px bg-sage-400 mx-auto mb-12" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Location */}
          <div className="p-6 bg-cream-dark/50 rounded-sm border-l-2 border-sage-300 hover:border-sage-400 transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✈️</span>
              <div>
                <h3 className="section-subheading">Location</h3>
                <p className="body-text">
                  We are hosting the wedding in the backyard of Isabelle&apos;s childhood 
                  home in Menlo Park, CA. You can fly into either SFO or SJC, both of 
                  which are a ~30 min drive to the Menlo Park/Palo Alto area, where we 
                  have set up hotel blocks.
                </p>
                <p className="body-text mt-3 text-charcoal-light">
                  If you wanted to stay in San Francisco, we have not set up any hotel 
                  blocks there but you could take public transit or drive/Uber down to 
                  MP/PA in c. an hour.
                </p>
              </div>
            </div>
          </div>
          
          {/* The Event */}
          <div className="p-6 bg-cream-dark/50 rounded-sm border-l-2 border-sage-300 hover:border-sage-400 transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🥂</span>
              <div>
                <h3 className="section-subheading">The Event</h3>
                <p className="body-text">
                  The ceremony will start at <span className="text-sage-700 font-medium">5pm</span>, but our bar will be open at <span className="text-sage-700 font-medium">4:30</span>. 
                  We encourage you to come around 4:30 and get a drink and mingle!
                </p>
                <p className="body-text mt-3">
                  After the ceremony, we&apos;ll have an open bar all night and a catered dinner.
                </p>
              </div>
            </div>
          </div>
          
          {/* Other Details */}
          <div className="p-6 bg-cream-dark/50 rounded-sm border-l-2 border-sage-300 hover:border-sage-400 transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💃</span>
              <div>
                <h3 className="section-subheading">Dress Code & RSVP</h3>
                <p className="body-text">
                  Please kindly RSVP to either Jose or Isabelle by May 1. The requested 
                  dress code is <span className="text-sage-700 font-medium">semiformal</span>, but wear whatever makes you happy (but no 
                  jeans please).
                </p>
              </div>
            </div>
          </div>
          
          {/* Weather */}
          <div className="p-6 bg-cream-dark/50 rounded-sm border-l-2 border-sage-300 hover:border-sage-400 transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌤</span>
              <div>
                <h3 className="section-subheading">Weather</h3>
                <p className="body-text">
                  During the day, the weather is usually perfectly sunny and high-70s/low-80s. 
                  Evenings can get chillier, so we recommend bringing a light sweater or 
                  jacket as we will be outside.
                </p>
              </div>
            </div>
          </div>
          
          {/* Transportation */}
          <div className="p-6 bg-cream-dark/50 rounded-sm border-l-2 border-sage-300 hover:border-sage-400 transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚕</span>
              <div>
                <h3 className="section-subheading">Transportation</h3>
                <p className="body-text">
                  Ubers/Lyfts are everywhere in the Bay. You might have to wait a little 
                  longer later in the evening, but it shouldn&apos;t be too much of an issue. 
                  The area is also generally very walkable.
                </p>
              </div>
            </div>
          </div>
          
          {/* Gifts */}
          <div className="p-6 bg-cream-dark/50 rounded-sm border-l-2 border-sage-300 hover:border-sage-400 transition-colors">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎁</span>
              <div>
                <h3 className="section-subheading">Gifts</h3>
                <p className="body-text">
                  Your presence is the only gift we need 🥰 But should you like to give 
                  something, a small contribution to our future would be very much appreciated.
                </p>
                <div className="mt-4 p-4 bg-sage-50 rounded-sm border border-sage-200">
                  <p className="text-sm text-charcoal-light font-sans">
                    {/* TODO: Add Venmo/Zelle details */}
                    <span className="block font-medium text-charcoal">Venmo:</span>
                    <span className="text-sage-600">@your-venmo-handle</span>
                  </p>
                  <p className="text-sm text-charcoal-light font-sans mt-2">
                    <span className="block font-medium text-charcoal">Zelle:</span>
                    <span className="text-sage-600">your-email@example.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
