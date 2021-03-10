import React from 'react'
import Accordion from './components/Accordion'

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

export default function App() {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
}
