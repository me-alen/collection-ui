import React, { Component } from 'react';
import {
    PieChart, Pie, Cell, LabelList, Label} from 'recharts';
import "./donutChart.css";
import services from "../../../../Services/apiService";

// const Data = [
//     { name: 'VARIED', value: 17.89 },
//     { name: 'CYCLE_70', value: 30.04 },
//     { name: 'NORMX_70', value: 0.34 },
//     { name: 'ONLY_CYCLE', value: 51.62 },
//     { name: 'ONLY_NORMX', value: 0.10 }
// ];

const COLORS = ['#12EB83', '#523AE3', '#EB5454', '#FACD77', '#FFD541'];

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

class DisplayDonutChart extends Component {
    state = {
        dataPoints: [],
        sum: []
    }

    // componentDidMount() {
    //     this.Chart();
    // }
    
    //   Chart() {
    //     services
    //       .getPaymentFlagType()
    //       .then((response) => {
    //           console.log('OBJECT', response);
    //         const info = Object.entries(response.data).map((e) => ({
    //           ["name"]: e[0],
    //           ["amt"]: e[1],
    //         }));
    //         console.log('after changing res data donut', info);
    //         this.setState({ dataPoints: info });
    //         console.log("checking donut", this.state.dataPoints);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }



      async getFlagTypes() {
        try {
            const { data } = await services.getPaymentFlagType();
            const info = Object.entries(data).map((e) => ({
                ["name"]: e[0],
                ["amt"]: e[1],
              }));
            this.setState({ dataPoints: info });
            console.log("checking donut", this.state.dataPoints);
            } catch (ex) {
            if (ex.response && ex.response.status === 404)
            console.log('oops. error.');
            }
        }

        async componentDidMount() {
            await this.getFlagTypes();
          }



    render() {
        var Sum=0;
        return (
            <div className="donut-chart graph">
                <h3 className='graph-title'>Payment Flag Type</h3>
                <div className='mb-5 pichart'>

                    {/* <PieChart className="donut-chart-graph" width={363} height={279}>
                        <Pie
                            data={data}
                            cx={177}
                            cy={177}
                            labelLine={false}
                        
                            outerRadius={80}
                            innerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                    </PieChart> */}

                        <PieChart className="donut-chart-graph" width={363} height={279}>
                        <Pie 
                            data={this.state.dataPoints} 
                            cx={177} 
                            cy={177} 
                            label 
                            outerRadius={80} 
                            innerRadius={60} 
                            fill="#88884d8" 
                            dataKey="amt" 
                            nameKey="name"
                        >
                            {console.log('data stored in donut', this.data)}
                            {this.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                            {/* {data.map((entry, index) => 
                            {
                            Sum = this.state.sum+entry[index].amt;
                            this.setState({ sum: Sum })
                            })} */}

                            {/* {this.data.map((entry, index) => 
                            {
                                console.log('checking what comes here in donut', entry.amt);
                                Sum = Sum+entry.value;
                                console.log('sum', Sum);
                            })} */}
                            {/* <Label width={30} position="center">Total LANs</Label> */}
                            <Label width={30} position="center">center</Label>
                        </Pie>
                        </PieChart>
                </div>
            </div>
        );
    }
}

export default DisplayDonutChart;

