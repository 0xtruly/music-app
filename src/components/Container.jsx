import styled from 'styled-components';
// import one from '../../assets/one.svg';
import two from '../../assets/2Aside.jpg';
import three from '../../assets/three.jpg';
import four from '../../assets/4Aside.jpg';


const Container = styled.div`
  width: 100%;
  margin: auto;
  .section1{
   background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url("../../assets/one.svg");
   background-size: cover;
   background-position: center;
   color: #fff;
   height: 720px;
}
.wrapper .section1 img{
   width: 65px;
   left: 100%;
   margin-left: 740px;
   top: 100%;
   margin-top: 235px;
}
.wrapper .section1 h3{
   font-style: var(--font-brand-2);
   font-weight: 100;
   text-transform: uppercase;
   left: 100%;
   margin-left:750px;
   top: 100%;
   margin-top: 235px;
 }

`;

export default Container;
