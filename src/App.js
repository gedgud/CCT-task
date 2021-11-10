import React from 'react';
import { Accordion } from './components';
import * as S from './App.styles';

const App = () => {
  return (
    <S.Container>
      <h1>CCT Lab Process</h1>
      <Accordion />
    </S.Container>
  );
};

export default App;
