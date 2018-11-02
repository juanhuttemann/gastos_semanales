import React from 'react'

const Header = (props)=> {
    return (
        <header>
            <h2 className="display-4">{props.titulo}</h2>
        </header>
    )
}

export default Header;