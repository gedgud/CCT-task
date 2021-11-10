import React from 'react';
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

export default Dropdown;
