import express from "express";


const app = express();

app.use(express.json());



let users = [];
app.get("/", (req, res) => {
  console.log('api is runnning');
  
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
  });
});

app.put("/edit/:hello", (req, res) => {
   console.log(req.params.hello);
  const { hello } = req.params;
  const data = req.body;
  res.json({
    message: "user edited successfully",
  });
});



app.listen(3000, () => {
  console.log("server is runnning");
});




