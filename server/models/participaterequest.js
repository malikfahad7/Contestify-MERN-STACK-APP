const mongoose = require('mongoose');

const ParticipationRequestSchema = new mongoose.Schema({
    
    imagePath: String,
    name: String,
});

const ParticipationRequest = mongoose.model('ParticipationRequest', ParticipationRequestSchema);

module.exports = ParticipationRequest;
