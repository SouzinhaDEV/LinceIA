"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

const CustomSidebar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        style={{
          width: '300px',        // Define a largura da barra lateral
          minHeight: '100vh',     // Ajusta a altura para ocupar a tela toda
          position: 'fixed',      // Fixa a barra lateral à esquerda
          top: 0,
          left: 0,
          backgroundColor: '#1a202c',  // Cor de fundo escura para um estilo profissional
          color: 'white',         // Cor do texto em branco
          fontSize: '18px',       // Aumenta o tamanho da fonte
          paddingTop: '20px',     // Espaçamento superior
          paddingBottom: '20px',  // Espaçamento inferior
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)', // Sombra sutil
        }}
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div style={{ marginLeft: '320px', padding: '20px', width: '100%' }}>
        {/* Área de conteúdo ao lado do Sidebar */}
      </div>
    </div>
  );
};

export default CustomSidebar;
