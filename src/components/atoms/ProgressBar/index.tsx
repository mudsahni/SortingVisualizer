import React from 'react'
import './style.css'
interface ProgressBarProps {
    width: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${width}%` }}>

            </div>
        </div>
    );
}

export default ProgressBar