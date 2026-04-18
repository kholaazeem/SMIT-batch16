import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import Users from "./models/UsersSchema.js";

const app = express();

dotenv.config();

connectDb();

console.log(process.env.MONGOURI);

app.use(express.json());
app.use((req, res, next) => {
  console.log("datenow for middleware---> ", Date.now());

  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "seccesfully run",
  });
});

app.post("/user", async (req, res) => {
  console.log("req.body -->", req.body);
  try {
    const user = new Users({
      name: "hira",
      email: "hello",
    });
    await user.save();

    res.json({
      status: true,
      message: "user created successfully",
    });
  } catch (error) {
    console.log("error in creating user-->", error);

    res.json({
      status: false,
      message: error.message,
    });
  }
});

//

app.listen(process.env.PORT, () => {
  console.log("server is runnning", process.env.PORT);
});

// app.put("/edit/:hello", (req, res) => {
//   //  console.log(req.params.hello);
//   const { hello } = req.params;
//   const data = req.body;
//   res.json({
//     message: "user edited successfully",
//   });
// });

//  res.json({
//     message: "user created successfully",
//     user: data,
//     date:Date.now()
//   // });
