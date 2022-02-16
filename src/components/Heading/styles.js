import styled from 'styled-components';
import { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${({ theme }) => mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.ltemedium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  /* color: ${({ theme, colorDark }) =>
    colorDark ? theme.colors.primaryColor : theme.colors.white};
  ${({ size, theme }) => titleSize[size](theme)};
  ${({ uppercase }) => titleCase(uppercase)}; */

  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
