import React, { useState } from 'react'

const ColorBox = ({color}) => {
    
    const [onmouse, setOnMouse] = useState(false)

    const box = {
        margin:'5px',
        marginBlock:'20px',
        width: '80px',
        height: '80px',
        backgroundColor: onmouse?'#'+color+'80':'#'+color+'ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:'10px',
        overflow: 'hidden'
    }

    return (
            <div onMouseEnter={() => { setOnMouse(true) }} onMouseLeave={() => { setOnMouse(false) }} style={box}>
                <p style={{opacity:onmouse?'1':'0',fontSize:15,fontWeight:'bold'}}>#{color}</p>
            </div>
    )
}

export default ColorBox
