import React from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';


export default {
    title: 'components/UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action('on or off clicked');

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>Unsync when chge defaultValue when already rendered</div>  // позже рассмотрим
export const DefaultInputValue = () => <input defaultValue={'yo'} />
