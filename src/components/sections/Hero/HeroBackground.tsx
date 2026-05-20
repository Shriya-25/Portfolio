'use client';

import ParticleBackground from '@/components/background/ParticleBackground';
import HorizonGlow from '@/components/background/HorizonGlow';

export default function HeroBackground() {
  return (
    <div className="contents" style={{ zIndex: 2 }}>
      {/* Floating Particles */}
      <ParticleBackground />

      {/* Animated Horizon Glow */}
      <HorizonGlow />
    </div>
  );
}
