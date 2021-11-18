import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4>for u</h4>
      <Content>
        <Wrap>
          <img src="https://i.ebayimg.com/images/g/Z4QAAOSwYkdfVSoO/s-l400.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://i.ebayimg.com/images/g/xGQAAOSwOXBf4AAS/s-l400.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://i.ebayimg.com/images/g/xGQAAOSwOXBf4AAS/s-l400.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://i.ebayimg.com/images/g/xGQAAOSwOXBf4AAS/s-l400.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://i.ebayimg.com/images/g/xGQAAOSwOXBf4AAS/s-l400.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://i.ebayimg.com/images/g/xGQAAOSwOXBf4AAS/s-l400.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://i.ebayimg.com/images/g/Z4QAAOSwYkdfVSoO/s-l400.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://i.ebayimg.com/images/g/Z4QAAOSwYkdfVSoO/s-l400.jpg" />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;
const Container = styled.div`
  padding: ;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
    transition: linear.3s linear;
    cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .3s linear;
  }
  & :hover{
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 08);
      box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;

  }
`;
