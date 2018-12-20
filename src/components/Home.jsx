import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import SvgFontIcons from 'react-svg-font-icons';
import { Grid, Column } from './Grid';
import MusicBg from '../../assets/music-bg.jpeg';
import MusicList from './MusicList';
import Footer from './Footer';
import Container from './Container';
import Form from './Form';
const HomeStyle = styled.div`
  header, footer{
    text-align: center;
  }
  main{
    margin: 20px 0;
  }
`;

const Header = styled.header`
  padding: 70px 20px;
  background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${MusicBg});
  background-size: cover;
  background-position: center;
  color: #fff;
`;

class Home extends Component {
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
      method: 'get',
      url: 'https://api.deezer.com/chart/0/tracks&limit=60',
      headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`},
    })
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
      <HomeStyle>
        <Header>
          <h1>Soundio</h1>
          <p>The Music Hub</p>
          <Form />
        </Header>
        <main>
          <Container>
            <Grid>
              { song.length ? '' : 'There are no sound clips '  }
              { ready === 'loading' ? 'Loading...' : '' }
              { song.map(song => (
                <Column columns="3" key={song.id}>
                  <MusicList image={song.album.cover_medium ? song.artist.picture_medium:''}>
                    <h3><Link to={`/song/${song.id}`}>{song.artist.name}</Link></h3>
                    <i className="fa fa-music">Album:{song.album.title}</i> <br />
                    <i className="fa fa-music">Track:{song.title}</i>
                  </MusicList>                           
                </Column>
              )) }
            </Grid>
          </Container>
        </main>
        <Footer />
      </HomeStyle>
    );
  }
} 

export default Home;
