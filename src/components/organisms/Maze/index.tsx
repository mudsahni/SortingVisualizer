import React from 'react'
import { Container } from 'semantic-ui-react';
import { Cell } from '../../atoms/Cell';
import { CellGrid } from '../../molecules/CellGrid';
import { CellRow } from '../../molecules/CellRow';

import './style.css'

interface MazeProps {
    rows: number;
    columns: number;
}

const Maze: React.FC<MazeProps> = ({ rows, columns }) => {
    const cellColumns = [...Array(columns).keys()]
    const cellRows = [...Array(rows).keys()]
    const getRow = (row: number) => {
        return (
            <CellRow key={row}>
                {cellColumns.map((cell: number) => {
                    return <Cell key={cell} value={0}></Cell>
                })}
            </CellRow>
        )
    }

    return (
        <Container fluid className="content-container">

            <div className="header">
                <div className="header-title">
                    <span>PATHFINDING</span>
                </div>
            </div>
            <CellGrid>

                {
                    cellRows.map(
                        (row) => { return getRow(row) }
                    )
                }

            </CellGrid>
        </Container>
    );
}

export default Maze