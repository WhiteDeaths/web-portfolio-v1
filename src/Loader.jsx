import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ duration = 1200 }) {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setFade(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);
  return (
    <div className={`loader-overlay${fade ? ' loader-fade' : ''}`}>
      <svg className="loader-svg" width="64" height="64" viewBox="0 0 64 64">
        <circle
          className="loader-bg"
          cx="32" cy="32" r="28"
          fill="none" stroke="#222" strokeWidth="8"
        />
        <circle
          className="loader-fg"
          cx="32" cy="32" r="28"
          fill="none" stroke="#a259ff" strokeWidth="8"
          strokeDasharray="180 100"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
