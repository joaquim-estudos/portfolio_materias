import express from 'express'
import cors from 'cors'

const servidor = express()
servidor.use(express.json())
servidor.use(cors())

servidor.get('/', (req, res) => {
    res.send('Olá! A API está funcionando corretamente.')
})

const materias = []

servidor.get('/materias', (req, res) => {
    res.send(materias)
})

servidor.post('/materias', (req, res) => {
    const materia = req.body
    materias.push(materia)

    res.send('materia cadastrado!')
})

servidor.listen(3000, () => { console.log('deu bom') })