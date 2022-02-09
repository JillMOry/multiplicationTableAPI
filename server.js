let express = require('express');


let app = express();
app.listen(8080);
// app.listen(3001);


function multiTable(id){
    let table = [];
    if(id > 45){
        return "Select a number less than 45"
    }
    if(id < 1){
        return "Select a number greater than zero"
    }else{
    for(let r = 1; r <= id; r += 1){
        let row = [];
        for(let c = 1; c <= id; c += 1){
            row.push(r * c);
        }
        table.push(row);
    }
    }
//    console.table(table);
   return table;



}


app.get('/', (request, response) => {
    response.send("Hello to multiplication table")
});

app.get('/:id', (request, response) => {
    response.json(multiTable(request.params.id))
})

module.exports = app;