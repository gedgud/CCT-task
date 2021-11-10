import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../index';
import * as S from './AccordionItem.styles';

const AccordionItem = ({ data, toggle, clicked }) => {
  return (
    <>
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
    </>
  );
};

AccordionItem.propTypes = {
  data: PropTypes.array,
  toggle: PropTypes.func,
  clicked: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

export default AccordionItem;
