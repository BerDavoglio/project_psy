/* eslint-disable class-methods-use-this */
import User from '../../models/User/User_models';

class UserController {
  // Creating User:
  async store(req, res) {
    try {
      if (req.body.role || req.body.points) {
        return res.status(401)
          .json({ errors: ['Unauthorized'] });
      }

      const newUser = await User.create(req.body);

      const {
        name,
        email,
        address,
        cellphone,
        birth,
        cpf,
      } = newUser;

      return res.json({
        name,
        email,
        address,
        cellphone,
        birth,
        cpf,
      });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show the user itself:
  async show(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({ errors: ['ID not Found'] });
      }

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ['User not Found'] });
      }

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Update the user:
  async update(req, res) {
    try {
      if (req.body.role || req.body.points) {
        return res.status(401)
          .json({ errors: ['Unauthorized'] });
      }

      const id = req.userId;
      if (!id) {
        return res.status(400).json({ errors: ['ID not Found'] });
      }

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ['User not Found'] });
      }

      const newUser = await user.update(req.body);

      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Delete User:
  async delete(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({ errors: ['ID not Found'] });
      }

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ['User not Found'] });
      }

      await user.destroy();
      return res.json({ message: 'User has been Deleted' });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Change Points User:
  async changePoints(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({ errors: ['User not Found'] });
      }

      const newUser = await user.update({
        points: (parseInt(user.points, 10) + parseInt(req.body.points, 10)),
      });

      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }
}

export default new UserController();
