import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem auto;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 6rem;
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem rgba(0, 0, 0, 0.2);
  margin: 1rem auto;
  position: relative;
  display: flex;

  h2 {
    margin: auto 0;
    font-weight: bold;
  }
`;

export const BorderLine = styled.div`
  border-bottom: 0.2rem solid #00adaa;
  position: absolute;
  bottom: 0;
  transition: width 1s;
  width: ${(props) => (props.active ? '25rem' : '12.5rem')};

  @media only screen and (max-width: 600px) {
    width: ${(props) => (props.active ? '10rem' : '5rem')};
  }
`;

export const Element = styled.span`
  color: rgb(255, 255, 255);
  background: linear-gradient(#00a9a7, #00ba89);
  margin: 1rem 1.5rem;
  padding: 1rem 1.5rem;
  font-size: 2rem;
`;
