import { useEffect, useRef, useState } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';

export default function Globe3D() {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.pointOfView({ lat: 25, lng: 15, altitude: 2.5 });
    }
  }, []);

  const arcsData = [
    {
      startLat: 25.2048,
      startLng: 55.2708, // Dubai
      endLat: 39.5696,
      endLng: 2.6502, // Palma
      color: '#ffffff'
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <Globe
        ref={globeEl}
        width={width > 768 ? 600 : 350}
        height={width > 768 ? 600 : 350}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="rgba(0,0,0,0)"
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={4}
        arcDashInitialGap={() => Math.random() * 5}
        arcDashAnimateTime={1000}
        arcStroke={1}
        atmosphereColor="#ffffff"
        atmosphereAltitude={0.15}
      />
    </div>
  );
}
