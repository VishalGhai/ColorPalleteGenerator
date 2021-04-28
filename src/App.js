import React, { useEffect, useState } from 'react'
import ColorPallete from './ColorPallete'
// const COLOURlovers = require('colourlovers')
import axios from 'axios'

const App = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getdata() {
            await axios.get('http://localhost:3000/')
                .then(response => {
                    console.log(response.data)
                    setData(response.data)
                })
                .catch(err => console.error(err))
        }
        getdata()
    }, [])

    return (
        <>
            <div style={{ height:'28px',width:'28px',backgroundColor:data.length>0?'#'+data[0].colors[0]:'white',position:'absolute',left:'22%',top:'33px',borderRadius:'50%' }}></div>
            <div style={{ height:'21px',width:'21px',backgroundColor:data.length>0?'#'+data[0].colors[1]:'white',position:'absolute',left:'19%',top:'37px',borderRadius:'50%' }}></div>
            <div style={{ height:'14px',width:'14px',backgroundColor:data.length>0?'#'+data[0].colors[2]:'white',position:'absolute',left:'16.5%',top:'40px',borderRadius:'50%' }}></div>
            <div style={{ height:'8px',width:'8px',backgroundColor:data.length>0?'#'+data[0].colors[3]:'white',position:'absolute',left:'14.5%',top:'43px',borderRadius:'50%' }}></div>
            <h1 style={{textAlign: 'center',fontFamily: "'Lobster', cursive"}}>Random Color Pallete Generator</h1>
            <div style={{ height:'28px',width:'28px',backgroundColor:data.length>0?'#'+data[2].colors[0]:'white',position:'absolute',right:'22%',top:'33px',borderRadius:'50%' }}></div>
            <div style={{ height:'21px',width:'21px',backgroundColor:data.length>0?'#'+data[2].colors[1]:'white',position:'absolute',right:'19%',top:'37px',borderRadius:'50%' }}></div>
            <div style={{ height:'14px',width:'14px',backgroundColor:data.length>0?'#'+data[2].colors[2]:'white',position:'absolute',right:'16.5%',top:'40px',borderRadius:'50%' }}></div>
            <div style={{ height:'8px',width:'8px',backgroundColor:data.length>0?'#'+data[2].colors[3]:'white',position:'absolute',right:'14.5%',top:'43px',borderRadius:'50%' }}></div>
            <div style={mainContainer}>
                {
                    data.map((item, key) => {
                        if (item.colors.length >= 4) return <ColorPallete title={item.title} colors={item.colors} key={key} />
                    })
                }
                {/* <ColorPallete/>
            <ColorPallete/>
            <ColorPallete/>
            <ColorPallete/>
            <ColorPallete/>
            <ColorPallete/> */}
            </div>
        </>
    )
}

const mainContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
}
export default App




