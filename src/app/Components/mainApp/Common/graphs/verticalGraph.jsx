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
    uv: "",
    pv: "",
    amt: "",
    id: 1,
  },
  {
    name: "",
    uv: "",
    pv: "",
    amt: "",
    id: 2,
  },
  {
    name: "",
    uv: "",
    pv: "",
    amt: "",
    id: 3,
  },
  {
    name: "",
    uv: "",
    pv: "",
    amt: "",
    id: 4,
  },
  {
    name: "",
    uv: "",
    pv: "",
    amt: "",
    id: 5,
  },
  {
    name: "",
    uv: "",
    pv: "",
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

  async VerticalChart() {
    try {
      const { data } = await services.getProbToDefault();
      const info = Object.entries(data).map((e) => ({
        name: this.RewritingNames(e[0]),
        amt: e[1],
      }));
      this.setState({ dataPoints: info });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.log("oops. error.");
    }
  }

  RewritingNames = (item) => {
    switch (item) {
      case "ehp_to_Pay":
        item = "Extremely High";
        break;
      case "mp_to_Pay":
        item = "Medium";
        break;
      case "vlp_to_Pay":
        item = "Very Low";
        break;
      case "vhp_to_Pay":
        item = "Very High";
        break;
      case "hp_to_Pay":
        item = "High";
        break;
      case "lp_to_Pay":
        item = "Low";
        break;

      default:
        break;
    }
    return item;
  };

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
