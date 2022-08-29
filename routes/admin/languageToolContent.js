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

router.get('/edit/:id', (req, res)=>{

    LanguageToolContent.findOne({_id: req.params.id})
        .then(languageToolContent=>{
                res.render('admin/languageTool/contentEdit', {languageToolContent: languageToolContent})
    });
});

router.put('/edit/:id', (req, res)=>{

    LanguageToolContent.findOne({_id: req.params.id})
        .then(languageToolContent=>{

            if(req.body.exceptionLanguage){
                exceptionLanguage=true;
            }
            else{
                exceptionLanguage=false;
            }

            languageToolContent.title = req.body.title;
            languageToolContent.geoBody = req.body.geoBody;
            languageToolContent.exceptionLanguage = exceptionLanguage;
            languageToolContent.profilesBody = req.body.profilesBody;
            languageToolContent.adsBody = req.body.adsBody;

            languageToolContent.save().then(updatedPost=>{
                req.flash('success_message', 'Content was successfully updated');
                res.redirect('/admin/languageTool/content')
            });
    });

});

router.delete('/:id', (req, res)=>{

    LanguageToolContent.findOne({_id: req.params.id})
        .then(languageToolContent=>{
            languageToolContent.remove();
            req.flash('success_message', 'Content was successfully deleted');
            res.redirect('/admin/languageTool/content')          
    });

})

module.exports = router;