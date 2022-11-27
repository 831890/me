import { useState, useEffect } from 'react';
import {useLocation, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import NavData from '../data/NavData.json';

function Header() {
	const { pathname } = useLocation();
	const [scrollActive, setScrollActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
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
			<Inner>
				<h1 style={{letterSpacing:'4px'}}><a href="/me">김주아.</a></h1>
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
			</Inner>
		</HeaderLayout>
		</>

  );
	
}

const HeaderLayout = styled.header`
  position: relative;
  width: 100%;
  max-width:1600px;
  height: 120px;
  max-height:120px;
  background-color: #fff;
  transition: all 0.3s;


  h1 {
    flex: 0 0 auto;
    width: 25%;
    font-size: 1.6rem;
    font-weight:500;
    // color: #ddd;
    text-transform: uppercase;
  }

  &.fixed {
    position: fixed;
    top: 0;
    max-height:64px;
    border-bottom:1px solid #e6e8ea;
    z-index: 10;
    
  }

  @media ${({ theme }) => theme.device.mobile} {
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // max-width: 1024px;
  width: 100%;
  height:100%;
  // max-height:120px;
  margin: 0 auto;
  padding: 0 48px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.device.mobile} {
    padding:0 24px;
  }

`
const NavLayout = styled.nav`
  flex: 0 0 auto;
  // width: 75%;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      flex: 0 1 auto;

      a {
        display: block;
        position: relative;
        font-size: 16px;
        font-weight: 300;
        padding: 12px 16px;
        font-weight: 300;
        color: #4e5968;

        &.active {
          font-weight: 500;
        }
      }
    }
  }

  // @media ${({ theme }) => theme.device.mobile} {
  //   display: none;
  //   width: 100%;
  //   background-color: #f5f5f5;
  //   z-index: 10;

  //   ul {
  //     justify-content: flex-start;
  //     flex-direction: column;
  //     padding: 10px 0;

  //     li {
  //       width: 100%;
  //       a {
  //         padding: 15px 20px;
  //         font-size: 13px;
  //       }
  //     }
  //   }

  //   &.active {
  //     display: block;
  //   }
  // }
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

