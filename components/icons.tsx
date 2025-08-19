
import React from 'react';

const iconClass = "hero-icon";

export const PlusIcon: React.FC = () => (
  <svg className={`${iconClass} text-orange-500`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const SearchIcon: React.FC = () => (
  <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

export const EnvelopeIcon: React.FC = () => (
  <svg className={iconClass} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const CalendarIcon: React.FC = () => <span className="mr-1">🗓️</span>;
export const MoneyIcon: React.FC = () => <span className="mr-1">💰</span>;
export const ThumbsUpIcon: React.FC = () => <span className="mr-1">👍</span>;
export const LightbulbIcon: React.FC = () => <span className="mr-1">💡</span>;
export const NotesIcon: React.FC = () => <span className="mr-1">📝</span>;
export const CheckIcon: React.FC = () => <span className="mr-1">✓</span>;
export const WarningIcon: React.FC = () => <span className="mr-1">▲</span>;
