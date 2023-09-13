import { Router } from 'express';
import conquestController from '../../controllers/User/conquest_controller';

import loginRequired from '../../middlewares/login_required';
import isAdmin from '../../middlewares/is_admin';

const router = new Router();

router.post('/', loginRequired, isAdmin, conquestController.store); // Create
router.get('/', loginRequired, conquestController.show); // Get All
router.put('/:id', loginRequired, isAdmin, conquestController.update); // Update
router.delete('/:id', loginRequired, isAdmin, conquestController.delete); // Delete

export default router;
