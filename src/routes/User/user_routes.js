import { Router } from 'express';
import userController from '../../controllers/User/user_controller';

import loginRequired from '../../middlewares/login_required';

const router = new Router();

router.post('/', userController.store); // Create a User
router.get('/', loginRequired, userController.show); // Get User Itself
router.put('/', loginRequired, userController.update); // Update a User
router.delete('/', loginRequired, userController.delete); // Delete a User

export default router;
