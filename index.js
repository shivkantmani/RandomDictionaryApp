import  express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", async (req,res) =>{
    try{
        const response = await axios.get(`https://api.api-ninjas.com/v1/randomword`,{
            headers: { 
                'x-api-key': 'Nl8tPW0npSmuZpwArRIfxA==Ax4f2Gsvm0dez8T7'
              }
        })
        const result = response.data;
        const response2 = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${result.word}`);
        const result2 = response2.data;
        res.render("index.ejs",{data : result2})
    }
    catch (error){
        console.log("error");
    }
})

app.listen(port, () =>{
    console.log(`Running on port ${port}.`)
})