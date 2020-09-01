const express = require('express');
const router = express.Router();

//Acquiring posts model
const Posts = require('../Models/posts')

//get all posts
router.get("/", async (req,res)=>{
    try{
        const allposts = await Posts.find();
        res.json(allposts);
    }catch(err){
        res.json({message:err});
    }
});

//retrive a single post by id
router.get("/:id", async (req,res)=>{
    try{ 
        const post = await Posts.findById(req.params.id); 
        res.json(post)
    }catch(err){ 
        res.json({message : err} )
    }
});

//create a new post
router.post('/', async (req,res)=>{
    
    const newpost = new Posts({
        title : req.body.title,
        description : req.body.description
    });
    try{
    const savedpost = await newpost.save();
    res.json(savedpost)
    }catch(err){
        res.json({message : err});
    }
})

//remove a particular post
router.delete('/:id',async (req,res)=>{
    try{
        const  removepost = await Posts.remove({_id:req.params.id});
        res.json(removepost);
    }catch(err){
        res.json({mesage:err});
    }
})

//remove all posts
router.delete('/',async (req,res)=>{
    try{
        const  removepost = await Posts.remove();
        res.json(removepost);
    }catch(err){
        res.json({mesage:err});
    }
})

//update a post
router.patch('/:id', async (req,res)=>{
    
    
    try{
        let update = JSON.parse({});
    if(req.body.title){update.push({title:req.body.title})};
    if(req.body.description){update.push({description:req.body.description})};
        const updatedpost = await Posts.updateOne(
            {_id:req.params.id},
            { $set: JSON.stringify(update)}
        );
        res.json(updatedpost)
    }catch(err){
        res.json({message:err})
    }
})
module.exports = router;
