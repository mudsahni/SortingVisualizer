import * as React from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'
import './style.css'

interface PlaybarProps {
    isSorted: boolean;
    onGoing: boolean;
    onPause: boolean;
    getOriginalState: () => any;
    decreaseSpeed: () => any;
    generateNewArray: () => any;
    sortArray: () => any;
    increaseSpeed: () => any;
    getSortedState: () => any;
    pauseSorting: () => any;

}

const Playbar: React.FC<PlaybarProps> = ({
    isSorted, onPause, onGoing, getOriginalState,
    decreaseSpeed, increaseSpeed, sortArray,
    generateNewArray, getSortedState, pauseSorting }) => {
    return (

        <div className="button-area">
            <Popup
                trigger={<Button type="reset" size="small" onClick={generateNewArray} className="other-button"  ><Icon name='random' /></Button>}
                content="Generate a new array."
                basic
            />
            <Popup
                trigger={<Button type="submit" size="small" onClick={getOriginalState} className="other-button" ><Icon name='fast backward' /></Button>}
                content="Go back to the unsorted state."
                basic
            />
            <Popup
                trigger={<Button type="submit" size="small" onClick={decreaseSpeed} className="other-button" disabled={isSorted}>x/2</Button>}
                content="Decrease sorting speed."
                basic
            />
            {!onGoing ? <Popup
                trigger={<Button type="submit" size="massive" onClick={sortArray} className="play-button sort-button" disabled={isSorted || onGoing}><Icon name='play' /></Button>}
                content="Run sorting."
                basic
            /> : <Popup
                    trigger={<Button type="submit" size="massive" onClick={() => pauseSorting()} className="play-button pause-button"  ><Icon name='pause' /></Button>}
                    content="Pause sorting."
                    basic
                />}
            <Popup
                trigger={<Button type="submit" size="small" onClick={increaseSpeed} className="other-button" disabled={isSorted}>2x</Button>}
                content="Increase sorting speed."
                basic
            />
            <Popup
                trigger={<Button type="submit" size="small" onClick={getSortedState} className="other-button" disabled={isSorted}><Icon name='fast forward' /></Button>}
                content="Finish sorting."
                basic
            />

            <Popup
                trigger={<Button type="submit" size="small" onClick={getSortedState} className="other-button" disabled={isSorted}><Icon name='angle double up' /></Button>}
                content="Increase array size."
                basic
            />

            <Popup
                trigger={<Button type="submit" size="small" onClick={getSortedState} className="other-button" disabled={isSorted}><Icon name='angle double down' /></Button>}
                content="Decrease array size."
                basic
            />

        </div>

    );
}

export default Playbar

//     < Dropdown
// text = "Algorithms"
// icon = "filter"
// className = 'icon'
// floating
// labeled
// button

// style = {{ marginTop: '1rem', background: '#21ba45', color: '#fff', alignSelf: "flex-start" }}
//                 >
//     <Dropdown.Menu>
//         {/* <Dropdown.Header icon="chevron"></Dropdown.Header> */}
//         <Dropdown.Item>Bubble Sort</Dropdown.Item>

//     </Dropdown.Menu>
//                 </Dropdown >
