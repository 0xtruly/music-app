import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Wrapper, Box2 } from './Grid';
import Footer from './Footer';
import Container from './Container';
// import one from '../../assets/one.jpg';
// import two from '../../assets/2Aside.jpg';
// import three from '../../assets/three.jpg';
// import four from '../../assets/4Aside.jpg';


const HomeStyle = styled.div`
header, footer{
   text-align: center;
 }
 main{
  overflow: auto;
  padding-bottom: 100px;
}
.wrapper{
   display: grid;
}
.section1 .section2 .section3 .section4{
   background-color: #fff;
   
}  
.section1{
   background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .6), url("../../assets/one.svg") no-repeat;
   color: #fff;
   height: 720px;
   width: 100%;
   background-size: cover;
   background-position: center;
   img{
       width: 65px;
       left: 100%;
       margin-left: 740px;
       top: 100%;
       margin-top: 235px;
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
 
.section2 img{
   width: 620px;
   height: 500px;
}
`;

// const Header = styled.div`
//   padding: 70px 20px;
//   background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${MusicBg});
//   background-size: cover;
//   background-position: center;
//   color: #fff;
//   }
// `;

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
      <HomeStyle>
        <main>
          <Container>
            <div className="wrapper">
               <div className="section1" id="sec1">
                   <img src="../../assets/logo.svg" />
                   <h3>soundio</h3>
                   <p className="sec1-par">the music hub</p>
                   <button type="button" className="btn"></button>
               </div>         
               <div className="section2" id="">
               
                 
               
               </div>
               <div className="section3">
               
                  
               
               </div>
               <div className="section4">
               
                  
               
               </div>         
            </div>
          </Container>
        </main>
        <Footer />
      </HomeStyle>
    );
  }
} 

export default Home;
