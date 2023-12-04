/* eslint-disable class-methods-use-this */
import Doctor from '../../models/Admin/Doctor_models';

class DoctorController {
  // Creating User:
  async store(req, res) {
    try {
      const newDoctor = await Doctor.create({
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
      const doctors = await Doctor.findAll();
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
      const doctors = await Doctor.findAll({
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
      const doctor = await Doctor.findByPk(req.params.id);
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
      const doctor = await Doctor.findByPk(req.params.id);
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

export default new DoctorController();
