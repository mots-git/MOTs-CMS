const express = require('express');
const router = express.Router();
const LanguageTool = require('../../models/LanguageTool');
//const faker = require('faker');
const {userAuthenticated} = require('../../helpers/authentication');

router.all('/*', userAuthenticated, (req, res, next)=>{

    req.app.locals.layout = 'admin';
    next();

});

router.get('/', (req, res)=>{
    LanguageTool.find({})
        .then(languageTools=>{
            res.render('admin/languageTool', {languageTools: languageTools})
    });  
});

router.get('/create', (req, res)=>{

    LanguageTool.find({}).then(languageTools=>{
        res.render('admin/languageTool/create', {languageTools: languageTools})
    });
    
});

router.post('/create', (req, res)=>{
    
    const newLanguageTool = new LanguageTool({
        title:req.body.title,
        url:req.body.url
    });

    newLanguageTool.save().then(savedLanguageTool=>{
        console.log(savedLanguageTool);
        req.flash('success_message', `Content ${savedLanguageTool.title} was created successfully`);
        res.redirect('/admin/languageTool');
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