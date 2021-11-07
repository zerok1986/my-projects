const express = require('express')
const app = express()

app.use(express.json())
// const http = require('http')  // commonJS
// import http from 'http'  // EScript Modules

let notes = [
  {
    id: 1,
    content: 'Esta es la primera nota de la lista (modificada)',
    date: '2021-11-06T18:43:01:0982',
    important: true,
  },
  {
    id: 2,
    content: 'Probando con NodeJS',
    date: '2021-11-06T21:23:44:0912',
    important: false,
  },
  {
    id: 3,
    content: 'Tercera nota de la lista',
    date: '2021-11-06T23:39:52:2982',
    important: true,
  },
]

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json'})
//     response.end(JSON.stringify(notes))
// })

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find((note) => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter((note) => note.id !== id)
  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const note = request.body

  if (!note || !note.content) {
    return response.status(400).json({
      error: 'note.content is missing',
    })
  }

  const ids = notes.map((note) => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false,
    date: new Date().toISOString(),
  }

  notes = [...notes, newNote]

  response.status(201).json(newNote)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
