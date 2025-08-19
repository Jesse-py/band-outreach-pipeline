import React, { useState, useCallback } from 'react';
import { AddBandForm } from './components/AddBandForm';
import { PipelineColumn } from './components/PipelineColumn';
import { BANDS_DATA, PIPELINE_COLUMNS } from './constants';
import type { Band } from './types';
import { PipelineStage } from './types';

const App: React.FC = () => {
  const [bands, setBands] = useState<Band[]>(BANDS_DATA);

  const handleAddBand = useCallback((newBandData: Omit<Band, 'id'>) => {
    setBands(prevBands => {
      const newId = Math.max(0, ...prevBands.map(b => b.id)) + 1;
      const newBand: Band = {
        id: newId,
        ...newBandData,
      };
      return [newBand, ...prevBands];
    });
  }, []);

  const handleMoveBand = useCallback((bandId: number, newStage: PipelineStage) => {
    setBands(prevBands =>
      prevBands.map(band =>
        band.id === bandId && band.stage !== newStage ? { ...band, stage: newStage } : band
      )
    );
  }, []);
  
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Band Outreach Pipeline</h1>
          <p className="text-lg text-slate-600">Manage band discovery, research, and booking outreach</p>
        </header>

        <main>
          <AddBandForm onAddBand={handleAddBand} />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {PIPELINE_COLUMNS.map((col, index) => (
              <PipelineColumn
                key={col.id}
                stage={col.id}
                title={col.title}
                color={col.color}
                bands={bands.filter(band => band.stage === col.id)}
                onMoveBand={handleMoveBand}
                animationDelay={`${index * 0.1}s`}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;