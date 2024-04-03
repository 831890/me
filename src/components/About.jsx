import React from 'react';
import styled from 'styled-components';

export default function About() {
  return (
    <div style={{ height: '1000px' }}>
      <Titile>{'<Profile/>'}</Titile>
      <dl>
        <dt>연락처</dt>
        <dd>
          <a href="tell:01040820026">010-4082-0026</a>
        </dd>
        <dt>이메일</dt>
        <dd>juah@kakao.com</dd>
        <dt>Link</dt>
        <dd>
          <a href="https://github.com/831890">GitHub</a>
        </dd>
      </dl>

      <Titile>{'<WorkExperience/>'}</Titile>
      <CareerList>
        <li>
          <img
            src="data:image/png;base64,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"
            alt="야나두"
          />
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
          <span>2012.10 ~ 2014.04</span>
          <p>첫 직장.</p>
          <a href="https://www.mginfo.co.kr/">Home Link</a>
        </li>
      </CareerList>
    </div>
  );
}

const Titile = styled.h3`
  font-size: 2.6rem;
  font-weight: 700;
`;

const CareerList = styled.ul`
  padding: 5rem 0;

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
