import React from 'react'
import { Container, Tab } from 'semantic-ui-react';
import './style.css'

interface DynamicCodeProps {
    code: { menuItem: string; render: () => any; }[];
}

export const DynamicCode: React.FC<DynamicCodeProps> = ({ code }) => {
    return (
        <Container fluid className="content-container">
            <Tab menu={{ secondary: true, pointing: true }} panes={code}></Tab>
        </Container>

    );
}