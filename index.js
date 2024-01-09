
const app = require('./app')


//Configuration
const dotenv = require('dotenv')
dotenv.config({path: "./config.env"})

const port = process.env.RUNNING_PORT ||5500
//Running the server
    app.listen(port, () => {
            console.log("Server is running on " + port)
        })


