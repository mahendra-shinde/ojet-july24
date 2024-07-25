const exp = require("express");

const app = exp();

app.get("/",(req,resp)=>{
    resp.send("Hello from NodeJS");
});

app.listen(4000, ()=>{
    console.log("Your Application is running on port 4000");
});