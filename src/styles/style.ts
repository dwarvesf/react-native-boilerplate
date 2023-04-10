import {
  // responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const gutters = responsiveWidth(5.33);
export const mainBorderRadius = 10;
export const PICKER_HEIGHT = 48;
export const resHeight = (height: number | string) =>
  // if (typeof height === 'number') {
  //   return responsiveHeight(height / 8.12); // 812px height follow by iPhone X
  // }
  height;
export const resWidth = (width: number | string) =>
  // if (typeof width === 'number') {
  //   return responsiveWidth(width / 3.75); // 375px width follow by iPhone X
  // }
  width;

export type BorderStyle = {
  bor?: number;
  color?: string;
  width?: number;
  btw?: number;
  blw?: number;
  brw?: number;
  bbw?: number;
  das?: boolean;
  bblr?: number;
  bbrr?: number;
  btlr?: number;
  btrr?: number;
};

const setBorder = ({
  bor,
  color,
  width,
  btw,
  blw,
  brw,
  bbw,
  das,
  bblr,
  bbrr,
  btlr,
  btrr,
}: BorderStyle) =>
  ({
    ...(typeof bor === 'number' ? {borderRadius: resWidth(bor)} : {}),
    ...(typeof color === 'string' ? {borderColor: color} : {}),
    ...(typeof width === 'number' ? {borderWidth: resWidth(width)} : {}),
    ...(typeof btw === 'number' ? {borderTopWidth: resHeight(btw)} : {}),
    ...(typeof blw === 'number' ? {borderLeftWidth: resWidth(blw)} : {}),
    ...(typeof brw === 'number' ? {borderRightWidth: resWidth(brw)} : {}),
    ...(typeof bbw === 'number' ? {borderBottomWidth: resHeight(bbw)} : {}),
    ...(typeof bblr === 'number'
      ? {borderBottomLeftRadius: resHeight(bblr)}
      : {}),
    ...(typeof bbrr === 'number'
      ? {borderBottomRightRadius: resHeight(bbrr)}
      : {}),
    ...(typeof btlr === 'number' ? {borderTopLeftRadius: resHeight(btlr)} : {}),
    ...(typeof btrr === 'number'
      ? {borderTopRightRadius: resHeight(btrr)}
      : {}),
    ...(das !== undefined ? {borderStyle: 'dashed'} : {}),
  } as any);

export type ContainerStyle = {
  flex?: 1 | 2 | 3 | 4 | 6 | 8 | 12;
  direc?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  bg?: string;
  w?: number | string;
  h?: number | string;
  bor?: number;
  borColor?: string;
  m?: number | string;
  mt?: number | string;
  ml?: number | string;
  mr?: number | string;
  mb?: number | string;
  mx?: number | string;
  my?: number | string;
  p?: number | string;
  pt?: number | string;
  pl?: number | string;
  pr?: number | string;
  pb?: number | string;
  px?: number | string;
  py?: number | string;
  cen?: boolean;
  items?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  self?: string;
  pos?: string;
  l?: number | string;
  t?: number | string;
  r?: number | string;
  b?: number | string;
  size?: number | string;
  tin?: string;
  z?: number;
  wrap?: string;
  maxW?: number | string;
  over?: string;
  op?: number;
  rotate?: string;
  maxH?: number;
  minH?: number;
  minW?: number;
};

const setStyle = ({
  flex,
  direc,
  bg,
  w,
  h,
  bor,
  borColor,
  m,
  mt,
  ml,
  mr,
  mb,
  mx,
  my,
  p,
  pt,
  pl,
  pr,
  pb,
  px,
  py,
  cen = false,
  items,
  justify,
  self,
  pos,
  l,
  t,
  r,
  b,
  size,
  tin,
  z,
  wrap,
  maxW,
  over,
  op,
  rotate,
  maxH,
  minH,
  minW,
}: ContainerStyle) =>
  ({
    ...(typeof flex === 'number' ? {flex: flex} : {}),
    ...(typeof direc === 'string' ? {flexDirection: direc} : {}),
    ...(typeof bg === 'string' ? {backgroundColor: bg} : {}),
    ...(w !== undefined ? {width: resWidth(w)} : {}),
    ...(h !== undefined ? {height: resWidth(h)} : {}),
    ...(bor !== undefined ? {borderRadius: resWidth(bor)} : {}),
    ...(m !== undefined ? {margin: resWidth(m)} : {}),
    ...(mx !== undefined ? {marginHorizontal: resWidth(mx)} : {}),
    ...(my !== undefined ? {marginVertical: resWidth(my)} : {}),
    ...(mt !== undefined ? {marginTop: resHeight(mt)} : {}),
    ...(ml !== undefined ? {marginLeft: resWidth(ml)} : {}),
    ...(mr !== undefined ? {marginRight: resWidth(mr)} : {}),
    ...(mb !== undefined ? {marginBottom: resHeight(mb)} : {}),
    ...(px !== undefined ? {paddingHorizontal: resWidth(px)} : {}),
    ...(py !== undefined ? {paddingVertical: resHeight(py)} : {}),
    ...(p !== undefined ? {padding: resHeight(p)} : {}),
    ...(pt !== undefined ? {paddingTop: resHeight(pt)} : {}),
    ...(pl !== undefined ? {paddingLeft: resWidth(pl)} : {}),
    ...(pr !== undefined ? {paddingRight: resWidth(pr)} : {}),
    ...(pb !== undefined ? {paddingBottom: resHeight(pb)} : {}),
    ...(typeof justify === 'string' ? {justifyContent: justify} : {}),
    ...(typeof items === 'string' ? {alignItems: items} : {}),
    ...(typeof self === 'string' ? {alignSelf: self} : {}),
    ...(typeof pos === 'string' ? {position: pos} : {}),
    left: typeof l === 'number' ? resHeight(l) : l,
    top: typeof t === 'number' ? resWidth(t) : t,
    right: typeof r === 'number' ? resHeight(r) : r,
    bottom: typeof b === 'number' ? resWidth(b) : b,
    ...(tin !== undefined ? {tintColor: tin} : {}),
    ...(z !== undefined ? {zIndex: z} : {}),
    ...(wrap !== undefined ? {flexWrap: wrap} : {}),
    ...(typeof maxW === 'number' ? {maxWidth: maxW} : {}),
    ...(typeof maxH === 'number' ? {maxHeight: maxH} : {}),
    ...(typeof minW === 'number' ? {minWidth: minW} : {}),
    ...(typeof minH === 'number' ? {minHeight: minH} : {}),
    ...(typeof over === 'string' ? {overflow: over} : {}),
    ...(typeof op === 'number' ? {opacity: op} : {}),
    ...(typeof borColor === 'string' ? {borderColor: borColor} : {}),
    ...(typeof rotate === 'string' ? {transform: [{rotate: rotate}]} : {}),
    ...(cen
      ? {
          justifyContent: 'center',
          alignItems: 'center',
        }
      : {}),
    ...(typeof size === 'number' || typeof size === 'string'
      ? {
          width: size,
          height: size,
        }
      : {}),
  } as any);

export const Style = {
  s: setStyle,
  b: setBorder,
  shadow: (
    color = 'rgba(0, 0, 0, 0.07)',
    width: number | string,
    height: number | string,
    radius: number,
    elevation?: number,
  ) => ({
    shadowColor: color,
    shadowOffset: {
      width: width,
      height: height,
    },
    shadowOpacity: 1,
    shadowRadius: radius,
    elevation: elevation ?? radius,
  }),
};
