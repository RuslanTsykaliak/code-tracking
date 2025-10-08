"use client";

import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { JournalEntryWithTimestamp, CustomTitles, defaultTitles } from '../types';
import { useJournalEntriesStorage } from '../hooks/useJournalEntriesStorage';
import { useDbJournalEntries } from '../auth/useDbJournalEntries';
import { getStartOfWeek, getEndOfWeek, generateWeeklySummary as generateWeeklySummaryUtil } from '../utils/weeklySummaryUtils';
import DynamicJournalEntryItem from './DynamicJournalEntryItem';

interface JournalHistorySectionProps {
  newEntryToHistory: JournalEntryWithTimestamp | null;
}

const INITIAL_DISPLAY_COUNT = 5;

export default function JournalHistorySection({ newEntryToHistory }: JournalHistorySectionProps) {

  const [copyHistorySuccess, setCopyHistorySuccess] = useState<string>('');
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const [selectedWeekStart, setSelectedWeekStart] = useState<Date>(getStartOfWeek(new Date()));
  const [selectedWeekEnd, setSelectedWeekEnd] = useState<Date>(getEndOfWeek(new Date()));
  const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);
  const [weeklySummaryText, setWeeklySummaryText] = useState<string>('');
  const [copySummarySuccess, setCopySummarySuccess] = useState<boolean>(false);

  const { data: session } = useSession();

  // Call hooks unconditionally
  const { pastEntries: localPastEntries, addJournalEntry: addLocalJournalEntry } = useJournalEntriesStorage();
  const { pastEntries: dbPastEntries, addJournalEntry: addDbJournalEntry } = useDbJournalEntries();

  const pastEntries = session ? dbPastEntries : localPastEntries;
  const addJournalEntry = session ? addDbJournalEntry : addLocalJournalEntry;



  const handlePreviousWeek = () => {
    const newDate = new Date(selectedWeekStart);
    newDate.setDate(newDate.getDate() - 7);
    setSelectedWeekStart(getStartOfWeek(newDate));
    setSelectedWeekEnd(getEndOfWeek(newDate));
  };

  const handleNextWeek = () => {
    const newDate = new Date(selectedWeekStart);
    newDate.setDate(newDate.getDate() + 7);
    setSelectedWeekStart(getStartOfWeek(newDate));
    setSelectedWeekEnd(getEndOfWeek(newDate));
  };
... (truncated for brevity)