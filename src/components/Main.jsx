import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";
import Skeleton from "react-loading-skeleton";

import { Wrapper, Box1, Box2 } from "./ui/Grid";
import MusicBg from "../../assets/music-bg.jpeg";
import Logo from "../../assets/logo.png";
import MusicContent from "./ui/MusicContent";
import Container from "./ui/Container";
import Form from "./Form";
import { Consumer } from "./Context";

const MainStyle = styled.div`
   header,
   footer {
      text-align: center;
   }
   main {
      overflow: auto;
      padding-bottom: 100px;
   }
`;

const Header = styled.div`
   padding: 20px 5px;
   background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${MusicBg});
   background-size: cover;
   background-position: center;
   color: #fff;
   @media (max-width: 425px) {
      grid-column: 1 / span 3;
      grid-row: 1 / span 2;
   }
   @media (min-width: 768px) {
      padding: 50px 20px;
   }
   @media (min-width: 1024px) {
      padding: 70px 20px;
   }
`;

const renderMusicCards = (song) => {
   if (song.length === 0) {
      return (
         <Box2>
            <Skeleton height={250} />
            <Skeleton height={250} />
            <Skeleton height={250} />
            <Skeleton height={250} />
            <Skeleton height={250} />
            <Skeleton height={250} />
         </Box2>
      );
   }
   return (
      <Box2>
         {song.map((song) => (
            <MusicContent
               key={song.id}
               image={song.album.cover_medium ? song.artist.picture_medium : ""}
            >
               <h3 className="artist-name">{song.artist.name}</h3>
               <h3 className="title">{song.title}</h3>
               <ReactAudioPlayer
                  className="react-audio-player"
                  src={song.preview}
                  controls
               />
            </MusicContent>
         ))}
      </Box2>
   );
};

class Main extends Component {
   render() {
      return (
         <Consumer>
            {(value) => {
               const { song, ready, heading } = value;
               return (
                  <MainStyle>
                     <main>
                        <Container>
                           <Wrapper>
                              <div className="left">
                                 <Header>
                                    <img src={Logo} />
                                    <h3>Soundio</h3>
                                    {/* <h5>
                                       <p>Mp3 Tone Downloads </p>
                                    </h5> */}
                                 </Header>
                                 <div className="upperNav">
                                    <h4>
                                       <Link to="/">Home</Link>
                                    </h4>
                                 </div>
                                 <div className="lowerNav"></div>
                              </div>
                              <div className="right">
                                 <Form />
                                 <p>{heading}</p>
                                 {/* {!song.length ? "" : <Loader />}
                                 {ready === "loading" ? "Loading..." : ""} */}
                                 {renderMusicCards(song, ready)}
                              </div>
                           </Wrapper>
                        </Container>
                     </main>
                  </MainStyle>
               );
            }}
         </Consumer>
      );
   }
}
export default Main;
