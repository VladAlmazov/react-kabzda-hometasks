import React, {useReducer} from 'react';
import {reducer} from './reducer';

type AccordionPropsType = {
    title: string
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {dispatch({type: 'TOGGLE-COLLAPSED'})}}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}