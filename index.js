const express = require('express')
const ejs = require('ejs')

const CONFIG = require('./src/config')

const app = express()

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

app.use(express.static('src/assets'))
app.set('views', 'src/views')

app.get('/', (_, res) => {
  res.render('main.html')
})

app.get('/login', (_, res) => {
  res.render('login.html')
})

app.listen(CONFIG.PORT, () => console.log(CONFIG.PORT))