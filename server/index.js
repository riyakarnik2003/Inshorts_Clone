import express from 'express'
import Connection from './database/db.js';
import DefaultData from './Default.js';
import route from './routes/route.js';
import cors from 'cors'

const app = express();
const PORT = 8000;

app.use(cors())
app.use('/',route)


Connection(); 
app.listen(PORT,()=>{
    console.log(`server started successfully on port ${PORT}`)
})

DefaultData();