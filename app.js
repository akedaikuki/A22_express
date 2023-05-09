const express = require('express')
const exphbs = require('express-handlebars')
const app = express()


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req , res) => {
   const title = "首頁"
   res.render('index', { list: title }) 
})

app.get('/:button', (req , res) => {
    // console.log(req.params['button'])
    const title = req.params['button'][0].toUpperCase() + req.params['button'].slice(1)
    res.render('index', { list: title })
})

app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
});