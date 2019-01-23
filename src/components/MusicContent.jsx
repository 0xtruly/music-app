import React from 'react';
import styled from 'styled-components';
// import Rating from 'react-rating';

const MusicContentStyle = styled.div`

  height: 329px;
  background: #fff;
  color: var(--color-brand-1);
  overflow: hidden;
  
  
  img{
    border-radius: 10px;
    width: 100%;
    height: 229px;
    object-fit: cover;
  }
  div{
    padding: 0px 10px;
  }
  h3,h4, h5{
    margin: 5px 0;
    align-content: left;
  }
  h3{
    margin: 8px -8px;
    font-weight: 300;
    font-size: 18px;
  }
  
  a{
    color: inherit;
  }
`;

const MusicContent = ({ children, image }) => (
  <MusicContentStyle>
    <img src={image || 'http://placehold.it/200'} alt="Music track" />
    <div>
      <h5></h5>
      {children}
    </div>
  </MusicContentStyle>
);

export default MusicContent;
