const express = require('express');
const router = express.Router();
const LanguageTool = require('../../models/LanguageTool');
const LanguageToolHomepage = require('../../models/LanguageToolHomepage');
//const faker = require('faker');
const {userAuthenticated} = require('../../helpers/authentication');

router.all('/*', userAuthenticated, (req, res, next)=>{

    req.app.locals.layout = 'admin';
    next();

});

router.get('/', (req, res)=>{
    LanguageToolHomepage.find({})
        .then(languageToolHomepage=>{
            res.render('admin/languageTool/homepageIndex', {languageToolHomepage: languageToolHomepage})
    });
});

router.get('/create', (req, res)=>{

    LanguageToolHomepage.find({}).then(languageToolHomepage=>{
        res.render('admin/languageTool/homepageCreate', {languageToolHomepage: languageToolHomepage})
    });
    
});

router.post('/create', (req, res)=>{
    
    const newLanguageToolHomepage = new LanguageToolHomepage({
        para:req.body.para,
        para2:req.body.para2,
        contactEmail:req.body.contactEmail
    });

    newLanguageToolHomepage.save().then(savedLanguageToolHomepage=>{
        console.log(savedLanguageToolHomepage);
        req.flash('success_message', `Content was created successfully`);
        res.redirect('/admin/languageTool/homepage');
    }).catch(error=>{
        console.log(error)
    });

    // console.log(req.files);
});

router.get('/edit/:id', (req, res)=>{

    LanguageToolHomepage.findOne({_id: req.params.id})
        .then(languageToolHomepage=>{
                res.render('admin/languageTool/homepageEdit', {languageToolHomepage: languageToolHomepage})
    });
});

router.put('/edit/:id', (req, res)=>{

    LanguageToolHomepage.findOne({_id: req.params.id})
        .then(languageToolHomepage=>{
            
            languageToolHomepage.para = req.body.para;
            languageToolHomepage.para2 = req.body.para2;
            languageToolHomepage.contactEmail = req.body.contactEmail;

            languageToolHomepage.save().then(updatedPost=>{
                req.flash('success_message', 'Content was successfully updated');
                res.redirect('/admin/languageTool/homepage')
            });
    });

});

router.delete('/:id', (req, res)=>{

    LanguageToolHomepage.findOne({_id: req.params.id})
        .then(languageToolHomepage=>{
            languageToolHomepage.remove();
            req.flash('success_message', 'Content was successfully deleted');
            res.redirect('/admin/languageTool/homepage')          
    });

})

module.exports = router;