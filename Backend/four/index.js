import express from "express";

const app = express();

app.use(express.json());
app.use((req,res,next)=>{
console.log('datenow for middleware---> ',Date.now());

next()

})

let users = [];
app.get("/", (req, res) => {
  res.json({
    message: "seccesfully run",
    data: users,
  });
});

app.post("/create", (req, res) => {
  console.log("req.body -->", req.body);
  users.push({ ...req.body, id: Date.now() });
  const data = { ...req.body, id: Date.now() };

  const { email } = req.body;

  res.json({
    message: "user created successfully",
    user: data,
    date:Date.now()
  });
});

app.put("/edit/:hello", (req, res) => {
  //  console.log(req.params.hello);
  const { hello } = req.params;
  const data = req.body;
  res.json({
    message: "user edited successfully",
  });
});



app.listen(3000, () => {
  console.log("server is runnning");
});

