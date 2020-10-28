import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGitHubData } from '../effects/GitHubEffects';
import styled from 'styled-components'
import { AppState } from '../store';
import { Doughnut } from 'react-chartjs-2';


const GitHubGraph = () => {
    const dispatch = useDispatch();
    let languageDataSet: Array<String> = []
    let languageDataNumber: any = []
    let chartData: any
    useEffect(() => {
        dispatch(getGitHubData());
    }, [dispatch]);

    const gitHubData = useSelector((state: AppState) => {
        for (let k in state.gitHubData.gitHubData){
            languageDataSet.push(k)
            languageDataNumber.push(state.gitHubData.gitHubData[k])
        }
        // qnsDataSet = [state.leetCodeData.leetCodeData.easyQns, state.leetCodeData.leetCodeData.medQns, state.leetCodeData.leetCodeData.hardQns]
        chartData = {
            labels: languageDataSet,
            datasets: [{
                label: 'Question Difficulty',
                data: languageDataNumber,
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#CCFFCC',
                    '#FF3399',
                    '#0080FF',
                    '#FF6666'
                  ],
                  hoverBackgroundColor: [
                  '#501800',
                  '#4B5000',
                  '#175000',
                  '#CCFFCC',
                  '#FF3399',
                  '#0080FF',
                  '#FF6666'
                  ],
            }]
        }
    });


    return(
        <div>
            <Doughnut data={chartData} options={{
                title:{
                    display:true,
                    text:'Git Hub Info',
                    fontSize:20
                }
            }}/>
        </div>
    )
}

export default GitHubGraph