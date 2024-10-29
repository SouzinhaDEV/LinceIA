import React from "react";
import '../CSS/Admin.css';
import { Container, Row, Col} from 'react-bootstrap';
import TabelaLogin from '../Components/TabelaLogin';
import TabelaCadastro from '../Components/TabelaCadastro';
import TabelaCotato from '../Components/TabelaContato';


const Admin = () => {
    return (
        <div className="fundoadmin">

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