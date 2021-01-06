import React, { Component } from "react";
import { PieChart, Pie, Cell, LabelList, Legend, Tooltip } from "recharts";
import services from "../../../../Services/apiService";

const data = [
      { name: "", value: "" },
      { name: "", value: "" },
      { name: "", value: "" },
      { name: "", value: "" },
    ];

const COLORS = [
  "#46C27C",
  "#F5054F",
  "#FFBB28",
  "#4B0082",
  "#739EF5",
  "#D651CB",
];

const RADIAN = Math.PI / 180;

//to add percentages

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

class DisplayPieChart extends Component {
  state = {
    dataPoints: [],
  };

  async componentDidMount() {
    await this.PieChart();
  }  

  async PieChart() {
    try {
      const { data } = await services.getCaseAction();
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
    // const legStyle = {
    //   color: "#636372",
    //   fontSize: "10px",
    //   fontFamily: 'Roboto',
    // }
    return (
      <div className="graph">
        <h3 className="graph-title">Case Action</h3>
        <div>
          <PieChart width={363} height={279}>
          {/* <PieChart width={363} height={270}> */}
            <Pie
              data={this.state.dataPoints}
              // cx={130}
              // cy={100}
              cx={177}
              cy={177}
              label
              labelLine={false}
            //label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="amt"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* <Legend wrapperStyle={legStyle} height={80} /> */}
            {/* <Legend /> */}
          </PieChart>
        </div>
      </div>
    );
  }
}

export default DisplayPieChart;
