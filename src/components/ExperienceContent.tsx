import React from 'react';
import styled from 'styled-components'
import SummaryContent from './SummaryContent';

type ExperienceContentProps = {
    title: string
}
const jobScope = [
    {
        roleTitle: 'Standard Chartered Bank - Changi Business Park, Singapore',
        rolePos: 'Software Developer',
        date: 'Mar 2020 - Present',
        jobDesc: ["Used Flask and React to develop an internal application to help engineers in the bank navigate their carrer", "Develop wealth lending dash board using TypeScript and React to help hundereds of RMs to sell wealth lending products easily"]
    },
    {
        roleTitle: 'Standard Chartered Bank - Changi Business Park, Singapore ',
        rolePos: 'Associate Software Developer',
        date: 'Aug 2018 - Mar 2020',
        jobDesc: ["Develop client facing application using EMberJS which is used by thousands of SCB's Singapore Clients", "Develop internal facing application for Bank's Management Team to track hundreds of team's KPI using Kafka and Java", 
        "Displaying the data set from Kafka's topic using Grafana","Used Typescript and react to develop existing internal portal", "Collaboration done using Confluence, Jira and Bitbucket", "Develop wealth lending simulator using Typescript and React to help make lending simulation easier for thousands of SCB's clients and RMs",
        "Used PHP and content management system (CMS) to allow faster deployment of projects"]
    },
    {
        roleTitle: 'Stratio | LinkSquare | BeyondSense - San Jose, Silicon Valley',
        rolePos: 'Full Stack Developer - Intern',
        date: 'Jan 2018 - Jul 2018',
        jobDesc: ["Developed new back-end logic to existing web applcaition using Django to cater to the growing amount of end-users", 
        "Improved user experience to existing web application using JavaScript and HTML", "Added new design and model to existing database",
        "CRUD data with MySQL", "Integrated website with Stripe API to ease payment", "Designed different webhooks to cater to different events from Stripe",
        "Used Python Cron to automate script", "Documentations", "Improved part of company's existing pitch deck"]
    },
    {
        roleTitle: 'Standard Chartered Bank - Changi Business Park, Singapore  ',
        rolePos: 'Retail Bank ITO Intern',
        date: 'May 2017 - Aug 2017',
        jobDesc: ["Develop internal application for bank using Java and Javascript", "Design database for internal application",
        "Write documentations for codes", "Involved in sprint planning and discussions with product owners, scrum masters and business owners",
        "Write automated test cases with Cucumber and Ruby", "Update sprint backlogs, sprint stories, user points, etc"]
    },
    {
        roleTitle: 'CrossTrack Pte Ltd - Jalan Rajah, Singapore',
        rolePos: 'IT Developer Intern',
        date: 'Jun 2016 - Aug 2016',
        jobDesc: ["Debug existing software", "Added new functions to existing software using Python", "Handle database updates", "Update server after bug fixes",
        "Liaised with overseas developer to ensure work is done using Slack", "Documentations"]
    }

]

const educationScope = [
    {
        schoolName: 'Nanyang Techonological University',
        date: 'Jan 2014 - Jan 2018',
        projects: ["Studied Computer Science", "Used Java to develop cinema application", "Used Flask to develop a game to help elderly with dementia",
        "Used Spring Boot to develop web application to test against OWASP database for Final Year Project"]
    },
    {
        schoolName: 'Pioneer Junior College',
        date: 'Jan 2010 - Dec 2011',
        projects: ["Studied in Science stream", "Member of the welfare community in student council", "Organized events such as J1 Orientation day, Teachers' Day, Graduation Night, etc."]
    }
]

const ExperienceContent = (props: ExperienceContentProps) => {
    return(
        <ExperienceContentWrapper>
            <ExperienceContentTitle>{props.title}</ExperienceContentTitle>
            {props.title === "EXPERIENCE" ?
                jobScope.map((k: any) => {
                    console.log("this is the k..." + k.roleTitle)
                    return(
                        <ExperienceContentContainer key={k.roleTitle}>
                            <ExperienceContentRolesTitle>
                                {k.roleTitle}
                            </ExperienceContentRolesTitle>
                            <ExperienceContentRolesPosContainer>
                                <ExperienceContentRolesPos>{k.rolePos}</ExperienceContentRolesPos>
                                <ExperienceContentDate>{k.date}</ExperienceContentDate>
                            </ExperienceContentRolesPosContainer>
                            <ExperienceContentUL>
                                {k.jobDesc.map((v: any) => {
                                    console.log("this is the v..." + v)
                                    return(
                                        <li key={v}>{v}</li>
                                    )
                                })}
                                </ExperienceContentUL>
                        </ExperienceContentContainer>
                    )
                })
            : props.title === "EDUCATION" ?
            educationScope.map((k: any) => {
                console.log("this is the k..." + k.roleTitle)
                return(
                    <ExperienceContentContainer key={k.schoolName}>
                        <ExperienceContentRolesPosContainer>
                            <ExperienceContentRolesPos>{k.schoolName}</ExperienceContentRolesPos>
                            <ExperienceContentDate>{k.date}</ExperienceContentDate>
                        </ExperienceContentRolesPosContainer>
                        <ExperienceContentUL>
                            {k.projects.map((v: any) => {
                                console.log("this is the v..." + v)
                                return(
                                    <li key={v}>{v}</li>
                                )
                            })}
                            </ExperienceContentUL>
                    </ExperienceContentContainer>
                )
            }) :
                props.title === "SUMMARY" ? <SummaryContent /> : ""
            }
        </ExperienceContentWrapper>
    )
}
const ExperienceContentUL = styled.ul``
const ExperienceContentWrapper = styled.div``;
const ExperienceContentTitle = styled.div`
    font-weight: bold;
`
const ExperienceContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const ExperienceContentRolesPos = styled.div``
const ExperienceContentRolesPosContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const ExperienceContentDate = styled.div`
    padding: 0 0 0 150px;
`
const ExperienceContentRolesTitle = styled.div``


export default ExperienceContent