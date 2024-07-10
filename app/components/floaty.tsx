"use client";

import { PhoneCallIcon, MicIcon, AudioLines} from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useVapi from '@/hooks/use-vapi'; // Adjust the import path as needed

const FloatingCircle = ({ isActive, volumeLevel, handleClick }: { isActive: boolean, volumeLevel: number, handleClick: () => void }) => {
  const getIcon = () => {
    if (!isActive) {
      return <PhoneCallIcon className="text-secondary" />;
    } else if (isActive && volumeLevel > 0) {
      return <AudioLines className="text-secondary" />;
    } else {
      return <MicIcon className="text-secondary" />;
    }
  };

  return (
    <div className="z-15 fixed bottom-5 right-5">
      <div className="relative flex size-16 items-center justify-center">
        {isActive && volumeLevel > 0 && (
          <>
            <motion.div
              className="absolute z-0 size-16 rounded-full bg-black"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            />
            <motion.div
              className="absolute z-0 size-16 rounded-full bg-black"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.div
              className="absolute z-0 size-16 rounded-full bg-black"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
            />
          </>
        )}
        <div 
          className="relative z-20 flex size-16 cursor-pointer items-center justify-center rounded-full bg-black text-white shadow-xl"
          onClick={handleClick}
        >
          {getIcon()}
        </div>
      </div>
    </div>
  );
};

const FloatyExample = () => {
  const [showCircle, setShowCircle] = useState(true);
  const { volumeLevel, isSessionActive, toggleCall } = useVapi();

  const handleButtonClick = () => {
    setShowCircle(!showCircle);
  };

  return (
    <div className="App">
      {showCircle && <FloatingCircle isActive={isSessionActive} volumeLevel={volumeLevel} handleClick={toggleCall} />}
    </div>
  );
}

export default FloatyExample;