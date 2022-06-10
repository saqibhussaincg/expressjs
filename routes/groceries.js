const { Router } = require('express');

const router = Router();



const groceryList = [
    {
        item: 'milk',
        quantity: 2,
    },
    {
        item: 'cereal',
        quantity: 1,
    },  
    {
        item: 'cookies',
        quantity: 3,
    },
]



// app ki jagah router laga denge
router.get('/', (req, res) => {
    res.cookie('visited', true, {
        maxAge : 60000,
    });
    res.send(groceryList);
}
);

router.get('/:item', (req, res) => {
    // console.log(req.params.item);
    console.log(req.cookies);
    console.log(req.headers.cookie);

    const { item } = req.params; 
    const groceryItem = groceryList.find((g) => g.item === item); // Browser k params mai agar item wali cheez aati hai tou show kara do warna kuch show nahi karao
    res.send(groceryItem);
})

router.post('/', (req, res) => {
    console.log(req.body);
    groceryList.push(req.body); // Postman ko req karo k body se Get mai data push kare
    res.send(201)

});


module.exports = router;