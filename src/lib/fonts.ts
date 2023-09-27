import {
  Black_Han_Sans,
  Noto_Sans_KR,
  Frank_Ruhl_Libre,
  Archivo,
  Jua,
  Noto_Serif,
} from 'next/font/google';

export const black_han_sans = Black_Han_Sans({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
});

export const noto_sans_kr = Noto_Sans_KR({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const frank_ruhl_libre = Frank_Ruhl_Libre({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export const archivo = Archivo({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const jua = Jua({
  weight: ['400'],
  subsets: ['latin'],
});

export const noto_serif = Noto_Serif({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
