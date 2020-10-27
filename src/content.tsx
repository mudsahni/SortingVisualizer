import * as React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import zenburn from 'react-syntax-highlighter/dist/esm/styles/hljs/zenburn';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import py from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import scala from 'react-syntax-highlighter/dist/esm/languages/hljs/scala';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';

import {
    typescript as mergeSortCodeTypescript,
    python as mergeSortCodePython,
    scala as mergeSortCodeScala,
    java as mergeSortCodeJava
} from './content/code/mergeSort';

import {
    python as bubbleSortCodePython,
    typescript as bubbleSortCodeTypescript,
    scala as bubbleSortCodeScala,
    java as bubbleSortCodeJava

} from './content/code/bubbleSort'

import {
    typescript as insertionSortCodeTypeScript,
    python as insertionSortCodePython,
    scala as insertionSortCodeScala,
    java as insertionSortCodeJava
} from './content/code/insertionSort'

SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('python', py);
SyntaxHighlighter.registerLanguage('scala', scala);
SyntaxHighlighter.registerLanguage('java', java);

const Content = {
    Merge: {
        title: "Merge",
        text: `Merge sort is a divide and conquer algorithm. The idea is to divide the array into smaller and smaller chunks and then regroup
        them from the smallest elements onwards (i.e. from a single element). This process can be imagined as two functions: divide (recursively partition the array into halves) 
        and conquer (combine the halves).<break>
        
        The divide part will take O(log n) time for each as we will be dividing the array into halves, thereby only touching n/2 `,
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
            },
            {
                menuItem: "Java",
                render: () => <SyntaxHighlighter language="scala" style={zenburn} >{
                    mergeSortCodeJava
                }</SyntaxHighlighter>
            }
        ]
    },
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
                render: () => <SyntaxHighlighter language="typescript" style={zenburn} >{
                    bubbleSortCodeTypescript
                }</SyntaxHighlighter>
            },
            {
                menuItem: "Python",
                render: () => <SyntaxHighlighter language="python" style={zenburn} >{
                    bubbleSortCodePython
                }</SyntaxHighlighter>
            },
            {
                menuItem: "Scala",
                render: () => <SyntaxHighlighter language="scala" style={zenburn} >{
                    bubbleSortCodeScala
                }</SyntaxHighlighter>
            },
            {
                menuItem: "Java",
                render: () => <SyntaxHighlighter language="java" style={zenburn} >{
                    bubbleSortCodeJava
                }</SyntaxHighlighter>
            }
        ]
    },

    Insertion: {
        title: "Insertion",
        text: "",
        code: [
            {
                menuItem: "TypeScript",
                render: () => <SyntaxHighlighter language="typescript" style={zenburn} >{
                    insertionSortCodeTypeScript
                }</SyntaxHighlighter>
            },
            {
                menuItem: "Python",
                render: () => <SyntaxHighlighter language="python" style={zenburn} >{
                    insertionSortCodePython
                }</SyntaxHighlighter>
            },
            {
                menuItem: "Scala",
                render: () => <SyntaxHighlighter language="scala" style={zenburn} >{
                    insertionSortCodeScala
                }</SyntaxHighlighter>
            },
            {
                menuItem: "Java",
                render: () => <SyntaxHighlighter language="java" style={zenburn} >{
                    insertionSortCodeJava
                }</SyntaxHighlighter>
            }


        ]
    }

}
export default Content