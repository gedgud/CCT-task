import styled from 'styled-components';

export const Dropdown = styled.ul`
  margin: 1.25rem auto;
  li {
    margin: 1.25rem 0.5rem;
    list-style-image: url(${(props) => props.icon});
    font-size: 1.125rem;

    a {
      color: #00adaa;
      text-decoration: none;
    }
  }
`;
