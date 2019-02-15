import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import SvgFontIcons from 'react-svg-font-icons';
import { Wrapper, Box1, Box2 } from './Grid';
import MusicBg from '../../assets/music-bg.jpeg';
import one from '../../assets/one.jpg';
import MusicContent from './MusicContent';
import Footer from './Footer';
import Container from './Container';
import Form from './Form';
import Loader from './Loader';

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
  constructor() {
    super();
    this.state = {
      song: [],
      ready: 'initial',
    };
  }
  componentDidMount() {
    this.setState({
      ready: 'loading',
    });
    axios({
      mode: 'cors',	    
      method: 'get',	    
      url: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks&limit=60',
      headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`},
    })
    // axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks&limit=60')
    .then(({ data:{data} } ) => {
      console.log(data)
      this.setState({                                                                                                                                                                                                                               
        ready: 'loaded',
        song: data,
      })
    })
  }
  render() {
    const { song, ready } = this.state;
    return (
      <MainStyle>
        <main>
          <Container>
            <Wrapper>
            <div className="left">
                <Header>
                  <img src="../../assets/logo.svg" />
                  <h3>Soundio</h3>
                  <h5><p>The Music Hub</p></h5>
                </Header>
                <div className="upperNav">
                   <h4 className="home">home</h4>
                   <h4 className="explore">Explore</h4>
                </div>
                <div className="lowerNav">
                  <h4>my music</h4>
                  <ul>
                    <li>
                      <img src="../../assets/album.svg" /><p><a href="#">Album</a></p>
                    </li>
                    <li>
                      <img src="../../assets/artist.svg" /><p><a href="#">Artist</a></p>
                    </li>
                    <li>
                      <img src="../../assets/track.svg" /><p><a href="#">Track</a></p>
                    </li>
                    <li>
                      <img src="../../assets/favourite.svg" /><p><a href="#">Favourite</a></p>
                    </li>
                    <li>
                      <img src="../../assets/playlists.svg" /><p><a href="#">Playlist</a></p>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="right">
              <Form />
                <p>Soundio Recommends</p>
              {song.length ? '' : <Loader />}
              {ready === 'loading' ? 'Loading...' : ''}
              <Box2>
              {song.map(song => (
                  <MusicContent key={song.id} image={song.album.cover_medium ? song.artist.picture_medium : ''}>
                    <h3><Link to={`/song/${song.id}`}>{song.artist.name}</Link></h3>
                    <h3 className="fa fa-music">{song.title}</h3>
                  </MusicContent>
              ))}
              </Box2>
            </div>
            </Wrapper>
          </Container>
        </main>
        
      </MainStyle>
    );
  }
} 

export default Main;
