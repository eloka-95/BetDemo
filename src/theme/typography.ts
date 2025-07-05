import { hp } from '../utils';
import { font } from './font';

export const typography = {
  tiny: {
    fontFamily: font.PROXIMANOVAREGULAR,
    fontSize: hp(10),
  },
  tinyMedium: {
    fontFamily: font.PROXIMANOVASEMIBOLD,
    fontSize: hp(10),
  },
  tinyBold: {
    fontFamily: font.PROXIMANOVABOLD,
    fontSize: hp(10),
  },
  bodySmall: {
    fontFamily: font.PROXIMANOVAREGULAR,
    fontSize: hp(12),
  },
  small: {
    fontFamily: font.PROXIMANOVAREGULAR,
    fontSize: hp(10),
  },
  smallBold: {
    fontFamily: font.PROXIMANOVABOLD,
    fontSize: hp(12),
  },
  body: {
    fontFamily: font.PROXIMANOVAREGULAR,
    fontSize: hp(14),
  },
  bodyMedium: {
    fontFamily: font.PROXIMANOVAMEDIUM,
    fontSize: hp(14),
  },
  bodySemiBold: {
    fontFamily: font.PROXIMANOVASEMIBOLD,
    fontSize: hp(14),
  },
  bodyBold: {
    fontFamily: font.PROXIMANOVABOLD,
    fontSize: hp(14),
  },
  headerBold: {
    fontFamily: font.PROXIMANOVABOLD,
    fontSize: hp(16),
  },
  header: {
    fontFamily: font.PROXIMANOVAREGULAR,
    fontSize: hp(16),
  },
  headerMedium: {
    fontFamily: font.PROXIMANOVAMEDIUM,
    fontSize: hp(16),
  },
  headerBig: {
    fontFamily: font.PROXIMANOVASEMIBOLD,
    fontSize: hp(18),
  },
  heading: {
    fontFamily: font.PROXIMANOVABOLD,
    fontSize: hp(20),
  },
  h1: {
    fontFamily: font.PROXIMANOVAEXTRABOLD,
    fontSize: hp(32),
  },
  h2: {
    fontFamily: font.PROXIMANOVASEMIBOLD,
    fontSize: hp(28),
  },
  h3: {
    fontFamily: font.PROXIMANOVASEMIBOLD,
    fontSize: hp(22),
  },
  h4: {
    fontFamily: font.PROXIMANOVASEMIBOLD,
    fontSize: hp(17),
  },
  bottomTabRegular: {
    fontFamily: font.PROXIMANOVAREGULAR,
    fontSize: hp(11),
  },
  bottomTabMedium: {
    fontFamily: font.PROXIMANOVASEMIBOLD,
    fontSize: hp(11),
  },
  h4UpperCase: {
    fontFamily: font.PROXIMANOVAMEDIUM,
    fontSize: hp(17),
    textTransform: 'uppercase',
  },
};
