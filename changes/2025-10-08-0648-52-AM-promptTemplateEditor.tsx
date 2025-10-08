// app/components/promptTemplateEditor.tsx
import React, { useState, useEffect } from 'react';
import { defaultPromptTemplate } from '../lib/promptTemplate';

interface PromptTemplateEditorProps {
  initialTemplate: string;
  onSave: (template: string) => void;
  onClose: () => void;
}

const PromptTemplateEditor: React.FC<PromptTemplateEditorProps> = ({
  initialTemplate,
  onSave,
  onClose,
}) => {
  const [template, setTemplate] = useState(initialTemplate);

  useEffect(() => {
    setTemplate(initialTemplate);
  }, [initialTemplate]);

  const handleSave = () => {
    onSave(template);
    onClose();
  };

  const handleReset = () => {
    setTemplate(defaultPromptTemplate);
  };

  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/80 flex justify-center items-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-full max-w-2xl border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Customize the Prompt Template
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Edit the template for generating LinkedIn posts. Use placeholders like{' '}
... (truncated for brevity)