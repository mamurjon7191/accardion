import React from "react";

const data = [
  {
    savol: "React zormi",
    javob: "React kaneshna",
  },
  {
    savol: "Html zormi",
    javob: "Html yaxshi",
  },
  {
    savol: "Css zormi",
    javob: "Css udar",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
    };
  }
  getIndex = (key) => {
    this.setState({
      index: key,
    });
  };
  renderData = () => {
    return data.map((val, key) => {
      const active = this.state.index === key ? "active" : "";
      // let active = "";
      // if (this.state.index === key) {
      //   active = "active";
      // } else active = "";
      // if (this.state.index === key && active == "active") {
      //   active = "";
      // }
      return (
        <div>
          <div className="ui styled accordion">
            <div
              className="title active"
              onClick={() => {
                this.getIndex(key);
              }}
            >
              <i className="dropdown icon"></i>
              {val.savol}
            </div>
            <div className={"content " + active}>
              <p
                className="transition visible"
                style={{ display: "block !important" }}
              >
                {val.javob}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderData()}</div>;
  }
}

export default App;
