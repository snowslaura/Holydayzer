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
    let message = "Não, hoje não é feriado";
    for(let i=0; i<holidays.length; i++){
        if(hojeUs !== holidays[i].date){           
            continue;
        }    
        message = `Sim, hoje é ${holidays[i].name}`
        break
    }
    
    res.send(message)
})

app.listen(4000, () => {
    console.log("Server is running on: http://localhost:4000");
});