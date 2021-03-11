import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (term) {
                axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                })
                .then(response => {
                    setResults([...response.data.query.search])
                });
            }
        }, 1000);

        return () => {
            // cleanup
            clearTimeout(timeoutId);
        }
    }, [term]);

    const renderedResults = results.map(el => {
        return (
            <div className="item" key={el.pageid}>
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?cuird=${el.pageid}`}
                    > Go </a>
                </div>
                <div className="content">
                    <div className="header">
                        {el.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: el.snippet}}></span>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input 
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    className="input" 
                    type="text"
                    />
                </div>
                <div className="ui celled list">{renderedResults}</div>
            </div>
        </div>
    )
}

export default Search;