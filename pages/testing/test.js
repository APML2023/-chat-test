// // var myHeaders = new Headers();
// // myHeaders.append("Content-Type", "application/json");
import fetch from "node-fetch";

var question ="what is dna ?"
var history =[]
// console.log(question.trim())
// var raw = JSON.stringify({
//   "question": question.trim(),
//   "history": []
// });

// var requestOptions = {
//   method: 'POST',

//   body: raw,
//   redirect: 'follow'
// };
// console.log(requestOptions)
// fetch("http://localhost:3000/api/chat", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

const api = async ()=>{

    const response =   await fetch('http:localhost:3000/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            question,
            history,
        }),
    });
    const data =  await response.json();
    console.log(data)
}

api()