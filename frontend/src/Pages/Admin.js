import React from "react";
import '../CSS/Admin.css';
import { Container, Row, Col} from 'react-bootstrap';
import Header from "../Components/Admin/Header_Admin/Header";
import TabelaLogin from '../Components/TabelaLogin';
import TabelaCadastro from '../Components/TabelaCadastro';
import TabelaCotato from '../Components/TabelaContato';


const Admin = () => {
    return (
        <div className="fundoadmin">
            <Header />
            <Container>
                <Row>
                    <Col>
                        <TabelaLogin />
                    </Col>
                    <Col>
                        <TabelaCadastro />
                    </Col>
                    <Col>
                        <TabelaCotato />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;