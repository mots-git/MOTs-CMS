const path = require('path');

module.exports = {

    uploadDir: path.join(__dirname, '../public/uploads/'),

    isEmpty: function(obj){
        for(let key in obj){
            obj2 = JSON.parse(JSON.stringify(obj));
            if(obj2.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    }
};
