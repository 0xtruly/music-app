import React from 'react';
import styled from 'styled-components'

const LoaderStyle = styled.div`
.loading-spinner{
  animation-play-state: running;
  opacity: 1;
  position: relative;
  height: 30px;
}
@keyframes spinner{
  0%{
    transform: translate3d(-50%, -50%, 0)
    rotate(0deg);
  }
  100%{
    transform: translate3d(-50%, -50%, 0)
    rotate(360deg);
  }
}
.loading-spinner.-paused{
  animation-play-state: paused;
  opacity: 0.2;
  transition: opacity linear 0.1s;
}
.loading-spinner::before {
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 3px #dedede;
  border-bottom-color: #ef6565;
  border-radius: 50%;
  content: "";
  height: 20px;
  right: 100%;
  margin-right: -120px
  opacity: inherit;
  position: absolute;
  top: 125%;
  transform: translate3d(-50%, -50%, 0);
  width: 20px;
}
`/*  position: relative;
width: 50%;
.loader_rect{
  aligh items: center;
  background-color: aquamarine;
  display: webkit box;
  display: flex;
  flex-direction: row;
  height: 20px;
  justify content: center;
  width: 50px;
  top: 40px;
  left: 0;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-align: center;
  -webkit-box-pack: center;
}
.loader_rect .loader__rect{
  margin-left: 3px;
  animation: stretch 1.2s infinite ease-in-out;
}
.loader__rect--2{
  animation-delay: -1.1s;
}
.loader__rect--3{
  animation-delay: -1s;
}
.loader__rect--4{
  animation-delay: -.9;
}
.loader__rect--5{
  animation-delay: -.8;
} */
const Loader = () => (
  
  <LoaderStyle>
     {/* <div className="loader_rect">
          <div className="loader_rect loader__rect--1"></div>
          <div className="loader_rect loader__rect--2"></div>
          <div className="loader_rect loader__rect--3"></div>
          <div className="loader_rect loader__rect--4"></div>
          <div className="loader_rect loader__rect--5"></div>
    </div> */}
    <div className="loading-spinner"></div>
  </LoaderStyle>
)
export default Loader;
