const express = require('express')
const cors = require('cors')
const { default: axios } = require('axios')

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res, next) => {
    axios.get('http://www.colourlovers.com/api/palettes?format=json&hueOptions=blue&keywords=chartreuse&sortBy=DESC&numResults=20')
        .then(response => {
                res.send(response.data)
            }
        ).catch(err => {
            res.send(err)
        })
})
app.listen(3000, () => { console.log('listening') })