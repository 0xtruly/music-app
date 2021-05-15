import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  100% {
      transform: translateX(100%);
    }
`;
const MusicContentStyle = styled.div`
   height: 329px;
   background: #fff;
   color: var(--color-brand-1);
   overflow: hidden;
   @media (max-width: 425px) {
      height: 240px;
   }
   img {
      overflow: hidden;
      border-radius: 10px;
      width: 100%;
      height: 239px;
      object-fit: cover;
      @media (max-width: 425px) {
         height: 145px;
      }
      @media (min-width: 1440px) {
         height: 270px;
      }
      &:after {
         position: absolute;
         top: 0;
         right: 0;
         bottom: 0;
         left: 0;
         transform: translateX(-100%);
         background-image: linear-gradient(
            90deg,
            rgba(#fff, 0) 0,
            rgba(#fff, 0.2) 20%,
            rgba(#fff, 0.5) 60%,
            rgba(#fff, 0)
         );
         animation: ${shimmer} 2s infinite;
         content: "";
         width: 100%;
         height: 239px;
         /* visibility: ${(props) =>
            props.skeleton ? "visible" : "hidden"}; */
         /* visibility: ${(props) =>
            props.skeleton ? "visible" : "hidden"}; */
      }
   }
   img:hover {
      opacity: 0.5;
      cursor: pointer;
   }
   div {
      padding: 0px 10px;
   }
   h3,
   h4,
   h5 {
      margin: 5px 0;
      align-content: left;
   }
   h3 {
      margin: 8px -8px;
      font-weight: 300;
      a:hover {
         text-decoration: underline;
      }
      @media (max-width: 425px) {
         font-size: 13px;
      }
   }
   .artist-name {
      font-size: 16px;
      color: var(--color-brand-1);
   }
   .title {
      font-size: 13px;
      color: var(--color-brand-4);
   }
   .react-audio-player {
      width: 100%;
      height: 40px;
      margin-top: -190px;
      margin-left: 0px;
      top: 100%;
      display: block;
      opacity: 0;
      position: relative;
      -webkit-text-fill-color: crimson;
      @media (max-width: 425px) {
         height: 30px;
         margin-left: 1px;
         margin-top: -155px;
         padding: 2px;
      }
   }
   .react-audio-player:hover {
      cursor: pointer;
      opacity: 1;
   }

   a {
      color: inherit;
   }
`;

const MusicContent = ({ children, image, skeleton }) => (
   <MusicContentStyle skeleton={skeleton}>
      <img src={image || "http://placehold.it/200"} alt="Music track" />
      <div>{children}</div>
   </MusicContentStyle>
);

export default MusicContent;
