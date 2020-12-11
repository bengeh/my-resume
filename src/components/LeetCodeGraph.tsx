import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeetCodeData } from '../effects/LeetCodeEffects';
import { AppState } from '../store';
import { Doughnut } from 'react-chartjs-2';


const LeetCodeGraph = () => {
    const dispatch = useDispatch();
    let qnsDataSet: Array<Number> = []
    let qnsDataColor: Array<String> = []
    
    let chartData: any = []
    const leetCodeData = useSelector((state: AppState) => state.leetCodeData);

    useEffect(() => {
        dispatch(getLeetCodeData());
    }, [dispatch]);
    qnsDataColor = ['easy', 'medium', 'hard']
    qnsDataSet = [leetCodeData.leetCodeData.easyQns, leetCodeData.leetCodeData.medQns, leetCodeData.leetCodeData.hardQns]
    chartData = {
        labels: qnsDataColor,
        datasets: [{
            label: 'Question Difficulty',
            data: qnsDataSet,
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00'
                ]
        }]
    }
    
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