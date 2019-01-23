// import React, { Component } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import Footer from './Footer';
// import {Wrapper, Box1, Box2} from './Grid';
// import Container from './Container';
// import Header from './Header';
// import Form from './Form';
// import MusicBg from '../../assets/music-bg.jpeg';
// import MusicContent from './MusicContent';
// import Loader from './Loader';

// const ResultStyle = styled.div`
// header, footer{
//   text-align: center;
// }
// main{
//  overflow: auto;
//  padding-bottom: 100px;
// }
// `;


// class Result extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       song: {},
//       ready: 'initial'
//     }
//   }
//   componentDidMount() {
//     const {match : {params} } = this.props;
//     const song = params;
//     this.setState({ready: 'loaded'});
//   }
//   render(){
//     const{song} = this.state;
//     return(
//       <ResultStyle>
//         <Header>
//             <h1>Soundio</h1>
//             <p>The Music Hub</p>
//             <Form />
//           </Header>
//           <main>
//             <Container>
//               <Wrapper>
//                 { song.length ? '' : <Loader />  }
//                 { ready === 'loading' ? 'Loading...' : '' }
//                 { song.map(song => (
//                   <Box Boxs="3" key={song.id}>
//                     <MusicContent image={song.album.cover_medium ? song.artist.picture_medium:''}>
//                       <h3 onClick="pointer"><Link to={`/song/${song.id}`}>{song.artist.name}</Link></h3>
//                       <i className="fa fa-music">Album:{song.album.title}</i> <br />
//                       <i className="fa fa-music">Track:{song.title}</i>
//                     </MusicContent>                           
//                   </Box>
//                 )) }
//               </Wrapper>
//             </Container>
//           </main>
//           <Footer />
//       </ResultStyle>
//     )
//   }
// }


// export default Result;

