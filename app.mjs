//CRUD operation
import express from 'express'
import useRouter from './router/user.mjs'
 import teamRouter from './router-1/team.mjs'
// import { json } from 'express.json'

const PORT = process.env.PORT || 5000
const app  = express()

app.use(express.static('./public'))
app.use(express.json())
app.use(useRouter)
app.use(teamRouter)
app.listen(PORT, err => err ? console.log(err) : console.log(`Server is running on port ${PORT}`))




