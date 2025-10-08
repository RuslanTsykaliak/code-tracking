import React, { useState, useEffect, useRef } from 'react';

interface EditableTitleProps {
  initialValue: string;
  onSave: (newValue: string) => void;
  fieldKey: string; // To identify which title this is (e.g., 'whatWentWell')
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string; // New prop for placeholder
}

export default function EditableTitle({
  initialValue,
  onSave,
  onFocus,
  onBlur,
  placeholder,
}: EditableTitleProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select(); // Select all text when editing starts
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // Always save the current value, even if it's empty
    if (currentValue !== initialValue) {
      onSave(currentValue);
    }
    if (onBlur) onBlur();
  };
... (truncated for brevity)