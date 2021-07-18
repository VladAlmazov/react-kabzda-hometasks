import React from 'react';
import {UncontrolledAccordion} from './UncontrolledAccordion';


export default {
    title: 'components/UncontrolledAccordion',
    component: UncontrolledAccordion,
};

// const callback = action('accordion mode change event fired');

export const ModeChanging = () => {
    return <UncontrolledAccordion title={'Users'} />
}