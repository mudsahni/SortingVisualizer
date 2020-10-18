import * as React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import zenburn from 'react-syntax-highlighter/dist/esm/styles/hljs/zenburn';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import py from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import scala from 'react-syntax-highlighter/dist/esm/languages/hljs/scala';
import {
    typescript as mergeSortCodeTypescript,
    python as mergeSortCodePython,
    scala as mergeSortCodeScala
} from './content/code/mergeSort';

SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('python', py);
SyntaxHighlighter.registerLanguage('scala', scala);

const Content = {
    Bubble: {
        title: "Bubble",
        text: `We start from the first element of the array and compare it to the next, 
    if the next element is larger, we carry the larger element forward and 
    compare it to the next element and so on and so forth. Just like a bubble, 
    the largest element of the array rises to the top of the array in the first iteration.<break>
    With the second iteration, the second largest element bubbles to the second last position in the array.
    This goes on till the array is sorted.`,
        code: [
            {
                menuItem: "TypeScript",
                render: () => <SyntaxHighlighter language="typescript" style={zenburn} >
                    {
                        mergeSortCodeTypescript
                    }
                </SyntaxHighlighter>
            },
            {
                menuItem: "Python",
                render: () => <SyntaxHighlighter language="python" style={zenburn} >{
                    mergeSortCodePython
                }</SyntaxHighlighter>
            },
            {
                menuItem: "Scala",
                render: () => <SyntaxHighlighter language="scala" style={zenburn} >{
                    mergeSortCodeScala
                }</SyntaxHighlighter>
            }
        ]
    }
}
export default Content