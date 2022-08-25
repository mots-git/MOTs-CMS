const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const LanguageToolContent = new Schema({

    title:{

        type: String,
        required: true

    },
    geoBody:{
        type: String,
        require: false
    },
    exceptionLanguage:{
        type: Boolean,
        require: true
    },
    profilesBody:{
        type: String,
        require: true
    },
    adsBody:{
        type: String,
        require: true
    },

});

module.exports = mongoose.model('languageToolContent', LanguageToolContent);