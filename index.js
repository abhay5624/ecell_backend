const express =  require("express")
require('dotenv/config')
const connectDb = require("./DB/conn.js");
const router = require("./router/auth_router");
const cors = require('cors');

const app = express();


app.use(express.json())  
app.use(cors());
// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
app.use('/api/auth',router);


const PORT = process.env.PORT || 3001;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`app listening to ${PORT}`)
    })
})