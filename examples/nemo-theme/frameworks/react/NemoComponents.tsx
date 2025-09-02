import React, { useState, useCallback } from 'react';

// Types
type SeatStatus = 'available' | 'occupied' | 'reserved' | 'disabled';
type WagonClass = 'first' | 'second' | 'business';
type PriorityLevel = 'high' | 'medium' | 'low' | 'info';

interface Seat {
  number: string;
  status: SeatStatus;
}

interface NemoSeatProps {
  seatNumber: string;
  status: SeatStatus;
  interactive?: boolean;
  className?: string;
  onClick?: (seatNumber: string, status: SeatStatus) => void;
}

interface NemoClassTagProps {
  classType: WagonClass;
  className?: string;
}

interface NemoPriorityTagProps {
  priority: PriorityLevel;
  children: React.ReactNode;
  className?: string;
}

interface NemoWagonLayoutProps {
  wagonNumber: string;
  wagonClass: WagonClass;
  seats: Seat[];
  interactive?: boolean;
  showStats?: boolean;
  onSeatClick?: (seatNumber: string, status: SeatStatus) => void;
  className?: string;
}

// NemoSeat Component
export const NemoSeat: React.FC<NemoSeatProps> = ({
  seatNumber,
  status,
  interactive = true,
  className = '',
  onClick
}) => {
  const isInteractive = interactive && (status === 'available' || status === 'reserved');
  
  const getAriaLabel = useCallback(() => {
    const statusText = {
      available: 'verfügbar',
      occupied: 'besetzt',
      reserved: 'reserviert',
      disabled: 'nicht verfügbar'
    };
    
    return `Platz ${seatNumber}, ${statusText[status]}`;
  }, [seatNumber, status]);
  
  const handleClick = useCallback(() => {
    if (!isInteractive) return;
    onClick?.(seatNumber, status);
  }, [isInteractive, onClick, seatNumber, status]);
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);
  
  return (
    <div
      data-nemo-seat-status={status}
      className={`nemo-seat ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={getAriaLabel()}
      tabIndex={isInteractive ? 0 : undefined}
      role={isInteractive ? 'button' : undefined}
      style={{
        cursor: isInteractive ? 'pointer' : status === 'occupied' || status === 'disabled' ? 'not-allowed' : 'default',
        userSelect: 'none',
        outline: 'none'
      }}
      onFocus={(e) => {
        e.target.style.outline = '2px solid var(--db-adaptive-on-bg-basic-emphasis-100-default)';
        e.target.style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        e.target.style.outline = 'none';
      }}
    >
      {seatNumber}
    </div>
  );
};

// NemoClassTag Component
export const NemoClassTag: React.FC<NemoClassTagProps> = ({
  classType,
  className = ''
}) => {
  const getDisplayText = useCallback(() => {
    const classTexts = {
      first: '1. Klasse',
      second: '2. Klasse',
      business: 'Business'
    };
    
    return classTexts[classType];
  }, [classType]);
  
  return (
    <div
      data-nemo-class={classType}
      className={`nemo-class-tag ${className}`}
    >
      {getDisplayText()}
    </div>
  );
};

// NemoPriorityTag Component
export const NemoPriorityTag: React.FC<NemoPriorityTagProps> = ({
  priority,
  children,
  className = ''
}) => {
  return (
    <div
      data-nemo-priority={priority}
      className={`nemo-priority-tag ${className}`}
    >
      {children}
    </div>
  );
};

// NemoWagonLayout Component
export const NemoWagonLayout: React.FC<NemoWagonLayoutProps> = ({
  wagonNumber,
  wagonClass,
  seats,
  interactive = true,
  showStats = true,
  onSeatClick,
  className = ''
}) => {
  const availableCount = seats.filter(seat => seat.status === 'available').length;
  const occupiedCount = seats.filter(seat => seat.status === 'occupied').length;
  const reservedCount = seats.filter(seat => seat.status === 'reserved').length;
  
  const wagonLayoutStyle: React.CSSProperties = {
    border: '2px solid var(--db-adaptive-bg-basic-level-3-default)',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: 'var(--db-adaptive-bg-basic-level-1-default)',
    margin: '16px 0'
  };
  
  const wagonHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    paddingBottom: '8px',
    borderBottom: '1px solid var(--db-adaptive-bg-basic-level-3-default)'
  };
  
  const seatsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
    margin: '16px 0'
  };
  
  const wagonStatsStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '12px',
    paddingTop: '8px',
    borderTop: '1px solid var(--db-adaptive-bg-basic-level-3-default)'
  };
  
  const statStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '12px'
  };
  
  const statLabelStyle: React.CSSProperties = {
    display: 'block',
    color: 'var(--db-adaptive-on-bg-basic-emphasis-70-default)'
  };
  
  const statValueStyle: React.CSSProperties = {
    display: 'block',
    fontWeight: 600,
    color: 'var(--db-adaptive-on-bg-basic-emphasis-100-default)'
  };
  
  return (
    <div 
      className={`wagon-layout ${className}`}
      data-wagon-class={wagonClass}
      style={wagonLayoutStyle}
    >
      <div className="wagon-header" style={wagonHeaderStyle}>
        <NemoClassTag classType={wagonClass} />
        <span 
          className="wagon-number"
          style={{
            fontWeight: 600,
            color: 'var(--db-adaptive-on-bg-basic-emphasis-90-default)'
          }}
        >
          Wagon {wagonNumber}
        </span>
      </div>
      
      <div className="seats-grid" style={seatsGridStyle}>
        {seats.map((seat, index) => (
          <NemoSeat
            key={`${seat.number}-${index}`}
            seatNumber={seat.number}
            status={seat.status}
            interactive={interactive}
            onClick={onSeatClick}
          />
        ))}
      </div>
      
      {showStats && (
        <div className="wagon-stats" style={wagonStatsStyle}>
          <div className="stat" style={statStyle}>
            <span className="stat-label" style={statLabelStyle}>Verfügbar:</span>
            <span className="stat-value" style={statValueStyle}>{availableCount}</span>
          </div>
          <div className="stat" style={statStyle}>
            <span className="stat-label" style={statLabelStyle}>Besetzt:</span>
            <span className="stat-value" style={statValueStyle}>{occupiedCount}</span>
          </div>
          <div className="stat" style={statStyle}>
            <span className="stat-label" style={statLabelStyle}>Reserviert:</span>
            <span className="stat-value" style={statValueStyle}>{reservedCount}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Custom Hook für Theme-Management
export const useNemoTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.getAttribute('data-mode') === 'dark' ||
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const [isHighContrast, setIsHighContrast] = useState(false);
  
  const toggleDarkMode = useCallback(() => {
    const newMode = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-mode', newMode);
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);
  
  const toggleHighContrast = useCallback(() => {
    const newContrast = !isHighContrast;
    document.body.style.filter = newContrast ? 'contrast(200%)' : '';
    setIsHighContrast(newContrast);
  }, [isHighContrast]);
  
  const validateTheme = useCallback(() => {
    const requiredProperties = [
      '--nemo-seat-available-bg',
      '--nemo-seat-occupied-bg',
      '--nemo-seat-reserved-bg',
      '--nemo-seat-disabled-bg',
      '--nemo-class-first-bg',
      '--nemo-class-second-bg',
      '--nemo-class-business-bg'
    ];
    
    const root = getComputedStyle(document.documentElement);
    const missing = requiredProperties.filter(prop => 
      !root.getPropertyValue(prop).trim()
    );
    
    return {
      isValid: missing.length === 0,
      missingProperties: missing
    };
  }, []);
  
  return {
    isDarkMode,
    isHighContrast,
    toggleDarkMode,
    toggleHighContrast,
    validateTheme
  };
};

// Example App Component
export const NemoApp: React.FC = () => {
  const { isDarkMode, isHighContrast, toggleDarkMode, toggleHighContrast, validateTheme } = useNemoTheme();
  
  const [wagonASeats, setWagonASeats] = useState<Seat[]>([
    { number: '1A', status: 'available' },
    { number: '1B', status: 'occupied' },
    { number: '1C', status: 'available' },
    { number: '1D', status: 'reserved' },
    { number: '2A', status: 'occupied' },
    { number: '2B', status: 'available' },
    { number: '2C', status: 'disabled' },
    { number: '2D', status: 'available' }
  ]);
  
  const [wagonBSeats, setWagonBSeats] = useState<Seat[]>([
    { number: '4A', status: 'available' },
    { number: '4B', status: 'available' },
    { number: '4C', status: 'occupied' },
    { number: '4D', status: 'available' },
    { number: '5A', status: 'reserved' },
    { number: '5B', status: 'occupied' },
    { number: '5C', status: 'available' },
    { number: '5D', status: 'available' },
    { number: '6A', status: 'available' },
    { number: '6B', status: 'disabled' },
    { number: '6C', status: 'reserved' },
    { number: '6D', status: 'available' }
  ]);
  
  const handleSeatClick = useCallback((seatNumber: string, status: SeatStatus) => {
    const updateSeats = (seats: Seat[]) => {
      return seats.map(seat => {
        if (seat.number === seatNumber) {
          if (status === 'available') {
            return { ...seat, status: 'reserved' as SeatStatus };
          } else if (status === 'reserved') {
            return { ...seat, status: 'available' as SeatStatus };
          }
        }
        return seat;
      });
    };
    
    // Check which wagon the seat belongs to
    if (wagonASeats.some(seat => seat.number === seatNumber)) {
      setWagonASeats(updateSeats);
    } else if (wagonBSeats.some(seat => seat.number === seatNumber)) {
      setWagonBSeats(updateSeats);
    }
  }, [wagonASeats, wagonBSeats]);
  
  const handleValidateTheme = useCallback(() => {
    const result = validateTheme();
    if (result.isValid) {
      alert('✅ NEMO Theme erfolgreich geladen!');
    } else {
      alert(`❌ Fehlende NEMO Theme-Eigenschaften: ${result.missingProperties.join(', ')}`);
    }
  }, [validateTheme]);
  
  const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'var(--db-font-family-sans)',
    backgroundColor: 'var(--db-adaptive-bg-basic-level-1-default)',
    color: 'var(--db-adaptive-on-bg-basic-emphasis-100-default)',
    minHeight: '100vh'
  };
  
  const controlsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  };
  
  const buttonStyle: React.CSSProperties = {
    padding: '8px 16px',
    borderRadius: '4px',
    border: '1px solid var(--db-adaptive-bg-basic-level-3-default)',
    backgroundColor: 'var(--db-adaptive-bg-basic-level-2-default)',
    color: 'var(--db-adaptive-on-bg-basic-emphasis-100-default)',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600
  };
  
  const priorityExamplesStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    margin: '16px 0'
  };
  
  return (
    <div style={containerStyle}>
      <h1>NEMO React Beispiel</h1>
      
      <div style={controlsStyle}>
        <button 
          style={buttonStyle}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button 
          style={buttonStyle}
          onClick={toggleHighContrast}
        >
          {isHighContrast ? 'Normal Kontrast' : 'Hoher Kontrast'}
        </button>
        <button 
          style={buttonStyle}
          onClick={handleValidateTheme}
        >
          Theme validieren
        </button>
      </div>
      
      <NemoWagonLayout
        wagonNumber="A"
        wagonClass="first"
        seats={wagonASeats}
        interactive={true}
        showStats={true}
        onSeatClick={handleSeatClick}
      />
      
      <NemoWagonLayout
        wagonNumber="B"
        wagonClass="second"
        seats={wagonBSeats}
        interactive={true}
        showStats={true}
        onSeatClick={handleSeatClick}
      />
      
      <div style={{ marginTop: '40px' }}>
        <h2>Prioritäts-Tags</h2>
        <div style={priorityExamplesStyle}>
          <NemoPriorityTag priority="high">Hoch</NemoPriorityTag>
          <NemoPriorityTag priority="medium">Mittel</NemoPriorityTag>
          <NemoPriorityTag priority="low">Niedrig</NemoPriorityTag>
          <NemoPriorityTag priority="info">Info</NemoPriorityTag>
        </div>
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h2>Wagenklassen</h2>
        <div style={priorityExamplesStyle}>
          <NemoClassTag classType="first" />
          <NemoClassTag classType="business" />
          <NemoClassTag classType="second" />
        </div>
      </div>
    </div>
  );
};

export default NemoApp;