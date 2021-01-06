import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import "./barGraph.css";

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const graphWidth = 1000 / 2;



class DisplayBarGraph extends Component {
    state = {}
    graphWidth = () => {
        return 500;
    }
    render() {
        return (
            <div className="bar-chart graph">
                <h3 className='graph-title'>Case Action</h3>
                <div className="mb-5">
                <BarChart
                    className="bar-chart-graph"
                    width={graphWidth}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Bar>
                </BarChart>
                </div>
            </div>
        );
    }
}

export default DisplayBarGraph;