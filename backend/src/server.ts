/* 
Responsible for actually starting the server 
*/

import "dotenv/config";
import app from "./app";
import { connectDatabase } from "./config/database";

const PORT = process.env.PORT || 3000

const startServer = async():Promise<void> => {

    console.log(process.env.MONGODBURI)

    await connectDatabase()
    app.listen(PORT, () => {
        console.log(`Server running on PORT : ${PORT}.`)
    })

}

startServer()