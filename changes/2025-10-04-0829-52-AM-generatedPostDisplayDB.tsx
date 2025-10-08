// app/components/generatedPostDisplayDB.tsx
"use client";

import React, { useState } from "react";

interface GeneratedPostDisplayDBProps {
  post: string;
}

export default function GeneratedPostDisplayDB({ post }: GeneratedPostDisplayDBProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [copySuccess, setCopySuccess] = useState("");

  if (!post) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(post).then(() => {
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000);
    }, () => {
      setCopySuccess("Failed to copy");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  return (
    <div className="mt-8 p-4 bg-gray-700 rounded-md shadow-md text-left">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-100">Generated Post:</h2>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
      {isVisible && (
        <>
          <pre className="mt-2 whitespace-pre-wrap text-sm text-gray-300">{post}</pre>
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={handleCopy}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Copy Post
            </button>
            {copySuccess && (
              <span className="ml-3 text-sm text-green-400 font-medium">
                {copySuccess}
              </span>
... (truncated for brevity)