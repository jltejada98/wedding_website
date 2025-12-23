export function SpotifyEmbed() {
  const playlistId = "7wYDCG5hROcLeBCairShbk"; // Set to your playlist ID

  return (
    <section className="py-20 px-6 bg-cream-dark relative">
      {/* Subtle green accent at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-sage-300 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-heading">Help Us Build Our Playlist</h2>

        {/* Decorative line under heading */}
        <div className="w-16 h-px bg-sage-400 mx-auto mb-8" />

        <p className="body-text mb-8">
          We&apos;d love for you to add three of your favorite songs to our
          wedding playlist! Songs can be any genre or language, we'll organize
          the playlist.
        </p>

        <p className="body-text mb-8">
          If you don't have Spotify please text us and we'll add your songs to
          the playlist!
        </p>

        {playlistId ? (
          <div className="rounded-sm overflow-hidden shadow-lg ring-2 ring-sage-200">
            <iframe
              src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="bg-charcoal"
            />
          </div>
        ) : (
          <div className="bg-gradient-to-br from-sage-700 to-sage-800 text-cream p-12 rounded-sm shadow-lg">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage-600 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <p className="font-sans text-sm uppercase tracking-wide mb-2">
              Spotify Playlist Coming Soon
            </p>
            <p className="text-cream/70 text-sm">
              We&apos;ll add the playlist link here once it&apos;s ready!
            </p>
          </div>
        )}

        <p className="text-sm text-charcoal-light mt-6">
          To add songs: Open the playlist in Spotify, click the three dots, and
          select &ldquo;Add to playlist&rdquo; on any song you want to include!
        </p>
      </div>
    </section>
  );
}
