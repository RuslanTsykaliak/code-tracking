// __tests__/promptInputSection.test.tsx

import React from 'react';
import { render, screen, fireEvent, waitFor } from './test-utils'; // Corrected import
import PromptInputSection from '../app/components/promptInputSection';
import '@testing-library/jest-dom';

// Mock debounce to execute immediately
jest.mock('../app/utils/debounce', () => ({
  debounce: (fn: (...args: any[]) => any) => {
    return (...args: any[]) => {
      return fn(...args);
    };
  },
}));

describe('PromptInputSection', () => {
  let onPromptGenerated: jest.Mock;
  let alertSpy: jest.SpyInstance;

  beforeEach(() => {
    onPromptGenerated = jest.fn();
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    localStorage.clear();
  });

  afterEach(() => {
    alertSpy.mockRestore();
    jest.clearAllMocks();
  });

  it('should not generate a prompt if an entry has content but no title', async () => {
    render(<PromptInputSection onPromptGenerated={onPromptGenerated} />);

    // Wait for component to hydrate from localStorage
    await waitFor(() => {
        expect(screen.getByText('What went well today?')).toBeInTheDocument();
    });

    // Fill in a journal entry
    const whatWentWellTextarea = screen.getByPlaceholderText('Reflect on your achievements and positive experiences...');
    fireEvent.change(whatWentWellTextarea, { target: { value: 'Test entry' } });

    // Find the title and make it editable
    const titleElement = screen.getByText('What went well today?');
    fireEvent.doubleClick(titleElement);

    // The title is now an input field
    const titleInput = screen.getByDisplayValue('What went well today?');
    fireEvent.change(titleInput, { target: { value: '' } });
... (truncated for brevity)