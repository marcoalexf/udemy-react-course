import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Header from './components/Header'
import Route from './components/Route'
import Search from './components/Search'
import Translate from './components/Translate'

const items = [
    {
        title: 'What is React?',
        content: 'React is FE peng thing fam'
    },
    {
        title: 'Why React?',
        content: 'Cuz React got mad dubs man'
    },
    {
        title: 'I give you one better: When is React?',
        content: 'Circa 2009'
    },
]

const options = [
    {
        label: 'red',
        value: 'red',
    },
    {
        label: 'green',
        value: 'green',
    },
    {
        label: 'blue',
        value: 'blue',
    },
];

const menuLinks = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'List',
        link: '/list'
    },
    {
        label: 'Dropdown',
        link: '/dropdown'
    },
    {
        label: 'Translate',
        link: '/translate'
    },
]

export default function App() {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header menuLinks={menuLinks}/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>

            <Route path="/list">
                <Search />
            </Route>

            <Route path="/dropdown">
                <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={(e) => setSelected(e)}
                />
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}
