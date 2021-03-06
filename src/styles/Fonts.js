import { createGlobalStyle } from 'styled-components';

import styles from '~/styles/variables';

import notoSansBoldWoff from '%/fonts/notosans-bold-webfont.woff2';
import notoSansBoldWoff2 from '%/fonts/notosans-bold-webfont.woff2';
import notoSansItalicWoff from '%/fonts/notosans-italic-webfont.woff';
import notoSansItalicWoff2 from '%/fonts/notosans-italic-webfont.woff2';
import notoSansLightItalicWoff from '%/fonts/notosans-lightitalic-webfont.woff';
import notoSansLightItalicWoff2 from '%/fonts/notosans-lightitalic-webfont.woff2';
import notoSansLightWoff from '%/fonts/notosans-light-webfont.woff';
import notoSansLightWoff2 from '%/fonts/notosans-light-webfont.woff2';
import notoSansSemiBoldWoff from '%/fonts/notosans-semibold-webfont.woff';
import notoSansSemiBoldWoff2 from '%/fonts/notosans-semibold-webfont.woff2';
import notoSansWoff from '%/fonts/notosans-regular-webfont.woff';
import notoSansWoff2 from '%/fonts/notosans-regular-webfont.woff2';

const { typography } = styles.base;

export default createGlobalStyle`
  @font-face {
    font-weight: ${typography.weightBold};
    font-style: ${typography.style};
    font-family: ${typography.family};

    src:
      url(${notoSansBoldWoff2}) format('woff2'),
      url(${notoSansBoldWoff}) format('woff');
  }

  @font-face {
    font-weight: ${typography.weight};
    font-style: ${typography.styleItalic};
    font-family: ${typography.family};

    src:
      url(${notoSansItalicWoff2}) format('woff2'),
      url(${notoSansItalicWoff}) format('woff');
  }

  @font-face {
    font-weight: ${typography.weightLight};
    font-style: ${typography.style};
    font-family: ${typography.family};

    src:
      url(${notoSansLightWoff2}) format('woff2'),
      url(${notoSansLightWoff}) format('woff');
  }

  @font-face {
    font-weight: ${typography.weightLight};
    font-style: ${typography.styleItalic};
    font-family: ${typography.family};

    src:
      url(${notoSansLightItalicWoff2}) format('woff2'),
      url(${notoSansLightItalicWoff}) format('woff');
  }

  @font-face {
    font-weight: ${typography.weight};
    font-style: ${typography.style};
    font-family: ${typography.family};

    src:
      url(${notoSansWoff2}) format('woff2'),
      url(${notoSansWoff}) format('woff');
  }

  @font-face {
    font-weight: ${typography.weightSemiBold};
    font-style: ${typography.style};
    font-family: ${typography.family};

    src:
      url(${notoSansSemiBoldWoff2}) format('woff2'),
      url(${notoSansSemiBoldWoff}) format('woff');
  }
`;
