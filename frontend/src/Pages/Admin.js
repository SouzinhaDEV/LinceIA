import React from "react";
import '../CSS/Admin.css';
import { Container, Row, Col } from 'react-bootstrap';
import TabelaCadastro from '../Components/TabelaCadastro';
import TabelaContato from '../Components/TabelaContato';



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
                </Row>
            </Container>
        </div>
    );
};

export default Admin;