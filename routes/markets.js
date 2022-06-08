const { Router } = require('express');

const router = Router();


const supermarket = [
    {
        store: 'whole foods'
    },
    {
        store: 'imtiaz'
    },
    {
        store: 'chase'
    }
];

router.get('/', (req, res) => {
    res.send(supermarket);
})

module.exports = router;