import React from "react";
import { Container } from "react-bootstrap/lib/Tab";
import LineChart from "../Components/CustomChart";
import "../CSS/Grafico.css"

const GraficoLogin = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <LineChart />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default GraficoLogin;