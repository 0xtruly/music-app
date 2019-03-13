import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import SvgFontIcons from 'react-svg-font-icons';
import { Wrapper, Box1, Box2 } from './Grid';
import MusicBg from '../../assets/music-bg.jpeg';
import Album from '../../assets/album.png';
import Artist from '../../assets/artist.png';
import Favourite from '../../assets/favourite.png';
import Playlists from '../../assets/playlists.png';
import Track from '../../assets/track.png';
import Logo from '../../assets/logo.png';
import MusicContent from './MusicContent';
import Footer from './Footer';
import Container from './Container';
import Form from './Form';
import Loader from './Loader';
import {Consumer} from './Context';
import ReactAudioPlayer from 'react-audio-player';

const MainStyle = styled.div`
  header, footer{
    text-align: center;
  }
  main{
   overflow: auto;
   padding-bottom: 100px;
  }
`;

const Header = styled.div`
  padding:20px 5px;
  background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${MusicBg});
  background-size: cover;
  background-position: center;
  color: #fff;
  @media (max-width: 425px){
     grid-column: 1/span 3;
     grid-row: 1/span 2;
}
 
  @media (min-width: 768px){
     padding: 50px 20px;
  }
  @media (min-width: 1024px){
   padding: 70px 20px;
}

  }
`;

class Main extends Component {


  render() {
   //  const { song, ready, heading } = this.state;
    return (
   <Consumer>
     {value =>{ 
        const {song, ready, heading} = value;
        console.log(value)
     return(
     <MainStyle>
        <main>
          <Container>
            <Wrapper>
            <div className="left">
                <Header>
                  <img src={Logo} />
                  <h3>Soundio</h3>
                  <h5><p>Mp3 Tone Downloads </p></h5>
                </Header>
                <div className="upperNav">
                   <h4><Link to="/">Home</Link></h4>
                   {/* <h4>Explore</h4> */}
                </div>
                <div className="lowerNav">
                  {/* <h4>my music</h4>
                  <ul>
                    <li>
                      <img src={Album} /><p><a href="#">Album</a></p>
                    </li>
                    <li>
                      <img src={Artist} /><p><a href="#">Artist</a></p>
                    </li>
                    <li>
                      <img src={Track} /><p><a href="#">Track</a></p>
                    </li>
                    <li>
                      <img src={Favourite} /><p><a href="#">Favourite</a></p>
                    </li>
                    <li>
                      <img src={Playlists} /><p><a href="#">Playlist</a></p>
                    </li>
                  </ul> */}
                </div>
            </div>
            <div className="right">
              <Form />
                <p>{heading}</p>
              {song.length ? '' : <Loader />}
              {ready === 'loading' ? 'Loading...' : ''}
              <Box2>
              {song.map(song => (
                  <MusicContent key={song.id} image={song.album.cover_medium ? song.artist.picture_medium : ''}>
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
            </div>
            </Wrapper>
          </Container>
        </main>
        
     </MainStyle>);
   }}
   </Consumer>
    );
  }
} 

export default Main;

