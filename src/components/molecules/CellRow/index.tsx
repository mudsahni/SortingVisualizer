import React from 'react'
import './style.css'

interface CellRowProps {

}

export const CellRow: React.FC<CellRowProps> = ({ children }) => {
    return (
        <div className="cell-row">
            {children}
        </div>
    );
}