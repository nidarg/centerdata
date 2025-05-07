import React from 'react';

interface DividerProps {
  height?: string; // Optional prop for height customization
}

const Divider: React.FC<DividerProps> = ({ height = '2px' }) => {
  return (
    <hr
      className="w-full bg-goldish mt-20 mb-20"
      style={{ height }}
    />
  );
};

export default Divider;