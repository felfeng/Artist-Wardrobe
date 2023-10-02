import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
    const [artists, setArtists] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5001/api/artists')
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then(data => {
                const updatedData = data.map((artist: any, index: number) => ({
                    ...artist,
                    image: `/artists/artist${index + 1}.jpeg`,
                }));
                setArtists(updatedData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching artists:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
      <div className="homepage-container">
          <h1>Welcome!</h1>
          <div className="artist-icons">
              {artists.map((artist) => (
                  <div key={artist._id} className="artist-item">
                      <Link to={`/artist/${artist._id}`}>
                          <img src={artist.image} alt={artist.name} className="artist-image" />
                          <h2>{artist.name}</h2>
                      </Link>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default HomePage;
