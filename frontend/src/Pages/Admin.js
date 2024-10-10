<<<<<<< HEAD
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import '../CSS/SideBar.css'

const CustomSidebar = () => {
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
>>>>>>> fa5061af028eb53e71cf503e18bddde72b1d9274
};

export default Admin;