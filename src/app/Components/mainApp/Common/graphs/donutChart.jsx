import React, { Component } from "react";
import { PieChart, Pie, Cell, LabelList, Label, Legend } from "recharts";
import services from "../../../../Services/apiService";

const data = [
    { name: "", value: "" },
    { name: "", value: "" },
    { name: "", value: "" },
    { name: "", value: "" },
    { name: "", value: "" },
  ];

const COLORS = ["#12EB83", "#523AE3", "#EB5454", "#FACD77", "#FFD541"];

const RADIAN = Math.PI / 180;

// to add percentages

// const renderCustomizedLabel = ({
//     cx, cy, midAngle, innerRadius, outerRadius, index, percent
// }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//         <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//             {`${(percent * 100).toFixed(0)}%`}
//         </text>
//     );
// };

class DisplayDonutChart extends Component {
  state = {
    dataPoints: [],
    sum: [],
  };

  async componentDidMount() {
    await this.getFlagTypes();
  }  

  async getFlagTypes() {
    try {
      const { data } = await services.getPaymentFlagType();
      const info = Object.entries(data).map((e) => ({
        ["name"]: e[0],
        ["amt"]: e[1],
      }));
      this.setState({ dataPoints: info });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.log("oops. error.");
    }
  }

  render() {
    return (
      <div className="graph">
        <h3 className="graph-title">Payment Flag Type</h3>
        <div>
            <PieChart width={363} height={279}>
              <Pie
              data={this.state.dataPoints}
              cx={177}
              cy={177}
              label
              labelLine={false}
            //label={renderCustomizedLabel}
              outerRadius={80}
              innerRadius={60}
              dataKey="amt"
              nameKey="name"
            >
              
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
                <Label width={30} position="center">Total LANs</Label>
            </Pie>
            {/* <Legend /> */}
          </PieChart>
        </div>
      </div>
    );
  }

}

export default DisplayDonutChart;
