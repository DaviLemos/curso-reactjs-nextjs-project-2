import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { theme } from './theme';

export const renderTheme = (chidren) => {
  return render(<ThemeProvider theme={theme}>{chidren}</ThemeProvider>);
};
