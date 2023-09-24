'use client';

import { useEffect, useState } from 'react';

interface CoolButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function CoolButton({
  text,
  className,
  onClick,
}: CoolButtonProps) {
  const [cn, setCn] = useState('');

  useEffect(() => {
    if (!className) return;
    const cnArr = className.split(' ');
    console.log(cnArr);

    // prop => !prop not working
    const newClassName = cnArr.map((prop) => `${prop}`).join(' ');
    setCn(newClassName);
  }, [className]);

  return (
    <button
      onClick={onClick}
      className={` bg-pink-700 md:bg-blue-700 hover:bg-pink-600  md:hover:bg-blue-600 text-white text-sm font-semibold py-[0.7rem] px-5 rounded-md ${cn}`}
    >
      {text}
    </button>
  );
}
