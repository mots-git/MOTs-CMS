const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const Category = require('../../models/Category');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.all('/*', (req, res, next)=>{

    req.app.locals.layout = 'pages';
    console.log("test route pages")
    next();

});

router.get('/', (req, res)=>{

    Post.find({}).populate('category').then(posts =>{

        Category.find({}).then(categories=>{
            res.render('pages/index', {posts: posts, categories: categories});
        })
        

    });
    
});

module.exports = router;