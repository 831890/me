import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import ImgLogoYanadoo from '../assets/images/logo_yanadoo.png';
export default function About() {
  return (
    <div>
      <Title>{'<Profile/>'}</Title>
      <dl>
        <dt>이메일</dt>
        <dd>juah@kakao.com</dd>
        <dt>Link</dt>
        <dd>
          <a href="https://github.com/831890">GitHub</a>
        </dd>
      </dl>

      <Title>{'<WorkExperience/>'}</Title>
      <CareerList>
        <li>
          {/* <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="야나두" /> */}
          <img src={ImgLogoYanadoo} alt="야나두" />
          <strong>2020.09 ~ 재직중</strong>
          <p>야나두에서 작업한 내용과 맡은 직무 같은거 쓰기</p>
          <a href="https://www.yanadoo.co.kr" target="_blank" rel="noreferrer">
            Home Link
          </a>
        </li>
        <li>
          <img
            src="https://i.namu.wiki/i/NisaC_wvo4qteOOuPGWt8R8oDZFHL5z2yiIXgHNCRAIqVcnNf3jFMeDrzvu7FMvCANthVeW5unuOd2hzMm3yyJWzIifAp4s9fIVAdC8n-kP0y0zGEcJYXjIoxkvAgu3GwTVDM2jwVqOs_hRhjvxaOw.webp"
            alt="바바패션 힙합퍼"
          />
          <strong>2020.01 ~ 2020.09</strong>
          <p>짧은 재직기간의 이유? 어떤 작업을 위주로 했는지.</p>
          <a href="https://namu.wiki/w/%ED%9E%99%ED%95%A9%ED%8D%BC" target="_blank" rel="noreferrer" title="서비스종료" style={{ textDecoration: 'line-through' }}>
            Link
          </a>
        </li>
        <li>
          <img src="https://static.conects.com/stunitas_com/img/STUNITAS_NEW_h_bi.png" alt="ST Unitas" />
          <strong>2015.06 ~ 2019.12</strong>
          <p>에스티유니타스에서의 작업내용과 파트장으로 작업한것들과 업무분장</p>
          <a href="https://www.stunitas.com/">Home Link</a>
          <a href="https://gong.conects.com/">공단기 Link</a>
          <a href="https://gyung.conects.com/">경단기 Link</a>
        </li>
        <li>
          <img src="https://image.hackers.ac/images/common/gnb/logo_renew.png" alt="해커스" />
          <strong>2014.04 ~ 2015.06</strong>
          <p>해커스 어학원 챔프스터디 편입 기초영어 등에서의 작업</p>
          <a href="https://www.hackers.ac/">해커스 어학원 Link</a>
          <a href="https://champ.hackers.com/">해커스인강 챔프스터디 Link</a>
        </li>
        <li>
          <img src="https://www.mginfo.co.kr/common/img/comm/mg-logo.png" alt="MG신용정보" />
          <strong>2012.10 ~ 2014.04</strong>
          <p>첫 직장.</p>
          <a href="https://www.mginfo.co.kr/">Home Link</a>
        </li>
      </CareerList>
    </div>
  );
}

const CareerList = styled.ul`
  li {
    margin: 0 0 5rem;
    img {
      width: 10rem;
    }
    strong {
      margin: 0 0 0 1rem;
    }
    p {
      margin: 1rem 0;
    }
    a {
      display: inline-block;

      &:before {
        content: '/';
        display: inline-block;
        margin: 0 0.5rem;
      }
      &:first-of-type {
        &:before {
          content: '';
          margin: 0;
        }
      }
    }
  }
`;

// const Company = styled.div`
// 	font-size:2rem;
// 	font-weight:500;
// `
