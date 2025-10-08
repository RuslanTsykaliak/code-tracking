'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { HabitData } from '../../types';

// Define a type for a single day's entry, including its database ID
interface DayEntry {
  id?: string;
  data: Partial<HabitData>;
  comments?: string;
}

type EditableCellValue = string | number | undefined;

const EditableCell = ({ value, onChange, onBlur, type }: {
  value: EditableCellValue;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onBlur: () => void;
  type: 'text' | 'yesNo' | 'number' | 'scale';
}) => {
  const commonClasses = "w-full h-full p-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded";
  if (type === 'yesNo') {
    return (
      <select value={value || ''} onChange={onChange} onBlur={onBlur} autoFocus className={commonClasses}>
        <option value="">-</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    );
  }
  if (type === 'number' || type === 'scale') {
    return <input type="number" value={value || ''} onChange={onChange} onBlur={onBlur} autoFocus className={`${commonClasses} w-20`} />;
  }
  return <textarea value={value || ''} onChange={onChange} onBlur={onBlur} autoFocus className={`${commonClasses} h-20`} rows={3} />;
};

const WeeklySummaryPage = () => {
  const { data: session } = useSession();

  const [weeklyData, setWeeklyData] = useState<Record<string, DayEntry>>({});
  const [activeCell, setActiveCell] = useState<{ date: string; habit: keyof HabitData | 'comments' } | null>(null);

  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    return new Date(today.setDate(diff));
  });

... (truncated for brevity)