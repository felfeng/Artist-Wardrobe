import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArtistPage.css';

interface Params extends Record<string, string> {
  id: string;
}

interface Artist {
  _id: string;
  artistName: string; 
}

interface Outfit {
  _id: string;
  itemImage: string;
  itemLink: string;
  itemName: string;
}

const ArtistPage: React.FC = () => {
  const { id } = useParams<Params>();
  
  const [artist, setArtist] = useState<Artist | null>(null);
  const [outfits, setOutfits] = useState<Outfit[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5001/api/outfits/${id}`)
      .then(response => response.json())
      .then(data => {
        const updatedOutfits = data.map((outfit: Outfit) => ({
          ...outfit,
          itemImage: `/outfits/${outfit.itemName.toLowerCase().replace(' ', '-')}.jpeg`,
        }));
        setOutfits(updatedOutfits);
      })
      .catch(error => console.error('Error fetching outfits:', error));
  }, [id]);

  return (
    <div className="artist-outfit-page">
    <div>
      <div className="outfits-container">
        {outfits.map(outfit => (
          <div key={outfit._id} className="outfit-item">
            <a href={outfit.itemLink} target="_blank" rel="noopener noreferrer">
              <div className="outfit-image-container">
                <img src={outfit.itemImage} alt={outfit.itemName} />
              </div>
            </a>
            <p>{outfit.itemName}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}


export default ArtistPage;
