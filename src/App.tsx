import * as React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider, Grid, Icon, Image, Placeholder, Segment } from 'semantic-ui-react'
import Backdrop from './components/atoms/Backdrop';
import { Bar } from './components/atoms/Bar';
import './App.css'
import { getRandomArray } from './util/helper';
import DynamicChart from './components/organisms/DynamicChart';
import { DynamicContent } from './components/organisms/DyanimcContent';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import zenburn from 'react-syntax-highlighter/dist/esm/styles/hljs/zenburn';

import Content from './content'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import { DynamicCode } from './components/organisms/DynamicCode';

SyntaxHighlighter.registerLanguage('typescript', ts);

interface AppProps {


}

export const App: React.FC<AppProps> = ({ }) => {
    const [sortType, setSortType] = React.useState<string>();

    return (

        <Grid stackable centered columns={12}>
            <Grid.Row centered columns={1}>
                <Grid.Column>

                    <DynamicChart />
                    {/* <Segment placeholder>

                        </Segment> */}
                </Grid.Column>

            </Grid.Row>
            <Grid.Row columns={2} className="content-row">
                <Grid.Column className="content-column">

                    <DynamicContent title={Content.Bubble.title} text={Content.Bubble.text} />
                </Grid.Column>
                <Grid.Column>
                    <DynamicCode code={Content.Bubble.code}></DynamicCode>
                </Grid.Column>
                <div className="footer">
                    <Divider />
                    <span>Impatiently created by</span><br></br>
                    <span><Icon name="copyright outline"></Icon> <a href="www.muditsahni.com" target="_blank">Mudit Sahni</a></span>
                </div>

            </Grid.Row>

        </Grid>

    );
}