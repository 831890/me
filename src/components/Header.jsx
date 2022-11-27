import { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

function Header() {

	const [scrollActive, setScrollActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 750 });
    return isMobile ? children : null;
  };
  const handleMobileMenu = () => {
    setIsActive(!isActive);
  };
	function handleScroll() {
    let scrollY = window.scrollY || document.documentElement.scrollTop;

    setScrollActive(scrollY > 0);
  }
	useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
		<>		
    <HeaderLayout className={scrollActive ? 'fixed' : ''}>
			<div className="inner">
				<h1>831890</h1>
        <NavLayout className={isActive ? 'active' : null}>
						<ul>
						<li><a href="">home</a></li>
						<li><a href="">about</a></li>
						<li><a href="">project</a></li>
						</ul>
					</NavLayout>
					<Mobile>
          <HamburgerBtn type="button" onClick={handleMobileMenu}>
            <i>메뉴</i>
            <span className="ico-bar"></span>
          </HamburgerBtn>
        </Mobile>
			</div>
		</HeaderLayout>
		</>

  );
	
}

const HeaderLayout = styled.header`
  position: relative;
  width: 100%;
  height: 7.9rem;
  background-color: #fff;
  transition: all 0.3s;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  h1 {
    flex: 0 0 auto;
    width: 25%;
    // font-size: 3.5rem;
    // color: #ddd;
    text-transform: uppercase;

    img {
      width: 5rem;
      vertical-align: middle;
    }

    span {
      font-size: 2rem;
    }
  }

  &.fixed {
    position: fixed;
    top: 0;
    box-shadow: 0rem 0rem 0.6rem rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 6.2rem;

    .inner {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0;
    }

    h1 {
      padding: 1rem 2rem;

      img {
        width: 3.5rem;
      }
    }
  }
`;

const NavLayout = styled.nav`
  flex: 0 0 auto;
  width: 75%;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      flex: 0 1 auto;

      a {
        display: block;
        position: relative;
        // font-size: 1.6rem;
        padding: 3rem 2rem;
        font-weight: 300;
        color: #000;

        &.active {
          color: #ddd;
        }
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
    width: 100%;
    background-color: #f5f5f5;
    z-index: 10;

    ul {
      justify-content: flex-start;
      flex-direction: column;
      padding: 1rem 0;

      li {
        width: 100%;
        a {
          padding: 1.5rem 2rem;
          font-size: 1.3rem;
        }
      }
    }

    &.active {
      display: block;
    }
  }
`;

const HamburgerBtn = styled.button`
  position: absolute;
  top: 0;
  right: 2rem;
  bottom: 0;
  width: 2.5rem;
  height: 2.5rem;
  margin: auto;

  .ico-bar {
    display: block;
    width: 2.5rem;
    height: 0.4rem;
    background-color: #ddd;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -0.7rem;
      width: 2.5rem;
      height: 0.4rem;
      background-color: #ddd;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0.7rem;
      width: 2.5rem;
      height: 0.4rem;
      background-color: #ddd;
    }
  }
`;
export default Header;

