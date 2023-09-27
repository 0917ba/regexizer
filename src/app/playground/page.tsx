import NavBar from '@/components/NavBar';
import Block_Blue from '@/components/blocks/Block_Blue';
import Block_Pink from '@/components/blocks/Block_Pink';
import CoolButton from '@/components/ui/CoolButton';
import { noto_sans_kr } from '@/lib/fonts';

export default function Page() {
  return (
    <div className="pt-4 pb-12 lg:pb-8 px-8 flex flex-col h-full">
      <div className="lg:px-24 px-10 3xl:py-8 py-6 flex flex-col 3xl:gap-12 gap-8 h-full items-center">
        <h1
          className={`text-2xl font-medium text-center text-white ${noto_sans_kr.className}`}
        >
          블럭을 선택하고 박스 안으로 드래그하세요.
        </h1>
        <div className="h-12 flex-none max-w-6xl py-0.5 w-full bg-sky-50/20 rounded-lg">
          <div className="flex justify-center w-full h-full gap-6">
            <Block_Pink>ABC</Block_Pink>
            <Block_Pink>123</Block_Pink>
            <Block_Pink>*</Block_Pink>
            <Block_Pink>T</Block_Pink>
            <Block_Blue>OR</Block_Blue>
            <Block_Blue>G</Block_Blue>
          </div>
        </div>
        <div className="w-full h-full max-w-6xl bg-blue-50/20 rounded-lg"></div>
        <CoolButton text="만들기" />
      </div>
    </div>
  );
}
