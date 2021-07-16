import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    // console.log(props.dataPoints);
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    console.log(dataPointValues);
    const totaMaximum = Math.max(...dataPointValues);
    // math.max(0,0,34235,0,0,0)
    // Math.max(1,3,6,8)
    console.log(totaMaximum);

    return (
    <div className="chart">
        {props.dataPoints.map(dataPoint =>(
        <ChartBar 
            key = {dataPoint.label}
            value={dataPoint.value}
            maxValue={totaMaximum}
            label={dataPoint.label}
        />
    ))}
    </div>
    )
};

export default Chart;