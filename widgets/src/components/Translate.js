import React, {useState} from 'react'
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'Portuguese',
        value: 'pt'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'French',
        value: 'fr'
    },
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
            options={options}
            selected={language}
            onSelectedChange={(lang) => setLanguage(lang)}
            />
            <Convert selectedLang={language} text={text}/>
        </div>
    )
}

export default Translate;