import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from './Footer';
import { Grid, Column } from './Grid';
import Container from './Container';
import Header from './Header';

const SinglePageStyle = styled.div`
  margin: 50px 0;
  section{
    padding-left: 40px;
  }
  h1, h3{
    margin: 0 0 15px 0;
  }
  h4, h5{
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

class SinglePage extends Component {
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
      url: 'https://api.deezer.com/chart/0/tracks&limit=60',
      headers: {Authorization: `Bearer e9d874c859b7133d36df9b5bcd38512d`},
    }).then(({ data:{data}}) => {
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
        <SinglePageStyle>
          <Container>
            { ready === 'loading' ? (<h1>Loading content...</h1>) : '' }
            { ready === 'loaded' && (
              <Fragment>
                <Grid>
                  <Column columns="2">
                  </Column>
                  <Column columns="2">
                    <section>
                      <h1>{song.title}</h1>
                    </section>
                  </Column>
                </Grid>
                <Grid>
                  <Column columns="2">
                    <img src={song.artist.picture_medium} alt="album art" />
                  </Column>
                  <Column columns="2">
                    <section>
                      <h3>Song ID</h3>
                      <ul>
                        { song.id && song.id.map((song, index) => (
                          <li key={index}>{song}</li>
                        )) }
                      </ul>
                      <h3>Album Title</h3>
                      <p>{song.album.title}</p>
                    </section>
                  </Column>
                </Grid>
              </Fragment>
            ) }
          </Container>
        </SinglePageStyle>
        <Footer />
      </Fragment>
    );
  }
}

export default SinglePage;
