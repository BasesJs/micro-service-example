import { parseName } from "../components/parseName.js";
import express, { response } from "express";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
const router = express.Router();
export { router as NameRouter };

router.get("/parse", (req, res) => {
    let schema = {
        "id" : "bb730d3d-6fc6-4e27-88ed-92a51be20e7b",
        "datum" : {
            "id" : "9e569a8c-a0fb-4542-853c-8aeb023915e4",
            "value" : "Dr. John P Wilson",
            "args" : [
                "no-prefix", 
                "middle-init"
            ]
        }    
    }
    res.send(schema);
  });

  router.post("/parse", jsonParser, (req, res) => {
    res.send(parseName(req.body.datum.value));
  });