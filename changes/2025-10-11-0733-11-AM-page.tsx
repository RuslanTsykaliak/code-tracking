'use client';
import React, { useState, useEffect, useRef } from 'react';
import { debounce } from '@/app/utils/debounce';
import { HabitData } from '../types';



// Helper component for 1-5 scale questions
const ScaleQuestion = ({ question, name, descriptions, value, onChange }: { question: string, name: string, descriptions: string[], value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <div>
    <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{question}</p>
    <div className="flex flex-col gap-2 mt-1">
      {descriptions.map((desc, index) => (
        <label key={index} className="flex items-center gap-2">
          <input type="radio" name={name} value={index + 1} checked={value === (index + 1).toString()} onChange={onChange} />
          <span>{desc}</span>
        </label>
      ))}
    </div>
  </div>
);

const YesNoQuestion = ({ question, name, value, onChange }: { question: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <div>
    <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{question}</p>
    <div className="flex gap-4 mt-1">
      <label><input type="radio" name={name} value="yes" checked={value === 'yes'} onChange={onChange} /> Yes</label>
      <label><input type="radio" name={name} value="no" checked={value === 'no'} onChange={onChange} /> No</label>
    </div>
  </div>
);

const HabitsPage = () => {
  const [habitData, setHabitData] = useState<Partial<HabitData>>({});

  const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // YYYY-MM-DD
  }

  // Load data on initial render
  useEffect(() => {
    const today = getTodayDateString();
    const savedData = localStorage.getItem(`habit-data-${today}`);
    if (savedData) {
      setHabitData(JSON.parse(savedData));
    }
  }, []);

  // Debounced save function
... (truncated for brevity)