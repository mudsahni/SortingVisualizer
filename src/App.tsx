import * as React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid, Image, Placeholder, Segment } from 'semantic-ui-react'
import Backdrop from './components/atoms/Backdrop';
import { Bar } from './components/atoms/Bar';
import './App.css'
import { getRandomArray } from './util/helper';
import DynamicChart from './components/organisms/DynamicChart';

interface AppProps {

}

export const App: React.FC<AppProps> = ({ }) => {


    return (

        <Grid stackable centered columns={12}>
            <Grid.Row centered columns={1}>
                <Grid.Column>

                    <DynamicChart />
                    {/* <Segment placeholder>

                        </Segment> */}
                </Grid.Column>

            </Grid.Row>
            <Grid.Row centered columns={12}>

            </Grid.Row>

        </Grid>

    );
}