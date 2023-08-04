import express from 'express';
import { studroute } from './Router.js';

const app = express()
const port = 9000;

app.use(express.json())
app.use("/students", studroute)

app.listen(port,()=>console.log(`server runs in localhost${port}`))


