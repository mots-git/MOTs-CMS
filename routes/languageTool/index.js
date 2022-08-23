const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const Category = require('../../models/Category');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.all('/*', (req, res, next)=>{

    req.app.locals.layout = 'languageTool';
    next();

});

router.get('/', (req, res)=>{

    res.render('languageTool/index');
    
});

router.get('/sponsoredContent', (req, res)=>{
    res.render('languageTool/sponsoredContent')
});

router.get('/sponsoredMessaging', (req, res)=>{
    res.render('languageTool/sponsoredMessaging')
});

module.exports = router;