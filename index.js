const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const charList = (a,z,d=1)=>(a=a.charCodeAt(),z=z.charCodeAt(),[...Array(Math.floor((z-a)/d)+1)].map((_,i)=>String.fromCharCode(a+i*d)));
const punteggiatura = ['[','.',',','/','#','!','$','%','^','&','*',';',':','{','}','=','-','_','`','~','(',')',']']
let alfabeto = [];
app.use(express.static("public"));
app.use(bodyParser());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  console.log("Ricevuto una richiesta POST");
  if(req.body.list_radio.includes("lettere_minuscole"))
  {
    alfabeto = alfabeto.concat(charList('a', 'z'));
  }
  if(req.body.list_radio.includes("lettere_maiuscole"))
  {
    alfabeto = alfabeto.concat(charList('A', 'Z'));
  }
  if(req.body.list_radio.includes("numeri"))
  {
    alfabeto = alfabeto.concat(charList('0', '9'));
  }
  if(req.body.list_radio.includes("punteggiatura"))
  {
    alfabeto = alfabeto.concat(punteggiatura);
  }
  if(req.body.list_radio.includes("spazio"))
  {
    alfabeto.push(" ");
  }
  const value = encrypt(req.body.message, req.body.key, alfabeto);
  res.end(value);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

function encrypt(str, chiave, alfabeto) {
  let parts = str.split("");
  let output = [];
  for (let i = 0; i < parts.length; ++i) {
    let index = alfabeto.indexOf(parts[i]);
    if(index+Number(chiave) <= alfabeto.length - 1){
      letter = alfabeto[index+Number(chiave)];
      output.push(letter);
    }
    else{
      let newchiave = (index + Number(chiave)) - (alfabeto.length - 1);
      letter = alfabeto[newchiave];
      console.log(alfabeto[newchiave])
      output.push(letter);
    }
  }
  alfabeto = [];
  return output.join("");
}
