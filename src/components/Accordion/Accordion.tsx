import React from 'react';

export type ItemType = {
    title: string
    value: number | string
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when accordion is opened
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * Optional color of header text
     */
    color: string
}
type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange} color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={() => props.onChange()}>
            {props.title}
        </h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
            {/*{props.items.map((i, index) => <li onClick={() => props.onClick(i.title)}/>)}*/}
        </ul>
    )
}