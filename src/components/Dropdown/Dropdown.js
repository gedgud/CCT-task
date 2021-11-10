import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Dropdown.styles';

const Dropdown = ({ data }) => {
  const icon = require('../../assets/icon.jpg').default;

  return (
    <S.Dropdown icon={icon}>
      {data.steps.map((el) => (
        <li
          key={el.id}
          dangerouslySetInnerHTML={{
            __html: el.task,
          }}
        ></li>
      ))}
    </S.Dropdown>
  );
};

Dropdown.propTypes = {
  data: PropTypes.object,
};

export default Dropdown;
