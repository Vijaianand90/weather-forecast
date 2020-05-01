import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ForecastDetails from "../dump/forecast-detail";

class ForecastList extends Component {
  state = {
    forecast: [
      {
        id: 1,
        day: "Mon",
        forecastType: "rainy",
        highTemp: "36°",
        lowTemp: "26°",
      },
      {
        id: 2,
        day: "Tue",
        forecastType: "cloudy",
        highTemp: "34°",
        lowTemp: "21°",
      },
      {
        id: 3,
        day: "Wed",
        forecastType: "snowy",
        highTemp: "30°",
        lowTemp: "20°",
      },
      {
        id: 4,
        day: "Thu",
        forecastType: "rainy",
        highTemp: "31°",
        lowTemp: "24°",
      },
      {
        id: 5,
        day: "Fri",
        forecastType: "sunny",
        highTemp: "38°",
        lowTemp: "26°",
      }
    ],
  };

  render() {
    const floatLeftStyle = {
      float: "left",
    };

    return (
      <div>
        <Container>
          <Row>
            <Col>
              {this.state.forecast.map((data) => (
               <div style={floatLeftStyle}> <ForecastDetails key={data.id} forecast={data} /></div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ForecastList;
