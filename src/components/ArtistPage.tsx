import React from 'react';
import { useParams } from 'react-router-dom';

interface Params extends Record<string, string> {
  id: string;
}

const ArtistPage: React.FC = () => {
  const { id } = useParams<Params>();

  return <div>shop outfits for artist {id} here~</div>;
}

export default ArtistPage;