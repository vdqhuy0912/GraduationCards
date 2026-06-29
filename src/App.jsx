import React, { useState } from 'react';
import Envelope from './components/Envelope';
import InvitationCard from './components/InvitationCard';
import MusicPlayer from './components/MusicPlayer';
import StarField from './components/StarField';
import confetti from 'canvas-confetti';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setIsPlaying(true);

    // Gold confetti burst
    const fire = (origin) =>
      confetti({
        particleCount: 80,
        spread: 65,
        origin,
        colors: ['#c9a84c', '#f5e8c0', '#e8c96d', '#0b1f3a', '#fff'],
        scalar: 1.2,
      });

    setTimeout(() => {
      fire({ x: 0.3, y: 0.6 });
      fire({ x: 0.7, y: 0.6 });
    }, 900);

    // Scroll down to the card
    setTimeout(() => {
      document.querySelector('.card-reveal')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1800);
  };

  return (
    <>
      <StarField />
      <div style={{ width: '100%', maxWidth: '760px', padding: '0 1rem' }}>
        <Envelope isOpened={isOpened} onOpen={handleOpen} />
        <InvitationCard isOpened={isOpened} />
      </div>
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </>
  );
}
