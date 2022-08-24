const app = express()

const port = process.env.PORT || 5050

let people = [
    {id: 1, name: 'Jojoe'},
    {id: 2, name: 'Jake'},
]

app.get('/', (req, res) => {
    res.sent('<h1>Connection Build</h1>')
})

app.get('/api/peoples', (req, res) => {
    res.json(people);
})

app.listen(port, () => console.log(`Server created at port ${port}`))
