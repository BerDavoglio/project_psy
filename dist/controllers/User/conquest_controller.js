"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable class-methods-use-this */
var _Conquest_models = require('../../models/User/Conquest_models'); var _Conquest_models2 = _interopRequireDefault(_Conquest_models);

class ConquestController {
  // Creating:
  async store(req, res) {
    try {
      const newConquest = await _Conquest_models2.default.create(req.body);

      return res.json(newConquest);
    } catch (err) {
      return res.status(400).json({ errors: `${err.message}AAAAAAAA` });
    }
  }

  // Show All:
  async show(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({ errors: ['[CONQUEST] ID not Found'] });
      }

      const conquest = await _Conquest_models2.default.findAll({
        order: [
          ['points', 'ASC'],
        ],
      });
      if (!conquest) {
        return res.status(400).json({ errors: ['Conquests not Found'] });
      }

      return res.json(conquest);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Update the user:
  async update(req, res) {
    try {
      const conquest = await _Conquest_models2.default.findByPk(req.params.id);
      if (!conquest) {
        return res.status(400).json({ errors: ['Conquest not Found'] });
      }

      const newConquest = await conquest.update(req.body);

      return res.json(newConquest);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Delete User:
  async delete(req, res) {
    try {
      const conquest = await _Conquest_models2.default.findByPk(req.params.id);
      if (!conquest) {
        return res.status(400).json({ errors: ['Conquest not Found'] });
      }

      await conquest.destroy();
      return res.json({ message: 'Conquest has been Deleted' });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }
}

exports. default = new ConquestController();
