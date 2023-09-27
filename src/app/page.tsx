import { black_han_sans } from '../lib/fonts';
import CoolLink from '@/components/ui/CoolLink';

export default function Page() {
  return (
    <div>
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
