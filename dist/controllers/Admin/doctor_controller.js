"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable class-methods-use-this */
var _Doctor_models = require('../../models/Admin/Doctor_models'); var _Doctor_models2 = _interopRequireDefault(_Doctor_models);

class DoctorController {
  // Creating User:
  async store(req, res) {
    try {
      const newDoctor = await _Doctor_models2.default.create({
        name: req.body.name,
        specialization: req.body.specialization,
        image: req.imagePath.replace(/\\/g, '/'),
        description: req.body.description,
      });

      return res.json(newDoctor);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show All:
  async show(req, res) {
    try {
      const doctors = await _Doctor_models2.default.findAll();
      if (!doctors) {
        return res.status(400).json({ errors: ['Doctors not Found'] });
      }

      return res.json(doctors);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show all:
  async indexOnlyId(req, res) {
    try {
      const doctors = await _Doctor_models2.default.findAll({
        attributes: ['id', 'name'],
      });
      if (!doctors) {
        return res.status(400).json({ errors: ['Doctors not Found'] });
      }

      return res.json(doctors);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Update:
  async update(req, res) {
    try {
      const doctor = await _Doctor_models2.default.findByPk(req.params.id);
      if (!doctor) {
        return res.status(400).json({ errors: ['Doctor not Found'] });
      }

      const newDoc = await doctor.update(req.body);

      return res.json(newDoc);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Delete User:
  async delete(req, res) {
    try {
      const doctor = await _Doctor_models2.default.findByPk(req.params.id);
      if (!doctor) {
        return res.status(400).json({ errors: ['Doctor not Found'] });
      }

      await doctor.destroy();
      return res.json({ message: 'Doctor has been Deleted' });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }
}

exports. default = new DoctorController();
