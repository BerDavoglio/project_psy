import jwt from 'jsonwebtoken';
import User from '../models/User/User_models';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401)
      .json({ errors: ['Login Required'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const {
      id,
      email,
    } = data;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });
    if (!user) {
      return res.status(401)
        .json({ errors: ['Invalid Token'] });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401)
      .json({ errors: ['Invalid Token'] });
  }
};
