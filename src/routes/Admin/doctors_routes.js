import { Router } from 'express';
import doctorController from '../../controllers/Admin/doctor_controller';

import loginRequired from '../../middlewares/login_required';
import isAdmin from '../../middlewares/is_admin';

const router = new Router();

router.post('/', loginRequired, isAdmin, doctorController.store); // Create
router.get('/', doctorController.show); // Get All
router.put('/:id', loginRequired, isAdmin, doctorController.update); // Update
router.delete('/:id', loginRequired, isAdmin, doctorController.delete); // Delete

export default router;
