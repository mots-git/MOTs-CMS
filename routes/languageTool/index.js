const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const LanguageToolHomepage = require('../../models/LanguageToolHomepage');
const LanguageToolContent = require('../../models/LanguageToolContent');
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
    LanguageToolHomepage.find({})
        .then(languageToolHomepage=>{
            res.render('languageTool', {languageToolHomepage: languageToolHomepage})
    });
});

router.get('/sponsoredContent', (req, res)=>{
    LanguageToolContent.find({})
        .then(languageToolContent=>{
            res.render('languageTool/sponsoredContent', {languageToolContent: languageToolContent})
    });
});

router.get('/sponsoredMessaging', (req, res)=>{
    res.render('languageTool/sponsoredMessaging')
});

router.get('/faq', (req, res)=>{
    res.render('languageTool/faq')
});

module.exports = router;