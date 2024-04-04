import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterLayout>
      <Inner></Inner>
    </FooterLayout>
  );
}
const FooterLayout = styled.footer`
  width: 100%;
  padding: 2rem 0;
  font-size: 2rem;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 4.8rem;
  box-sizing: border-box;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
`;
