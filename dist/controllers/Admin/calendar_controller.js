"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable class-methods-use-this */
var _Calendar_models = require('../../models/Admin/Calendar_models'); var _Calendar_models2 = _interopRequireDefault(_Calendar_models);
var _Doctor_models = require('../../models/Admin/Doctor_models'); var _Doctor_models2 = _interopRequireDefault(_Doctor_models);
var _User_models = require('../../models/User/User_models'); var _User_models2 = _interopRequireDefault(_User_models);

class CalendarController {
  // Creating:
  async store(req, res) {
    try {
      const doc = await _Doctor_models2.default.findByPk(req.body.doctor_id);
      if (!doc) {
        return res.status(400).json({ errors: ['Doctor not Found'] });
      }

      const pat = await _User_models2.default.findByPk(req.body.patient_id);
      if (!pat) {
        return res.status(400).json({ errors: ['Patient not Found'] });
      }

      const newCalendar = await _Calendar_models2.default.create(req.body);

      return res.json(newCalendar);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show All:
  async show(req, res) {
    try {
      const calendars = await _Calendar_models2.default.findAll();
      if (!calendars) {
        return res.status(400).json({ errors: ['Calendars not Found'] });
      }

      return res.json(calendars);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Update:
  async update(req, res) {
    try {
      if (req.body.doctor_id) {
        const doc = await _Doctor_models2.default.findByPk(req.body.doctor_id);
        if (!doc) {
          return res.status(400).json({ errors: ['Doctor not Found'] });
        }
      }

      if (req.body.patient_id) {
        const pat = await _User_models2.default.findByPk(req.body.patient_id);
        if (!pat) {
          return res.status(400).json({ errors: ['Patient not Found'] });
        }
      }

      const calendar = await _Calendar_models2.default.findByPk(req.params.id);
      if (!calendar) {
        return res.status(400).json({ errors: ['Calendar not Found'] });
      }

      const newCal = await calendar.update(req.body);

      return res.json(newCal);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Delete User:
  async delete(req, res) {
    try {
      const calendar = await _Calendar_models2.default.findByPk(req.params.id);
      if (!calendar) {
        return res.status(400).json({ errors: ['Calendar not Found'] });
      }

      await calendar.destroy();
      return res.json({ message: 'Calendar has been Deleted' });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }
}

exports. default = new CalendarController();
