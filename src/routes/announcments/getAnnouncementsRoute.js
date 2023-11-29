const express = require('express');
const Announcements = require('../../modeles/Announcements/Announcements');
const getAnnnouncementsRoute = express.Router();

getAnnnouncementsRoute.get('/announcements', async(req, res) => {
    try{
       const result = await Announcements.find();
       res.send(result);

    } catch (error) {
        console.error('Error getting announcement data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = getAnnnouncementsRoute;