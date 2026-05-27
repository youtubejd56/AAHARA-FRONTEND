import React, { useState, useEffect } from 'react';

export default function Countdown() {
  // Target date: 45 days in the future
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 45);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds }
  ];

  return (
    <div className="flex gap-4 md:gap-6 justify-center items-center">
      {timeBlocks.map((block, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-24 md:h-24 glass rounded-xl flex items-center justify-center border border-gray-800 shadow-xl relative overflow-hidden group">
            {/* Top accent glow line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 to-secondary-500 opacity-70"></div>
            
            <span className="text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              {String(block.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-500 mt-2">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
