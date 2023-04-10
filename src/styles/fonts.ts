import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {resHeight, resWidth} from './style';
import {Palette} from './palette';

export const scaleFromFigma = (size: number) => responsiveFontSize(size / 7.6);

export type AvailableFonts =
  | 'Inter_400Regular'
  | 'Inter_500Medium'
  | 'Inter_600SemiBold'
  | 'Inter_700Bold';

const base = (
  fontSize = 14,
  fontWeight = '400',
  color = Palette.black,
  family: string | undefined,
  lineHeight: number | undefined,
  italic = false,
  letterSpacing: number | undefined,
) => ({
  fontSize: scaleFromFigma(fontSize),
  color,
  fontWeight,
  ...(letterSpacing ? {letterSpacing} : {}),
  ...(family ? {fontFamily: family} : {}),
  ...(italic ? {fontStyle: 'italic'} : {}),
  ...(typeof lineHeight === 'number' ? {lineHeight} : {}),
});

const margin = (
  left?: number | string,
  top?: number | string,
  right?: number | string,
  bottom?: number | string,
  x?: number | string,
  y?: number | string,
) => ({
  marginLeft: typeof left === 'number' ? resWidth(left) : left,
  marginTop: typeof top === 'number' ? resHeight(top) : top,
  marginRight: typeof right === 'number' ? resWidth(right) : right,
  marginBottom: typeof bottom === 'number' ? resHeight(bottom) : bottom,
  marginHorizontal: typeof x === 'number' ? resWidth(x) : x,
  marginVertical: typeof y === 'number' ? resHeight(y) : y,
});

const align = (
  self = 'auto',
  textAlign = 'auto',
  textAlignVertical = 'auto',
) => ({
  alignSelf: self,
  textAlign,
  textAlignVertical,
});

const decoration = (
  dec?: string,
  style?: string,
  color?: string,
  tran?: string,
) => ({
  ...(typeof dec === 'string' ? {textDecorationLine: dec} : {}),
  ...(typeof style === 'string' ? {textDecorationStyle: style} : {}),
  ...(typeof color === 'string' ? {textDecorationColor: color} : {}),
  ...(typeof tran === 'string' ? {textTransform: tran} : {}),
});

export type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | 'bold'
  | 'normal'
  | 'medium';

export type FontStyle = {
  s?: number;
  c?: string;
  w?: FontWeight;
  l?: number | string;
  f?: AvailableFonts;
  t?: number | string;
  r?: number | string;
  b?: number | string;
  x?: number | string;
  y?: number | string;
  self?: string;
  text?: string;
  op?: number;
  dec?: string;
  decStyle?: string;
  secColor?: string;
  textVer?: string;
  italic?: boolean;
  h?: number;
  ls?: number;
  tran?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
};

const Fonts = {
  t: ({
    s,
    c,
    w,
    l,
    f,
    t,
    r,
    b,
    x,
    y,
    self,
    text,
    op,
    dec,
    decStyle,
    secColor,
    textVer,
    italic,
    ls,
    h,
    tran,
  }: FontStyle = {}): any =>
    ({
      ...base(s, w, c, f, h, italic, ls),
      ...margin(l, t, r, b, x, y),
      ...align(self, text, textVer),
      ...decoration(dec, decStyle, secColor, tran),
      opacity: op,
    } as any),
};

export default Fonts;
