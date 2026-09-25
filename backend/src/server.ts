/* 
Responsible for actually starting the server 
*/

import app from "./app";

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})