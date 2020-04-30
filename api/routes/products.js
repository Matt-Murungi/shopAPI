const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Handling GET request"
    });
});

router.post('/', (req, res, next)=>{
    const product = {
        name : req.body.name,
        price : req.body.price
    };  
    res.status(201).json({
        message: "Created product",
        createdProduct : product
    });
});

router.get('/:id', (req, res, next)=>{
    const id = req.params.id;

    if(id == 'special'){
        res.status(200).json({
            message: "the productId is special"
        }) 

    }
    else{
        res.status(200).json({
            message: "the productId is not special"
        })
    }
})

module.exports = router;