import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeetCodeData } from '../effects/LeetCodeEffects';
import { LeetCode } from '../interfaces/LeetCode'
import { AppState } from '../store';
import { Doughnut } from 'react-chartjs-2';


const LeetCodeGraph = () => {
    const dispatch = useDispatch();
    let qnsDataSet: Array<Number> = []
    let qnsDataColor: Array<String> = []
    let chartData: any
    useEffect(() => {
        dispatch(getLeetCodeData());
    }, [dispatch]);
    console.log("this is the dispatch")
    console.log(dispatch)

    const leetCodeData = useSelector((state: AppState) => {
        console.log("hello....")
        console.log(state.leetCodeData.leetCodeData.easyQns)
        qnsDataColor = ['easy', 'medium', 'hard']
        qnsDataSet = [state.leetCodeData.leetCodeData.easyQns, state.leetCodeData.leetCodeData.medQns, state.leetCodeData.leetCodeData.hardQns]
        chartData = {
            labels: qnsDataColor,
            datasets: [{
                label: 'Question Difficulty',
                data: qnsDataSet,
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00'
                  ],
                  hoverBackgroundColor: [
                  '#501800',
                  '#4B5000',
                  '#175000'
                  ],
            }]
        }
    });
    
    return(
        <div>
            <Doughnut data={chartData} options={{
                title:{
                    display:true,
                    text:'Leet Code questions done',
                    fontSize:20
                }
            }}/>
        </div>
    )
}

export default LeetCodeGraph