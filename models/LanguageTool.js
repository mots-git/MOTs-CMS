const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const LanguageToolSchema = new Schema({

    title:{

        type: String,
        required: true

    },
    url:{

        type: String,
        required: true

    },

});

module.exports = mongoose.model('languageTools', LanguageToolSchema);