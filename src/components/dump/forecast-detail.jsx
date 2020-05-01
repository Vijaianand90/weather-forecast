import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class ForecastDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageStyle = {
      width: "64px",
      height: "64px",
    };

    const fontStyle = {
      fontFamily: "fantasy",
      marginLeft: "25px",
      marginTop: "10px",
      color: "#B2B0B0",
    };

    const fontDayStyle = {
      fontFamily: "fantasy",
      marginLeft: "35px",
      marginTop: "100px",
      marginBottom: "10px",
      color: "#B2B0B0",
    };

    const tempLine = (
      <div>
        <span>{this.props.forecast.highTemp}</span>
        <span>{this.props.forecast.lowTemp}</span>
      </div>
    );

    return (
      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col style={fontDayStyle}>{this.props.forecast.day}</Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <img
                src={
                  "/images/forecast/" +
                  this.props.forecast.forecastType +
                  ".png"
                }
                alt={this.props.forecast.forecastType}
                style={imageStyle}
              />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col style={fontStyle}>{tempLine}</Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ForecastDetails;
