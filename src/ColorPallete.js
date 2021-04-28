import React from 'react'
import ColorBox from './ColorBox'

const ColorPallete = ({colors,title}) => {

    const colorsContainer = {
        display: 'flex',
        flexDirection: 'row',
        marginInline:'33px',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    const palleteContainer = {
        border: '1px solid lightgrey',
        marginInline:'15px',
        borderRadius: '10px',
    }

    const titleContainer = {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: 'lightgrey',
        borderRadius:'0px 0px 8px 8px'
    }

    return (
        <div style={palleteContainer}>
            <div style={colorsContainer}>
            <ColorBox color={colors[0]}/>
            <ColorBox color={colors[1]}/>
            <ColorBox color={colors[2]}/>
            <ColorBox color={colors[3]}/>
            </div>
            <div style={titleContainer}>
                {title}
            </div>
        </div>
    )
}

export default ColorPallete
