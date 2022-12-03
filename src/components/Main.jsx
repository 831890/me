import React from 'react'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import styled from 'styled-components';

export default function Main() {
	return (
		<>
			<IntroCol>
				<InnerCol>
					<h2>안녕하세요? 김주아입니다.</h2>
				</InnerCol>
			</IntroCol>
			<About/>
			<Skills/>
			<Project/>
		</>
	)
}


const InnerCol = styled.div`
	width:90%;
	max-width: calc(100% - 48px);
	margin:12rem auto 0;
`

const IntroCol = styled.div`
	padding:5rem 0;

	h2 {
		font-size:2.4rem;
		font-weight:500;
		letter-spacing:4px;
	}
`