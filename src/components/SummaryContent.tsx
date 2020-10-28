import React from 'react';
import styled from 'styled-components'

const summary = [
    {
        desc: "Leadership",
        currentLevel: 40
    },
    {
        desc: "Fast Learner",
        currentLevel: 80
    },
    {
        desc: "Git, Jenkins, MongoDB",
        currentLevel: 40
    },
    {
        desc: "React, Typescript, JavaSCript, Python, Html, CSS",
        currentLevel: 60
    },
    {
        desc: "MySQL",
        currentLevel: 50
    }
]

const SummaryContent = () => {
    return(
        <SummaryContainerWrapper>
                {
                    summary.map((k :any) => {
                        return(
                            <SummaryContentContainer>
                                <Summary >{k.desc}</Summary>
                                <SummaryBar currentLevel={k.currentLevel}>{k.currentLevel}%</SummaryBar>
                            </SummaryContentContainer>
                        )
                    })
                }
            
            
        </SummaryContainerWrapper>
    )
}

const SummaryContainerWrapper = styled.div``;
const SummaryContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0 10px 0;
`;
const Summary = styled.div``;


const SummaryBar = styled.div<{currentLevel: number}>`
    width: 50%;
    border: 2px solid;
    border-radius: 25px;
    text-align: center;
    background: linear-gradient(to right, lightgreen ${(props) => props.currentLevel}%, gray 0);
`;

export default SummaryContent