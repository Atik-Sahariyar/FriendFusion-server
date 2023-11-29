const express = require('express');
const Announcements = require('../../modeles/Announcements/Announcements');
const postAnnouncementsRoute = express.Router();

postAnnouncementsRoute.post('/announcements', async (req, res) => {
    try {
        const announcement = req.body;
        const newannouncement  = new Announcements(announcement);
        const result = await newannouncement.save();
   
        res.status(200).json(result);
    } catch (error) {
        console.error('Error  post announcement data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = postAnnouncementsRoute;