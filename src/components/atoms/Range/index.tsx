import * as React from 'react'
import { Button } from 'semantic-ui-react'
import './style.css'

interface RangeProps {
    range: number;
    size: any;
    hide: boolean;
}

const Range: React.FC<RangeProps> = ({ range, size, hide }) => {
    const getRange = (n: number) => [...Array(n).keys()]
    let sizeRange = getRange(range)
    const rangeStyle = {
        visibility: hide ? "hidden" : "visible",
    } as React.CSSProperties

    return (
        <div className="chart-range" style={rangeStyle}>
            {
                sizeRange.map((num: number) => {

                    return (
                        <Button key={num} size="small" className="range-button" onClick={size}>{num * 10 + 10}</Button>
                    )
                })
            }
        </div>
    );
}

export default Range