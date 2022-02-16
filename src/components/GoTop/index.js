// * React
import * as Styled from './styles.js';
import P from 'prop-types';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Container href="#" arial-label="Go to Top" title="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
