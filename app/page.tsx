import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Welcome } from '@/components/Welcome'
import { Details } from '@/components/Details'
import { Accommodations } from '@/components/Accommodations'
import { GuestList } from '@/components/GuestList'
import { SpotifyEmbed } from '@/components/SpotifyEmbed'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main id="top">
        <Hero />
        
        <Welcome />
        
        <div id="details">
          <Details />
        </div>
        
        <div id="accommodations">
          <Accommodations />
        </div>
        
        <div id="guests">
          <GuestList />
        </div>
        
        <div id="playlist">
          <SpotifyEmbed />
        </div>
        
        <Footer />
      </main>
    </>
  )
}

