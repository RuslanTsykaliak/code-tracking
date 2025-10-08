import React from 'react';
import { render, screen, fireEvent, waitFor } from './test-utils'; // Use custom render
import JournalHistorySection from '../app/components/journalHistorySection';
import '@testing-library/jest-dom';
import { JournalEntryWithTimestamp, defaultTitles } from '../app/types';
import { useJournalEntriesStorage } from '../app/hooks/useJournalEntriesStorage';
import { getStartOfWeek, getEndOfWeek, generateWeeklySummary as utilGenerateWeeklySummary } from '../app/utils/weeklySummaryUtils';

// Mock the generatePromptText function
jest.mock('../app/utils/generatePromptText', () => ({
  generatePromptText: jest.fn((entry: JournalEntryWithTimestamp, customTitles, promptTemplate) => {
    if (promptTemplate) {
      return promptTemplate.replace('{{whatWentWell}}', entry.whatWentWell);
    }
    return `Default prompt for ${entry.whatWentWell}`;
  }),
}));

// Mock the useJournalEntriesStorage hook
jest.mock('../app/hooks/useJournalEntriesStorage', () => ({
  useJournalEntriesStorage: jest.fn(() => ({
    pastEntries: [],
    setPastEntries: jest.fn(),
    addJournalEntry: jest.fn(), // Add this line
  })),
}));

// Mock the weeklySummaryUtils
jest.mock('../app/utils/weeklySummaryUtils', () => ({
  getStartOfWeek: jest.fn((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay())),
  getEndOfWeek: jest.fn((date) => {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
    d.setDate(d.getDate() + 6);
    return d;
  }),
  generateWeeklySummary: jest.fn((pastEntries, selectedWeekStart, selectedWeekEnd) => {
    const entriesInWeek = pastEntries.filter((entry: { timestamp: string | number | Date; }) => {
      const entryDate = new Date(entry.timestamp);
      return entryDate >= selectedWeekStart && entryDate <= selectedWeekEnd;
    });
    if (entriesInWeek.length === 0) {
      return 'No journal entries found for this week.';
    }
    return entriesInWeek.map((entry: JournalEntryWithTimestamp) => `Summary for ${entry.whatWentWell}`).join('\n');
  }),
}));


// Mock the useDbJournalEntries hook
jest.mock('../app/auth/useDbJournalEntries', () => ({
... (truncated for brevity)