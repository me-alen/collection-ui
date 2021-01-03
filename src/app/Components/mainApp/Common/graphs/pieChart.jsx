import React, { Component } from 'react';
import {
    PieChart, Pie, Cell, LabelList
} from 'recharts';
import "./pieChart.css";

const data = [
    { name: 'Group A', value: 300 },
    { name: 'Group B', value: 400 },
    { name: 'Group C', value: 200 },
    { name: 'Group D', value: 300 },
];

const COLORS = ['#46C27C', '#F5054F', '#FFBB28', '#4B0082' ];

const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//     cx, cy, midAngle, innerRadius, outerRadius, index,
// }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//             {`${(percent * 100).toFixed(0)}%`}
//         </text>
//     );
// };

class DisplayPieChart extends Component {
    state = {}
    render() {
        return (
            <div className="pie-chart">
                <h3 className='pie-chart-title ml-5 heading'>Probability to Default</h3>
                <div className=' pichart'>

                    <PieChart className="pie-chart-graph" width={363} height={279}>
                        <Pie
                            data={data}
                            cx={177}
                            cy={177}
                            labelLine={false}
                            // label={renderCustomizedLabel}
                            outerRadius={80}
                            // innerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                    </PieChart>
                </div>
            </div>
        );
    }
}

export default DisplayPieChart;

