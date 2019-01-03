import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SvgFontIcons from 'react-svg-font-icons';
import Footer from './Footer';
import { Grid, Column } from './Grid';
import Container from './Container';
import Header from './Header';

const SongDetailsStyle = styled.div`
  margin: 50px 0;
  section{
    padding-left: 40px;
  }
  button{
    display: inline-block;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    background: var(--color-brand-1);
    border:none;
    border-radius: var(--border-radius);
    color: white;
    font: inherit;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }
  h1, h3{
    margin: 0 0 15px 0;
  }
  i{
    color: black:
  }
  span{
    margin: 0 0 12px 0;
  }
  ul{
    margin: 20px 0;
  }
  small{
    margin-left: 5px;
    font-size: 16px;
    color: #999;
    &::before{
      content: '(';
    }
    &::after{
      content: ')';
    }
  }
`;

class SongDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {},
      ready: 'initial',
    }
  }
  componentDidMount() {
    const { match : { params } } = this.props;
    const id = params.id;
    this.setState({ ready: 'loading' });
    axios({
      method: 'get',
      url: `https://api.deezer.com/track/${id}`,
      headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`},
    }).then(({data}) => {
      console.log(data)
      this.setState({
        ready: 'loaded',
        song: data,
      });
    });
  }
  render() {
    const { song, ready } = this.state;
    return (
      <Fragment>
        <Header />
        <SongDetailsStyle>
          <Container>
            { ready === 'loading' ? (<h1>Loading content...</h1>) : '' }
            { ready === 'loaded' && (
              <Fragment>
                <Grid>
                  <Column columns="2">
                  </Column>
                  <Column columns="2">
                    <section>
                    <i className="fa fa-music" aria-hidden="true"></i>
                      <h3>Track title:</h3>
                      <i className="fa fa-music">{song.title}</i>
                    </section>
                  </Column>
                </Grid>
                <Grid>
                  <Column columns="2">
                    <img src={song.album.cover_medium} alt="album art" />
                  </Column>
                  <Column columns="2">
                    <section>
                      <h3>Album Title:</h3>
                      <i className="fa fa-music">{song.album.title}</i>
                    </section>
                    <input type="button" onClick={song.preview}>Preview</input>
                    {/* <button onClick ={song.preview}>Preview</button> */}
                  </Column>
                </Grid>
              </Fragment>
            ) }
          </Container>
        </SongDetailsStyle>
        <Footer />
      </Fragment>
    );
  }
}

export default SongDetails;
