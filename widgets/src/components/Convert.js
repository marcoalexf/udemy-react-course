import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Convert = ({selectedLang, text}) => {

    const [translation, setTranslation] = useState('');
    const [debouncedText, setDebuncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebuncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2', {},
        {
            params: {
                q: debouncedText,
                target: selectedLang.value,
                key: process.env.REACT_APP_GOOGLE_API_KEY
            }
        })
        .then(response => {
            const result = response.data?.data?.translations[0] ? response.data?.data?.translations[0]?.translatedText : ''
            setTranslation(result);
        })
        return () => {
        }
    }, [selectedLang, debouncedText])

    return (
        <div>
            {translation}
        </div>
    )
}

export default Convert;