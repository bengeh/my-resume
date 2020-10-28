import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { getGitHubData } from '../effects/GitHubEffects';
import { AppState } from '../store';
import { Doughnut } from 'react-chartjs-2';


const GitHubGraph = () => {
    const dispatch = useDispatch();
    let languageDataSet: Array<String> = []
    let languageDataNumber: any = []
    let chartData: any = []
    const [chartHaveData, setChartHaveData] = useState(false)
    const gitHubData = useSelector((state: AppState) => state.gitHubData);
    console.log("this the github data...")
    console.log(gitHubData)
    useEffect(() => {
        dispatch(getGitHubData());
        setChartHaveData(true)
    }, [dispatch]);
    for (let k in gitHubData.gitHubData){
        languageDataSet.push(k)
        languageDataNumber.push(gitHubData.gitHubData[k])
    }
    console.log("setting chart data...")
    console.log(languageDataNumber)
    chartData = {
        labels: languageDataSet,
        datasets: [{
            data: languageDataNumber,
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#CCFFCC',
                '#FF3399',
                '#0080FF',
                '#FF6666'
            ]
        }]
    }
    console.log("this the chart data...")
    console.log(chartData)
    return(
        <ChartWrapper>
            {
                chartHaveData ? <Doughnut data={chartData} options={{
                title:{
                display:true,
                text:'Git Hub Info',
                fontSize:20
                },
                legend:{
                    display:true,
                    position:'top'
                  }
            }}/> : <>SPINNER</>
        }
        </ChartWrapper>
    )
}

const ChartWrapper = styled.div`
    height: 250px;
`;

export default GitHubGraph