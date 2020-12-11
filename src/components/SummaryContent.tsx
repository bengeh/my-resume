import React from 'react';
import styled from 'styled-components'
import star from '../assets/star.svg'

const summary = [
    {
        desc: "Leadership",
        currentLevel: 4.0
    },
    {
        desc: "Fast Learner",
        currentLevel: 4.0
    },
    {
        desc: "Git, Jenkins, MongoDB",
        currentLevel: 3.0
    },
    {
        desc: "React, Typescript, JavaSCript, Python, Html, CSS",
        currentLevel: 3.5
    },
    {
        desc: "MySQL",
        currentLevel: 2.5
    }
]

const SummaryContent = () => {
    return(
        <SummaryContainerWrapper>
                {
                    summary.map((k :any) => {
                        let starLevel = ""
                        if(k.currentLevel % 1 === 0){
                            starLevel = k.currentLevel.toString() + '-0'
                        }else{
                            starLevel = k.currentLevel.toString().replace('.', '-')
                        }
                        console.log("HEHE", starLevel)
                        return(
                            <SummaryContentContainer key={k.desc}>
                                <Summary >{k.desc}</Summary>
                                <StyledSVG>
                                    <use href={`${star}#stars-${starLevel}-star`}></use>
                                </StyledSVG>
                                {/* <StyledSVG>
                                    <use xlinkHref="../assets/star.svg#stars-0-0-star"></use>
                                </StyledSVG> */}
                                {/* <svg className="icon">
                                    <use xlinkHref="../assets/star.svg#stars-0-0-star"></use>
                                </svg> */}
                                {/* <StyledSVG src={Star}></StyledSVG> */}
                                {/* <SummaryBar currentLevel={k.currentLevel}>{k.currentLevel}%</SummaryBar> */}
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

const StyledSVG = styled.svg`
    display: block;
	height: 18px;
    width: 102px;
	
	&:not(:root) {
		overflow: hidden;
	}
`

export default SummaryContent