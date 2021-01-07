import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
  LabelList,
} from "recharts";
import services from "../../../../Services/apiService";

const data = [
  {
    name: "",
    value: "",
    amt: "",
    id: 1,
  },
  {
    name: "",
    value: "",
    amt: "",
    id: 2,
  },
  {
    name: "",
    value: "",
    amt: "",
    id: 3,
  },
  {
    name: "",
    value: "",
    amt: "",
    id: 4,
  },
  {
    name: "",
    value: "",
    amt: "",
    id: 5,
  },
  {
    name: "",
    value: "",
    amt: "",
    id: 6,
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

  async componentDidMount() {
    await this.VerticalChart();
  }

  // async VerticalChart() {
  //   try {
  //     const { data } = await services.getProbToDefault();
  //     const info = Object.entries(data).map((e) => ({
  //       name: this.RewritingNames(e[0]),
  //       amt: e[1],
  //     }));
  //     this.setState({ dataPoints: info });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       console.log("oops. error.");
  //   }
  // }

  async VerticalChart() {
    try {
      const { data } = await services.getProbToDefault();
      this.setState({ dataPoints: data.data });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.log("oops. error.");
    }
  }

  render() {
    return (
      <div className="graph">
        <h3 className="graph-title">Probability to Default</h3>

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
              fontFamily: "Roboto",
              color: "#322B5E",
            }}
          />
          {/* <Legend />
          <Tooltip /> */}
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
