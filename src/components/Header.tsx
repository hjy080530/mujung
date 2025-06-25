import React from 'react';
import styled from '@emotion/styled';
import MujungLogo from '../assets/mujungLogo';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <MujungLogo />
      </LogoWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 196px;
  height: 40px;
  margin-top: 20px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default Header;
