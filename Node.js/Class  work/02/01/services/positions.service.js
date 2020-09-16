const Position = require('../database/models/position')

class PositionsService {
    async findOne(id) {
        return Position.findById(id);
    }
}

module.exports = new PositionsService()