const router = require("express").Router();
const User = require("../models/User");
const verify = require('../verifyToken');

router.get('/',verify, (req,res)=>{
    // res.json({
    //     posts: {
    //         title: 'my first post',
    //         description: " random data"
    //     }
    // });
    res.send(req.user)
    
});

module.exports = router;