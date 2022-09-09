const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const LanguageToolHomepage = new Schema({

    para:{

        type: String,
        required: true

    },
    para2:{
        type: String,
        require: false
    },
    contactEmail:{
        type: String,
        require: true
    },

});

module.exports = mongoose.model('languageToolHomepage', LanguageToolHomepage);