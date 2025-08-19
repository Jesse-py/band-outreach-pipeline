import React, { useState } from 'react';
import { PlusIcon } from './icons';
import type { Band } from '../types';
import { PipelineStage, BandSource } from '../types';

interface AddBandFormProps {
  onAddBand: (band: Omit<Band, 'id'>) => void;
}

export const AddBandForm: React.FC<AddBandFormProps> = ({ onAddBand }) => {
  const [bandName, setBandName] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bandName.trim()) {
      alert('Band Name is required.');
      return;
    }
    onAddBand({
      name: bandName,
      contact: contact,
      notes: notes,
      stage: PipelineStage.NEW_LEAD,
      source: BandSource.MANUAL_ENTRY,
    });
    setBandName('');
    setContact('');
    setNotes('');
  };

  return (
    <div className="main-header rounded-xl shadow-lg p-6 mb-6 animate-fade-in">
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
        <PlusIcon />
        <span className="ml-2">Add Band Manually</span>
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <input
          type="text"
          placeholder="Band Name *"
          value={bandName}
          onChange={(e) => setBandName(e.target.value)}
          className="form-input border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
        <input
          type="text"
          placeholder="Contact/Website"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="form-input border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="form-input border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="action-btn bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-medium h-full"
        >
          Add to Pipeline
        </button>
      </form>
    </div>
  );
};