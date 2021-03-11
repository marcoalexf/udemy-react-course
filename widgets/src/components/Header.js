import React from 'react'
import Link from './Link'

const Header = ({menuLinks}) => {
    const renderedMenuLinks = menuLinks.map(el => {
        return (
            <Link className="item" href={el.link}>{el.label}</Link>
        )
    })
    return (
        <div className="ui seconday pointing menu">
            {renderedMenuLinks}
        </div>
    )
}

export default Header;