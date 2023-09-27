import { TextCursorInput } from 'lucide-react';
import { archivo } from '../lib/fonts';

export default function NavBar() {
  return (
    <div className="w-full flex justify-between">
      <div className="flex">
        <TextCursorInput color="#CC3366" strokeWidth={2.5} size={32} />
        <div className="text-white font-semibold text-2xl mx-1">
          <div className={archivo.className}>Regexizer</div>
        </div>
      </div>
      <div className={`text-white font-medium ${archivo.className}`}>
        <div className="flex justify-center gap-4 items-center h-full">
          <div>Docs</div>
          <div>Showcase</div>
          <div>GitHub</div>
        </div>
      </div>
    </div>
  );
}
