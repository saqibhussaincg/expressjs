const express = require('express');
const app = express();
const PORT = 5000;

var cookieParser = require('cookie-parser')
app.use(cookieParser())


const groceriesRoute = require('./routes/groceries');
const marketsRoute = require('./routes/markets');

app.use(express.json());
app.use(express.urlencoded()); // Activate URL encoded data from POSTMAN


// Method Or URL show karega Eg: POST :/groceries
app.use((req, res, next) => {
    console.log(`${req.method} : ${req.url}`);
    next();
});


// import and then register here
app.use('/api/groceries', groceriesRoute);
app.use('/api/markets', marketsRoute);

// http://localhost:5000/api/groceries bauhat sari companies prefix endpoint karti hain api k name se

// yahan path define kardia get or post se path delete ho jayega / tak nahi ayega 




app.listen(PORT, () => console.log(`Server Running on ${PORT}`));

// const groceryList = [
//     {
//         item: 'milk',
//         quantity: 2,
//     },
//     {
//         item: 'ceral',
//         quantity: 1,
//     },  
//     {
//         item: 'cookies',
//         quantity: 3,
//     },
// ]

// app.get('/groceries', (req, res) => {
//     res.send(groceryList);
// }
// );

// app.get('/groceries/:item', (req, res) => {
//     // console.log(req.params.item);
//     const { item } = req.params; 
//     const groceryItem = groceryList.find((g) => g.item === item); // Browser k params mai agar item wali cheez aati hai tou show kara do warna kuch show nahi karao
//     res.send(groceryItem);
// })

// app.post('/groceries', (req, res) => {
//     console.log(req.body);
//     groceryList.push(req.body); // Postman ko req karo k body se Get mai data push kare
//     res.send(201)

// }); 

