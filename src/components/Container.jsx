import styled from 'styled-components';
// import one from '../../assets/one.svg';
import two from '../../assets/2Aside.jpg';
import three from '../../assets/three.jpg';
import four from '../../assets/4Aside.jpg';


const Container = styled.div`
  width: 100%;
  margin: auto;
  .wrapper{
     display: grid;
   }

   .section1{
      background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .5)), url("../../assets/one.svg");
      background-size: cover;
   background-position: center;
   color: #fff;
   height: 720px;
   .sec1-par{
      font-style: var(--font-brand-1);
      text-transform: capitalize;
      left: 100%;
      margin-left: 812px;
      top: 100%;
      margin-top: -35px;
      font-size: 16px;
     }
     .btn{
      letter-spacing: normal;
      word-spacing: normal;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: start;
      margin: 0em;
      font: 400 13.3333px var(--font-brand-1);
     }
}
.wrapper .section1 img{
   width: 65px;
   left: 100%;
   margin-left: 740px;
   top: 100%;
   margin-top: 235px;
}
.section1 h3 {
   font-style: var(--font-brand-2);
   font-weight: 100;
   text-transform: uppercase;
   left: 100%;
   margin-left: 809px;
    top: 100%;
    margin-top: -83px;
    font-size: 40px;
}



`;

export default Container;
