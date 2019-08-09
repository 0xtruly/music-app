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
`
const Loader = () => (
  <LoaderStyle>
    <div className="loading-spinner"></div>
  </LoaderStyle>
)
export default Loader;
