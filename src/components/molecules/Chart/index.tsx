import * as React from 'react'
import BarType from '../../../typings/Bar';

import { Bar } from '../../atoms/Bar';
import { BAR_CONSTANTS } from './constants'
import './style.css';

interface ChartProps {
    array: number[];
    highlightIndex: number;
    comparisonIndex: number;
    groupIndices?: { max: number, min: number };
    onGoing: boolean;
    onPause: boolean;
}

const Chart: React.FC<ChartProps> = ({ array, highlightIndex, comparisonIndex, onGoing, onPause, groupIndices }) => {
    const n: number = array.length

    const getBarColor = (ix: number, hIndex: number, comparisonIndex: number,
        groupIndices: { max: number, min: number } | undefined) => {
        if (ix === hIndex && (onGoing || onPause)) return 'primary-highlight'
        // else if (ix === hIndex - 2) return 'secondary-highlight'
        else if (ix === comparisonIndex && (onGoing || onPause)) return 'secondary-highlight'
        else if (groupIndices && (ix >= groupIndices.min && ix <= groupIndices.max)
            && (onGoing || onPause)) return 'group-highlight'
        else return 'default'
    }

    const getBarDimensions = (array: number[]) => {
        return array.map((value: number, ix: number) => {
            return {
                value: value,
                height: BAR_CONSTANTS.barHeightBase * value
            }
        })
    }

    const generateBars = (bars: BarType.BarInput[]) => {
        return (
            bars.map((bar: BarType.BarInput, ix: number) =>
                <Bar value={bar.value} key={ix} height={bar.height}
                    margin={BAR_CONSTANTS.barMarginRightBase / n}
                    width={BAR_CONSTANTS.barWidthBase / n} color={
                        getBarColor(
                            ix, highlightIndex,
                            comparisonIndex, groupIndices
                        )
                    } />)
        )
    }

    return (
        <div className="chart-area">
            {generateBars(getBarDimensions(array))}
            {/* <div className="sorted">
                SORTED
            </div> */}
        </div>
    );
}

export default Chart