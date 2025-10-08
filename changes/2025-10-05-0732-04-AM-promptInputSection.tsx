// app/components/promptInputSection.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import JournalingForm from './journalingForm';
import GeneratePostPromptButton from './generatePostPromptButton';
import PromptTemplateEditor from './promptTemplateEditor';
import { JournalEntries, CustomTitles } from '../types';
import { debounce } from '../utils/debounce';
import { generatePromptText } from '../utils/generatePromptText';
import { defaultPromptTemplate } from '../lib/promptTemplate';

import { useSession } from 'next-auth/react';
import GeneratePostPromptButtonDB from './generatePostButtonDB';
import GeneratedPostDisplayDB from './generatedPostDisplayDB';

const DEFAULT_CUSTOM_TITLES: CustomTitles = {
  whatWentWell: 'What went well today?',
  whatILearned: 'What did I learn today?',
  whatWouldDoDifferently: 'What would I do differently?',
  nextStep: 'What’s my next step?',
};

interface PromptInputSectionProps {
  onPromptGenerated: (prompt: string, entry: JournalEntries, customTitles: CustomTitles) => void;
}

export default function PromptInputSection({ onPromptGenerated }: PromptInputSectionProps) {
  const { status } = useSession();
  const [journalEntries, setJournalEntries] = useState<JournalEntries>({
    whatWentWell: '',
    whatILearned: '',
    whatWouldDoDifferently: '',
    nextStep: '',
  });

  const [userGoal, setUserGoal] = useState<string>('');
  const [customTitles, setCustomTitles] = useState<CustomTitles>(DEFAULT_CUSTOM_TITLES);
  const [promptTemplate, setPromptTemplate] = useState<string>(defaultPromptTemplate);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [additionalFields, setAdditionalFields] = useState<string[]>([]);
  const [generatedPostDB, setGeneratedPostDB] = useState<string>("");

  // --- Local Storage: Load on Mount ---
  useEffect(() => {
    const savedDraft = localStorage.getItem('jourin_current_draft');
    if (savedDraft) {
      try {
        setJournalEntries(JSON.parse(savedDraft));
... (truncated for brevity)