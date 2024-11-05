import React from "react";
import '../CSS/Admin.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomSidebar from "../Components/CustomSidebar"
import TabelaCadastro from '../Components/TabelaCadastro';
import TabelaCotato from '../Components/TabelaContato';
import TabelaDataset from "../Components/TabelaDataset";



const Admin = () => {
    return (
        <div className="fundoadmin">
            <Container>
                <Row>
                    <Col>
                        <CustomSidebar />
                    </Col>
                    <Col>
                        <TabelaCadastro />
                    </Col>
                    <Col>
                        <TabelaCotato />
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