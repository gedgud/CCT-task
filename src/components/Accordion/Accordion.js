import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { data } from '../../utils/data';
import { Dropdown } from '../index';
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
      {data.map((item, index) => (
        <React.Fragment key={item.id}>
          <S.Wrap onClick={() => toggle(index)} key={index}>
            <S.Element>{item.id}</S.Element>
            <h2>{item.title}</h2>
            <S.BorderLine active={clicked === index} />
          </S.Wrap>
          {clicked === index ? <Dropdown data={item} /> : false}
        </React.Fragment>
      ))}
    </S.Container>
  );
};

Accordion.propTypes = {
  key: PropTypes.number,
  active: PropTypes.number,
  data: PropTypes.array,
};

export default Accordion;
