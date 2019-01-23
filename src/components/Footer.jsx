import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  padding: 24px 0px 29px 0px;
  background: var(--color-brand-1);
  color: #fff;
  height: 50%;
  text-align: center;
  margin-top: 0px;
  position: relative;
`;
const date = new Date().getFullYear();

const Footer = () => (
  <FooterStyle>
    <p>Soundio powered by Deezer</p>
    <p>&copy; {date} Segun Abebanjo.</p>
  </FooterStyle>
);
export default Footer;
