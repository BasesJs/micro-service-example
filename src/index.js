import express from "express";
import { NameRouter } from "./routes/router_parse.js";

const app = express();

app.use("/", NameRouter);
app.use((req, res, next) => {  
  const start = Date.now();
  res.on("finish", () => {
    const responseTime = Date.now() - start;
    const contentLength = res.get("Content-Length");
    console.log({
      method: req.method,
      url: req.originalUrl,
      query: req.query,
      responseTime: `${responseTime} ms`,
      contentLength: `${contentLength} bytes`,
      status: res.statusCode,
    });
  });  
  next();
});

app.get("/", (req, res) => {
  console.log("GET")
});

app.post("/", (req, res) => {
  console.log("POST");
}); 

const port = process.env.PORT || 3000;

// the final step is to start your app using the following code:
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
