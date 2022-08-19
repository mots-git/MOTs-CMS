const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
//const faker = require('faker');
const {userAuthenticated} = require('../../helpers/authentication');

router.all('/*', userAuthenticated, (req, res, next)=>{

    req.app.locals.layout = 'admin';
    next();

});

router.get('/', (req, res)=>{
    res.render('admin/index')
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