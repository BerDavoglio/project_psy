import { Router } from 'express';
import calendarController from '../../controllers/Admin/calendar_controller';

import loginRequired from '../../middlewares/login_required';
import isAdmin from '../../middlewares/is_admin';

const router = new Router();

router.post('/', loginRequired, isAdmin, calendarController.store); // Create
router.get('/', loginRequired, isAdmin, calendarController.show); // Get All
router.put('/:id', loginRequired, isAdmin, calendarController.update); // Update
router.delete('/:id', loginRequired, isAdmin, calendarController.delete); // Delete

export default router;
