import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import NotFound from './NotFound';
import CommonStyle from '../assets/style/CommonStyle';

export default function Router() {
  return (
    // <MainLayout>
  <CommonStyle.Main>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </CommonStyle.Main>
    // </MainLayout>
  );
}


// const MainLayout = styled.main`
//   position: relative;
//   min-height: 80vh;
//   font-size: 16px;

//   div {
//   height:1000px;}
// `;