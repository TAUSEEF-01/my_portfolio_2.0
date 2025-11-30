"use client";

import LaserFlow from './LaserFlow';

// Basic usage example
export function LaserFlowBasic() {
  return (
    <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
      <LaserFlow />
    </div>
  );
}

// Hero section background example
export function LaserFlowHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <LaserFlow
        color="#3b82f6"
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        fogIntensity={0.5}
        wispDensity={1.2}
      />
    </div>
  );
}

// Interactive card example with custom colors
export function LaserFlowCard() {
  return (
    <div 
      style={{ 
        height: '600px', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#060010'
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#FF79C6"
      />
      
      {/* Your content overlay */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '86%',
        height: '60%',
        backgroundColor: 'rgba(6, 0, 16, 0.8)',
        borderRadius: '20px',
        border: '2px solid #FF79C6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        zIndex: 6,
        backdropFilter: 'blur(10px)'
      }}>
        Your Content Here
      </div>
    </div>
  );
}

// Customizable example with all props
export function LaserFlowCustom() {
  return (
    <div style={{ height: '700px', position: 'relative', overflow: 'hidden' }}>
      <LaserFlow
        color="#00ff88"
        wispDensity={1.5}
        horizontalBeamOffset={0.15}
        verticalBeamOffset={0.05}
        flowSpeed={0.5}
        verticalSizing={2.5}
        horizontalSizing={0.6}
        fogIntensity={0.6}
        fogScale={0.4}
        wispSpeed={20}
        wispIntensity={6}
        flowStrength={0.3}
      />
    </div>
  );
}
