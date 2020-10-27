import * as React from 'react'
import './style.css'

interface CellProps {
    value: 1 | 0;
}

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // extends React's HTMLAttributes
        squiggle?: 1 | 0;
    }
}

export const Cell: React.FC<CellProps> = ({ value }) => {
    const [cellValue, setCellValue] = React.useState<1 | 0>(value)
    const [squiggle, setSquiggle] = React.useState<1 | 0>(0)

    const toggleCellValue = () => {
        cellValue === 1 ? setCellValue(0) : setCellValue(1)
        setSquiggle(1)
        console.log("hello")
    }

    return (
        <div className={`cell ${cellValue === 1 ? 'fill' : ''}`} onClick={toggleCellValue} onAnimationEnd={() => setSquiggle(0)} squiggle={squiggle}>

        </div>
    );
}