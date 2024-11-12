import React from "react";
import '../CSS/Admin.css';
import { Container, Row, Col } from 'react-bootstrap';
import TabelaCadastro from '../Components/TabelaCadastro';
import TabelaContato from '../Components/TabelaContato';
import TabelaDataset from "../Components/TabelaDataset";



const Admin = () => {
    return (
        <div className="fundoadmin">
            <Container>
                <Row>
                    <Col>
                        <TabelaCadastro />
                    </Col>
                    <Col>
                        <TabelaContato />
                    </Col>
                    <Col>
                        <TabelaDataset />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;