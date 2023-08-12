import express from "express"
import cors from "cors"

const app = express();
app.use(cors());

app.post("/sign-up" , (req, res) => {
   
})

app.post("/tweets" , (req, res) => {
   
})

app.get("/tweets" , (req, res) => {
    
})

app.listen(5000, () => console.log("Rodando na porta 5000"));