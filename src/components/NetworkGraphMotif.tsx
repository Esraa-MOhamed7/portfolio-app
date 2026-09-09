import React from 'react';

interface NetworkGraphMotifProps {
  className?: string;
  variant?: 'inline' | 'watermark' | 'heading-accent' | 'divider';
  color?: string;
  accentColor?: string;
}

export const NetworkGraphMotif: React.FC<NetworkGraphMotifProps> = ({
  className = '',
  variant = 'inline',
  color = '#4B4FCF',
  accentColor = '#E88C5A',
}) => {
  if (variant === 'heading-accent') {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <span className="w-1.5 h-1.5 rotate-45 bg-[#E88C5A] shadow-[0_0_6px_rgba(232,140,90,0.6)]" />
        <span className="w-6 h-[1.5px] bg-gradient-to-r from-[#E88C5A] to-[#4B4FCF]" />
        <span className="w-2 h-2 rounded-full bg-[#4B4FCF] shadow-[0_0_6px_rgba(75,79,207,0.5)]" />
        <span className="w-3 h-[1.5px] bg-[#4B4FCF]/40" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#4B4FCF]/40" />
      </div>
    );
  }

  if (variant === 'divider') {
    return (
      <div className={`w-full flex items-center justify-center gap-2 py-4 ${className}`}>
        <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#E2E1EC] to-[#4B4FCF]/30" />
        <span className="w-2 h-2 rounded-full bg-[#4B4FCF]/30" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#E88C5A]" />
        <span className="w-2 h-2 rounded-full bg-[#4B4FCF]/30" />
        <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#E2E1EC] to-[#4B4FCF]/30" />
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <svg
        className={`w-6 h-6 inline-block shrink-0 ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="12" r="2" fill={color} fillOpacity="0.8" />
        <circle cx="19" cy="6" r="1.5" fill={accentColor} />
        <circle cx="17" cy="18" r="2" fill={color} fillOpacity="0.8" />
        <line x1="5" y1="12" x2="19" y2="6" stroke={color} strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.4" />
        <line x1="5" y1="12" x2="17" y2="18" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
        <line x1="19" y1="6" x2="17" y2="18" stroke={accentColor} strokeWidth="0.75" strokeDasharray="2 2" strokeOpacity="0.4" />
      </svg>
    );
  }

  if (variant === 'watermark') {
    return (
      <svg
        className={`absolute pointer-events-none select-none ${className}`}
        width="320"
        height="220"
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="50" r="3.5" fill={color} fillOpacity="0.25" />
        <circle cx="140" cy="30" r="2.5" fill={accentColor} fillOpacity="0.35" />
        <circle cx="110" cy="130" r="4.5" fill={color} fillOpacity="0.3" />
        <circle cx="230" cy="80" r="3.5" fill={color} fillOpacity="0.25" />
        <circle cx="290" cy="160" r="3" fill={accentColor} fillOpacity="0.35" />
        <circle cx="190" cy="180" r="4" fill={color} fillOpacity="0.25" />

        {/* Geometric Diamonds */}
        <polygon points="230,75 235,80 230,85 225,80" fill={accentColor} fillOpacity="0.4" />
        <polygon points="110,125 115,130 110,135 105,130" fill={color} fillOpacity="0.4" />
        <polygon points="40,46 44,50 40,54 36,50" fill={color} fillOpacity="0.3" />

        {/* Interconnected Fine Hairline Links */}
        <line x1="40" y1="50" x2="140" y2="30" stroke={color} strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.22" />
        <line x1="40" y1="50" x2="110" y2="130" stroke={color} strokeWidth="0.75" strokeOpacity="0.25" />
        <line x1="140" y1="30" x2="230" y2="80" stroke={color} strokeWidth="0.75" strokeOpacity="0.25" />
        <line x1="110" y1="130" x2="230" y2="80" stroke={accentColor} strokeWidth="0.75" strokeDasharray="2 2" strokeOpacity="0.3" />
        <line x1="110" y1="130" x2="190" y2="180" stroke={color} strokeWidth="0.75" strokeOpacity="0.25" />
        <line x1="230" y1="80" x2="290" y2="160" stroke={color} strokeWidth="0.75" strokeOpacity="0.25" />
        <line x1="190" y1="180" x2="290" y2="160" stroke={accentColor} strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.3" />
      </svg>
    );
  }

  return null;
};
