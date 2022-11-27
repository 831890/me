import { useState, useEffect } from 'react';
import {useLocation, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import NavData from '../data/NavData.json';

function Header() {
	const { pathname } = useLocation();
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

	useEffect(() => {
    setIsActive(false);
  }, [pathname]);
  return (
		<>		
    <HeaderLayout className={scrollActive ? 'fixed' : ''}>
			<div className="inner">
				<h1>831890</h1>
        <NavLayout className={isActive ? 'active' : null}>
						<ul>
							{NavData && NavData.map((list,i)=> {
								return (
									<li key={i}>
										<NavLink to={{pathname: list.path}}
										className={({ isActive }) =>
										(isActive ? 'active' : '')
									}>
											{list.title}
										</NavLink>
									</li>
								)
							})}
						</ul>
					</NavLayout>


					
					<Mobile>
          <HamburgerBtn type="button" onClick={handleMobileMenu}>
            {/* <i>메뉴</i> */}
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
  height: 80px;
  background-color: #fff;
  transition: all 0.3s;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  h1 {
    flex: 0 0 auto;
    width: 25%;
    // font-size: 35px;
    // color: #ddd;
    text-transform: uppercase;

    img {
      width: 50px;
      vertical-align: middle;
    }

    span {
      font-size: 20px;
    }
  }

  &.fixed {
    position: fixed;
    top: 0;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 62px;

    .inner {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0;
    }

    h1 {
      padding: 10px 20px;

      img {
        width: 35px;
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
        // font-size: 16px;
        padding: 30px 20px;
        font-weight: 300;
        color: #000;

        &.active {
          color: red;
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
      padding: 10px 0;

      li {
        width: 100%;
        a {
          padding: 15px 20px;
          font-size: 13px;
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
  right: 20px;
  bottom: 0;
  width: 25px;
  height: 25px;
  margin: auto;

  .ico-bar {
    display: block;
    width: 25px;
    height: 4px;
    background-color: #000;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -7px;
      width: 25px;
      height: 4px;
      background-color: #000;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 7px;
      width: 25px;
      height: 4px;
      background-color: #000;
    }
  }
`;
export default Header;

