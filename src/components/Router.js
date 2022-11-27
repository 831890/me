import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import NotFound from './NotFound';
import styled from 'styled-components';

export default function Router() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </MainLayout>
  );
}


const MainLayout = styled.main`
  position: relative;
  min-height: 80vh;
  font-size: 1.6rem;

  div {
  height:1000px;}
`;