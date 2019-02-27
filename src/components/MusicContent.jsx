import React from 'react';
import styled from 'styled-components';

const MusicContentStyle = styled.div`

  height: 329px;
  background: #fff;
  color: var(--color-brand-1);
  overflow: hidden;
  @media (max-width: 425px){
     height: 240px;
 }
  
  img{
    border-radius: 10px;
    width: 100%;
    height: 239px;
    object-fit: cover;
    @media (max-width: 425px){
      height: 145px;
  }
    @media (min-width: 1440px){
      height:270px;
   }
  }
  img:hover{
     opacity: .5;
<<<<<<< HEAD
=======
     cursor: pointer;
>>>>>>> onhover for image card
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
    a:hover{
       text-decoration: underline;
    }
    @media (max-width: 425px){
      font-size: 13px;
  }
  }
  .artist-name{
     font-size: 16px;
     color: var(--color-brand-1);
  }
  .title{
     font-size: 13px;
     color: var(--color-brand-4);
  }
  .react-audio-player{
     width: 100%;
     height: 40px;
     margin-top: -190px;
     margin-left: 0px;
     top: 100%;
     display: block;
     opacity: 0;
     position: relative;
     @media (max-width: 425px){
      height: 30px;
      margin-left: 1px;
      margin-top: -155px;
      -webkit-text-fill-color: crimson;
     }
  }
  .react-audio-player:hover{
     cursor: pointer;
     opacity: 1;
  }
  
  a{
    color: inherit;
  }
`;

const MusicContent = ({ children, image }) => (
  <MusicContentStyle>
    <img src={image || 'http://placehold.it/200'} alt="Music track" />
    <div>
      {children}
    </div>
  </MusicContentStyle>
);

export default MusicContent;
