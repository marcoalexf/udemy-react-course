import React from 'react'

const Link = ({className, href, children}) => {
    const onClick = e => {
        e.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={(e) => onClick(e)} className={className} href={href}>
            {children}
        </a>
    )
}

export default Link
