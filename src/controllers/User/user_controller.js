/* eslint-disable class-methods-use-this */
import axios from 'axios';
import jwt from 'jsonwebtoken';
import User from '../../models/User/User_models';
import Calendar from '../../models/Admin/Calendar_models';

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

  // Show all:
  async index(req, res) {
    try {
      const users = await User.findAll();
      if (!users) {
        return res.status(400).json({ errors: ['User not Found'] });
      }

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show all:
  async indexOnlyId(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'name'],
        where: {
          role: 'user',
        },
      });
      if (!users) {
        return res.status(400).json({ errors: ['User not Found'] });
      }

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show the user itself:
  async showRole(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({ errors: ['ID not Found'] });
      }

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ['User not Found'] });
      }

      return res.json(user.role);
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

      const idreq = req.userId;
      if (!idreq) {
        return res.status(400).json({ errors: ['ID not Found'] });
      }

      const user = await User.findByPk(idreq);
      if (!user) {
        return res.status(400).json({ errors: ['User not Found'] });
      }

      const newUser = await user.update(req.body);

      const {
        id,
        email,
        role,
      } = newUser;
      const token = jwt.sign({
        id,
        email,
        role,
      }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json([newUser, token]);
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
      const calendar = await Calendar.findByPk(req.body.calendar_id);
      if (!calendar) {
        return res.status(400).json({ errors: ['Calendar not Found'] });
      }

      const newUser = await user.update({
        points: (parseInt(user.points, 10) + parseInt(req.body.points, 10)),
      });
      await calendar.update({
        is_finished: true,
      });

      return res.json({ message: `${req.body.points} points was added to ${newUser.name}` });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  async requestReviews(req, res) {
    try {
      const listResponse = [];
      const apiKey = 'AIzaSyAUDQjn5OVi7LH_OnGHLYasVX5WbSA6C4c';
      const placeId = 'ChIJ_U31Zgz63JQR1s87zNMqqfY';
      const language = 'pt';

      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=${language}&key=${apiKey}`;

      const response = await axios.get(url);
      const { data } = response;

      if ('reviews' in data.result) {
        const { reviews } = data.result;

        const sortedReviews = reviews.sort((a, b) => b.rating - a.rating);
        const bestReviews = sortedReviews.slice(0, 2);

        if (bestReviews.length > 0) {
          bestReviews.forEach((review) => {
            const reviewerName = review.author_name;
            const comment = (review.text === ''
              ? 'O usuário não adicionou uma descrição sobre o review.'
              : review.text);
            const { rating } = review;

            listResponse.push({
              name: reviewerName,
              text: comment,
              rate: rating,
            });
          });
        } else {
          return res.status(400).json({ errors: 'No reviews found.' });
        }
      } else {
        return res.status(400).json({ errors: 'No reviews found.' });
      }

      return res.json(listResponse);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }
}

export default new UserController();
