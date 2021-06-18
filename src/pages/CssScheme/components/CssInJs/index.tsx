import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
`;

const H2 = styled.h2({
  color: 'red',
});

const CssInJs = () => {
  return (
    <Wrapper>
      <H2>Css in Js</H2>
    </Wrapper>
  );
};

export default CssInJs;
