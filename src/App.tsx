import React from 'react';
import styled from 'styled-components'
import PersonalProfileContent from './components/PersonalProfileContent'
import GitHubGraph from './components/GitHubGraph'
import LeetCodeGraph from './components/LeetCodeGraph'
import ExperienceContent from './components/ExperienceContent'
import SkillsList from './components/SkillsList'
import './App.css';

function App() {
  return (
    <MainPage>
      <LeftContainer>
        <GitHubGraph></GitHubGraph>
        <LeetCodeGraph></LeetCodeGraph>
      </LeftContainer>
      <RightContainer>
        <PersonalProfileContent></PersonalProfileContent>
        <ContainerBreaker />
        <ExperienceContent title={"EXPERIENCE"}></ExperienceContent>
        <ContainerBreaker/>
        <ExperienceContent title={"EDUCATION"}></ExperienceContent>
        <ContainerBreaker/>
        <SkillsList></SkillsList>
        <ContainerBreaker />
        <ExperienceContent title={"SUMMARY"}></ExperienceContent>
      </RightContainer>
    </MainPage>
  );
}

const ContainerBreaker = styled.hr`
  border-color: orange;
`

const MainPage = styled.div`
  display: flex;
  flex-direction: row;
`
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%
`


const RightContainer = styled.div`
  width: 50%;
  padding: 0 0 0 15px;
`

export default App;