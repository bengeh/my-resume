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
  display: none;
  width: 25%;
  @media(min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`


const RightContainer = styled.div`
  padding: 0 0 0 15px;
  @media(min-width: 1024px) {
    width: 50%;
  }
`

export default App;
