import React from 'react'
import './style.css'
interface ProgressBarProps {
    width: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => {

    const style = () => {
        let styleObject: { [key: string]: string } = { width: `${width}%` }
        return styleObject
    }



    return (

        <div className="progress-bar-container">
            <div className="progress-bar" style={style()}>

            </div>
        </div>
    );
}

export default ProgressBar