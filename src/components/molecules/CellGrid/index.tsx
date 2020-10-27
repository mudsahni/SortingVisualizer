import * as React from 'react'
import './style.css'

interface CellGridProps {

}

export const CellGrid: React.FC<CellGridProps> = ({ children }) => {
    return (

        <div className="cell-grid">
            {children}
        </div>
    )
}