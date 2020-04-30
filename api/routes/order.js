const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Order has been gotten"
    });
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: "Order has been created"
    });
});

router.get('/:id', (req, res, next)=>{
    const id = req.params.id;

   res.status(200).json({
       message : "Order has been gotten",
       orderId: id
   })
})

router.delete('/:id', (req, res, next)=>{
    const id = req.params.id;

   res.status(200).json({
       message :  "Order has been deleted",
       orderId: id
   })
})

module.exports = router; 