'use client';

import React from 'react';

const colorVariables = [
  '--background',
  '--foreground',
  '--card',
  '--card-foreground',
  '--popover',
  '--popover-foreground',
  '--primary',
  '--primary-foreground',
  '--secondary',
  '--secondary-foreground',
  '--muted',
  '--muted-foreground',
  '--accent',
  '--accent-foreground',
  '--destructive',
  '--destructive-foreground',
  '--border',
  '--input',
  '--ring',
  '--cyan',
  '--teal',
];

const ColorButtons = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

        <h1>ROOT COLORS</h1>
      {colorVariables.map((color) => (
        <button
          key={color}
          className="flex items-center justify-center h-16 rounded-md text-sm font-semibold text-white border shadow-md"
          style={{
            backgroundColor: `hsl(var(${color}))`,
            color: `hsl(var(${color}-foreground))`,
            borderColor: `hsl(var(--border))`,
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorButtons;
