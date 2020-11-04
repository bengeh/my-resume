import React from 'react';
import styled from 'styled-components'
import Go from '../assets/go.svg'
import JavaScript from '../assets/javascript.svg'
import TypeScript from '../assets/typescript.svg'
import Python from '../assets/python.svg'
import Java from '../assets/java.svg'
import Html from '../assets/html5.svg'

const skills = [
    {
        'name': 'JavaScript',
        'img': JavaScript
    },
    {
        'name': 'TypeScript',
        'img': TypeScript
    },
    {
        'name': 'Python',
        'img': Python
    },
    {
        'name': 'Java',
        'img': Java
    },
    {
        'name': 'Go',
        'img': Go
    },
    {
        'name': 'HTML',
        'img': Html
    }
]

const SkillsList = () => {
    return(
        <SkillListContainer>
            <SkillListTitle>Skill List</SkillListTitle>
            <SkillListWrapper>
            {
                skills.map((k: any) => {
                    return(
                        <SkillWrapper key={k.name}>
                            <div className="imageBox">
                                <SkillWrapperImg src={k.img} alt="hi"></SkillWrapperImg>
                            </div>
                            <SkillWrapperText>{k.name}</SkillWrapperText>
                        </SkillWrapper>
                    )
                })
            }
            </SkillListWrapper>
        </SkillListContainer>
    )
}
const SkillWrapperImg = styled.img`
    width: 50px;
    height: 50px;
`
const SkillWrapperText = styled.span``

const SkillWrapper = styled.div`
    width: 25%;
    height: 25%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.1);
    text-align: center;
    margin: 0 15px 15px 0;
    .imageBox {
        align-items: center
    }
`;
const SkillListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`
const SkillListTitle = styled.div`
    width: 25%;
    white-space: nowrap;
    font-weight: bold;
`
const SkillListContainer = styled.div``

export default SkillsList