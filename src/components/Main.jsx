import React from 'react'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import styled from 'styled-components';

export default function Main() {
	const ReactRotatingText = require('react-rotating-text');

	
	return (
		<>
			<IntroCol>
				<InnerCol>

					<h2>안녕하세요? <strong>
							<ReactRotatingText items={['Frontend', 'React', 'UI']} />
						</strong>를 좋아하는 <ReactRotatingText items={['WREN', '김중앙', '보름달']} />입니다.</h2>
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
// const ReactRotatingText = styled.span`
//   animation: ${BlinkingCursor} 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
// `

// const BlinkingCursor = styled.keyfram`
// 0% {
// 	opacity: 0;
// }
// 50% {
// 	opacity: 1;
// }
// 100% {
// 	opacity: 0;
// }
// `