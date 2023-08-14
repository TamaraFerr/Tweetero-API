import express from "express"
import cors from "cors"

//configs
const app = express();
app.use(cors());
app.use(express.json());

//consts para guardar informações
const tweets = [];
const usuarios = [];

//endpoints
app.post("/sign-up" , (req, res) => {
    const {username, avatar} = req.body

    usuarios.push({username, avatar})
    res.send("OK")
})

app.post("/tweets" , (req, res) => {
    const { username, tweet} = req.body
    const ExisteUsuario = usuarios.find((usuario) => usuario.username === username)

    if(!ExisteUsuario){
        return res.send("UNAUTHORIZED")
    }

    tweets.push({username, tweet})
    res.send("OK")
})

app.get("/tweets" , (req, res) => {
    const TweetUnido = tweets.map((tweet) => {
        const usuario = usuarios.find((usuario) => usuario.username === tweet.username)
        return {...tweet, avatar: usuario.avatar}
    })

    res.send(TweetUnido.slice(-10))
})

app.listen(5000, () => console.log("Rodando na porta 5000"));