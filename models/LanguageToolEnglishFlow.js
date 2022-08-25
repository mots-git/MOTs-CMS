const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const LanguageToolEnglishFlow = new Schema({

    title:{

        type: String,
        required: true

    },
    resultsBody:{
        type: String,
        require: true
    },

});

module.exports = mongoose.model('languageToolEnglishFlow', LanguageToolEnglishFlow);