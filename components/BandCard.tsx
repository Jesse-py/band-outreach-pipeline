import React from 'react';
import { Band, PipelineStage, OutcomeStatus } from '../types';
import { SearchIcon, EnvelopeIcon, ClockIcon, CalendarIcon, MoneyIcon, ThumbsUpIcon, LightbulbIcon, NotesIcon, CheckIcon, WarningIcon } from './icons';

interface BandCardProps {
  band: Band;
  onMove: (bandId: number, newStage: PipelineStage) => void;
}

const renderActionButton = (band: Band, onMove: (bandId: number, newStage: PipelineStage) => void) => {
  switch (band.stage) {
    case PipelineStage.NEW_LEAD:
      return (
        <button 
          onClick={() => onMove(band.id, PipelineStage.RESEARCHED)}
          className="action-btn w-full mt-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded text-sm hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center">
          <SearchIcon /> Research
        </button>
      );
    case PipelineStage.RESEARCHED:
      return (
        <button 
          onClick={() => onMove(band.id, PipelineStage.CONTACTED)}
          className="action-btn w-full mt-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded text-sm hover:from-purple-600 hover:to-purple-700 transition-all flex items-center justify-center">
          <EnvelopeIcon /> Contact
        </button>
      );
    case PipelineStage.CONTACTED:
        return (
            <button 
              onClick={() => onMove(band.id, PipelineStage.IN_TALKS)}
              className="action-btn w-full mt-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded text-sm hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center justify-center">
              <ThumbsUpIcon /> Start Talks
            </button>
        );
    case PipelineStage.IN_TALKS:
      return (
         <button
            onClick={() => onMove(band.id, PipelineStage.OUTCOME)}
            className="action-btn w-full mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded text-sm hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center">
            Finalize Outcome
        </button>
      );
    default:
      return null;
  }
};


export const BandCard: React.FC<BandCardProps> = ({ band, onMove }) => {
  const cardClasses = band.stage === PipelineStage.OUTCOME
    ? band.outcome?.status === OutcomeStatus.BOOKED ? 'status-booked' : 'status-passed'
    : 'band-card';

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('bandId', band.id.toString());
    e.currentTarget.classList.add('opacity-40', 'shadow-2xl');
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('opacity-40', 'shadow-2xl');
  };

  return (
    <div
      className={`${cardClasses} card-hover rounded-lg p-3 cursor-grab active:cursor-grabbing text-xs leading-normal`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <h4 className="font-bold text-slate-800 text-sm mb-1">{band.name}</h4>
      
      {band.stage !== PipelineStage.OUTCOME && (
        <span className="source-tag inline-block text-slate-700 font-medium px-2 py-1 rounded text-xs mb-2">
          {band.source}
        </span>
      )}

      {band.stage === PipelineStage.OUTCOME && band.outcome?.status === OutcomeStatus.BOOKED && (
        <span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded text-xs mb-2 font-medium">
          ✓ BOOKED
        </span>
      )}
      {band.stage === PipelineStage.OUTCOME && band.outcome?.status === OutcomeStatus.PASSED && (
        <span className="inline-block bg-red-200 text-red-800 px-2 py-1 rounded text-xs mb-2 font-medium">
          ✕ PASSED
        </span>
      )}

      {band.contact && <p className="text-xs text-slate-600 mb-1 truncate"><LightbulbIcon />{band.contact}</p>}
      {band.notes && <p className="text-xs text-slate-600 mb-1"><NotesIcon />{band.notes}</p>}
      {band.genre && <p className="text-xs text-slate-600 mb-2">{band.genre}, {band.spotifyFollowers} Spotify followers</p>}

      {band.research && (
        <div className="research-box rounded p-2 my-2 text-xs space-y-1">
          <div className="font-semibold text-green-600">Fit Score: {band.research.fitScore}/100</div>
          <div className="text-slate-600">Est: {band.research.estimatedCost}</div>
          {band.research.notes.map((note, index) => (
            <div key={index} className={`text-slate-600 ${note.includes('Limited') ? 'text-red-600' : ''}`}>
             {note.includes('Limited') ? <WarningIcon/> : <CheckIcon/>}{note}
            </div>
          ))}
        </div>
      )}

      {band.contactHistory && (
        <div className={`mt-2 text-xs rounded p-2 ${band.contactHistory.notes.includes('Follow up') ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'}`}>
          <div className={`${band.contactHistory.notes.includes('Follow up') ? 'text-yellow-800' : 'text-slate-500'} flex items-center`}>
            <ClockIcon className={band.contactHistory.notes.includes('Follow up') ? 'text-yellow-600' : 'text-gray-400'} />
            Sent {band.contactHistory.date} {band.contactHistory.notes.includes('Follow up') && `• ${band.contactHistory.notes}`}
          </div>
        </div>
      )}

      {band.negotiation && (
        <div className="status-negotiating rounded p-2 my-2 text-xs space-y-1">
            <div className="font-semibold text-orange-800 flex items-center"><MoneyIcon/> Negotiating: {band.negotiation.deal}</div>
            <div className="text-orange-700 flex items-center"><CalendarIcon/> {band.negotiation.availableDates}</div>
            <div className="text-orange-700 flex items-center"><NotesIcon/> {band.negotiation.riderRequirements}</div>
        </div>
      )}

      {band.outcome && (
        <>
          {band.outcome.date && <p className="text-xs text-slate-600 mb-1"><CalendarIcon/> {band.outcome.date}</p>}
          <p className="text-xs text-slate-600"><MoneyIcon/> {band.outcome.details}</p>
        </>
      )}

      {renderActionButton(band, onMove)}
    </div>
  );
};