<<<<<<< HEAD
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import '../CSS/SideBar.css'

const Admin = () => {
  return (
    <Sidebar className='sidebar'>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
        <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
        <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  );
=======
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
>>>>>>> 5ddf4c6d82e5b2e3efae1c97c9e9b17e04adc38d
};

export default Admin;