const express = require('express');
const router = express.Router();
const LanguageTool = require('../../models/LanguageTool');
const LanguageToolContent = require('../../models/LanguageToolContent');
//const faker = require('faker');
const {userAuthenticated} = require('../../helpers/authentication');

router.all('/*', userAuthenticated, (req, res, next)=>{

    req.app.locals.layout = 'admin';
    next();

});

router.get('/', (req, res)=>{
    LanguageToolContent.find({})
        .then(languageToolContent=>{
            res.render('admin/languageTool/contentIndex', {languageToolContent: languageToolContent})
    });
});

router.get('/create', (req, res)=>{

    LanguageToolContent.find({}).then(languageToolContent=>{
        res.render('admin/languageTool/contentCreate', {languageToolContent: languageToolContent})
    });
    
});

router.post('/create', (req, res)=>{

    let exceptionLanguage = true;

    if(req.body.exceptionLanguage){
        exceptionLanguage=true;
    }
    else{
        exceptionLanguage=false;
    }
    
    const newLanguageToolContent = new LanguageToolContent({
        title:req.body.title,
        geoBody:req.body.geoBody,
        exceptionLanguage:exceptionLanguage,
        profilesBody:req.body.profilesBody,
        adsBody:req.body.adsBody
    });

    newLanguageToolContent.save().then(savedLanguageToolContent=>{
        console.log(savedLanguageToolContent);
        req.flash('success_message', `Content ${savedLanguageToolContent.title} was created successfully`);
        res.redirect('/admin/languageTool/content');
    }).catch(error=>{
        console.log(error)
    });

    // console.log(req.files);
});

// router.post('/generate-fake-posts', (req, res)=>{

//     for(let i = 0; i < req.body.amount; i++){

//         let post = new Post();

//         post.title = faker.name.title();
//         post.status = 'public';
//         post.allowComments = faker.datatype.boolean();
//         post.body = faker.lorem.sentence();

//         post.save(function(err){
//             if(err) throw err;
//         });
//     }
//     res.redirect('/admin/posts');

// })

module.exports = router;