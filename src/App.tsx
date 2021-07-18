import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';


// type PageTitlePropsType = {
//     title: string
// }

function App() {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    // const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <UncontrolledAccordion title={'Menu'} />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating onChange={(ratingValue) => setRatingValue(ratingValue)}/>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

// function PageTitle(props: PageTitlePropsType) {
//     console.log('PageTitle rendering')
//     return (
//         <div>{props.title}</div>
//     )
// }

export default App;
