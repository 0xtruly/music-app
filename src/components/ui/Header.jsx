import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  padding: 30px 40px;
  background: var(--color-brand-1);
  color: #fff;
  a{
    color: inherit;
    font-weight: 10px;
  }
`;

const Header = () => (
  <HeaderStyle>
    <Link to="/">Home</Link>
  </HeaderStyle>
);
export default Header;
