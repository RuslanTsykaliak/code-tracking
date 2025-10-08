// app/components/journalingFormDb.tsx
"use client";

import React, { useState } from "react";
import { JournalEntries, CustomTitles } from "../types";
import EditableTitle from './editableTitle';
import { useReward } from "../hooks/useReward";
import GeneratePostPromptButtonDB from "./generatePostPromptButtonDB";
import GeneratedPostDisplayDB from "./generatedPostDisplayDB";

interface JournalingFormDbProps {
  journalEntries: JournalEntries;
  onJournalEntriesChange: (entries: JournalEntries) => void;
  customTitles: CustomTitles;
  onCustomTitleChange: (key: string, value: string) => void;
  additionalFields: string[];
  setAdditionalFields: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function JournalingFormDb({
  journalEntries,
  onJournalEntriesChange,
  customTitles,
  onCustomTitleChange,
  additionalFields,
  setAdditionalFields,
}: JournalingFormDbProps) {
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [titleErrors, setTitleErrors] = useState<{ [key: string]: string }>({});
  const { showReward } = useReward();
  const [generatedPostDB, setGeneratedPostDB] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onJournalEntriesChange({
      ...journalEntries,
      [name]: value,
    });
  };

  const handleAddField = () => {
    const newFieldName = `customField_${additionalFields.length}`;
    setAdditionalFields([...additionalFields, newFieldName]);
    showReward("New field added!");
  };

  const handleRemoveField = (fieldName: string) => {
    setAdditionalFields(additionalFields.filter((field) => field !== fieldName));
... (truncated for brevity)