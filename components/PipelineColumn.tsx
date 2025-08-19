import React, { useState } from 'react';
import { Band, PipelineStage } from '../types';
import { BandCard } from './BandCard';

interface PipelineColumnProps {
  stage: PipelineStage;
  title: string;
  bands: Band[];
  color: string;
  animationDelay: string;
  onMoveBand: (bandId: number, newStage: PipelineStage) => void;
}

export const PipelineColumn: React.FC<PipelineColumnProps> = ({ stage, title, bands, color, animationDelay, onMoveBand }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const gradientClasses: { [key: string]: string } = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    yellow: 'from-yellow-500 to-yellow-600',
    orange: 'from-orange-500 to-orange-600',
    green: 'from-green-500 to-green-600',
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const bandId = e.dataTransfer.getData('bandId');
    if (bandId) {
      onMoveBand(Number(bandId), stage);
    }
  };

  const dragOverStyles = isDragOver ? 'border-orange-500 border-2 border-dashed bg-orange-50' : '';

  return (
    <div
      className={`pipeline-column rounded-xl p-4 animate-fade-in transition-all duration-300 ${dragOverStyles}`}
      style={{ animationDelay }}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="column-header flex items-center justify-between mb-4 p-3 rounded-lg">
        <h3 className="font-bold text-slate-800 tracking-tight">{title}</h3>
        <span className={`stage-badge bg-gradient-to-r ${gradientClasses[color]} text-white`}>
          {bands.length}
        </span>
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto custom-scroll pr-2">
        {bands.map(band => (
          <BandCard key={band.id} band={band} onMove={onMoveBand} />
        ))}
      </div>
    </div>
  );
};