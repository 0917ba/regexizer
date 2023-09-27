'use client';

import { noto_serif } from '@/lib/fonts';

interface Block_Pink_Props {
  children?: React.ReactNode;
}

export default function Block_Pink({ children }: Block_Pink_Props) {
  return (
    <div className="h-full w-fit flex justify-center items-center md:px-4 px-3 rounded-lg bg-pink-600">
      <div
        className={`text-white font-bold md:text-2xl text-xl w-fit h-fit ${noto_serif.className}`}
      >
        {children}
      </div>
    </div>
  );
}
