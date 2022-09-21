const express = require("express")
const app = express()
const booksMagazineRouter=require('./routes/booksAndMagazines')

app.use(express.json())
app.use('/',booksMagazineRouter)



app.listen(8000, () => console.log("Server Started Running..."))