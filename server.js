const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

app.get("/", (req,res)=>{
  res.send("GADA SYSTEM ONLINE");
});

app.post("/orders",(req,res)=>{
  const order = {
    id: Date.now(),
    chain: req.body.chain,
    branch: req.body.branch,
    city: req.body.city,
    status: "new",
    pallets: 0,
    createdAt: new Date()
  };

  orders.push(order);
  res.json(order);
});

app.get("/orders",(req,res)=>{
  res.json(orders);
});

app.listen(3000,()=>{
  console.log("running");
});
