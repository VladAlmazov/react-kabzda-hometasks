import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

const GetCategoryObj = (categoryName: 'Color' | 'Main' | 'Events') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Events')
        },
        onClick: {
            ...GetCategoryObj('Events')
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        title: {...GetCategoryObj('Main')},
    }
};

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callBacksProps = {
    onChange: callback,
    onClick: onClickCallback
}


export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callBacksProps,
    title: 'Menu',
    collapsed: true,
    items: [],
    onClick: onClickCallback
}
export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callBacksProps,
    title: 'Users',
    collapsed: false,
    items: [
        {title: 'Vlad', value: 1},
        {title: 'Denis', value: 2},
        {title: 'Andrei', value: 3},
        {title: 'Anya', value: 4}
    ],
    onClick: onClickCallback
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)} onClick ={(value) => {
        alert(`user with ID ${value} should be happy`)}}/>
}
ModeChanging.args = {
    title: 'Users',
    items: [
        {title: 'Vlad', value: 1},
        {title: 'Denis', value: 2},
        {title: 'Andrei', value: 3},
        {title: 'Anya', value: 4}
    ],
}