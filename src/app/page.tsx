import { TextCursorInput } from 'lucide-react';
import { black_han_sans, archivo, jua, noto_sans_kr } from '../lib/fonts';
import Link from 'next/link';
import CoolButton from '@/components/ui/CoolButton';
import CoolLink from '@/components/ui/CoolLink';

function NavBar() {
  return (
    <div className="w-full pt-8 flex justify-between">
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

export default function Page() {
  return (
    <div className="px-8">
      <NavBar />
      <div className="pt-24 md:pt-28 mx-auto 2xl:max-w-6xl max-w-5xl">
        <div className="text-white text-6xl 2xl:text-7xl text-center break-keep">
          <h1 className={black_han_sans.className}>
            Life is short, you need Regexizer
          </h1>
        </div>
        <p className="mt-8 mx-auto text-center max-w-xl text-slate-400 font-medium break-keep">
          Regexizer는 드래그&드롭 기반 정규식 생성 도구입니다. Regexizer를
          사용하면 간단한 조작만으로 다양한 프로그래밍 언어 문법에 맞는 정규식을
          작성할 수 있습니다.
        </p>
      </div>
      <div className="mt-12 flex justify-center">
        <CoolLink text="Get started" href="/playground" />
      </div>
    </div>
  );
}
