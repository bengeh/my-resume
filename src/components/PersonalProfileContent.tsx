import React from 'react';
import styled from 'styled-components'


const PersonalProfileContent = () => {
    return(
        <PersonalProfileContentContainer>
            <PersonalProfileTitle>PERSONAL PROFILE</PersonalProfileTitle>
            <PersonalProfileDesc>I am a dedicated and hardworking person. I have gone over to Silicon Valley as a software engineer intern and have used that
                time to learn to develop web applications with the industries' best practices. I have also used EmberJS and React with Typescript to create
                large scale applications for Standard Chartered Bank. I enjoy looking for new challenges and tackling and solving them. I am currently looking for new opportunities
                to utilise my skills in a new challenging working environment
            </PersonalProfileDesc>
        </PersonalProfileContentContainer>
    )
}

const PersonalProfileContentContainer = styled.div`
    display: flex;
    flex-direction: row
`
const PersonalProfileTitle = styled.div`
    white-space: nowrap;
    font-weight: bold;
    @media(min-width: 1024px) {
        width: 25%;
    }
`
const PersonalProfileDesc = styled.div`
    padding: 0 0 0 25px;
    @media(min-width: 1024px) {
        padding: 0 0 0 50px;
    }
`


export default PersonalProfileContent