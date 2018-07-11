var parseString = require('xml2js').parseString;

module.exports = function(res, fn){
    res.text = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk){ res.text += chunk; });
    res.on('end', function(){
        try {
            parseString(res.text.replace("\ufeff", "").toString('utf8'), fn);
        } catch (err) {
            fn(err);
        }
    });
};