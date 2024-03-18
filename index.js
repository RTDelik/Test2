const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html')
})
app.get('/about', (req, res) => {
    res.send('Второй раздел')
})
app.get('/user/:name/:id', (req, res) => {
    res.send(`Имя пользователя: ${req.params.name}
    ID: ${req.params.id}`)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('Сервер запущен')
})