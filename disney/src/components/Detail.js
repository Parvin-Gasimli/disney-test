import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://www.nawpic.com/media/2020/luca-nawpic-1.jpg" />
      </Background>

      <ImageTitle>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF737B93E2F2ABE27C74CBBEB322F18A421E7986129E9989587CEF2295B0447F/scale?width=1440&aspectRatio=1.78&format=png"/>
      </ImageTitle>
      <Controls>
          <PlayButton>
              <img src="/images/play-icon-black.png"/>
              <span>
                  PLAY
              </span>

          </PlayButton>

          <TrailerButton>
          <img src="/images/play-icon-white.png"/>
              <span>
                  TRAILER
              </span>

          </TrailerButton>
          <AddButton>
              <span>
                  +
              </span>

          </AddButton>
          <WatchButton>

          </WatchButton>

      </Controls>
    </Container>
  );
};

export default Detail;
const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw+5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    

  }
`;
const ImageTitle =styled.div`

width: 35vw;

img{
    width: 48%;
    height: 51%;
    object-fit: cover;
    margin-left: 60px;
    padding-top: 58px;}


`
const Controls=styled.div`
display: flex;


`
const PlayButton=styled.button`
border-radius:4px ;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
background-color: rgb(249,249,249);
border: none;
padding: 0px 24px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;
transition: .3s linear;
&:hover{
    background: rgb(198,198,198);
}



`
const TrailerButton =styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid rgba(249,249,249);
color: rgba(249,249,249);




`
const AddButton =styled.button`
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0,0,0,0.6);

span{
    font-size: 30px;
    color:white;

}


`
const WatchButton=styled.button``
