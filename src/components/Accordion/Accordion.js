import React, { useState } from 'react';
import { data } from '../../utils/data';
import { AccordionItem } from '../index';
import * as S from './Accordion.styles';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(false);
    }
    setClicked(index);
  };

  return (
    <S.Container>
      <AccordionItem data={data} toggle={toggle} clicked={clicked} />
    </S.Container>
  );
};

export default Accordion;
