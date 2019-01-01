import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  padding: 20px;
  background: var(--color-brand-1);
  color: #fff;
  text-align: center;
`;

const Footer = () => (
  <FooterStyle>
    <p>&copy; 2018. Soundio By Segun Abebanjo. Powered by Deezer</p>
  </FooterStyle>
);

export default Footer;
