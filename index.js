const app = require('express')()

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => res.json({ message: 'hi there' }))

app.listen(PORT, console.log('up & running on port', PORT))