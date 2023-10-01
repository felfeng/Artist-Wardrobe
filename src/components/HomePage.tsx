import React, { useState, useEffect } from 'react';

type Artist = {
    id: string;
    name: string;
    image: string;
  };

  const HomePage: React.FC = () => {
    const [artists, setArtists] = useState<Artist[]>([]);
  
    useEffect(() => {
      fetch("/api/artists")
        .then(res => res.json())
        .then(data => setArtists(data))
        .catch(err => console.error("Error fetching artists:", err));
    }, []);
  
    return (
      <div className="homepage">
        <h1>Welcome!</h1>
        <div className="artist-grid">
          {artists.map(artist => (
            <a key={artist.id} href={`/artist/${artist.id}`}>
              <img src={artist.image} alt={artist.name} />
            </a>
          ))}
        </div>
      </div>
    );
  }

export default HomePage;