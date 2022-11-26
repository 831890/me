import React from 'react';
import styled from 'styled-components';
import Style from '../assets/style/Style';

function Header() {
  return (
		<header style={{background:'red', display:'flex',justifyContent: 'space-between'}}>
		<Style.Logo>831890</Style.Logo>
		<nav>
			<Style.MenuList>
			<li><a href="">home</a></li>
			<li><a href="">about</a></li>
			<li><a href="">skills</a></li>
			<li><a href="">project</a></li>
			<li><a href="">contact</a></li>
			</Style.MenuList>
		</nav>
		</header>
  );
	
}

export default Header;

