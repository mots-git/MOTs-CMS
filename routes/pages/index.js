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
    next();

});

router.get('/', (req, res)=>{

    Post.find({}).populate('category').then(posts =>{

        Category.find({}).then(categories=>{
            res.render('pages/index', {posts: posts, categories: categories});
        })
        

    });
    
});

router.get('/consolidation-merge', (req, res)=>{
    res.render('pages/consolidation-merge')
});

router.get('/affiliations', (req, res)=>{
    res.render('pages/affiliations')
});

router.get('/migrate-followers', (req, res)=>{
    res.render('pages/migrate-followers')
});

router.get('/rebrand-rename', (req, res)=>{
    res.render('pages/rebrand-rename')
});

router.get('/convert-page-type', (req, res)=>{
    res.render('pages/convert-page-type')
});

router.get('/acquisition', (req, res)=>{
    res.render('pages/acquisition')
});

router.get('/edit-post', (req, res)=>{
    res.render('pages/edit-post')
});

router.get('/vanity-url', (req, res)=>{
    res.render('pages/vanity-url')
});

router.get('/add-remove-admin', (req, res)=>{
    res.render('pages/add-remove-admin')
});

router.get('/claim-deactivate', (req, res)=>{
    res.render('pages/claim-deactivate')
});

router.get('/de-affiliation', (req, res)=>{
    res.render('pages/de-affiliation')
});

router.get('/faqs', (req, res)=>{
    res.render('pages/faqs')
});

module.exports = router;