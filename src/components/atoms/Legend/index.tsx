import React from 'react'
import { Icon } from 'semantic-ui-react'
import './style.css'

interface LegendProps {
    color?: "red" | "orange" | "yellow" | "olive" |
    "green" | "teal" | "blue" |
    "violet" | "purple" | "pink" |
    "brown" | "grey" | "black" | "white";
}

export const Legend: React.FC<LegendProps> = ({ color = "white", children }) => {
    return (

        <div className="legend-icon-container">
            {   color === 'white' ? <Icon name="square" className="legend-icon"></Icon> :
                <Icon name="square" color={color} className="legend-icon"></Icon>
            }
            {children}
        </div>
    );
}