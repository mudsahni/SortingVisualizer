import React from 'react'
import { Container } from 'semantic-ui-react';

import './style.css'
interface DynamicContentProps {
    title: string;
    text: string;
}

export const DynamicContent: React.FC<DynamicContentProps> = ({ title, text }) => {
    return (

        <>
            <Container fluid className="content-container">
                <div className="content">
                    <div className="content-title">
                        <span>{title}</span> Sort
                    </div>
                    <div className="content-content">
                        {text.split('<break>').map((p, index) => <p key={index}>{p}</p>)}
                    </div>

                </div>
            </Container>
        </>
    );
}