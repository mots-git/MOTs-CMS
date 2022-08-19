const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const Handlebars = require('handlebars');
const methodOverride = require('method-override');
const upload = require('express-fileupload');
const session = require('express-session');
const flash = require('connect-flash');
const {mongoDbUrl} = require('./config/database');
const passport = require('passport');

mongoose.Promise = global.Promise;

mongoose.connect(mongoDbUrl).then(db=>{

    console.log('MONGO connected');

}).catch(error=>console.log(error));

app.use(express.static(path.join(__dirname, 'public')));

const {select, generateDate, ifStatement} = require('./helpers/handlebars-helpers');

app.engine('handlebars', exphbs.engine({handlebars: allowInsecurePrototypeAccess(Handlebars), defaultLayout: 'home', helpers: {select: select, generateDate: generateDate, ifStatement: ifStatement}}));
app.set('view engine', 'handlebars');

app.use(upload());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(session({

    secret: 'GlenMotsSecretKey',
    resave: true,
    saveUninitialized: true

}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next)=>{

    res.locals.user = req.user || null;    
    res.locals.success_message = req.flash('success_message');
    res.locals.error_message = req.flash('error_message');
    res.locals.form_errors = req.flash('form_errors');
    res.locals.error = req.flash('error');

    next();

});

const home = require('./routes/home/index');
const pages = require('./routes/pages/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');
const categories = require('./routes/admin/categories');

app.use('/', home);
app.use('/pagesTool', pages);
app.use('/admin', admin);
app.use('/admin/posts', posts);
app.use('/admin/categories', categories);

app.listen(4500, ()=>{
    console.log(`port 4500`)
});