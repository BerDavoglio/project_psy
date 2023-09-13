/* eslint-disable class-methods-use-this */
import Calendar from '../../models/Admin/Calendar_models';
import Doctor from '../../models/Admin/Doctor_models';
import User from '../../models/User/User_models';

class CalendarController {
  // Creating:
  async store(req, res) {
    try {
      const doc = await Doctor.findByPk(req.body.doctor_id);
      if (!doc) {
        return res.status(400).json({ errors: ['Doctor not Found'] });
      }

      const pat = await User.findByPk(req.body.patient_id);
      if (!pat) {
        return res.status(400).json({ errors: ['Patient not Found'] });
      }

      const newCalendar = await Calendar.create(req.body);

      return res.json(newCalendar);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show All:
  async show(req, res) {
    try {
      const calendars = await Calendar.findAll();
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
        const doc = await Doctor.findByPk(req.body.doctor_id);
        if (!doc) {
          return res.status(400).json({ errors: ['Doctor not Found'] });
        }
      }

      if (req.body.patient_id) {
        const pat = await User.findByPk(req.body.patient_id);
        if (!pat) {
          return res.status(400).json({ errors: ['Patient not Found'] });
        }
      }

      const calendar = await Calendar.findByPk(req.params.id);
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
      const calendar = await Calendar.findByPk(req.params.id);
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

export default new CalendarController();
