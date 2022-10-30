import { Router } from 'express';

import {
  newCourse,
  showAllCourse,
  addToBookMarks,
  showAllBookMarks,
  courseDetailsById,
} from '../controllers/course';

import { isCreator, protect } from '../middleware';

import { courseCreateValidation } from '../validation/courseValidationSchema';
import { requestValidation } from '../middleware/requestValidation';
import { reviewRoute } from './review.routes';
import { updateCourse } from '../controllers/course/updateCourse';

const router = Router();

router.use('/:courseId/reviews', reviewRoute);

router.post('/bookmarks/:id', protect, addToBookMarks);
router.get('/bookmarks', protect, showAllBookMarks);

router
  .route('/')
  .post(protect, isCreator, courseCreateValidation, requestValidation, newCourse)
  .get(showAllCourse);

router.route('/:id').get(protect, courseDetailsById);

export { router as courseRouter };
