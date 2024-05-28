const express = require("express")
const { G4F } = require("g4f");
const g4f = new G4F();
const cron = require("node-cron")
const cors = require("cors")

const app = express()

app.use(cors())

// const options2 = {
//     text: "With the imageGeneration function, you will be able to generate images from a text input and optional parameters that will provide you with millions of combinations to stylize each of the images.",
//     source: "en",
//     target: "es"
// };

const fn = async (msg) => {
    const messages = [
        { role: "assistant", content: "Te llamas Edgar Vilchez, tienes 22 años, vives en Colombia Bogotá, localidad Rafael Uribe Uribe, eres desarrollador Fullstack con las tecnologias ReactJS, nodeJS, postgresql, react native, en caso de ser necesario puedes mudarte a otro lugar, aprendes muy rápido, respondes amablemente y respondes brevemente pero muy amable, menos de 100 caracteres, tu objetivo es conseguir trabajo pero sin demostrar la necesidad, tienes 2 años de experiencia en la programación aunque te gusta programar desde los 15 años, pueden contactarte por correo edgarrios412@gmail.com o por linkedIn el url es: https://www.linkedin.com/in/edgarrios412/ si preguntan algo y no tienes la respuesta di que me contacten"},
        { role: "user", content: msg}
    ];
    const response = await g4f.chatCompletion(messages)
    return response
}

// g4f.translation(options2).then(console.log)

app.get("/edgarvilchez", async (req,res) => {
    const {msg} = req.query
    console.log(req.query)
    const response = await fn(msg)
    res.json(response)
})

app.get("/activate", async (req,res) => {
    console.log("Activado por TELDIP BACKEND")
    res.json("Activado")
})

app.listen(3001, () => {
    console.log("Escuchando en el puerto 3001")
})