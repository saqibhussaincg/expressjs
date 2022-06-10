const { Router } = require('express');

const router = Router();


const supermarket = [
    {
        id: 1,
        store: 'whole foods',
        miles: 0.6
    },
    {
        id: 2,
        store: 'imtiaz',
        miles: 2.5
    },
    {
        id: 3,
        store: 'chase',
        miles: 3
    }
];

router.get('/', (req, res) => {
    // console.log(req.query);

    // http://localhost:5000/api/markets?miles=1

    // Destructure kara miles ko or integer mai convert kara kyun k numeric value thi

    // agar miles number nahi hai tou filter karo k supermarket ka data miles se kitna chota hai ya barabar hai or user ko response show karao
    const { miles } = req.query;
    
    const parsedMiles = parseInt(miles);
    if (!isNaN(parsedMiles)) 
    {

        const filteredStores = supermarket.filter((item) => item.miles <= parsedMiles);
        res.send(filteredStores);
    } 
    else  res.send(supermarket);
   
})

module.exports = router;