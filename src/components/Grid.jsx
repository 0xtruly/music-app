import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 45px;
  @media (min-width: 768px){
     grid-gap: 15px
  }
  @media (max-width: 425px){
   display: inline;
}
  .left{
    border-right: solid thin #eee;
    @media (max-width: 425px){
       display: grid;
       grid-template-columns: 140px 1fr 1fr;
       grid-template-rows: 25% 100px 65px;
    }
  }
  .right p{
    font-style: var(--font-brand-1);
    font-size: 22px;
    color: var(--color-brand-3);
    font-weight: 100;
    @media(max-width: 425px){
      font-size: 18px;
      margin-inline-start: 15px;
    }
  }
 .left h3{
    font-style: var(--font-brand-2);
    font-weight: 100;
    font-size: 28px;
    bottom: 100%;
    padding-bottom: 0px;
    left: 100%;
    margin-left: 85px;
    margin-bottom: 0px;
  }
  .left img{
    width: 45px;
    height: 45px;
    left: 100%;
    margin-left: 38px;
    bottom: 100%;
    margin-bottom: -62px;
  }
  .left .upperNav h4{
    font-style: var(--font-brand-1);
    font-size: 17px;
    color: var(--color-brand-3);
    font-weight: 100;
    text-transform: capitalize;
    @media(max-width: 425px){
      font-size: 15px;
    }
  }
  

  .left .lowerNav h4{
    font-style: var(--font-brand-1);
    font-size: 17px;
    color: var(--color-brand-3);
    font-weight: 100;
    text-transform: capitalize;
    @media(max-width: 425px){
      font-size: 15px;
    }
  }
  h5{
    line-height: 0px;
    top: 100%;
    padding-top: 0px;
    left: 100%;
    margin-left: 90px;
    margin-top: -4px;
    p{

      font-size: 12px;
      font-weight: 10;
      font-style: var(--font-brand-1);
    }
  }
  .upperNav{
    border: solid thin #eee;
    left: 100%;
    padding-left: 75px;
    @media(max-width: 425px){
       padding-left: 25px;
       border: none;
    }
    .explore{
       @media(max-width: 425px){
          display: none;
       }
    }
  }
  .lowerNav h4{
    left: 100%;
    padding-left: 75px;
    @media(max-width: 425px){
       padding-left: 0px;
       margin-left: -34px;
    }
  }
  .lowerNav li{
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom: -10px;
    @media(max-width:425px){
       display: none;
    }
  }
  .lowerNav li a{
    cursor: pointer;
    color: var(--color-brand-2);
  }
  .lowerNav img{
    width: 15px;
    height: 15px;
    top: 100%;
    margin-top: 17px;
    left: 100%;
    margin-left: 25px;
  }`
  ;
export const Box1 = styled.div`
  border-radius: 5px;
  padding: 20px;
  `;
  
  
export const Box2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px;
  padding-top: 0px;
  top: 100%;
  right: 100%;
  padding-right: 20px;
  @media(max-width: 425px){
   padding: 25px;
   margin: 0;
 }
@media (max-width: 768px){
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 15px;
   margin-right: 5px;
   padding-right: 10px;
}
`;
