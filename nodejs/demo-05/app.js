const exp = require("express");
const bodyParser = require("body-parser");
const app = exp();
const port = 5000;

app.get("/",(req,resp)=>{
    resp.send("Hello from NodeJS");
});
//Use JSON Parser for creating HTTP Response
app.use(bodyParser.json());
app.listen(port, ()=>{
    console.log(`Your Application is running on port ${port}`);
});

let customers = [
    {"custId":"A1234",
        "firstName":"Rohit",
        "lastName":"Shetty"
    },
    {"custId":"A1235",
        "firstName":"Suniel",
        "lastName":"Shetty"
    }
];
app.get('/all',(r,q) =>
      {q.json(customers);}  
);

app.get('/:id',(r,q) =>
    {
        const id = r.params.id.trim();
        const item = customers.find(cust => cust.custId == id);
        if(item){
            //If customer is found
            q.json(item);
        }else{
            q.status(404).send("No such customer!");
        }
    }  
);
