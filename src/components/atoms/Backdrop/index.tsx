import React from 'react'
import { Segment } from 'semantic-ui-react';
import './style.css'

interface BackdropProps {
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
    const style = {
        justifyContent: "flex-end",
        height: "50vh"
    }
    return (
        <div>
            {children}
        </div>
    );
}

export default Backdrop