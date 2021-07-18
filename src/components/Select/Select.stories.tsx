import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Select, SelectPropsType} from './Select';

export default {
    title: 'components/Select',
    component: Select,
};

const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

export const WithValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState('2')

    return <>
        <Select {...args} value={value} onChange={setValue}/>
    </>
}
WithValue.args = {
    value: '2',
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kyiv'},
    ]
}

export const WithOutValue: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState(null)
    return <>
        <Select {...args} value={value} onChange={setValue}/>
    </>
}
WithOutValue.args = {
    items: [
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kyiv'},
    ]
}