import React, { Component } from 'react';
import {
    PieChart, Pie, Cell, LabelList
} from 'recharts';
import "./pieChart.css";
import services from "../../../../Services/apiService";

const data = [
    { name: 'Group A', value: 300 },
    { name: 'Group B', value: 400 },
    { name: 'Group C', value: 200 },
    { name: 'Group D', value: 300 },
];

const COLORS = ['#46C27C', '#F5054F', '#FFBB28', '#4B0082', '#739EF5', '#D651CB'];

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
    state = {
        dataPoints: [],
    }

    componentDidMount() {
        this.PieChart();
    }
    
      PieChart() {
        services
          .getCaseAction()
          .then((response) => {
            const info = Object.entries(response).map((e) => ({
              ["name"]: e[0],
              ["amt"]: e[1],
            }));
            this.setState({ dataPoints: info });
            console.log("checking pie", this.state.dataPoints);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    render() {
        return (
            <div className="pie-chart graph">
                <h3 className='graph-title'>Case Action</h3>
                <div className='pichart'>

                    <PieChart className="pie-chart-graph" width={363} height={279}>
                        <Pie
                            data={this.state.dataPoints}
                            cx={177}
                            cy={177}
                            labelLine={false}
                            // label={renderCustomizedLabel}
                            outerRadius={80}
                            // innerRadius={60}
                            fill="#8884d8"
                            dataKey="amt"
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

