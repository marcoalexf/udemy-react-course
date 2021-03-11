import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({options, selected, onSelectedChange}) => {
    const onBodyClick = (e) => {
        if (ref.current && ref.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    };
    useEffect(() => {
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const renderedOptions = options.map(el => {
        if (el.value === selected.value) return null;
        return (
            <div
            onClick={() => onSelectedChange(el)}
            key={el.value} 
            className="item">
                {el.label}
            </div>
        )
    })
    return (
        <div
        ref={ref} 
        className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div 
                onClick={() => setOpen(!open)}
                className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;