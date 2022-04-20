import express from 'express'
import cors from 'cors'
import holidays from './holidays.js';

const app = express();
app.use(cors());

app.get("/holidays", (req,res)=>{    
    res.send(holidays)
})

app.get("/is-today-holiday",(req,res)=>{
    const hoje = new Date();
    const hojeUs = hoje.toLocaleDateString('en-us')
    console.log(hojeUs)
    let message = "";
    for(let i=0; i<holidays.length; i++){
        if(hojeUs.toString() === holidays[i].date){
            message = `Sim, hoje é ${holidays[i].name}`
        } else message = `Não, hoje não é feriado`
    }

    res.send(message)
})

app.listen(4000);