const { Schema, model} = require('mongoose');

const AnnouncementsSchema = new Schema({
    authorName: {
        type: String,
        required: true
    },
    authorImage:{
        type: String,
        
    },
    authorEmail:{
        type: String,
        required: true
    },
    announceTime:{
        type: String,
        required: true
    },
    title: {
        type: String
    }, 
    description: {
       type: String
    }
    
});

const Announcements = model('Announcements', AnnouncementsSchema);

module.exports = Announcements;


