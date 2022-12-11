import React from "react"
import styled from "styled-components";

export default function About() {
	return (
		<div style={{height:"1000px"}}>

			<Titile>{"<Profile/>"}</Titile>
			<dl>
				<dt>연락처</dt>
				<dd><a href="tell:01040820026">010-4082-0026</a></dd>
				<dt>이메일</dt>
				<dd>juah@kakao.com</dd>
				<dt>Link</dt>
				<dd><a href="https://github.com/831890">GitHub</a></dd>
			</dl>

			<Titile>{"<WorkExperience/>"}</Titile>
			<CareerList>
				<li>
						<img src="data:image/png;base64,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" alt="야나두"/>
						<strong>2020.09 ~ 재직중</strong>
						<p>야나두에서 작업한 내용과 맡은 직무 같은거 쓰기</p>
						<a href="https://www.yanadoo.co.kr" target="_blank" rel="noreferrer">Home Link</a>
				</li>
				<li>
					<img src="https://www.hiphoper.com/images/logo/new_logo.jpg" alt="바바패션 힙합퍼"/>
					<strong>2020.01 ~ 2020.09</strong>
					<p>짧은 재직기간의 이유? 어떤 작업을 위주로 했는지.</p>
					<a href="https://www.yanadoo.co.kr" target="_blank" rel="noreferrer" title="서비스종료" style={{textDecoration:'line-through'}}>Link</a>
				</li>
				<li>
					<img src="https://static.conects.com/stunitas_com/img/STUNITAS_NEW_h_bi.png" alt="ST Unitas"/>
					<strong>2015.06 ~ 2019.12</strong>
					<p>에스티유니타스에서의 작업내용과 파트장으로 작업한것들과 업무분장</p>
					<a href="https://www.stunitas.com/">Home Link</a>
					<a href="https://gong.conects.com/">공단기 Link</a>
					<a href="https://gyung.conects.com/">경단기 Link</a>
				</li>
				<li>
					<img src="https://image.hackers.ac/images/common/gnb/logo_renew.png" alt="해커스"/>
					<strong>2014.04 ~ 2015.06</strong>
					<p>해커스 어학원 챔프스터디 편입 기초영어 등에서의 작업</p>
					<a href="https://www.hackers.ac/">해커스 어학원 Link</a>
					<a href="https://champ.hackers.com/">해커스인강 챔프스터디 Link</a>
				</li>
				<li>
					<img src="https://www.mginfo.co.kr/common/img/comm/mg-logo.png" alt="MG신용정보" />
					<span>2012.10 ~ 2014.04</span>
					<p>첫 직장.</p>
					<a href="https://www.mginfo.co.kr/">Home Link</a>
				</li>
			</CareerList>
		</div>
	)
}

const Titile = styled.h3`
	font-size:2.6rem;
	font-weight:700
`

const CareerList = styled.ul`
	padding:5rem 0;

	li {
		margin:0 0 5rem;
		img {
			width:10rem;
		}
		strong {
			margin:0 0 0 1rem;
		}
		p {
			margin:1rem 0;
		}
		a {
			display:inline-block;
			
			&:before {
				content:'/';
				display:inline-block;
				margin:0 .5rem;
			}
			&:first-of-type {
				&:before {
					content:'';
					margin:0;
				}
			}
		}
	}
`

// const Company = styled.div`
// 	font-size:2rem;
// 	font-weight:500;
// `