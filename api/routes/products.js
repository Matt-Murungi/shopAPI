const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Handling GET request"
    });
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: "Handling POST request"
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