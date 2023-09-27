'use client';

import { noto_serif } from '@/lib/fonts';

interface Block_Blue_Props {
  children?: React.ReactNode;
}

export default function Block_Blue({ children }: Block_Blue_Props) {
  return (
    <div className="h-full w-fit flex justify-center items-center px-4 rounded-lg bg-blue-600">
      <div
        className={`text-white font-bold md:text-2xl text-xl w-fit h-fit ${noto_serif.className}`}
      >
        {children}
      </div>
    </div>
  );
}
