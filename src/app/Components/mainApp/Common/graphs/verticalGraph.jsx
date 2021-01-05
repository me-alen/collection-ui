import React, { Component } from "react";
import {
  ComposedChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  LabelList,
} from "recharts";
import "./verticalGraph.css";
import services from "../../../../Services/apiService";

const data = [
  {
    name: "Extremely High",
    uv: 261,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Very High",
    uv: 59,
    pv: 967,
    amt: 1506,
  },
  {
    name: "High",
    uv: 107,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Medium",
    uv: 303,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Low",
    uv: 2721,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Very Low",
    uv: 4691,
    pv: 680,
    amt: 1700,
  },
];

const COLORS = [
  "#E92B2B",
  "#FC986D",
  "#FACD77",
  "#EAF37F",
  "#41D959",
  "#23B666",
];

class DisplayVerticalGraph extends Component {
  state = {
    dataPoints: [],
  };

  componentDidMount() {
    this.Chart();
  }

  Chart() {
    services
      .getProbToDefault()
      .then((response) => {
        const info = Object.entries(response.data).map((e) => ({
          ["name"]: e[0],
          ["amt"]: e[1],
        }));
        console.log("info", info);
        this.setState({ dataPoints: info });
        console.log("checking", this.state.dataPoints);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="vertical-graph graph">
        <h3 className="graph-title">Probability to Default</h3>
        {/* <ComposedChart
                    layout="vertical"
                    width={287}
                    height={279}
                    data={data}
                >
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" style={{
                        fontSize: '3px',
                        fontFamily: 'SFProText',
                        color: '#322b5e'
                    }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" barSize={17}>
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                        <LabelList dataKey="uv" position="right" />
                    </Bar>
                </ComposedChart> */}

        <BarChart
          layout="vertical"
          width={287}
          height={300}
          data={this.state.dataPoints}
          margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis
            dataKey="name"
            type="category"
            style={{
              fontSize: "11px",
              // fontFamily: 'SFProText',
              color: "#322b5e",
            }}
          />
          <Bar dataKey="amt" barSize={17}>
            <LabelList dataKey="amt" position="right" />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    );
  }
}

export default DisplayVerticalGraph;
