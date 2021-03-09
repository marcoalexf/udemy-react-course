import React from 'react'
import './SeasonDisplay.css';
import Spinner from './Spinner';

const seasonConfig = {
    summer: {
        text: 'It\'s so hot!!!',
        iconName: 'sun',
    },
    winter: {
        text: 'So chilly!',
        iconName: 'snowflake',
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default function SeasonDisplay(props) {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} icon massive`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} icon massive`} />
        </div>
    )
}